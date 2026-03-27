import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { withUniwind } from "uniwind";
import { CHATS } from "../../features/chats/data/chats";
import { CONVERSATIONS, Message } from "../../features/chats/data/messages";
import { MessageBubble } from "../../features/chats/components/MessageBubble";

const StyledIonicons = withUniwind(Ionicons);

export default function ChatScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const [inputText, setInputText] = useState("");

  const chat = CHATS.find((c) => c.id === id);
  const messages: Message[] = CONVERSATIONS[id ?? ""] ?? [];

  // Header height = safe area top + 12 padding + ~52 content
  const HEADER_H = insets.top + 64;

  const handleSend = () => {
    if (!inputText.trim()) return;
    setInputText("");
    // In real app: push to state / API
  };

  if (!chat) return null;

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? HEADER_H : 0}
    >
      {/* ── Header ── */}
      <View
        className="flex-row items-center bg-background border-b border-border px-4 py-3 gap-3"
        style={{ paddingTop: insets.top + 12 }}
      >
        <Pressable
          onPress={() => router.back()}
          className="w-9 h-9 rounded-full items-center justify-center"
        >
          <StyledIonicons name="chevron-back" size={26} className="text-foreground" />
        </Pressable>

        {/* Avatar + name */}
        <Pressable className="flex-row items-center gap-3 flex-1">
          <View className="relative">
            <Image
              source={{ uri: chat.avatar }}
              className="w-10 h-10 rounded-full"
              resizeMode="cover"
            />
            {chat.online && (
              <View className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-background" />
            )}
          </View>
          <View>
            <Text className="text-foreground font-bold text-base">{chat.name}</Text>
            <Text className={`text-xs ${chat.online ? "text-green-500" : "text-foreground/40"}`}>
              {chat.online ? "Online" : "Offline"}
            </Text>
          </View>
        </Pressable>

        {/* Right actions */}
        <View className="flex-row gap-1">
          <Pressable className="w-9 h-9 rounded-full items-center justify-center">
            <StyledIonicons name="call-outline" size={21} className="text-foreground/70" />
          </Pressable>
          <Pressable className="w-9 h-9 rounded-full items-center justify-center">
            <StyledIonicons name="videocam-outline" size={22} className="text-foreground/70" />
          </Pressable>
        </View>
      </View>

      {/* ── Messages ── */}
      <ScrollView
        ref={scrollRef}
        className="flex-1"
        contentContainerStyle={{ paddingTop: 12, paddingBottom: 16 }}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="handled"
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: true })}
        onLayout={() => scrollRef.current?.scrollToEnd({ animated: false })}
      >
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} avatarUri={chat.avatar} />
        ))}
      </ScrollView>

      {/* ── Input Bar ── */}
      <View
        className="flex-row items-center bg-background border-t border-border px-3 py-1 gap-2"
        style={{ paddingBottom: insets.bottom + 4 }}
      >
        {/* Attach */}
        <Pressable className="w-7 h-7 rounded-full bg-surface border border-border items-center justify-center">
          <StyledIonicons name="attach" size={17} className="text-foreground/50" />
        </Pressable>

        {/* Text input */}
        <View className="flex-1 bg-surface border border-border rounded-full px-3 py-1 justify-center">
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder="Message..."
            placeholderTextColor="rgba(120,120,120,0.5)"
            multiline
            className="text-foreground text-xs"
            style={{ maxHeight: 64, lineHeight: 18 }}
          />
        </View>

        {/* Camera / Send */}
        {!inputText.trim() ? (
          <Pressable className="w-7 h-7 rounded-full bg-surface border border-border items-center justify-center">
            <StyledIonicons name="camera-outline" size={16} className="text-foreground/50" />
          </Pressable>
        ) : (
          <Pressable
            onPress={handleSend}
            className="w-7 h-7 rounded-full bg-red-500 items-center justify-center"
          >
            <StyledIonicons name="send" size={13} className="text-white" />
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
