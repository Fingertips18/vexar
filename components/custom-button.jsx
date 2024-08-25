import { TouchableOpacity, Text } from "react-native";

export function CustomButton({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      disabled={isLoading}
      className={`${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } bg-accent rounded-full min-h-[56px] justify-center items-center`}
    >
      <Text className={`${textStyles} text-dark-foreground font-bold text-lg`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
