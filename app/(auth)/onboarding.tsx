import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function OnboardingScreen() {
  return (
    <View className="flex-1 bg-surface justify-between items-center">
      {/* Top App Bar Mock */}
      <SafeAreaView edges={['top']} className="w-full flex-row justify-between items-center px-8 h-20 z-50">
        <View className="flex-row items-center gap-2">
          <MaterialIcons
            name="verified"
            size={24}
            className="text-primary-container"
          />
          <Text className="font-extrabold italic text-2xl uppercase text-on-surface">
            APNU
          </Text>
        </View>
        <View className="flex-row gap-8 items-center hidden md:flex">
          <Text className="text-[12px] uppercase tracking-[0.2em] text-on-surface/60 font-medium">
            Our Values
          </Text>
          <Text className="text-[12px] uppercase tracking-[0.2em] text-on-surface/60 font-medium">
            Safety
          </Text>
        </View>
      </SafeAreaView>

      {/* Centered Branding and CTAs */}
      <ScrollView 
        className="w-full" 
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 32, paddingVertical: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Asymmetrical Typography Cluster */}
        <View className="mb-14 items-center space-y-4 w-full">
          <View className="px-5 py-2 bg-primary-container/10 border border-primary-container/20 rounded-full mb-8">
            <Text className="text-[10px] uppercase tracking-[0.3em] text-primary-container font-extrabold">
              Exclusively for Campus Elite
            </Text>
          </View>
          <Text className="font-extrabold text-5xl md:text-6xl italic text-on-surface text-center leading-tight">
            BEYOND{"\n"}
            <Text className="text-secondary-container">MATCHING.</Text>
          </Text>
          <Text className="text-on-surface/60 text-lg md:text-xl font-medium tracking-wide max-w-sm mt-6 text-center">
            The Premium Campus Connection
          </Text>
        </View>

        {/* Action Cluster */}
        <View className="flex-col gap-4 items-center w-full max-w-sm">
          {/* Royal Button: Join the Circle */}
          <Pressable
            onPress={() => router.push("/verify-college" as any)}
            className="w-full py-4 rounded-2xl bg-primary-container flex-row items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            <Text className="font-bold text-[14px] uppercase tracking-[0.2em] text-white">
              Join the Circle
            </Text>
            <MaterialIcons name="arrow-forward" size={20} color="white" />
          </Pressable>

          {/* Secondary Action */}
          <Link href={"/sign-in" as any} asChild>
            <Pressable className="w-full py-4 border border-outline-variant/30 bg-surface-container-low rounded-2xl active:scale-95 transition-transform">
              <Text className="text-[12px] uppercase tracking-[0.2em] text-on-surface/80 text-center font-bold">
                Welcome Back{" "}
                <Text className="text-on-surface font-extrabold ml-2">Login</Text>
              </Text>
            </Pressable>
          </Link>
        </View>

        {/* Bento-style Feature Snippet (Micro) */}
        <View className="mt-12 flex-row gap-4 opacity-80 w-full justify-center max-w-sm">
          <View className="flex-row items-center gap-3 p-4 bg-surface-container-high border border-outline-variant/10 rounded-2xl flex-1 justify-center">
            <MaterialIcons
              name="lock"
              size={16}
              className="text-primary-fixed-dim"
            />
            <Text className="text-[10px] uppercase tracking-[0.2em] text-on-surface font-extrabold">
              Verified Only
            </Text>
          </View>
          <View className="flex-row items-center gap-3 p-4 bg-surface-container-high border border-outline-variant/10 rounded-2xl flex-1 justify-center">
            <MaterialIcons
              name="security"
              size={16}
              className="text-secondary"
            />
            <Text className="text-[10px] uppercase tracking-[0.2em] text-on-surface font-extrabold">
              Private Club
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer: Editorial Precision */}
      <SafeAreaView edges={['bottom']} className="w-full px-8 py-8 flex-col justify-between items-center border-t border-outline-variant/10 bg-surface">
        <View className="mb-4">
          <Text className="text-[10px] uppercase tracking-[0.1em] text-on-surface/40 font-bold">
            © 2024 APNU Technologies Private Limited
          </Text>
        </View>
        <View className="flex-row gap-6">
          <Text className="text-[10px] uppercase tracking-[0.1em] text-on-surface/60 font-bold">
            Privacy Policy
          </Text>
          <Text className="text-[10px] uppercase tracking-[0.1em] text-on-surface/60 font-bold">
            Terms of Service
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
