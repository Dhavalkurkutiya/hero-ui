import Ionicons from "@expo/vector-icons/Ionicons";
import React, { forwardRef, useImperativeHandle } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import type { Profile } from "../data/profiles";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.3;

export interface SwipeableCardRef {
  swipeLeft: () => void;
  swipeRight: () => void;
}

interface SwipeableCardProps {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  isFirst: boolean;
  isSecond: boolean;
}

export const SwipeableCard = forwardRef<SwipeableCardRef, SwipeableCardProps>(
  ({ profile, onSwipeLeft, onSwipeRight, isFirst, isSecond }, ref) => {
    const offset = useSharedValue({ x: 0, y: 0 });

    useImperativeHandle(ref, () => ({
      swipeLeft: () => {
        offset.value = withTiming(
          { x: -SCREEN_WIDTH * 1.5, y: 0 },
          { duration: 400 },
          () => {
            runOnJS(onSwipeLeft)();
          },
        );
      },
      swipeRight: () => {
        offset.value = withTiming(
          { x: SCREEN_WIDTH * 1.5, y: 0 },
          { duration: 400 },
          () => {
            runOnJS(onSwipeRight)();
          },
        );
      },
    }));

    const gesture = Gesture.Pan()
      .enabled(isFirst)
      .onUpdate((e) => {
        offset.value = { x: e.translationX, y: e.translationY };
      })
      .onEnd((e) => {
        if (e.translationX > SWIPE_THRESHOLD) {
          offset.value = withTiming(
            { x: SCREEN_WIDTH * 1.5, y: e.translationY },
            { duration: 300 },
            () => {
              runOnJS(onSwipeRight)();
            },
          );
        } else if (e.translationX < -SWIPE_THRESHOLD) {
          offset.value = withTiming(
            { x: -SCREEN_WIDTH * 1.5, y: e.translationY },
            { duration: 300 },
            () => {
              runOnJS(onSwipeLeft)();
            },
          );
        } else {
          offset.value = withSpring({ x: 0, y: 0 });
        }
      });

    const cardStyle = useAnimatedStyle(() => {
      if (!isFirst) {
        return {
          transform: [{ scale: withSpring(isSecond ? 0.95 : 0.9) }],
          zIndex: isSecond ? 90 : 80,
        };
      }
      const rotate = interpolate(
        offset.value.x,
        [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
        [-15, 0, 15],
        Extrapolation.CLAMP,
      );
      return {
        transform: [
          { translateX: offset.value.x },
          { translateY: offset.value.y },
          { rotate: `${rotate}deg` },
        ],
        zIndex: 100,
      };
    });

    const likeStyle = useAnimatedStyle(() => ({
      opacity: !isFirst
        ? 0
        : interpolate(
            offset.value.x,
            [0, SCREEN_WIDTH * 0.2],
            [0, 1],
            Extrapolation.CLAMP,
          ),
    }));

    const nopeStyle = useAnimatedStyle(() => ({
      opacity: !isFirst
        ? 0
        : interpolate(
            offset.value.x,
            [0, -SCREEN_WIDTH * 0.2],
            [0, 1],
            Extrapolation.CLAMP,
          ),
    }));

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[StyleSheet.absoluteFillObject, cardStyle]}>
          {/* Card Container */}
          <View style={styles.card}>
            {/* Full-bleed Photo */}
            <Image
              source={{ uri: profile.image }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />

            {/* Bottom Gradient — only covers lower 55% so photo stays vibrant */}
            <View style={styles.gradientContainer} pointerEvents="none">
              <Svg
                height="100%"
                width="100%"
                style={StyleSheet.absoluteFillObject}
              >
                <Defs>
                  <LinearGradient
                    id={`g-${profile.id}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <Stop offset="0" stopColor="#000" stopOpacity="0" />
                    <Stop offset="0.45" stopColor="#000" stopOpacity="0.5" />
                    <Stop offset="1" stopColor="#000" stopOpacity="0.92" />
                  </LinearGradient>
                </Defs>
                <Rect
                  width="100%"
                  height="100%"
                  fill={`url(#g-${profile.id})`}
                />
              </Svg>
            </View>

            {/* LIKE Stamp */}
            <Animated.View style={[styles.likeStamp, likeStyle]}>
              <Text style={styles.likeText}>LIKE</Text>
            </Animated.View>

            {/* NOPE Stamp */}
            <Animated.View style={[styles.nopeStamp, nopeStyle]}>
              <Text style={styles.nopeText}>NOPE</Text>
            </Animated.View>

            {/* Profile Info — pinned to bottom */}
            <View style={styles.infoContainer}>
              {/* Name + Age row */}
              <View style={styles.nameRow}>
                <Text style={styles.name}>{profile.name}</Text>
                <Text style={styles.age}>{profile.age}</Text>
                {/* Online dot */}
                <View style={styles.onlineDot} />
              </View>

              {/* Distance */}
              <View style={styles.distanceRow}>
                <Ionicons
                  name="location-sharp"
                  size={14}
                  color="rgba(255,255,255,0.8)"
                />
                <Text style={styles.distance}>{profile.distance}</Text>
              </View>

              {/* Tags */}
              <View style={styles.tagsRow}>
                {profile.tags.map((tag) => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>

              {/* Info Button */}
              <Pressable style={styles.infoButton}>
                <Ionicons name="information-circle" size={22} color="white" />
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    );
  },
);
SwipeableCard.displayName = "SwipeableCard";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#1a1a1a",
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    // Android shadow
    elevation: 12,
  },
  gradientContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "58%",
  },
  likeStamp: {
    position: "absolute",
    top: 52,
    left: 28,
    borderWidth: 4,
    borderColor: "#22c55e",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "rgba(0,0,0,0.15)",
    transform: [{ rotate: "-15deg" }],
    zIndex: 50,
  },
  likeText: {
    color: "#22c55e",
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 4,
  },
  nopeStamp: {
    position: "absolute",
    top: 52,
    right: 28,
    borderWidth: 4,
    borderColor: "#ef4444",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "rgba(0,0,0,0.15)",
    transform: [{ rotate: "15deg" }],
    zIndex: 50,
  },
  nopeText: {
    color: "#ef4444",
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 4,
  },
  infoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 22,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 6,
  },
  name: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: -0.5,
    marginRight: 10,
  },
  age: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "400",
    marginBottom: 2,
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#22c55e",
    marginLeft: 8,
    marginBottom: 6,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  distanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  distance: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 4,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "rgba(255,255,255,0.15)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  infoButton: {
    position: "absolute",
    right: 20,
    bottom: 22,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
});
