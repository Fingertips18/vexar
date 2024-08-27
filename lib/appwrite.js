import { Client, Databases } from "react-native-appwrite";

import {
  APPWRITE_PROJECT_ID,
  APPWRITE_DB_ID,
  APPWRITE_USERS_COLLECTION_ID,
  APPWRITE_VIDEOS_COLLECTION_ID,
  APPWRITE_STORAGE_ID,
} from "@env";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.fingertips.vexar",
  projectId: APPWRITE_PROJECT_ID,
  databaseId: APPWRITE_DB_ID,
  usersCollectionId: APPWRITE_USERS_COLLECTION_ID,
  videosCollectionId: APPWRITE_VIDEOS_COLLECTION_ID,
  storageId: APPWRITE_STORAGE_ID,
};

export const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const databases = new Databases(client);
