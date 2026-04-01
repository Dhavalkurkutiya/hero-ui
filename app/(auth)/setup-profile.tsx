import { SetupProfileForm } from "@/features/auth/setup-profile/SetupProfileForm";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from "react-native";
import Animated, { FadeIn, FadeInDown } from "react-native-reanimated";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function SetupProfileRoute() {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-surface"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 bg-surface/90 border-b border-outline-variant/20 z-50 backdrop-blur-xl">
                <Pressable onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    router.back();
                }} className="active:scale-95 transition-transform p-2 -ml-2">
                    <MaterialIcons name="arrow-back" size={24} className="text-[#E5E2E3]/70" />
                </Pressable>
                <Animated.View entering={FadeIn.delay(200)} className="flex-row items-center gap-2">
                    <MaterialIcons name="verified" size={20} color="#FF2D55" />
                    <Text className="font-extrabold italic text-xl uppercase text-[#E5E2E3]">
                        APNU
                    </Text>
                </Animated.View>
                <View className="w-10" />
            </SafeAreaView>

            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: Math.max(insets.top + 80, 80),
                    paddingBottom: Math.max(insets.bottom + 40, 40),
                    paddingHorizontal: 24
                }}
                className="w-full"
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View className="w-full max-w-[560px] self-center md:shadow-xl md:rounded-3xl md:border md:border-outline-variant/20 md:p-12 pb-10">
                    <Animated.View entering={FadeInDown.delay(100).springify().damping(12)} className="items-start mb-8">
                        <Text className="text-primary-container text-[11px] uppercase tracking-widest font-bold mb-3">Step 3 of 3</Text>
                        <Text className="text-on-surface text-4xl font-extrabold mb-3 font-headline tracking-tight">
                            Curate Your Profile
                        </Text>
                        <Text className="text-on-surface/60 text-[14px] font-body leading-relaxed">
                            Upload your best photos and tell the circle a bit about yourself. Authenticity is premium.
                        </Text>
                    </Animated.View>

                    <Animated.View entering={FadeInDown.delay(300).springify().damping(12)}>
                        <SetupProfileForm />
                    </Animated.View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
