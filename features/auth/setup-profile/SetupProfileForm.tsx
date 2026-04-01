import { MaterialIcons } from "@expo/vector-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, TextInput, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import * as z from "zod";

const setupSchema = z.object({
    bio: z.string().min(10, "Bio must be at least 10 characters long").max(300, "Bio is too long"),
    photos: z.array(z.string()).min(3, "Please select at least 3 photos"),
});

type SetupFormData = z.infer<typeof setupSchema>;

export function SetupProfileForm() {
    const { control, handleSubmit, setValue, watch, formState: { errors } } = useForm<SetupFormData>({
        resolver: zodResolver(setupSchema),
        defaultValues: {
            bio: "",
            photos: ["main_photo_id"], // Mocking 1 uploaded photo
        }
    });

    const photos = watch("photos");
    const bio = watch("bio");

    const togglePhoto = (id: string) => {
        Haptics.selectionAsync();
        if (photos.includes(id)) {
            setValue("photos", photos.filter(p => p !== id), { shouldValidate: true });
        } else {
            if (photos.length < 6) setValue("photos", [...photos, id], { shouldValidate: true });
        }
    };

    const onSubmit = (data: SetupFormData) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        console.log("Form valid:", data);
        router.replace("/(tabs)/explore" as any);
    };

    return (
        <View className="flex-col gap-8 w-full">
            {/* Photos Section */}
            <Animated.View entering={FadeInDown.delay(400).springify().damping(12)}>
                <Text className="text-on-surface font-semibold text-lg mb-4">Your Best Angles</Text>
                <View className="flex-row items-start flex-wrap gap-2 w-full justify-between">
                    {[0, 1, 2, 3, 4, 5].map((idx) => {
                        const photoId = `mock_img_${idx}`;
                        // Let's pretend index 0 is always pre-selected as main to illustrate
                        const isSelected = idx === 0 || photos.includes(photoId);
                        return (
                            <Pressable
                                key={idx}
                                onPress={() => idx !== 0 && togglePhoto(photoId)}
                                className={`w-[31%] aspect-[3/4] rounded-2xl border-2 border-dashed items-center justify-center overflow-hidden active:scale-95 transition-transform ${isSelected ? 'border-primary-container bg-primary-container/5' : 'border-outline-variant/30 bg-surface-container-low'}`}
                            >
                                <MaterialIcons name={isSelected ? (idx === 0 ? "add-a-photo" : "check") : "add"} size={24} className={isSelected ? 'text-primary-container mb-2' : 'text-on-surface/30'} />
                                {idx === 0 && <Text className="text-[10px] text-primary-container font-extrabold uppercase tracking-widest">Main</Text>}
                            </Pressable>
                        )
                    })}
                </View>
                {errors.photos && <Text className="text-red-500 text-[11px] font-bold mt-2 ml-1">{errors.photos.message}</Text>}
                <Text className="text-on-surface/40 text-[11px] mt-4 font-medium uppercase tracking-widest text-center">Add at least 3 photos to continue.</Text>
            </Animated.View>

            {/* Bio Section */}
            <Animated.View entering={FadeInDown.delay(500).springify().damping(12)}>
                <Text className="text-on-surface font-semibold text-lg mb-4">The Bio</Text>
                <Controller
                    control={control}
                    name="bio"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <>
                            <TextInput
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder="I'm looking for someone who..."
                                placeholderTextColor="rgba(229,226,227,0.3)"
                                multiline
                                numberOfLines={4}
                                className={`bg-surface-container-high/50 border rounded-2xl p-4 text-on-surface text-[15px] h-32 ${errors.bio ? 'border-red-500/50' : 'border-outline-variant/20'}`}
                                textAlignVertical="top"
                            />
                            {errors.bio && <Text className="text-red-500 text-[11px] font-bold mt-2 ml-1">{errors.bio.message}</Text>}
                        </>
                    )}
                />
            </Animated.View>

            {/* Basic Details */}
            <Animated.View entering={FadeInDown.delay(600).springify().damping(12)}>
                <Text className="text-on-surface font-semibold text-lg mb-4">The Essentials</Text>
                <View className="flex-col gap-3">
                    <Pressable className="flex-row items-center justify-between bg-surface-container-high/50 border border-outline-variant/20 rounded-2xl p-4 active:scale-95 transition-transform">
                        <View className="flex-row gap-3 items-center">
                            <MaterialIcons name="height" size={20} className="text-on-surface/50" />
                            <Text className="text-on-surface/80 font-medium">Height</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Text className="text-on-surface font-bold text-[13px] uppercase tracking-widest">Add</Text>
                            <MaterialIcons name="chevron-right" size={20} className="text-on-surface/40" />
                        </View>
                    </Pressable>
                </View>
            </Animated.View>

            {/* Action */}
            <Animated.View entering={FadeInDown.delay(700).springify().damping(12)}>
                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    className={`w-full py-4 mt-6 rounded-2xl flex-row items-center justify-center gap-3 active:scale-95 transition-transform shadow-lg ${photos.length >= 3 && bio.length >= 10 ? 'bg-primary-container shadow-primary-container/20' : 'bg-surface-container-highest border border-outline-variant/10 opacity-70'}`}
                >
                    <Text className={`font-bold text-[14px] uppercase tracking-[0.2em] ${photos.length >= 3 && bio.length >= 10 ? 'text-white' : 'text-on-surface/50'}`}>
                        Enter The Circle
                    </Text>
                    <MaterialIcons name="arrow-forward" size={20} color={photos.length >= 3 && bio.length >= 10 ? 'white' : 'rgba(229,226,227,0.5)'} />
                </Pressable>
            </Animated.View>
        </View>
    );
}
