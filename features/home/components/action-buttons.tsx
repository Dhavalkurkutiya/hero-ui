import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, StyleSheet, useColorScheme, View } from "react-native";

interface ActionButtonsProps {
  onDislike: () => void;
  onSuperLike?: () => void;
  onLike: () => void;
}

export function ActionButtons({ onDislike, onSuperLike, onLike }: ActionButtonsProps) {
  const dark = useColorScheme() === "dark";
  const btnBg = dark ? "#1c1c1e" : "#fff";
  const shadowColor = dark ? "#000" : "#000";

  return (
    <View style={styles.container}>
      {/* Nope */}
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          styles.btnLg,
          { backgroundColor: btnBg, shadowColor, borderColor: "rgba(239,68,68,0.25)" },
          pressed && styles.pressed,
        ]}
        onPress={onDislike}
      >
        <Ionicons name="close" size={34} color="#ef4444" />
      </Pressable>

      {/* Super Like */}
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          styles.btnMd,
          { backgroundColor: btnBg, shadowColor, borderColor: "rgba(59,130,246,0.25)" },
          pressed && styles.pressed,
        ]}
        onPress={onSuperLike}
      >
        <Ionicons name="star" size={26} color="#3b82f6" />
      </Pressable>

      {/* Like */}
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          styles.btnLg,
          { backgroundColor: btnBg, shadowColor, borderColor: "rgba(34,197,94,0.25)" },
          pressed && styles.pressed,
        ]}
        onPress={onLike}
      >
        <Ionicons name="heart" size={30} color="#22c55e" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    paddingBottom: 4,
  },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    borderWidth: 1.5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
    elevation: 6,
  },
  btnLg: { width: 64, height: 64 },
  btnMd: { width: 54, height: 54 },
  pressed: {
    transform: [{ scale: 0.92 }],
    opacity: 0.85,
  },
});
