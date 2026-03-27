import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActionButtons } from "../../features/home/components/action-buttons";
import {
  SwipeableCard,
  SwipeableCardRef,
} from "../../features/home/components/swipeable-card";
import { PROFILES } from "../../features/home/data/profiles";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const [profiles, setProfiles] = useState(PROFILES);
  const swipeableRef = useRef<SwipeableCardRef>(null);
  const scheme = useColorScheme();
  const dark = scheme === "dark";

  const handleSwipeLeft = () => setProfiles((prev) => prev.slice(1));
  const handleSwipeRight = () => setProfiles((prev) => prev.slice(1));
  const triggerSwipeLeft = () => swipeableRef.current?.swipeLeft();
  const triggerSwipeRight = () => swipeableRef.current?.swipeRight();

  return (
    <GestureHandlerRootView style={styles.root}>
      <View
        style={[
          styles.screen,
          {
            paddingTop: insets.top,
            backgroundColor: dark ? "#0a0a0a" : "#f9fafb",
          },
        ]}
      >
        {/* ── Header ── */}
        <View style={styles.header}>
          {/* My Profile Avatar */}
          <Pressable>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              style={styles.avatar}
            />
            <View
              style={[
                styles.avatarOnline,
                { borderColor: dark ? "#0a0a0a" : "#f9fafb" },
              ]}
            />
          </Pressable>

          {/* Brand */}
          <View style={styles.brand}>
            <Ionicons name="flame" size={26} color="#ef4444" />
            <Text
              style={[
                styles.brandText,
                { color: dark ? "#f9fafb" : "#111827" },
              ]}
            >
              Spark
            </Text>
          </View>

          {/* Filter */}
          <Pressable
            style={[
              styles.filterBtn,
              {
                backgroundColor: dark ? "#1c1c1e" : "#fff",
                borderColor: dark ? "#2c2c2e" : "#f3f4f6",
              },
            ]}
          >
            <Ionicons
              name="options"
              size={20}
              color={dark ? "#d1d5db" : "#374151"}
            />
          </Pressable>
        </View>

        {/* ── Card Stack ── */}
        <View style={styles.stackArea}>
          <View style={styles.cardContainer}>
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
              <View style={styles.emptyState}>
                <Text style={styles.emptyEmoji}>🎉</Text>
                <Text
                  style={[
                    styles.emptyTitle,
                    { color: dark ? "#f9fafb" : "#111827" },
                  ]}
                >
                  You&apos;ve seen everyone!
                </Text>
                <Text
                  style={[
                    styles.emptySubtitle,
                    { color: dark ? "#9ca3af" : "#6b7280" },
                  ]}
                >
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

const styles = StyleSheet.create({
  root: { flex: 1 },
  screen: { flex: 1 },
  // Header
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 2,
    borderColor: "#ef4444",
  },
  avatarOnline: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#22c55e",
    borderWidth: 2,
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  brandText: {
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  filterBtn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
  },
  // Cards
  stackArea: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  cardContainer: {
    flex: 1,
    position: "relative",
  },
  // Empty state
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  emptyEmoji: { fontSize: 56, marginBottom: 8 },
  emptyTitle: { fontSize: 22, fontWeight: "700" },
  emptySubtitle: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 32,
  },
});
