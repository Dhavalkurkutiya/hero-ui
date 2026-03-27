import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { withUniwind } from "uniwind";
import type { MyProfile } from "../data/my-profile";

const StyledIonicons = withUniwind(Ionicons);

interface ProfileHeaderProps {
  profile: MyProfile;
  onEditPress: () => void;
  /** When true, skips rendering the cover (parent handles it) */
  hideCover?: boolean;
}

export function ProfileHeader({ profile, onEditPress, hideCover }: ProfileHeaderProps) {
  return (
    <View>
      {/* Cover Image — skipped when parent handles parallax */}
      {!hideCover && (
        <View className="h-44 w-full bg-neutral-700 relative">
          <Image
            source={{ uri: profile.coverImage }}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
          />
          <Svg height="100%" width="100%" style={{ position: "absolute" }}>
            <Defs>
              <LinearGradient id="coverGrad" x1="0" y1="0" x2="0" y2="1">
                <Stop offset="0" stopColor="#000" stopOpacity="0" />
                <Stop offset="1" stopColor="#000" stopOpacity="0.55" />
              </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#coverGrad)" />
          </Svg>

          {/* Edit Cover Button */}
          <Pressable
            className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-black/50 border border-white/30 items-center justify-center"
            onPress={onEditPress}
          >
            <StyledIonicons name="camera" size={17} className="text-white" />
          </Pressable>
        </View>
      )}

      {/* Avatar + Name Row */}
      <View className="flex-row items-center px-4 py-3 bg-background gap-3">
        {/* Avatar */}
        <View className="relative">
          <Image
            source={{ uri: profile.avatar }}
            className="w-[70px] h-[70px] rounded-full border-[3px] border-red-500"
          />
          <Pressable
            className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-red-500 items-center justify-center border-2 border-background"
            onPress={onEditPress}
          >
            <StyledIonicons name="add" size={14} className="text-white" />
          </Pressable>
        </View>

        {/* Name + Location */}
        <View className="flex-1">
          <View className="flex-row items-center mb-1">
            <Text className="text-foreground text-lg font-bold mr-1.5">
              {profile.name}, {profile.age}
            </Text>
            <StyledIonicons name="checkmark-circle" size={18} className="text-blue-500" />
          </View>
          <View className="flex-row items-center">
            <StyledIonicons name="location-sharp" size={13} className="text-red-500" />
            <Text className="text-foreground/60 text-sm ml-0.5">{profile.location}</Text>
          </View>
        </View>

        {/* Edit Button */}
        <Pressable className="px-4 py-2 rounded-full border border-border">
          <Text className="text-foreground text-sm font-semibold">Edit</Text>
        </Pressable>
      </View>

      {/* Stats Row */}
      <View className="mx-4 mb-3 bg-surface border border-border rounded-2xl flex-row py-4 shadow-sm">
        <View className="flex-1 items-center">
          <Text className="text-foreground text-[22px] font-extrabold mb-0.5">
            {profile.stats.matches}
          </Text>
          <Text className="text-foreground/50 text-xs font-medium">Matches</Text>
        </View>

        <View className="w-px bg-border my-1" />

        <View className="flex-1 items-center">
          <Text className="text-red-500 text-[22px] font-extrabold mb-0.5">
            {profile.stats.likes}
          </Text>
          <Text className="text-foreground/50 text-xs font-medium">Likes</Text>
        </View>

        <View className="w-px bg-border my-1" />

        <View className="flex-1 items-center">
          <Text className="text-blue-500 text-[22px] font-extrabold mb-0.5">
            {profile.stats.superLikes}
          </Text>
          <Text className="text-foreground/50 text-xs font-medium">Super Likes</Text>
        </View>
      </View>
    </View>
  );
}
