import React from "react";
import { View, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DiscoveryHeader } from "./components/DiscoveryHeader";
import { DiscoverySidebar } from "./components/DiscoverySidebar";
import { DiscoveryCard } from "./components/DiscoveryCard";

export default function DiscoveryScreen() {
  const insets = useSafeAreaInsets();
  const { width } = Dimensions.get("window");

  // Simple responsive check for the right-side trending bar
  const isDesktop = width >= 1024;

  return (
    <View className="flex-1 bg-surface">
      <DiscoveryHeader topInset={insets.top} />

      {/* Main Canvas: Discovery Deck */}
      <View className="flex-1 items-center justify-center px-4" style={{ paddingTop: insets.top + 60 }}>
        {/* Desktop Floating Sidebar */}
        {isDesktop && <DiscoverySidebar />}

        {/* Profile Card Container */}
        <DiscoveryCard />
      </View>
    </View>
  );
}
