import { Text, View, Platform, ScrollView, KeyboardAvoidingView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SignUpForm } from "@/features/auth/sign-up/signup-from";
import { Surface } from "heroui-native";

export default function SignUpRoute() {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView 
      className="flex-1 bg-background md:bg-surface-secondary/30" 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView 
        contentContainerStyle={{ 
          flexGrow: 1, 
          justifyContent: "center",
          paddingTop: Math.max(insets.top + 20, 20),
          paddingBottom: Math.max(insets.bottom + 20, 20),
          paddingHorizontal: 20
        }}
        className="w-full"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Surface 
          variant="default"
          className="w-full max-w-[560px] self-center md:shadow-xl md:rounded-3xl md:border md:border-border md:p-12 p-2 bg-transparent md:bg-surface"
        >
          <View className="items-center mb-1">
            <Text className="text-foreground text-3xl font-extrabold text-center mb-2">
              Create an Account
            </Text>
            <Text className="text-foreground/60 text-sm text-center px-4">
              Sign up to get started and explore your creative journey.
            </Text>
          </View>
          <SignUpForm />
        </Surface>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

