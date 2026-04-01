import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import React, { useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Animated, { BounceIn, FadeIn, FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MatchScreen() {
    useEffect(() => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }, []);
    return (
        <Animated.View entering={FadeIn.duration(400)} className="flex-1 bg-surface justify-between items-center relative">
            {/* Background Effect */}
            <Animated.View entering={FadeIn.delay(300).duration(800)} className="absolute inset-0 items-center justify-center opacity-40">
                <View className="w-[500px] h-[500px] rounded-full bg-primary-container blur-[120px] absolute" />
            </Animated.View>

            <SafeAreaView edges={['top', 'bottom']} className="flex-1 w-full flex-col justify-between p-6 z-10">

                {/* Top */}
                <View className="w-full flex-row items-center justify-between">
                    <View className="w-10" />
                    <Animated.View entering={FadeInDown.delay(100).springify()} className="flex-row items-center gap-2">
                        <MaterialIcons name="verified" size={24} color="#FF2D55" />
                        <Text className="font-extrabold italic text-2xl uppercase text-[#E5E2E3]">
                            APNU
                        </Text>
                    </Animated.View>
                    <Pressable onPress={() => router.back()} className="active:scale-95 p-2">
                        <MaterialIcons name="close" size={28} className="text-on-surface/50" />
                    </Pressable>
                </View>

                {/* Center Canvas */}
                <View className="flex-col items-center justify-center w-full mt-10">
                    <Animated.Text entering={FadeInDown.delay(200).springify().damping(12)} className="text-primary-container text-[12px] uppercase tracking-[0.3em] font-extrabold mb-4">
                        Mutual Connection
                    </Animated.Text>
                    <Animated.Text entering={FadeInDown.delay(300).springify().damping(12)} className="font-extrabold text-6xl text-on-surface tracking-tighter italic shadow-2xl">
                        IT'S A SPARK!
                    </Animated.Text>
                    <Animated.Text entering={FadeInDown.delay(400).springify().damping(12)} className="text-on-surface/60 text-base mt-2">
                        You and Zara have liked each other.
                    </Animated.Text>

                    {/* Avatars */}
                    <View className="flex-row items-center justify-center mt-12 mb-8">
                        <Animated.View entering={BounceIn.delay(500).springify().damping(14)} className="w-32 h-32 rounded-full border-[4px] border-surface overflow-hidden shadow-2xl shadow-black z-10 -mr-6">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyHbAIgS8H3h44TaFEfgnv4PXWvTlTb_nQZ5PloDmLtotjV9RpFZb2K81PDPce0wFJfAjdFDwLcxQ_FrfcLH9KdieGXb7eBr4370GJL38462cgJncecQP9KPmkCWKjhtF9TMDD7s9V0jFwU6Z6BWMsG9YrgZvkhqp0DzQTt4YWRVesvhSFgQLEVlIOqdi7tO5TmnlUAV1FPCzdlD8SZrDVMGm1Z2sIjaewrEbgiPfqFdHmZJ2E7pqtgZNFJzGtG3TAvkOXi62SpM" }}
                                className="w-full h-full"
                            />
                        </Animated.View>
                        <Animated.View entering={BounceIn.delay(700).springify().damping(14)} className="w-32 h-32 rounded-full border-[4px] border-surface overflow-hidden shadow-2xl shadow-primary-container/20">
                            <Image
                                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMpw4Tgh5Dr2xIIMHS9sO2RIU60egy6IHVeA_i9U82V7NsxZ33n-GbYyy9kCsQIzYxhHjAv41eBrCTmrBnupMacOjx8R56gCfSNoPX4htAJgWJf-lVuyhQIIsXKAvwH4HHZYOcUhqrtrz98pI32OnQj8M-BqsP9SPabQjJmWVGZsnDsrTru6tXv7d1T1usTqP8jaPm1NKtFog1V2kqmZdW3NGVVp0OP72SKZDLg6ZN4TXAl-3JQMw_ED7KciyRYvmkr74kD27hLQw" }}
                                className="w-full h-full"
                            />
                        </Animated.View>
                    </View>
                </View>

                {/* Bottom Actions */}
                <Animated.View entering={FadeInDown.delay(900).springify().damping(12)} className="flex-col gap-4 w-full items-center mb-6">
                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                            router.replace('/chat/1' as any);
                        }}
                        className="w-full max-w-sm py-5 rounded-2xl bg-primary-container flex-row justify-center items-center gap-3 active:scale-95 shadow-xl shadow-primary-container/30"
                    >
                        <MaterialIcons name="send" size={20} color="white" />
                        <Text className="text-white font-extrabold text-[14px] uppercase tracking-[0.2em]">
                            Send a Message
                        </Text>
                    </Pressable>

                    <Pressable
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                            router.back();
                        }}
                        className="w-full max-w-sm py-5 rounded-2xl bg-surface-container-highest border border-outline-variant/20 flex-row justify-center items-center active:scale-95"
                    >
                        <Text className="text-on-surface/80 font-bold text-[14px] uppercase tracking-[0.1em]">
                            Keep Exploring
                        </Text>
                    </Pressable>
                </Animated.View>
            </SafeAreaView>
        </Animated.View>
    );
}
