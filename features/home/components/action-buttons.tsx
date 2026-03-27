import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, View } from "react-native";
import { withUniwind } from "uniwind";

const StyledIonicons = withUniwind(Ionicons);

interface ActionButtonsProps {
  onDislike: () => void;
  onSuperLike?: () => void;
  onLike: () => void;
}

export function ActionButtons({ onDislike, onSuperLike, onLike }: ActionButtonsProps) {
  return (
    <View className="flex-row items-center justify-center gap-5 mt-5 pb-1">
      {/* Nope */}
      <Pressable
        className="w-16 h-16 rounded-full bg-surface border border-red-500/20 items-center justify-center shadow-lg active:scale-95"
        onPress={onDislike}
      >
        <StyledIonicons name="close" size={34} className="text-red-500" />
      </Pressable>

      {/* Super Like */}
      <Pressable
        className="w-14 h-14 rounded-full bg-surface border border-blue-500/20 items-center justify-center shadow-lg active:scale-95"
        onPress={onSuperLike}
      >
        <StyledIonicons name="star" size={26} className="text-blue-500" />
      </Pressable>

      {/* Like */}
      <Pressable
        className="w-16 h-16 rounded-full bg-surface border border-green-500/20 items-center justify-center shadow-lg active:scale-95"
        onPress={onLike}
      >
        <StyledIonicons name="heart" size={30} className="text-green-500" />
      </Pressable>
    </View>
  );
}
