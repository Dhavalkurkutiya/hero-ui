import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { withUniwind } from "uniwind";

const StyledIonicons = withUniwind(Ionicons);

// ── Section wrapper ────────────────────────────────────────────────
interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function ProfileSection({ title, children, actionLabel, onAction }: ProfileSectionProps) {
  return (
    <View className="mx-4 mb-2">
      {/* Section Label */}
      <View className="flex-row items-center justify-between px-1 mb-1.5">
        <Text className="text-foreground/40 text-xs font-semibold uppercase tracking-widest">
          {title}
        </Text>
        {actionLabel && (
          <Pressable onPress={onAction}>
            <Text className="text-red-500 text-sm font-medium">{actionLabel}</Text>
          </Pressable>
        )}
      </View>

      {/* Card */}
      <View className="bg-surface rounded-2xl border border-border overflow-hidden">
        {children}
      </View>
    </View>
  );
}

// ── Detail row ─────────────────────────────────────────────────────
interface DetailRowProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  isLast?: boolean;
}

export function DetailRow({ icon, iconBg, iconColor, label, value, isLast }: DetailRowProps) {
  return (
    <View className={`flex-row items-center px-4 py-3.5 ${!isLast ? "border-b border-border" : ""}`}>
      <View className={`w-8 h-8 rounded-lg items-center justify-center mr-3 ${iconBg}`}>
        <StyledIonicons name={icon} size={16} className={iconColor} />
      </View>
      <Text className="text-foreground/50 text-sm flex-[0.45]">{label}</Text>
      <Text className="text-foreground text-sm font-medium flex-1 text-right">{value}</Text>
    </View>
  );
}

// ── Settings row ───────────────────────────────────────────────────
interface SettingsRowProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconBg: string;
  iconColor: string;
  label: string;
  sublabel?: string;
  rightText?: string;
  danger?: boolean;
  isLast?: boolean;
  onPress?: () => void;
}

export function SettingsRow({
  icon,
  iconBg,
  iconColor,
  label,
  sublabel,
  rightText,
  danger,
  isLast,
  onPress,
}: SettingsRowProps) {
  return (
    <Pressable
      className={`flex-row items-center px-4 py-3.5 active:bg-foreground/5 ${!isLast ? "border-b border-border" : ""}`}
      onPress={onPress}
    >
      <View className={`w-8 h-8 rounded-lg items-center justify-center mr-3 ${iconBg}`}>
        <StyledIonicons name={icon} size={16} className={iconColor} />
      </View>
      <View className="flex-1">
        <Text className={`text-[15px] font-medium ${danger ? "text-red-500" : "text-foreground"}`}>
          {label}
        </Text>
        {sublabel && (
          <Text className="text-foreground/40 text-xs mt-0.5">{sublabel}</Text>
        )}
      </View>
      {rightText && (
        <Text className="text-foreground/40 text-sm mr-1">{rightText}</Text>
      )}
      {!danger && (
        <StyledIonicons name="chevron-forward" size={15} className="text-foreground/25" />
      )}
    </Pressable>
  );
}
