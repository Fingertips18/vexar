import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useState } from "react";

import { colors, icons } from "../../../constants";

export function VideoCard({
  video: {
    title,
    thumbnail,
    video,
    creator: { username, avatar },
  },
}) {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex-col items-center px-4 mb-8">
      <View className="flex-row gap-3 items-start ">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-foreground font-poppins-semi-bold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-muted font-poppins-regular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image
            source={icons.menu}
            alt="Menu"
            className="w-6 h-6"
            resizeMode="contain"
          />
        </View>
      </View>

      {play ? (
        <Text>Playing</Text>
      ) : (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setPlay(true)}
          className="w-full h-60 rounded-lg mt-2 justify-center items-center overflow-hidden"
        >
          <ImageBackground
            source={{ uri: thumbnail }}
            alt="Thumbnail"
            className="w-full h-full"
            resizeMode="cover"
          >
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              className="w-full h-full items-center justify-center"
            >
              <Image
                source={icons.play}
                alt="Play"
                className="w-12 h-12"
                tintColor={colors.darkForegroundColor}
                resizeMode="contain"
              />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </View>
  );
}
