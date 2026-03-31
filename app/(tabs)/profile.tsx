import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import { MY_PROFILE } from "../../features/profile/data/my-profile";
import { ProfileHeader } from "../../features/profile/components/ProfileHeader";
import {
  DetailRow,
  ProfileSection,
  SettingsRow,
} from "../../features/profile/components/ProfileSection";

const StyledIonicons = withUniwind(Ionicons);
const COVER_HEIGHT = 176;

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const stickyHeaderStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [COVER_HEIGHT - 60, COVER_HEIGHT], [0, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(scrollY.value, [COVER_HEIGHT - 60, COVER_HEIGHT], [-10, 0], Extrapolation.CLAMP),
      },
    ],
  }));

  const coverParallaxStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(scrollY.value, [0, COVER_HEIGHT], [0, -COVER_HEIGHT / 2], Extrapolation.CLAMP),
      },
    ],
  }));

  return (
    <View className="flex-1 bg-background lg:bg-surface-secondary/30">
      <View className="flex-1 max-w-[800px] w-full self-center bg-background md:shadow-xl md:border-x md:border-border overflow-hidden">
        {/* Sticky Mini-Header */}
        <Animated.View
          className="absolute top-0 left-auto right-auto w-full max-w-[800px] z-50 flex-row items-center px-5 bg-background/95 border-b border-border"
          style={[{ paddingTop: insets.top, height: insets.top + 52 }, stickyHeaderStyle]}
        >
          <Image
            source={{ uri: MY_PROFILE.avatar }}
            className="w-8 h-8 rounded-full border-2 border-red-500 mr-3"
          />
          <View className="flex-1">
            <Text className="text-foreground text-base font-bold">
              {MY_PROFILE.name}, {MY_PROFILE.age}
            </Text>
            <Text className="text-foreground/40 text-xs">{MY_PROFILE.location}</Text>
          </View>
          <StyledIonicons name="create-outline" size={21} className="text-foreground/50" />
        </Animated.View>

        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 32 }}
        >
          <View style={{ height: insets.top }} />

          {/* Cover + Parallax */}
          <View className="h-44 overflow-hidden bg-neutral-700">
            <Animated.Image
              source={{ uri: MY_PROFILE.coverImage }}
              className="absolute w-full"
              style={[{ height: COVER_HEIGHT * 1.3, top: 0 }, coverParallaxStyle]}
              resizeMode="cover"
            />
          </View>

          {/* Avatar + Stats */}
          <ProfileHeader profile={MY_PROFILE} onEditPress={() => {}} hideCover />

          <View className="h-3" />

          {/* ── About Me ── */}
          <ProfileSection title="About Me" actionLabel="Edit" onAction={() => {}}>
            <View className="px-4 py-3.5">
              <Text className="text-foreground/70 text-sm leading-6">{MY_PROFILE.bio}</Text>
            </View>
          </ProfileSection>

          <View className="h-2" />

          {/* ── Interests ── */}
          <ProfileSection title="Interests" actionLabel="Edit" onAction={() => {}}>
            <View className="px-4 py-3.5 flex-row flex-wrap gap-2">
              {MY_PROFILE.tags.map((tag) => (
                <View
                  key={tag}
                  className="bg-foreground/5 border border-border px-3 py-1.5 rounded-full"
                >
                  <Text className="text-foreground text-xs font-medium">{tag}</Text>
                </View>
              ))}
            </View>
          </ProfileSection>

          <View className="h-2" />

          {/* ── Profile Details ── */}
          <ProfileSection title="Profile Details">
            <DetailRow icon="body"         iconBg="bg-purple-500/10"  iconColor="text-purple-500"  label="Height"      value={MY_PROFILE.details.height} />
            <DetailRow icon="briefcase"    iconBg="bg-blue-500/10"    iconColor="text-blue-500"    label="Job"         value={MY_PROFILE.details.job} />
            <DetailRow icon="school"       iconBg="bg-emerald-500/10" iconColor="text-emerald-500" label="Education"   value={MY_PROFILE.details.education} />
            <DetailRow icon="heart"        iconBg="bg-red-500/10"     iconColor="text-red-500"     label="Looking For" value={MY_PROFILE.details.lookingFor} />
            <DetailRow icon="planet"       iconBg="bg-amber-500/10"   iconColor="text-amber-500"   label="Zodiac"      value={MY_PROFILE.details.zodiac} isLast />
          </ProfileSection>

          <View className="h-2" />

          {/* ── Account ── */}
          <ProfileSection title="Account">
            <SettingsRow icon="notifications"    iconBg="bg-amber-500/10"  iconColor="text-amber-500"  label="Notifications"          onPress={() => {}} />
            <SettingsRow icon="shield-checkmark" iconBg="bg-green-500/10"  iconColor="text-green-500"  label="Privacy & Safety"       onPress={() => {}} />
            <SettingsRow icon="lock-closed"      iconBg="bg-indigo-500/10" iconColor="text-indigo-500" label="Blocked Users"           rightText="0"      onPress={() => {}} />
            <SettingsRow icon="card"             iconBg="bg-sky-500/10"    iconColor="text-sky-500"    label="Subscription & Billing" rightText="Free"   onPress={() => {}} isLast />
          </ProfileSection>

          <View className="h-2" />

          {/* ── Support ── */}
          <ProfileSection title="Support">
            <SettingsRow icon="help-circle"         iconBg="bg-teal-500/10"  iconColor="text-teal-500"  label="Help & FAQ"             onPress={() => {}} />
            <SettingsRow icon="chatbubble-ellipses" iconBg="bg-blue-500/10"  iconColor="text-blue-500"  label="Contact Us"             onPress={() => {}} />
            <SettingsRow icon="document-text"       iconBg="bg-foreground/5" iconColor="text-foreground/40" label="Terms & Privacy Policy" onPress={() => {}} isLast />
          </ProfileSection>

          <View className="h-2" />

          {/* ── Account Actions ── */}
          <ProfileSection title="Account Actions">
            <SettingsRow icon="log-out" iconBg="bg-red-500/10" iconColor="text-red-500" label="Log Out"        danger onPress={() => {}} />
            <SettingsRow icon="trash"   iconBg="bg-red-500/10" iconColor="text-red-500" label="Delete Account" danger isLast onPress={() => {}} />
          </ProfileSection>

          {/* Footer */}
          <View className="flex-row items-center justify-center pt-6 pb-2">
            <StyledIonicons name="flame" size={14} className="text-red-500 mr-1" />
            <Text className="text-foreground/25 text-xs">Spark · Version 1.0.0</Text>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
}
