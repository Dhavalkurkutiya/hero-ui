import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LoginForm as SignInForm } from "@/features/auth/sign-in/signin-from";

export default function SignInRoute() {
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
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center mb-2">
          <Text className="text-foreground text-2xl font-extrabold text-center mb-1.5">
            Welcome Back!
          </Text>
          <Text className="text-foreground/60 text-sm text-center px-4">
            Sign in to access your account and continue your journey.
          </Text>
        </View>
        <SignInForm />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
