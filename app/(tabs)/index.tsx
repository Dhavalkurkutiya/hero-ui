import React from "react";
import { View, Text, Image, Pressable, ScrollView, Dimensions, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

// Polyfill for MaterialIcons if needed, but we use them directly
export default function DiscoveryScreen() {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get("window");

  // Simple responsive check for the right-side trending bar
  const isDesktop = width >= 1024;

  return (
    <View className="flex-1 bg-surface">
      {/* TopAppBar */}
      <View 
        className="absolute top-0 w-full flex-row justify-between items-center px-6 bg-surface/80 border-b border-outline-variant/20 z-50"
        style={{ paddingTop: Math.max(insets.top, 16), paddingBottom: 16 }}
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

      {/* Main Canvas: Discovery Deck */}
      <View className="flex-1 items-center justify-center px-4" style={{ paddingTop: insets.top + 60 }}>
        {/* Desktop Floating Sidebar */}
        {isDesktop && (
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
        )}

        {/* Profile Card Container */}
        <View className="relative w-full max-w-[440px] h-[75%] max-h-[750px] bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden shadow-2xl">
          {/* Hero Image */}
          <Image
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfv_ZudhaRFTKhfYc_iTCBYy5clJlR520lSSty-y0umUAdxdY5Z03oIcwwjKte12DZ2l0jfcqNg-VZ7uY-RSkrtrLBZTmsdulNrRLU4t-tGWgjZ3dVJR650z1g5CCTU_uybxNaxhiTLPPUKdqjS327w8HzP4bAelSU1arS9IrxEKkMyGVidMsqBReO-iZI2fd6YC5t5EmEDETnVRMJCJmVZd9p7Gk5pfbraHzGF9HYb7zFKrJB2Yjc8sIzHxWtd-9hvnIbbgGzI34" }}
            className="absolute inset-0 w-full h-full"
            resizeMode="cover"
          />
          
          {/* Image Gradient Scrim instead of empty div to ensure exact match of CSS scrim */}
          <View className="absolute inset-0 bg-surface/30" />
          <View className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-surface via-surface/80 to-transparent" />

          {/* Information Overlay */}
          <View className="absolute bottom-0 w-full p-8 flex-col justify-end gap-6 h-full">
            {/* Identity */}
            <View className="flex-col gap-1">
              <Text className="font-extrabold text-4xl tracking-tight text-on-surface">
                Ananya, 21
              </Text>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="school" size={16} className="text-on-surface/60" />
                <Text className="font-bold uppercase tracking-widest text-xs text-on-surface/80">
                  Lady Shri Ram College
                </Text>
              </View>
            </View>

            {/* Interests Bento */}
            <View className="flex-row flex-wrap gap-2">
              <View className="bg-surface-container-high/60 px-4 py-2 rounded-lg border border-outline-variant/20">
                <Text className="font-bold uppercase tracking-wider text-[10px] text-on-surface-variant">
                  Art History
                </Text>
              </View>
              <View className="bg-surface-container-high/60 px-4 py-2 rounded-lg border border-outline-variant/20">
                <Text className="font-bold uppercase tracking-wider text-[10px] text-on-surface-variant">
                  Tennis
                </Text>
              </View>
              <View className="bg-surface-container-high/60 px-4 py-2 rounded-lg border border-outline-variant/20">
                <Text className="font-bold uppercase tracking-wider text-[10px] text-on-surface-variant">
                  Vinyl
                </Text>
              </View>
            </View>

            {/* Interaction Cluster */}
            <View className="flex-row items-center justify-between mt-4">
              {/* Dislike */}
              <Pressable className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-surface-container-lowest/40 active:scale-90 transition-transform">
                <MaterialIcons name="close" size={28} className="text-on-surface/60" />
              </Pressable>

              {/* Spark Message */}
              <Pressable className="px-8 py-4 bg-primary-container rounded-full active:scale-95 transition-transform flex-row items-center gap-3 border border-white/20 shadow-lg">
                <MaterialIcons name="auto-awesome" size={20} color="white" />
                <Text className="font-black uppercase tracking-[0.1em] text-white text-[11px]">
                  Spark Message
                </Text>
              </Pressable>

              {/* Like */}
              <Pressable className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center bg-surface-container-lowest/40 active:scale-90 transition-transform">
                <MaterialIcons name="favorite" size={28} className="text-on-surface/60" />
              </Pressable>
            </View>
          </View>

          {/* Detail Anchor (Right Side) */}
          <View className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full overflow-hidden">
            <View className="absolute top-0 left-0 w-full h-1/3 bg-primary-container rounded-full" />
          </View>
        </View>
      </View>
    </View>
  );
}
