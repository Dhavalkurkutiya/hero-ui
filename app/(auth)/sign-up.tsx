import { Text, View, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SignUpForm } from "@/features/auth/sign-up/signup-from";

export default function SignUpRoute() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-background" 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: "center",
          paddingTop: Math.max(insets.top + 20, 40),
          paddingBottom: Math.max(insets.bottom + 20, 20),
          paddingHorizontal: 20
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center mb-1">
          <Text className="text-foreground text-2xl font-extrabold text-center mb-1.5">
            Create an Account
          </Text>
          <Text className="text-foreground/60 text-sm text-center px-4">
            Sign up to get started and explore your creative journey.
          </Text>
        </View>
        <SignUpForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
