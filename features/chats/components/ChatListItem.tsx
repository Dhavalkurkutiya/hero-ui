import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import type { Chat } from "../data/chats";

interface ChatListItemProps {
  chat: Chat;
  onPress?: () => void;
  isLast?: boolean;
}

export function ChatListItem({ chat, onPress, isLast }: ChatListItemProps) {
  const hasUnread = chat.unread > 0;

  return (
    <Pressable
      className={`flex-row items-center px-4 py-3 active:bg-foreground/5 ${!isLast ? "border-b border-border" : ""}`}
      onPress={onPress}
    >
      {/* Avatar + Online indicator */}
      <View className="relative mr-3">
        <Image
          source={{ uri: chat.avatar }}
          className="w-14 h-14 rounded-full"
          resizeMode="cover"
        />
        {chat.online && (
          <View className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-background" />
        )}
      </View>

      {/* Content */}
      <View className="flex-1 min-w-0">
        <View className="flex-row items-center justify-between mb-0.5">
          <Text
            className={`text-[15px] ${hasUnread ? "font-bold text-foreground" : "font-semibold text-foreground/80"}`}
            numberOfLines={1}
          >
            {chat.name}
          </Text>
          <Text
            className={`text-xs ml-2 ${hasUnread ? "text-red-500 font-semibold" : "text-foreground/35"}`}
          >
            {chat.time}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text
            className={`text-sm flex-1 ${hasUnread ? "text-foreground/70 font-medium" : "text-foreground/40"}`}
            numberOfLines={1}
          >
            {chat.lastMessage}
          </Text>
          {hasUnread && (
            <View className="ml-2 min-w-[20px] h-5 rounded-full bg-red-500 items-center justify-center px-1.5">
              <Text className="text-white text-[11px] font-bold">{chat.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
}
