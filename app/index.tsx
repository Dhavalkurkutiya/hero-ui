import { View, Text } from 'react-native';
import { Button } from 'heroui-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-background px-4">
      <Text className="text-2xl font-bold mb-4 text-foreground">HeroUI Native Setup!</Text>
      <Text className="text-base text-foreground/50 mb-8 text-center text-balance">
        Default Expo components have been removed. You can now start building with HeroUI Native.
      </Text>
      <Button onPress={() => alert('Pressed!')}>Start Building</Button>
    </View>
  );
}
