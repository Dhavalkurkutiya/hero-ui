import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Dimensions, Image, Pressable, Text, View } from "react-native";
import { withUniwind } from "uniwind";
import type { ExploreProfile } from "../data/explore";

const StyledIonicons = withUniwind(Ionicons);

const CARD_WIDTH = (Dimensions.get("window").width - 16 * 2 - 8) / 2;

interface ExploreCardProps {
  profile: ExploreProfile;
  tall?: boolean; // every 5th card is taller for visual rhythm
  onPress?: () => void;
}

export function ExploreCard({ profile, tall, onPress }: ExploreCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{ width: CARD_WIDTH, height: tall ? CARD_WIDTH * 1.45 : CARD_WIDTH * 1.1 }}
      className="rounded-2xl overflow-hidden bg-neutral-800 active:opacity-90"
    >
      {/* Photo */}
      <Image
        source={{ uri: profile.image }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      {/* Online dot */}
      {profile.isOnline && (
        <View className="absolute top-2.5 right-2.5 w-2.5 h-2.5 rounded-full bg-green-400 border border-white" />
      )}

      {/* Verified badge */}
      {profile.isVerified && (
        <View className="absolute top-2.5 left-2.5 w-6 h-6 rounded-full bg-blue-500 items-center justify-center">
          <StyledIonicons name="checkmark" size={13} className="text-white" />
        </View>
      )}

      {/* Bottom gradient overlay */}
      <View className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black/80 to-transparent" />

      {/* Info */}
      <View className="absolute bottom-0 left-0 right-0 px-2.5 pb-2.5">
        <Text className="text-white text-sm font-bold" numberOfLines={1}>
          {profile.name}, {profile.age}
        </Text>
        <View className="flex-row items-center gap-0.5 mt-0.5">
          <StyledIonicons name="location-sharp" size={10} className="text-white/60" />
          <Text className="text-white/60 text-[10px]">{profile.distance}</Text>
        </View>
      </View>
    </Pressable>
  );
}
