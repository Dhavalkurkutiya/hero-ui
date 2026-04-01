import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { EXPLORE_PROFILES, FILTER_CATEGORIES } from "./data/explore";
import { ExploreCard } from "./components/ExploreCard";

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
    <View className="flex-1 bg-surface">
      {/* Shared APNU TopAppBar */}
      <View 
        className="absolute top-0 w-full flex-row justify-between items-center px-6 bg-surface/90 border-b border-outline-variant/20 z-50 backdrop-blur-xl"
        style={{ paddingTop: Math.max(insets.top, 16), paddingBottom: 16 }}
      >
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="verified" size={24} color="#FF2D55" />
          <Text className="font-extrabold italic text-2xl uppercase text-[#E5E2E3]">
            APNU
          </Text>
        </View>
        <Pressable className="active:scale-95 transition-transform duration-200 p-2">
          <MaterialIcons name="tune" size={24} className="text-[#E5E2E3]/70" />
        </Pressable>
      </View>

      <View className="flex-1 w-full max-w-[600px] self-center" style={{ paddingTop: insets.top + 80 }}>
        {/* ── Header ── */}
        <View className="px-6 pt-4 pb-2">
          <Text className="text-on-surface text-2xl font-extrabold tracking-tight mb-4">
            Explore
          </Text>

          {/* Search Bar */}
          <View className="flex-row items-center bg-surface-container-lowest/50 border border-outline-variant/20 rounded-2xl px-4 py-3 gap-2 mb-4 shadow-sm">
            <MaterialIcons name="search" size={20} className="text-on-surface/40" />
            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Search by name or interests..."
              placeholderTextColor="rgba(229,226,227,0.4)"
              className="flex-1 text-on-surface text-sm"
            />
            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")} className="p-1 active:scale-90">
                <MaterialIcons name="cancel" size={20} className="text-on-surface/30" />
              </Pressable>
            )}
          </View>

          {/* Filter chips */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingBottom: 8 }}
          >
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeFilter === cat.id;
              return (
               <Pressable
                 key={cat.id}
                 onPress={() => setActiveFilter(cat.id)}
                 className={`px-4 py-2 rounded-lg border ${
                   active ? "bg-primary-container border-primary-container/20 shadow-lg" : "bg-surface-container-high/60 border-outline-variant/20"
                 }`}
               >
                 <Text className={`text-[11px] uppercase tracking-wider font-bold ${active ? "text-white" : "text-on-surface-variant"}`}>
                   {cat.label}
                 </Text>
               </Pressable>
              );
            })}
          </ScrollView>
        </View>

        {/* ── Grid ── */}
        {filtered.length === 0 ? (
          <View className="flex-1 items-center justify-center gap-4">
            <View className="w-16 h-16 rounded-full bg-surface-container-lowest/50 border border-outline-variant/20 items-center justify-center mb-2">
              <MaterialIcons name="search-off" size={32} className="text-on-surface/20" />
            </View>
            <Text className="text-on-surface font-extrabold text-lg">No sparks found</Text>
            <Text className="text-on-surface/40 text-sm">Try adjusting your filters</Text>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 12, paddingBottom: insets.bottom + 100 }}
          >
            <View className="flex-row gap-4 items-start">
              {/* Left column */}
              <View className="flex-1 gap-4">
                {leftCol.map((profile, i) => (
                  <View key={profile.id} className="rounded-2xl overflow-hidden border border-outline-variant/10 shadow-lg">
                    <ExploreCard
                      profile={profile}
                      tall={i % 3 === 1}
                      onPress={() => {}}
                    />
                  </View>
                ))}
              </View>

              {/* Right column */}
              <View className="flex-1 gap-4">
                {rightCol.map((profile, i) => (
                  <View key={profile.id} className="rounded-2xl overflow-hidden border border-outline-variant/10 shadow-lg">
                    <ExploreCard
                      profile={profile}
                      tall={i % 3 === 0}
                      onPress={() => {}}
                    />
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
}
