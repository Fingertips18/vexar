import { Account, Avatars, ID, Query } from "react-native-appwrite";

import { appwriteConfig, client, databases } from "../appwrite";

const account = new Account(client);
const avatars = new Avatars(client);

export const UserService = {
  currentUser: async () => {
    try {
      const currentAccount = await account.get();

      if (!currentAccount) {
        throw new Error();
      }

      const user = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal("account_id", currentAccount.$id)]
      );

      if (!user) {
        throw new Error();
      }

      return user.documents[0];
    } catch (e) {
      console.error(e);
    }
  },
  createUser: async ({ username, email, password }) => {
    try {
      const createdAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );

      if (!createdAccount) throw new Error();

      const avatarUrl = avatars.getInitials(username);

      await UserService.signIn({ email, password });

      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        ID.unique(),
        {
          account_id: createdAccount.$id,
          email,
          username,
          avatar: avatarUrl,
        }
      );

      return newUser;
    } catch (e) {
      console.error(e);
      throw new Error(e);
    }
  },
  signIn: async ({ email, password }) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);

      return session;
    } catch (e) {
      throw new Error(e);
    }
  },
};
