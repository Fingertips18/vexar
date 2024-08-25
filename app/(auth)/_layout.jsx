import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

import { Routes, colors } from "../../constants";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name={Routes.signIn.name}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={Routes.signUp.name}
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor={colors.backgroundColor} style="dark" />
    </>
  );
}
