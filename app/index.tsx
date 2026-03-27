import { Button, useToast } from "heroui-native";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { toast } = useToast();

  return (
    <View className="flex-1 justify-center items-center bg-background px-4">
      <Text className="text-2xl font-bold mb-4 text-foreground">
        HeroUI Native Setup!
      </Text>
      <Text className="text-base text-foreground/50 mb-8 text-center text-balance">
        Default Expo components have been removed. You can now start building
        with HeroUI Native.
      </Text>
      <Button
        onPress={() =>
          toast.show({
            variant: "accent",
            label: "Ready to Build!",
            description: "HeroUI Native Toast is successfully configured.",
            actionLabel: "Awesome",
            onActionPress: ({ hide }) => hide(),
          })
        }
      >
        Start Building
      </Button>
    </View>
  );
}
