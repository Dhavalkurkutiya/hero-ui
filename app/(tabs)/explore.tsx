import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import {
  EXPLORE_PROFILES,
  FILTER_CATEGORIES,
} from "../../features/explore/data/explore";
import { ExploreCard } from "../../features/explore/components/ExploreCard";

const StyledIonicons = withUniwind(Ionicons);

export default function ExploreScreen() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = EXPLORE_PROFILES.filter((p) => {
    const matchSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchFilter =
      activeFilter === "all" ||
      (activeFilter === "online" && p.isOnline) ||
      (activeFilter === "verified" && p.isVerified) ||
      activeFilter === "nearby" ||
      activeFilter === "new";

    return matchSearch && matchFilter;
  });

  // Split into two columns
  const leftCol = filtered.filter((_, i) => i % 2 === 0);
  const rightCol = filtered.filter((_, i) => i % 2 !== 0);

  return (
    <View className="flex-1 bg-background lg:bg-surface-secondary/30">
      <View className="flex-1 max-w-[800px] w-full self-center bg-background md:shadow-xl md:border-x md:border-border" style={{ paddingTop: insets.top }}>

        {/* ── Header ── */}
        <View className="px-5 pt-3 pb-2">
          <Text className="text-foreground text-2xl font-extrabold tracking-tight mb-3">
            Explore
          </Text>

          {/* Search Bar */}
          <View className="flex-row items-center bg-surface border border-border rounded-2xl px-3 py-2.5 gap-2 mb-3 shadow-sm">
            <StyledIonicons name="search" size={18} className="text-foreground/40" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search name or interest..."
              placeholderTextColor="rgba(120,120,120,0.6)"
              className="flex-1 text-foreground text-sm"
            />
            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")}>
                <StyledIonicons name="close-circle" size={18} className="text-foreground/30" />
              </Pressable>
            )}
          </View>

          {/* Filter chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingBottom: 4 }}
          >
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeFilter === cat.id;
              return (
                <Pressable
                  key={cat.id}
                  onPress={() => setActiveFilter(cat.id)}
                  className={`px-4 py-1.5 rounded-full border ${
                    active
                      ? "bg-red-500 border-red-500"
                      : "bg-surface border-border"
                  }`}
                >
                  <Text
                    className={`text-sm font-semibold ${
                      active ? "text-white" : "text-foreground/60"
                    }`}
                  >
                    {cat.label}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <View className="flex-1 items-center justify-center gap-2">
            <View className="w-16 h-16 rounded-full bg-surface border border-border items-center justify-center mb-3">
              <StyledIonicons name="search" size={32} className="text-foreground/20" />
            </View>
            <Text className="text-foreground font-bold text-lg">No results found</Text>
            <Text className="text-foreground/40 text-sm">Try a different name or filter</Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 12, paddingBottom: insets.bottom + 16 }}
          >
            <View className="flex-row gap-2 items-start">
              {/* Left column */}
              <View className="flex-1 gap-2">
                {leftCol.map((profile, i) => (
                  <ExploreCard
                    key={profile.id}
                    profile={profile}
                    tall={i % 3 === 1}
                    onPress={() => {}}
                  />
                ))}
              </View>

              {/* Right column */}
              <View className="flex-1 gap-2">
                {rightCol.map((profile, i) => (
                  <ExploreCard
                    key={profile.id}
                    profile={profile}
                    tall={i % 3 === 0}
                    onPress={() => {}}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
