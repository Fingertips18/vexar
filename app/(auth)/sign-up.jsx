import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import { CustomButton } from "../../components/custom-button";
import { TextField } from "./_components/text-field";
import { images, Routes } from "../../constants";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {};

  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] items-center justify-center px-4 my-6">
          <Image
            source={images.logoText}
            className="w-2/5 h-[56px]"
            resizeMode="contain"
          />
          <Text className="text-foreground text-2xl font-bold">Sign Up</Text>

          <TextField
            label="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-6"
            keyboardType="username"
          />

          <TextField
            label="Email Address"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-6"
            keyboardType="email-address"
          />

          <TextField
            label="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-6"
          />

          <CustomButton
            title="Sign Up"
            containerStyles="w-full mt-6"
            handlePress={onSubmit}
            isLoading={loading}
          />

          <View className="mt-6 flex-row gap-x-2 items-center">
            <Text className="text-sm font-medium text-foreground">
              Already have an account?
            </Text>
            <Link href={Routes.signIn.path} className="font-bold text-accent">
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
