import React from "react";
import { View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface DiscoveryHeaderProps {
  topInset: number;
}

export function DiscoveryHeader({ topInset }: DiscoveryHeaderProps) {
  return (
    <View 
      className="absolute top-0 w-full flex-row justify-between items-center px-6 bg-surface/80 border-b border-outline-variant/20 z-50"
      style={{ paddingTop: Math.max(topInset, 16), paddingBottom: 16 }}
    >
      <View className="flex-row items-center gap-2">
        <MaterialIcons name="verified" size={24} color="#FF2D55" />
        <Text className="font-extrabold italic text-2xl uppercase text-[#FF2D55]">
          APNU
        </Text>
      </View>
      <View className="flex-row items-center gap-8 hidden md:flex">
        <Text className="text-[#FF2D55] font-bold uppercase tracking-widest text-xs">
          Discovery
        </Text>
        <Text className="text-on-surface/70 font-bold uppercase tracking-widest text-xs">
          Matches
        </Text>
        <Text className="text-on-surface/70 font-bold uppercase tracking-widest text-xs">
          Circles
        </Text>
      </View>
      <Pressable className="active:scale-95 transition-transform p-2">
        <MaterialIcons name="tune" size={24} className="text-on-surface/70" />
      </Pressable>
    </View>
  );
}
