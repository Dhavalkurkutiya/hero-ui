import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View, Pressable } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MY_PROFILE } from "../../features/profile/data/my-profile";
import { ProfileHeader } from "../../features/profile/components/ProfileHeader";
import {
  DetailRow,
  ProfileSection,
  SettingsRow,
} from "../../features/profile/components/ProfileSection";

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
    <View className="flex-1 bg-surface">
      <View className="flex-1 max-w-[800px] w-full self-center overflow-hidden">
        {/* Sticky Mini-Header */}
        <Animated.View
          className="absolute top-0 w-full z-50 flex-row justify-between items-center px-6 bg-surface/90 border-b border-outline-variant/20 backdrop-blur-xl"
          style={[{ paddingTop: Math.max(insets.top, 16), paddingBottom: 16 }, stickyHeaderStyle]}
        >
          <View className="flex-row items-center">
            <Image
              source={{ uri: MY_PROFILE.avatar }}
              className="w-10 h-10 rounded-full border border-outline-variant/20 mr-3"
            />
            <View className="flex-col">
              <Text className="text-on-surface font-bold font-headline text-lg leading-tight">
                {MY_PROFILE.name}, {MY_PROFILE.age}
              </Text>
              <Text className="text-on-surface/40 uppercase tracking-widest text-[10px] font-bold">{MY_PROFILE.location}</Text>
            </View>
          </View>
          <Pressable className="p-2 active:scale-95">
            <MaterialIcons name="settings" size={24} className="text-on-surface/60" />
          </Pressable>
        </Animated.View>

        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: insets.bottom + 120 }}
        >
          {/* Cover + Parallax */}
          <View className="h-56 overflow-hidden bg-surface-container-high relative">
            <Animated.Image
              source={{ uri: MY_PROFILE.coverImage }}
              className="absolute w-full"
              style={[{ height: 300, top: 0 }, coverParallaxStyle]}
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-surface/10" />
            <View className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-surface to-transparent" />
          </View>

          {/* Avatar + Stats */}
          <View className="-mt-16 px-6 relative z-10">
            <ProfileHeader profile={MY_PROFILE} onEditPress={() => {}} hideCover />
          </View>

          <View className="px-6 mt-6 gap-6">
            {/* ── About Me ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
               <ProfileSection title="About Me" actionLabel="Edit" onAction={() => {}}>
                 <View className="px-5 py-4">
                   <Text className="text-on-surface/70 text-sm leading-6 font-body">{MY_PROFILE.bio}</Text>
                 </View>
               </ProfileSection>
            </View>

            {/* ── Interests ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
              <ProfileSection title="Interests" actionLabel="Edit" onAction={() => {}}>
                <View className="px-5 py-4 flex-row flex-wrap gap-2">
                  {MY_PROFILE.tags.map((tag) => (
                    <View
                      key={tag}
                      className="bg-surface-container-high/60 border border-outline-variant/20 px-4 py-2 rounded-lg"
                    >
                      <Text className="text-on-surface-variant text-[11px] uppercase tracking-wider font-bold">{tag}</Text>
                    </View>
                  ))}
                </View>
              </ProfileSection>
            </View>

            {/* ── Profile Details ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
              <ProfileSection title="Profile Details">
                <DetailRow icon="body"         iconBg="bg-purple-500/10"  iconColor="text-purple-500"  label="Height"      value={MY_PROFILE.details.height} />
                <DetailRow icon="briefcase"    iconBg="bg-blue-500/10"    iconColor="text-blue-500"    label="Job"         value={MY_PROFILE.details.job} />
                <DetailRow icon="school"       iconBg="bg-emerald-500/10" iconColor="text-emerald-500" label="Education"   value={MY_PROFILE.details.education} />
                <DetailRow icon="heart"        iconBg="bg-red-500/10"     iconColor="text-red-500"     label="Looking For" value={MY_PROFILE.details.lookingFor} />
                <DetailRow icon="planet"       iconBg="bg-amber-500/10"   iconColor="text-amber-500"   label="Zodiac"      value={MY_PROFILE.details.zodiac} isLast />
              </ProfileSection>
            </View>

            {/* ── Account ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
              <ProfileSection title="Account">
                <SettingsRow icon="notifications"    iconBg="bg-amber-500/10"  iconColor="text-amber-500"  label="Notifications"          onPress={() => {}} />
                <SettingsRow icon="shield-checkmark" iconBg="bg-green-500/10"  iconColor="text-green-500"  label="Privacy & Safety"       onPress={() => {}} />
                <SettingsRow icon="lock-closed"      iconBg="bg-indigo-500/10" iconColor="text-indigo-500" label="Blocked Users"           rightText="0"      onPress={() => {}} />
                <SettingsRow icon="card"             iconBg="bg-sky-500/10"    iconColor="text-sky-500"    label="Subscription & Billing" rightText="Free"   onPress={() => {}} isLast />
              </ProfileSection>
            </View>

            {/* ── Support ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
              <ProfileSection title="Support">
                <SettingsRow icon="help-circle"         iconBg="bg-teal-500/10"  iconColor="text-teal-500"  label="Help & FAQ"             onPress={() => {}} />
                <SettingsRow icon="chatbubble-ellipses" iconBg="bg-blue-500/10"  iconColor="text-blue-500"  label="Contact Us"             onPress={() => {}} />
                <SettingsRow icon="document-text"       iconBg="bg-on-surface/5" iconColor="text-on-surface/40" label="Terms & Privacy Policy" onPress={() => {}} isLast />
              </ProfileSection>
            </View>

            {/* ── Account Actions ── */}
            <View className="bg-surface-container-low/30 border border-outline-variant/10 rounded-3xl overflow-hidden">
              <ProfileSection title="Account Actions">
                <SettingsRow icon="log-out" iconBg="bg-red-500/10" iconColor="text-red-500" label="Log Out"        danger onPress={() => {}} />
                <SettingsRow icon="trash"   iconBg="bg-red-500/10" iconColor="text-red-500" label="Delete Account" danger isLast onPress={() => {}} />
              </ProfileSection>
            </View>

            {/* Footer */}
            <View className="flex-row items-center justify-center pt-8 pb-4">
              <MaterialIcons name="verified" size={14} color="#FF2D55" />
              <Text className="text-on-surface/30 text-[10px] uppercase tracking-widest font-bold ml-2">APNU V1.0.0</Text>
            </View>
          </View>
        </Animated.ScrollView>
      </View>
    </View>
  );
}
