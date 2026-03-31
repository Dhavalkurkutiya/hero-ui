import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import { CHATS, NEW_MATCHES } from "../../features/chats/data/chats";
import { ChatListItem } from "../../features/chats/components/ChatListItem";

const StyledIonicons = withUniwind(Ionicons);

export default function MessagesScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const totalUnread = CHATS.reduce((acc, c) => acc + c.unread, 0);

  return (
    <View className="flex-1 bg-background lg:bg-surface-secondary/30">
      <View className="flex-1 max-w-[800px] w-full self-center bg-background md:shadow-xl md:border-x md:border-border" style={{ paddingTop: insets.top }}>

        {/* ── Header ── */}
        <View className="flex-row items-center justify-between px-5 pt-3 pb-3">
          <Text className="text-foreground text-2xl font-extrabold tracking-tight">
            Messages
            {totalUnread > 0 && (
              <Text className="text-red-500"> {totalUnread}</Text>
            )}
          </Text>
          <Pressable className="w-9 h-9 rounded-full bg-surface border border-border items-center justify-center">
            <StyledIonicons name="create-outline" size={19} className="text-foreground" />
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}>

          {/* ── New Matches Row ── */}
          <View className="mb-4">
            <Text className="text-foreground/40 text-xs font-semibold uppercase tracking-widest mx-5 mb-3">
              New Matches
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20, gap: 16 }}
            >
              {NEW_MATCHES.map((match) => (
                <Pressable key={match.id} className="items-center" style={{ width: 64 }}>
                  <View className="relative mb-1.5">
                    <Image
                      source={{ uri: match.avatar }}
                      className="w-16 h-16 rounded-full"
                      resizeMode="cover"
                      style={{
                        borderWidth: match.isNew ? 2.5 : 2,
                        borderColor: match.isNew ? "#ef4444" : "#e5e7eb",
                      }}
                    />
                    {match.isNew && (
                      <View className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 rounded-full px-1.5 py-0.5">
                        <Text className="text-white text-[9px] font-bold">NEW</Text>
                      </View>
                    )}
                  </View>
                  <Text className="text-foreground/70 text-xs font-medium text-center" numberOfLines={1}>
                    {match.name}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>

          {/* Divider */}
          <View className="h-px bg-border mx-5 mb-4" />

          {/* ── Chat List ── */}
          <View className="mx-4">
            <Text className="text-foreground/40 text-xs font-semibold uppercase tracking-widest mb-3 px-1">
              Messages
            </Text>
            <View className="bg-surface border border-border rounded-2xl overflow-hidden">
              {CHATS.map((chat, index) => (
                <ChatListItem
                  key={chat.id}
                  chat={chat}
                  isLast={index === CHATS.length - 1}
                  onPress={() => router.push({ pathname: "/chat/[id]", params: { id: chat.id } })}
                />
              ))}
            </View>
          </View>

          {/* ── Empty hint at bottom ── */}
          <View className="flex-row items-center justify-center mt-8 gap-1">
            <StyledIonicons name="heart" size={14} className="text-red-400" />
            <Text className="text-foreground/25 text-xs">Keep swiping to find more matches!</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
