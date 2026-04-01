import React from "react";
import { View, Text, Pressable } from "react-native";

export function DiscoverySidebar() {
  return (
    <View className="absolute left-12 top-1/2 -translate-y-1/2 flex-col gap-12 z-40">
      <View className="flex-col gap-4">
        <Text className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary-container">
          Trending Now
        </Text>
        <View className="flex-col gap-6">
          <Pressable className="group">
            <Text className="font-bold text-lg text-on-surface">North Campus</Text>
            <Text className="text-on-surface/40 text-xs">124 members active</Text>
          </Pressable>
          <Pressable className="group">
            <Text className="font-bold text-lg text-on-surface">Aura Meet</Text>
            <Text className="text-on-surface/40 text-xs">New circle unlocked</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
