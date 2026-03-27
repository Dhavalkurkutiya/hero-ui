import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ef4444", // Modern matching branding (Red-500)
        tabBarInactiveTintColor: isDark ? "#666666" : "#999999",
        tabBarStyle: {
          backgroundColor: isDark ? "#09090b" : "#ffffff", // Pure matching background
          borderTopWidth: 1,
          borderTopColor: isDark ? "#27272a" : "#f4f4f5",
          height: 60 + insets.bottom,
          paddingTop: 10,
          paddingBottom: insets.bottom,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      {/* 1 — Home */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`items-center justify-center rounded-2xl w-12 h-12 ${
                focused ? "bg-red-500/10" : ""
              }`}
            >
              <Ionicons
                name={focused ? "flame" : "flame-outline"}
                size={28}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* 2 — Explore (hidden from tab bar) */}
      <Tabs.Screen
        name="explore"
        options={{ href: null }}
      />

      {/* 3 — Messages */}
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`items-center justify-center rounded-2xl w-12 h-12 ${
                focused ? "bg-red-500/10" : ""
              }`}
            >
              <Ionicons
                name={focused ? "chatbubbles" : "chatbubbles-outline"}
                size={26}
                color={color}
              />
            </View>
          ),
        }}
      />

      {/* 4 — Profile (last) */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              className={`items-center justify-center rounded-2xl w-12 h-12 ${
                focused ? "bg-red-500/10" : ""
              }`}
            >
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={26}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
