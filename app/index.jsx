import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, View, Text } from "react-native";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { useGlobalContext } from "../lib/contexts/global-provider";
import { CustomButton } from "../components/custom-button";
import { images, colors, Routes } from "../constants";

export default function App() {
  const { isLoading, isSignedIn } = useGlobalContext();

  if (!isLoading && isSignedIn) {
    return <Redirect href={Routes.home.path} />;
  }

  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full justify-between items-center h-full px-4">
          <Image
            source={images.logoText}
            className="w-2/5 h-[56px] mt-4"
            resizeMode="contain"
          />

          <View className="items-center space-y-2">
            <Text
              className="font-bold text-2xl text-center max-w-[224px] mt-2 text-foreground"
              style={{ lineHeight: "24px" }}
            >
              Unleash Infinite Potential with
              <Text className="text-primary"> Vexar</Text>
            </Text>
            <Text className="text-center text-xs text-foreground">
              Discover a new level of convenience with our app. Streamline your
              tasks, enhance your productivity, and enjoy a seamless
              experience—all in one place.
            </Text>
          </View>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push(Routes.signIn.path)}
            containerStyles="w-full"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor={colors.backgroundColor} style="dark" />
    </SafeAreaView>
  );
}
