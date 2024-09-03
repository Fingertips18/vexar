import { appwriteConfig, databases } from "../appwrite";

export const PostService = {
  getAllPosts: async () => {
    try {
      const posts = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.videosCollectionId
      );

      return posts.documents;
    } catch (error) {
      throw new Error(error);
    }
  },
};
