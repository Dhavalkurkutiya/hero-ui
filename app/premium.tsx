import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeInDown, FadeInUp } from "react-native-reanimated";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function PremiumScreen() {
    const insets = useSafeAreaInsets();

    return (
        <View className="flex-1 bg-surface">
            {/* Background Ambience */}
            <View className="absolute top-0 w-full h-[60%] opacity-20">
                <View className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] rounded-full bg-amber-500 blur-[140px]" />
            </View>

            <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 z-50">
                <Pressable onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    router.back();
                }} className="active:scale-95 transition-transform p-2 -ml-2 bg-surface/40 rounded-full backdrop-blur-md">
                    <MaterialIcons name="close" size={24} className="text-[#E5E2E3]" />
                </Pressable>
                <View className="flex-row items-center gap-1.5 px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                    <MaterialIcons name="workspace-premium" size={16} className="text-amber-400" />
                    <Text className="text-amber-400 font-extrabold text-[10px] uppercase tracking-[0.2em] italic">APNU VIP</Text>
                </View>
            </SafeAreaView>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: Math.max(insets.top + 80, 80),
                    paddingBottom: Math.max(insets.bottom + 120, 120),
                    paddingHorizontal: 24,
                }}
                className="w-full"
                showsVerticalScrollIndicator={false}
            >
                <View className="w-full max-w-[560px] self-center flex-col items-center mt-6">

                    <Animated.View entering={FadeInDown.delay(100).springify().damping(12)} className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/30 items-center justify-center mb-6 shadow-xl shadow-amber-500/20">
                        <MaterialIcons name="workspace-premium" size={40} className="text-amber-400" />
                    </Animated.View>

                    <Animated.Text entering={FadeInDown.delay(200).springify().damping(12)} className="text-center font-extrabold text-5xl italic tracking-tight text-on-surface mb-4 leading-tight">
                        Elevate Your{"\n"}
                        <Text className="text-amber-400">Experience.</Text>
                    </Animated.Text>

                    <Text className="text-on-surface/60 text-center text-[15px] leading-relaxed max-w-sm mb-12">
                        Unlock the full potential of APNU. Stand out in the circle with exclusive privileges.
                    </Text>

                    {/* Perks */}
                    <View className="w-full flex-col gap-4 mb-12">
                        {[
                            { title: "Unlimited Likes", desc: "Express interest without limits.", icon: "favorite" },
                            { title: "See Who Likes You", desc: "Instantly match with people who already like you.", icon: "visibility" },
                            { title: "Incognito Mode", desc: "Only be seen by the people you choose to like.", icon: "security" },
                            { title: "Priority Placement", desc: "Your profile shown to more people faster.", icon: "rocket-launch" },
                            { title: "Advanced Filters", desc: "Find exactly who you are looking for.", icon: "tune" },
                        ].map((perk, i) => (
                            <Animated.View entering={FadeInDown.delay(400 + i * 100).springify().damping(12)} key={i} className="flex-row items-center gap-4 bg-surface-container-high/40 border border-outline-variant/10 p-5 rounded-3xl">
                                <View className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 items-center justify-center">
                                    <MaterialIcons name={perk.icon as any} size={20} className="text-amber-400" />
                                </View>
                                <View className="flex-1 flex-col">
                                    <Text className="text-on-surface font-bold text-[15px] mb-1">{perk.title}</Text>
                                    <Text className="text-on-surface/50 text-[12px] leading-relaxed">{perk.desc}</Text>
                                </View>
                            </Animated.View>
                        ))}
                    </View>

                </View>
            </ScrollView>

            {/* Sticky Bottom Actions */}
            <View className="absolute bottom-0 w-full px-6 bg-surface/90 border-t border-outline-variant/10 backdrop-blur-xl" style={{ paddingBottom: Math.max(insets.bottom + 16, 32), paddingTop: 20 }}>
                <View className="w-full max-w-[560px] self-center flex-col items-center gap-4">
                    <Pressable 
                        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)}
                        className="w-full py-5 rounded-full bg-amber-500 flex-row items-center justify-center gap-2 active:scale-95 transition-transform shadow-xl shadow-amber-500/30"
                    >
                        <Text className="font-extrabold text-[14px] uppercase tracking-[0.2em] text-surface">
                            Subscribe • ₹999/mo
                        </Text>
                    </Pressable>
                    <Text className="text-on-surface/40 text-[10px] text-center font-medium leading-relaxed max-w-xs">
                        Recurring billing, cancel anytime. By continuing, you agree to our Terms and Premium User Policy.
                    </Text>
                </View>
            </View>
        </View>
    );
}
