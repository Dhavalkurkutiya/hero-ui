import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-background" style={{ paddingTop: insets.top }}>
      <Text className="text-3xl font-extrabold text-foreground mx-5 mt-5">Profile</Text>
      <View className="flex-1 items-center justify-center">
        <Text className="text-foreground/50 text-base">Register or Log in to view profile details.</Text>
      </View>
    </View>
  );
}
