import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function SettingsScreen() {
    const insets = useSafeAreaInsets();

    const [notifications, setNotifications] = useState(true);
    const [readReceipts, setReadReceipts] = useState(true);
    const [incognito, setIncognito] = useState(false);

    const primaryContainer = "#FF2D55";

    return (
        <View className="flex-1 bg-surface">
            <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 bg-surface/90 border-b border-outline-variant/20 z-50 backdrop-blur-xl">
                <Pressable onPress={() => router.back()} className="active:scale-95 transition-transform p-2 -ml-2">
                    <MaterialIcons name="arrow-back" size={24} className="text-[#E5E2E3]/70" />
                </Pressable>
                <Text className="font-extrabold text-lg tracking-tight text-on-surface">Settings</Text>
                <View className="w-10" />
            </SafeAreaView>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: Math.max(insets.top + 80, 80),
                    paddingBottom: Math.max(insets.bottom + 80, 80),
                    paddingHorizontal: 24,
                }}
                className="w-full"
                showsVerticalScrollIndicator={false}
            >
                <View className="w-full max-w-[560px] self-center flex-col gap-8">

                    {/* Discovery Preferences */}
                    <View>
                        <Text className="text-primary-container font-bold text-[11px] uppercase tracking-widest mb-4 ml-2">Discovery</Text>
                        <View className="bg-surface-container-high/50 border border-outline-variant/20 rounded-3xl overflow-hidden">
                            <Pressable className="flex-row items-center justify-between p-4 border-b border-outline-variant/10 active:bg-surface-container-highest">
                                <Text className="text-on-surface/90 text-[15px] font-medium">Location</Text>
                                <View className="flex-row items-center gap-2">
                                    <Text className="text-on-surface/60 text-[14px]">New Delhi</Text>
                                    <MaterialIcons name="chevron-right" size={20} className="text-on-surface/40" />
                                </View>
                            </Pressable>
                            <View className="flex-col p-4 border-b border-outline-variant/10">
                                <View className="flex-row justify-between items-center mb-2">
                                    <Text className="text-on-surface/90 text-[15px] font-medium">Maximum Distance</Text>
                                    <Text className="text-on-surface font-bold text-[14px]">10 km</Text>
                                </View>
                                {/* Visual mock of a slider */}
                                <View className="w-full h-1 bg-surface-container-highest rounded-full mt-2">
                                    <View className="w-1/3 h-full bg-primary-container rounded-full relative">
                                        <View className="absolute right-0 top-1/2 -mt-2.5 -mr-2.5 w-5 h-5 rounded-full bg-white shadow-sm border border-outline-variant/10" />
                                    </View>
                                </View>
                            </View>
                            <View className="flex-col p-4">
                                <View className="flex-row justify-between items-center mb-2">
                                    <Text className="text-on-surface/90 text-[15px] font-medium">Age Range</Text>
                                    <Text className="text-on-surface font-bold text-[14px]">20 - 24</Text>
                                </View>
                                {/* Visual mock of a double slider */}
                                <View className="w-full h-1 bg-surface-container-highest rounded-full mt-2">
                                    <View className="w-1/2 h-full bg-primary-container rounded-full relative translate-x-[20%]">
                                        <View className="absolute left-0 top-1/2 -mt-2.5 -ml-2.5 w-5 h-5 rounded-full bg-white shadow-sm border border-outline-variant/10" />
                                        <View className="absolute right-0 top-1/2 -mt-2.5 -mr-2.5 w-5 h-5 rounded-full bg-white shadow-sm border border-outline-variant/10" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Privacy & Notifications */}
                    <View>
                        <Text className="text-primary-container font-bold text-[11px] uppercase tracking-widest mb-4 ml-2">Privacy & App</Text>
                        <View className="bg-surface-container-high/50 border border-outline-variant/20 rounded-3xl overflow-hidden">
                            <View className="flex-row items-center justify-between p-4 border-b border-outline-variant/10">
                                <Text className="text-on-surface/90 text-[15px] font-medium">Push Notifications</Text>
                                <Switch
                                    value={notifications}
                                    onValueChange={setNotifications}
                                    trackColor={{ false: "#3A3A3C", true: primaryContainer }}
                                    thumbColor="#FFFFFF"
                                />
                            </View>
                            <View className="flex-row items-center justify-between p-4 border-b border-outline-variant/10">
                                <Text className="text-on-surface/90 text-[15px] font-medium">Read Receipts</Text>
                                <Switch
                                    value={readReceipts}
                                    onValueChange={setReadReceipts}
                                    trackColor={{ false: "#3A3A3C", true: primaryContainer }}
                                    thumbColor="#FFFFFF"
                                />
                            </View>
                            <View className="flex-row items-center justify-between p-4">
                                <View className="flex-col">
                                    <View className="flex-row gap-2 items-center">
                                        <Text className="text-on-surface/90 text-[15px] font-medium">Incognito Mode</Text>
                                        <MaterialIcons name="workspace-premium" size={14} className="text-amber-400" />
                                    </View>
                                    <Text className="text-on-surface/40 text-[11px] mt-1">Hide your profile unless you like them.</Text>
                                </View>
                                <Switch
                                    value={incognito}
                                    onValueChange={setIncognito}
                                    trackColor={{ false: "#3A3A3C", true: primaryContainer }}
                                    thumbColor="#FFFFFF"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Account Actions */}
                    <View className="mt-4">
                        <Pressable className="w-full bg-surface-container-high/50 border border-outline-variant/20 py-4 rounded-3xl items-center active:bg-surface-container-highest mb-4">
                            <Text className="text-on-surface font-bold text-[14px]">Log Out</Text>
                        </Pressable>
                        <Pressable className="w-full bg-red-500/10 border border-red-500/20 py-4 rounded-3xl items-center active:bg-red-500/20">
                            <Text className="text-red-500 font-bold text-[14px]">Delete Account</Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}
