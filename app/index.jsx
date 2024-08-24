import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

import { Routes } from "../constants/routes";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-poppins-black">Vexa</Text>
      <StatusBar style="auto" />
      <Link href={Routes.home} className="text-blue-400 font-poppins-medium">
        Go to Home
      </Link>
    </View>
  );
}
