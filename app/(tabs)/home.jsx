import { FlatList, Image, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { EmptyPlaceholer } from "./_components/empty-placeholder";
import { PostService } from "../../lib/services/post-service";
import { useAppwrite } from "../../lib/hooks/use-appwrite";
import { SearchInput } from "./_components/search-input";
import { VideoCard } from "./_components/video-card";
import { Trending } from "./_components/trending";
import { images } from "../../constants";

export default function Home() {
  const {
    data: posts,
    loading,
    refetchData,
  } = useAppwrite(PostService.getAllPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetchData();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-background h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-4">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-poppins-medium text-lg text-foreground/60">
                  Welcome Back
                </Text>
                <Text className="text-4xl font-poppins-semi-bold text-primary">
                  User
                </Text>
              </View>
              <Image
                source={images.logo}
                alt="Vexar Logo"
                className="w-8 h-8 mt-2"
                resizeMode="contain"
              />
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-foreground/60 font-poppins-medium text-lg mb-3">
                Trending Videos
              </Text>

              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyPlaceholer
            label="No videos found..."
            subLabel="Be the first one to upload a video!"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
}
