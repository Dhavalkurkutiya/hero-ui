import React from 'react';
import { View, Text, Image, ScrollView, TextInput, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function PrivateChatScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-surface">
      {/* Background ambient gradient using View */}
      <View className="absolute inset-0 bg-secondary-container/5" />

      {/* Header Section */}
      <View 
        className="absolute top-0 w-full flex-row justify-between items-center px-6 bg-surface/90 border-b border-outline-variant/20 z-50"
        style={{ paddingTop: Math.max(insets.top, 16), paddingBottom: 16 }}
      >
        <View className="flex-row items-center gap-4">
          <Pressable onPress={() => router.back()} className="active:scale-95 p-2 -ml-2">
            <MaterialIcons name="arrow-back-ios" size={20} className="text-on-surface/60" />
          </Pressable>
          <View className="flex-row items-center gap-3">
            <View className="relative">
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBPLUafLURPMpaRd1Ay3r0W5J4HLfa70-bPjJ4uZZ8152AqIJoeJn0LxVuCG9S2aKBotUYlW9bJSOc-7rb3K95Q0uESIM9Z1yhF0xXofxa9OuPTjqFe7IJuFx-qs3oIhKPyjcgQ-O--TxohO9qTqFDFG-idguIGyWetaMtW6uXpwVt1kPCE5F-FJ9Wl6J2no7DHeiytBxw_J5Fmxg9mhSxxF9ad7fEmFRADsGuVzYKuWWB2MH6VN8zpaLwDdsQKIHHOWRFB9si6rk" }} 
                className="w-10 h-10 rounded-full border border-outline-variant/20" 
              />
              <View className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface rounded-full" />
            </View>
            <View className="flex-col">
              <Text className="font-bold text-lg leading-tight text-on-surface">Ananya</Text>
              <Text className="font-bold text-[10px] uppercase tracking-[0.1em] text-on-surface/40">Active Now</Text>
            </View>
          </View>
        </View>
        <View className="flex-row items-center gap-5">
          <Pressable className="active:scale-95">
            <MaterialIcons name="videocam" size={24} className="text-[#E5E2E3]/60" />
          </Pressable>
          <Pressable className="active:scale-95">
            <MaterialIcons name="notifications-none" size={24} className="text-[#E5E2E3]/60" />
          </Pressable>
        </View>
      </View>

      <KeyboardAvoidingView 
        className="flex-1" 
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {/* Chat Canvas */}
        <ScrollView 
          className="flex-1"
          contentContainerStyle={{ paddingTop: insets.top + 100, paddingBottom: 120, paddingHorizontal: 24, gap: 32 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Date Marker */}
          <View className="flex-row justify-center">
            <View className="bg-surface-container-low px-4 py-1 rounded-full">
              <Text className="font-bold text-[10px] uppercase tracking-[0.2em] text-on-surface/30">Today</Text>
            </View>
          </View>

          {/* Incoming Message */}
          <View className="flex-col items-start max-w-[85%] self-start flex-1 gap-1">
            <View className="bg-surface-container-high/60 p-4 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-outline-variant/10 shadow-lg">
              <Text className="text-on-surface/90 text-[15px] leading-relaxed">
                Hey! Did you manage to check out the new design labs at the tech block? The lighting there is actually insane for portfolio shots. 📸
              </Text>
            </View>
            <Text className="font-bold text-[9px] text-on-surface/20 ml-2">10:42 AM</Text>
          </View>

          {/* Outgoing Message */}
          <View className="flex-col items-end max-w-[85%] self-end gap-1">
            <View className="bg-primary-container p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-md">
              <Text className="text-white text-[15px] leading-relaxed font-medium">
                Not yet, I was stuck in the seminar. But I'm heading there now. Want to meet up? I brought my prime lens.
              </Text>
            </View>
            <View className="flex-row items-center gap-1 mr-2">
              <Text className="font-bold text-[9px] text-on-surface/20">10:45 AM</Text>
              <MaterialIcons name="done-all" size={14} color="#ff5167" />
            </View>
          </View>

          {/* Incoming Message with Image Attachment */}
          <View className="flex-col items-start max-w-[85%] self-start gap-1">
            <View className="bg-surface-container-high/60 p-2 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-outline-variant/10 shadow-lg gap-3">
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl5JB9GTO2K0Raksp3x0qas4vNo5GJHyNGIjf1eEhVsotI3XEX7ZPC-TNAQ5ruIzO1wGQrTvmA7e4cf4S_hHkER-nHvnRFR0pVerPs-c3_KLQgKefywEEW2bGPGSyNqW6SkjLnFwnhbUXWyUDgxV-CekaWTLmbea9R046_1QEV_7-OS79Tc3khTOLvFVc5hweBjMGednuzJNxmWcrGfcaZ_HmHBJiLi9OB7JqEAcUPyk2CZeMtnrlezZLTgqtGA0QHRmde3pQHvbU" }} 
                className="w-full h-48 rounded-xl opacity-90"
                resizeMode="cover"
              />
              <View className="px-2 pb-2">
                <Text className="text-on-surface/90 text-[15px] leading-relaxed">
                  That sounds perfect. I'm at the third workstation. Check out the setup!
                </Text>
              </View>
            </View>
            <Text className="font-bold text-[9px] text-on-surface/20 ml-2">10:47 AM</Text>
          </View>

          {/* Outgoing Message (Short) */}
          <View className="flex-col items-end max-w-[85%] self-end gap-1">
            <View className="bg-primary-container px-5 py-3 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl shadow-md">
              <Text className="text-white text-[15px] font-medium">Omw. 5 mins! 🏃‍♂️</Text>
            </View>
            <View className="flex-row items-center gap-1 mr-2">
              <Text className="font-bold text-[9px] text-on-surface/20">10:48 AM</Text>
              <MaterialIcons name="done-all" size={14} className="text-on-surface/40" />
            </View>
          </View>

        </ScrollView>

        {/* Message Input Dock */}
        <View className="absolute bottom-0 w-full p-6 pb-8 bg-surface/90 border-t border-outline-variant/10 z-40 shadow-2xl">
          <View className="flex-row items-center gap-3 p-2 pl-4 rounded-full border border-outline-variant/20 bg-surface-container-high/50">
            <Pressable className="active:scale-90 p-1">
              <MaterialIcons name="add-circle-outline" size={24} className="text-on-surface/40" />
            </Pressable>
            
            <TextInput 
              placeholder="Message Ananya..."
              placeholderTextColor="rgba(229, 226, 227, 0.2)"
              className="flex-1 text-on-surface text-sm py-2 px-1 focus:outline-none"
            />
            
            <Pressable className="active:scale-90 p-1">
              <MaterialIcons name="sentiment-satisfied" size={24} className="text-on-surface/40" />
            </Pressable>
            
            <Pressable className="w-10 h-10 flex items-center justify-center bg-primary-container rounded-full shadow-lg active:scale-90 transition-transform">
              <MaterialIcons name="send" size={20} color="white" />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
