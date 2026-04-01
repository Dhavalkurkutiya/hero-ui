import { KeyboardAvoidingView, Platform, ScrollView, Text, View, Pressable, Image } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { LoginForm as SignInForm } from "@/features/auth/sign-in/signin-from";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SignInRoute() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-surface">
      {/* Full Screen Cinematic Background */}
      <Image 
        source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBexzUZZoooZmbCnJ_1XQn_1KY9R7pBKL4HXOGXlq9ViMV5jSVjw1rRd_7TwaEJh8ohpVEWmvQofo2t4AiiNPLFwKA-7BlUvLxuxDgS9Q_bG57pN2L0rj-jLbzNLkpXkKDac6gaUyQ8z9ctIMc_kIro0WHGPNBQqK-2Ydt_mbli05_UpqK9V-6lFDo0whWDKNI9aWAxREILAyL30GM-yb8Qbn10SMBftaoDrsGPTJ1m4C626pMtb6rjbGX-qswcjcvl3M0hOD_ay0Y" }}
        className="absolute inset-0 w-full h-full opacity-50"
        resizeMode="cover"
      />
      <View className="absolute inset-0 bg-surface/30" />
      <View className="absolute bottom-0 w-full h-[80%] bg-gradient-to-t from-surface via-surface/90 to-transparent" />

      {/* Top App Bar */}
      <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 z-50">
        <View className="flex-row items-center gap-2 shadow-2xl">
          <MaterialIcons name="verified" size={24} color="#FF2D55" />
          <Text className="font-extrabold italic text-2xl uppercase text-white drop-shadow-md">
            APNU
          </Text>
        </View>
        <Pressable onPress={() => router.back()} className="active:scale-95 transition-transform p-2 bg-surface/40 backdrop-blur-md rounded-full border border-white/20">
          <MaterialIcons name="close" size={24} className="text-white" />
        </Pressable>
      </SafeAreaView>

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            paddingTop: Math.max(insets.top + 80, 80),
          }}
          className="w-full"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Glassmorphic Bottom Form Container */}
          <View 
            className="w-full max-w-[560px] self-center md:shadow-xl md:rounded-3xl md:border md:border-outline-variant/20 md:p-12 p-8 pt-6 bg-surface-container-lowest/80 backdrop-blur-3xl rounded-t-[40px] border-t border-x border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] flex-col" 
            style={{ paddingBottom: Math.max(insets.bottom + 40, 40) }}
          >
            {/* Drawer Handle aesthetic */}
            <View className="w-12 h-1.5 bg-outline-variant/30 rounded-full self-center mb-8" />
            
            <View className="items-center mb-8">
              <Text className="text-on-surface text-[32px] font-extrabold text-center mb-2 font-headline tracking-tighter shadow-sm">
                Welcome Back
              </Text>
              <Text className="text-on-surface/60 text-[13px] text-center px-6 font-body leading-relaxed max-w-[300px]">
                Sign in to step inside the exclusive digital concierge of APNU.
              </Text>
            </View>
            <SignInForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
