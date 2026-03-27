import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import { ActionButtons } from "../../features/home/components/action-buttons";
import {
  SwipeableCard,
  SwipeableCardRef,
} from "../../features/home/components/swipeable-card";
import { PROFILES } from "../../features/home/data/profiles";

const StyledIonicons = withUniwind(Ionicons);

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [profiles, setProfiles] = useState(PROFILES);
  const swipeableRef = useRef<SwipeableCardRef>(null);

  const handleSwipeLeft = () => setProfiles((prev) => prev.slice(1));
  const handleSwipeRight = () => setProfiles((prev) => prev.slice(1));
  const triggerSwipeLeft = () => swipeableRef.current?.swipeLeft();
  const triggerSwipeRight = () => swipeableRef.current?.swipeRight();

  return (
    <GestureHandlerRootView className="flex-1">
      <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>

        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 py-2.5">
          {/* My Avatar */}
          <Pressable className="relative">
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
              className="w-11 h-11 rounded-full border-2 border-red-500"
            />
            <View className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
          </Pressable>

          {/* Brand */}
          <View className="flex-row items-center gap-1.5">
            <StyledIonicons name="flame" size={26} className="text-red-500" />
            <Text className="text-foreground text-2xl font-extrabold tracking-tight">
              Spark
            </Text>
          </View>

          {/* Filter */}
          <Pressable className="w-11 h-11 rounded-full bg-surface border border-border items-center justify-center shadow-sm">
            <StyledIonicons name="options" size={20} className="text-foreground" />
          </Pressable>
        </View>

        {/* ── Card Stack ── */}
        <View className="flex-1 px-4 pb-4">
          <View className="flex-1 relative">
            {profiles.length > 0 ? (
              profiles
                .slice(0, 3)
                .reverse()
                .map((profile, i, array) => {
                  const isFirst = i === array.length - 1;
                  const isSecond = i === array.length - 2;
                  return (
                    <SwipeableCard
                      key={profile.id}
                      ref={isFirst ? swipeableRef : undefined}
                      profile={profile}
                      isFirst={isFirst}
                      isSecond={isSecond}
                      onSwipeLeft={handleSwipeLeft}
                      onSwipeRight={handleSwipeRight}
                    />
                  );
                })
            ) : (
              <View className="flex-1 items-center justify-center gap-2">
                <Text className="text-5xl mb-2">🎉</Text>
                <Text className="text-foreground text-xl font-bold">
                  You&apos;ve seen everyone!
                </Text>
                <Text className="text-foreground/50 text-sm text-center px-8">
                  Check back later for new people nearby
                </Text>
              </View>
            )}
          </View>

          <ActionButtons
            onDislike={triggerSwipeLeft}
            onLike={triggerSwipeRight}
          />
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
