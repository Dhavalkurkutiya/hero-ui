import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { withUniwind } from "uniwind";
import type { Message } from "../data/messages";

const StyledIonicons = withUniwind(Ionicons);

interface MessageBubbleProps {
  message: Message;
  avatarUri?: string;
}

export function MessageBubble({ message, avatarUri }: MessageBubbleProps) {
  const isMe = message.senderId === "me";

  return (
    <View className={`flex-row items-end mb-2 px-4 ${isMe ? "justify-end" : "justify-start"}`}>
      {/* Other person's avatar */}
      {!isMe && (
        <Image
          source={{ uri: avatarUri }}
          className="w-7 h-7 rounded-full mr-2 mb-0.5"
          resizeMode="cover"
        />
      )}

      <View className={`max-w-[75%] ${isMe ? "items-end" : "items-start"}`}>
        {/* TEXT bubble */}
        {message.type === "text" && (
          <View
            className={`rounded-2xl px-4 py-2.5 ${
              isMe
                ? "bg-red-500 rounded-br-sm"
                : "bg-surface border border-border rounded-bl-sm"
            }`}
          >
            <Text className={`text-sm leading-5 ${isMe ? "text-white" : "text-foreground"}`}>
              {message.text}
            </Text>
          </View>
        )}

        {/* IMAGE bubble */}
        {message.type === "image" && message.imageUri && (
          <Pressable
            className={`rounded-2xl overflow-hidden ${
              isMe ? "rounded-br-sm" : "rounded-bl-sm"
            }`}
            style={{ width: 200, height: 200 }}
          >
            <Image
              source={{ uri: message.imageUri }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
            {/* Tap to view overlay hint */}
            <View className="absolute inset-0 bg-black/10 items-center justify-center opacity-0" />
          </Pressable>
        )}

        {/* FILE bubble */}
        {message.type === "file" && (
          <Pressable
            className={`flex-row items-center gap-3 rounded-2xl px-4 py-3 ${
              isMe
                ? "bg-red-500 rounded-br-sm"
                : "bg-surface border border-border rounded-bl-sm"
            }`}
            style={{ width: 220 }}
          >
            {/* File icon */}
            <View
              className={`w-10 h-10 rounded-xl items-center justify-center ${
                isMe ? "bg-white/20" : "bg-red-500/10"
              }`}
            >
              <StyledIonicons
                name="document-text"
                size={22}
                className={isMe ? "text-white" : "text-red-500"}
              />
            </View>
            <View className="flex-1">
              <Text
                className={`text-sm font-semibold ${isMe ? "text-white" : "text-foreground"}`}
                numberOfLines={1}
              >
                {message.fileName}
              </Text>
              <Text className={`text-xs mt-0.5 ${isMe ? "text-white/70" : "text-foreground/40"}`}>
                {message.fileExt} · {message.fileSize}
              </Text>
            </View>
            <StyledIonicons
              name="download-outline"
              size={18}
              className={isMe ? "text-white/80" : "text-foreground/50"}
            />
          </Pressable>
        )}

        {/* Timestamp + Seen */}
        <View className={`flex-row items-center mt-1 gap-1 ${isMe ? "flex-row-reverse" : ""}`}>
          <Text className="text-foreground/30 text-[10px]">{message.timestamp}</Text>
          {isMe && (
            <StyledIonicons
              name={message.seen ? "checkmark-done" : "checkmark"}
              size={12}
              className={message.seen ? "text-red-400" : "text-foreground/30"}
            />
          )}
        </View>
      </View>

      {/* My avatar space */}
      {isMe && <View className="w-7 ml-2" />}
    </View>
  );
}
