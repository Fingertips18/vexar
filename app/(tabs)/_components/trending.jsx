import { FlatList, Text } from "react-native";

export function Trending({ posts }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text>{item.id}</Text>}
      horizontal
    />
  );
}
