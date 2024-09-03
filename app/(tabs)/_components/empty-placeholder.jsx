import { Image, Text, View } from "react-native";
import { router } from "expo-router";

import { CustomButton } from "../../../components/custom-button";
import { images, Routes } from "../../../constants";

export function EmptyPlaceholer({ label, subLabel }) {
  return (
    <View className="items-center justify-center px-4">
      <Image source={images.empty} className="h-[124px]" resizeMode="contain" />
      <Text className="font-poppins-medium text-center text-lg mt-2">
        {label}
      </Text>
      <Text className="text-sm text-muted text-center">{subLabel}</Text>

      <CustomButton
        title="Create a video"
        handlePress={() => router.push(Routes.create.path)}
        containerStyles="px-6 mt-4"
      />
    </View>
  );
}
