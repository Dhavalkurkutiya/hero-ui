import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function EditProfileScreen() {
    const insets = useSafeAreaInsets();
    const [bio, setBio] = useState("I'm an interior designer and an avid art collector. Looking for someone who appreciates the fine details in life.");

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-surface"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 bg-surface/90 border-b border-outline-variant/20 z-50 backdrop-blur-xl">
                <Pressable onPress={() => router.back()} className="active:scale-95 transition-transform p-2 -ml-2">
                    <MaterialIcons name="arrow-back" size={24} className="text-[#E5E2E3]/70" />
                </Pressable>
                <Text className="font-extrabold text-lg tracking-tight text-on-surface">Edit Profile</Text>
                <Pressable onPress={() => router.back()} className="active:scale-95">
                    <Text className="text-primary-container font-bold text-[14px] uppercase tracking-widest">Save</Text>
                </Pressable>
            </SafeAreaView>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: Math.max(insets.top + 80, 80),
                    paddingBottom: Math.max(insets.bottom + 40, 40),
                    paddingHorizontal: 24,
                    gap: 32
                }}
                className="w-full"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View className="w-full max-w-[560px] self-center">
                    {/* Photos */}
                    <View>
                        <Text className="text-on-surface font-semibold text-lg mb-4">Photos</Text>
                        <View className="flex-row items-start flex-wrap gap-2 w-full justify-between">
                            {/* Mock pre-filled photos */}
                            {[1, 2, 3, 4, 5, 6].map((idx) => (
                                <View key={idx} className="w-[31%] aspect-[3/4] rounded-2xl bg-surface-container-high border border-outline-variant/10 items-center justify-center overflow-hidden mb-2 relative">
                                    {(idx === 1 || idx === 2 || idx === 3) ? (
                                        <>
                                            <View className="w-full h-full bg-surface-container-highest" />
                                            <View className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-surface/80 items-center justify-center active:scale-95">
                                                <MaterialIcons name="close" size={14} className="text-on-surface" />
                                            </View>
                                        </>
                                    ) : (
                                        <Pressable className="w-full h-full items-center justify-center border-2 border-dashed border-outline-variant/30 active:scale-95">
                                            <MaterialIcons name="add" size={24} className="text-on-surface/30" />
                                        </Pressable>
                                    )}
                                    {idx === 1 && <View className="absolute top-2 left-2 px-2 py-0.5 bg-primary-container rounded-sm"><Text className="text-[8px] text-white font-bold uppercase tracking-widest">Main</Text></View>}
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Bio Sections */}
                    <View className="mt-4">
                        <Text className="text-on-surface font-semibold text-lg mb-4">About Me</Text>
                        <TextInput
                            value={bio}
                            onChangeText={setBio}
                            multiline
                            numberOfLines={4}
                            className="bg-surface-container-high/50 border border-outline-variant/20 rounded-2xl p-4 text-on-surface text-[15px] leading-relaxed h-32 pt-4"
                            textAlignVertical="top"
                        />
                    </View>

                    {/* My Details */}
                    <View className="mt-8">
                        <Text className="text-on-surface font-semibold text-lg mb-4">My Details</Text>
                        <View className="flex-col bg-surface-container-high/50 border border-outline-variant/20 rounded-3xl overflow-hidden">
                            {[
                                { label: "Height", value: "180 cm", icon: "height" },
                                { label: "Job", value: "Product Designer", icon: "work" },
                                { label: "Education", value: "NID Ahmedabad", icon: "school" },
                                { label: "Zodiac", value: "Leo", icon: "auto-awesome" }
                            ].map((item, i) => (
                                <Pressable key={item.label} className={`flex-row items-center justify-between p-4 bg-transparent active:bg-surface-container-highest ${i !== 3 ? 'border-b border-outline-variant/10' : ''}`}>
                                    <View className="flex-row gap-3 items-center">
                                        <MaterialIcons name={item.icon as any} size={20} className="text-on-surface/50" />
                                        <Text className="text-on-surface/80 font-medium">{item.label}</Text>
                                    </View>
                                    <View className="flex-row items-center gap-2">
                                        <Text className="text-on-surface/60 font-medium text-[13px]">{item.value}</Text>
                                        <MaterialIcons name="chevron-right" size={20} className="text-on-surface/40" />
                                    </View>
                                </Pressable>
                            ))}
                        </View>
                    </View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
