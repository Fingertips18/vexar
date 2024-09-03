import { View, TextInput, TouchableOpacity, Image } from "react-native";

import { colors, icons } from "../../../constants";

export function SearchInput({ value, handleChangeText }) {
  return (
    <View className="flex-row items-center w-full h-16 px-4 bg-secondary/10 rounded-full border border-secondary/20 focus:border-secondary space-x-4">
      <TextInput
        className="flex-1 text-foreground text-base"
        value={value}
        placeholder="Search..."
        placeholderTextColor={colors.mutedColor}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          alt="Search"
          className="w-6 h-6"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
