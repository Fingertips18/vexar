import { Image, Text, View } from "react-native";

export function TabIcon({ icon, activeIcon, color, name, focused }) {
  const Icon = focused ? activeIcon : icon;

  return (
    <View className="items-center justify-center">
      <Image
        source={Icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "text-accent" : "text-foreground/50"
        } text-xs font-poppins-medium`}
      >
        {name}
      </Text>
    </View>
  );
}
