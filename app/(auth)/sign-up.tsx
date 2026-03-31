import { Text, View, Platform, ScrollView, KeyboardAvoidingView, Pressable } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { SignUpForm } from "@/features/auth/sign-up/signup-from";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignUpRoute() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-surface" 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 bg-surface/90 border-b border-outline-variant/20 z-50">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="verified" size={24} color="#FF2D55" />
          <Text className="font-extrabold italic text-2xl uppercase text-[#E5E2E3]">
            APNU
          </Text>
        </View>
        <Pressable onPress={() => router.back()} className="active:scale-95 transition-transform p-2">
          <MaterialIcons name="close" size={24} className="text-[#E5E2E3]/70" />
        </Pressable>
      </SafeAreaView>

      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: "center",
          paddingTop: Math.max(insets.top + 80, 80),
          paddingBottom: Math.max(insets.bottom + 40, 40),
          paddingHorizontal: 24
        }}
        className="w-full"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="w-full max-w-[560px] self-center md:shadow-xl md:rounded-3xl md:border md:border-outline-variant/20 md:p-12 p-6 bg-surface-container-lowest/50 rounded-3xl border border-outline-variant/10 shadow-2xl">
          <View className="items-center mb-6">
            <Text className="text-on-surface text-3xl font-extrabold text-center mb-2 font-headline tracking-tight">
              Create an Account
            </Text>
            <Text className="text-on-surface/60 text-[13px] text-center px-4 font-body leading-relaxed">
              Sign up to get started and unlock the exclusive digital concierge ecosystem of APNU.
            </Text>
          </View>
          <SignUpForm />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
