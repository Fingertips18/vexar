import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { colors, icons } from "../../../constants";
import { useState } from "react";

export function TextField({
  label,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) {
  const [obscure, setObscure] = useState(false);

  const isPassword = label.toLowerCase() === "password";

  return (
    <View className={`${otherStyles} space-y-2 w-full`}>
      <Text className="text-base text-foreground font-poppins-medium">
        {label}
      </Text>

      <View className="flex-row items-center w-full h-16 px-4 bg-secondary/10 rounded-full border border-secondary/20 focus:border-secondary">
        <TextInput
          className="flex-1 text-foreground font-semibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.foregroundColor}
          onChangeText={handleChangeText}
          secureTextEntry={isPassword && !obscure}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setObscure(!obscure)}>
            <Image
              source={obscure ? icons.eyeOpen : icons.eyeClose}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
