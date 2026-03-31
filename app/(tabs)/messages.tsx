import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function MessagesScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-surface">
      {/* TopAppBar */}
      <View 
        className="absolute top-0 w-full flex-row justify-between items-center px-6 bg-surface/90 border-b border-outline-variant/20 z-50"
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

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: insets.top + 80, paddingBottom: 120, paddingHorizontal: 24 }}
        showsVerticalScrollIndicator={false}
      >
        {/* New Sparks Section */}
        <View className="mb-12">
          <View className="flex-row items-baseline justify-between mb-6">
            <Text className="font-extrabold text-2xl tracking-tight text-on-surface">New Sparks</Text>
            <Text className="font-bold text-[10px] uppercase tracking-[0.2em] text-primary-container">12 Active</Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 16, paddingRight: 24 }}
            className="-mx-6 px-6"
          >
            {/* Spark Card 1 (Ananya) */}
            <Pressable 
              onPress={() => router.push('/chat/1' as any)}
              className="relative w-24 h-32 rounded-xl overflow-hidden shadow-lg border border-outline-variant/20 active:scale-95 transition-transform"
            >
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMpw4Tgh5Dr2xIIMHS9sO2RIU60egy6IHVeA_i9U82V7NsxZ33n-GbYyy9kCsQIzYxhHjAv41eBrCTmrBnupMacOjx8R56gCfSNoPX4htAJgWJf-lVuyhQIIsXKAvwH4HHZYOcUhqrtrz98pI32OnQj8M-BqsP9SPabQjJmWVGZsnDsrTru6tXv7d1T1usTqP8jaPm1NKtFog1V2kqmZdW3NGVVp0OP72SKZDLg6ZN4TXAl-3JQMw_ED7KciyRYvmkr74kD27hLQw" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-surface/20" />
              <View className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <View className="absolute bottom-2 left-2 right-2">
                <Text className="text-[10px] font-bold text-white" numberOfLines={1}>Ananya, 21</Text>
              </View>
              <View className="absolute top-2 right-2 w-5 h-5 bg-primary-container flex items-center justify-center rounded-full shadow-md">
                <MaterialIcons name="verified" size={12} color="white" />
              </View>
            </Pressable>

            {/* Spark Card 2 (Ishaan) */}
            <Pressable 
              onPress={() => router.push('/chat/2' as any)}
              className="relative w-24 h-32 rounded-xl overflow-hidden border border-outline-variant/20 active:scale-95 transition-transform"
            >
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBF6b8P8AoXWmqqQaA4-yhsrJujUTvw87SGBF0xhHBZE2hyiNujT3Vzto5bNqGH8DFhxT760VR64C2Wj8sdAxIV0x6HtOlyvUc5_OrvHXh7rQo-qEsmqZw7HjqATlcBWamIHqW75ZNA1dwg42vRn-MQnfpaNKE13n5KJTlk4rgje_NP-dawAtyO2VM1vz2nuvpevw5ko2k8DcgiXAw0-IxR-rwSGUNWt1OTmq6Nh4udyC2tdcB3hCWYec_wgRoJspPrXOflokj2WtQ" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute inset-0 bg-surface/20" />
              <View className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <View className="absolute bottom-2 left-2 right-2">
                <Text className="text-[10px] font-bold text-white" numberOfLines={1}>Ishaan, 22</Text>
              </View>
            </Pressable>
            
            {/* Spark Card 3 (Riya) */}
            <Pressable className="relative w-24 h-32 rounded-xl overflow-hidden border border-outline-variant/20 active:scale-95 transition-transform">
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtiYZBQxrc1brEFQXgitL9upaV4rqWsNc9Jk98UEQgJhaHqQPxDd96PYt4nBK0U6e6zE56QpXBIHwcApKnmYPyKAmqpeZfcWoEEgsESuPdbDaAxhUnr5koO7KwVKKT8M_YpbXbBfJwrv5SVhReTzwr1NZM3eRTKT7EwK4Wfa31BDGLTKLki0ZDqSXdVFfWPcLeTE06Kuc3-7uEi51Yki4pLTokuDP7vzPzo-S1buaZcluCyCHYHjOYESsqRp-yUanEu4hr36mX76Q" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <View className="absolute bottom-2 left-2 right-2">
                <Text className="text-[10px] font-bold text-white" numberOfLines={1}>Riya, 20</Text>
              </View>
            </Pressable>

            {/* Spark Card 4 (Kabir) */}
            <Pressable className="relative w-24 h-32 rounded-xl overflow-hidden border border-outline-variant/20 active:scale-95 transition-transform">
              <Image 
                source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA82Jfb4eFlOIve0k9HUy7rr8grA6zGLmB8Sv6EdDaqV-UMsPAA2kCcEbkOP32LJh59mq-115jrYdHyVtAMTGNE3j1ZqmC4pgcoMU_bGB6LglMxE4-rLej00PBWUCwLrqT1ywAmBjpckgdm32PveNv4HmtmY3e4Mz8TD4OWP75Xmsjzx08AM1SMN735bjDBeo7ZtJgn2KMMZUA3Wcqha0y9jYI2HVb8Q20Ai9sxkYtIR-iyoBIonXAcYgP9GGDx_fnJ4nG9k2vsx54" }}
                className="w-full h-full"
                resizeMode="cover"
              />
              <View className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
              <View className="absolute bottom-2 left-2 right-2">
                <Text className="text-[10px] font-bold text-white" numberOfLines={1}>Kabir, 23</Text>
              </View>
            </Pressable>
          </ScrollView>
        </View>

        {/* Chat List Section */}
        <View className="flex-col">
          <View className="flex-row items-center justify-between mb-6">
            <Text className="font-extrabold text-2xl tracking-tight text-on-surface">Messages</Text>
            <View className="flex-1 h-[1px] bg-outline-variant/40 ml-4" />
          </View>

          <View className="flex-col gap-4">
            {/* Active / Unseen Chat Row */}
            <Pressable 
              onPress={() => router.push('/chat/1' as any)}
              className="flex-row items-center gap-4 bg-surface-container-high/40 p-4 rounded-2xl border-l-[3px] border-primary-container shadow-sm active:scale-95 transition-transform"
            >
              <View className="relative">
                <View className="w-14 h-14 rounded-2xl overflow-hidden border border-primary-container/30">
                  <Image 
                    className="w-full h-full" 
                    source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoyHbAIgS8H3h44TaFEfgnv4PXWvTlTb_nQZ5PloDmLtotjV9RpFZb2K81PDPce0wFJfAjdFDwLcxQ_FrfcLH9KdieGXb7eBr4370GJL38462cgJncecQP9KPmkCWKjhtF9TMDD7s9V0jFwU6Z6BWMsG9YrgZvkhqp0DzQTt4YWRVesvhSFgQLEVlIOqdi7tO5TmnlUAV1FPCzdlD8SZrDVMGm1Z2sIjaewrEbgiPfqFdHmZJ2E7pqtgZNFJzGtG3TAvkOXi62SpM" }} 
                  />
                </View>
                <View className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-primary-container rounded-full border-2 border-surface" />
              </View>
              <View className="flex-1 flex-col justify-center">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-base text-on-surface" numberOfLines={1}>Zara Khanna</Text>
                  <Text className="font-bold text-[10px] text-primary-container tracking-widest leading-none">NOW</Text>
                </View>
                <Text className="text-[13px] text-on-surface font-medium leading-tight" numberOfLines={1}>
                  That sounds like a plan! Let's do it...
                </Text>
              </View>
            </Pressable>

            {/* Normal Chat Row 1 */}
            <Pressable className="flex-row items-center gap-4 bg-surface-container-low/30 p-4 rounded-2xl border border-transparent active:scale-95 transition-transform">
              <View className="w-14 h-14 rounded-2xl overflow-hidden border border-outline-variant/10">
                <Image 
                  className="w-full h-full opacity-80" 
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiRtPbQDW_i8WYMHbIzo3IlQM5et7mRqFRHaFLGJr4psY8NV8834tdpO0pAGsXBzmyxcNVluzBWz4kGDKGwybBV1-AEiQJHvAWI0psj6dRSmN8uq6fVtbZDVPGt6GUg5Oxry6pIeIelh8at3QdM84p6i1q_Hhm0O8ViSmH8fPuq_KOICia17lj0U0D2CUykxcDIleQX_DA1zA652NAfEw4JFCKvgl3NtUw9lBVZQpN4gt2e0TJUSofXC_jrP-IYag-bzbNnktr2XA" }} 
                />
              </View>
              <View className="flex-1 flex-col justify-center">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-base text-on-surface/90" numberOfLines={1}>Aryan Malhotra</Text>
                  <Text className="font-bold text-[10px] text-on-surface-variant/50 tracking-widest leading-none">2:40 PM</Text>
                </View>
                <Text className="text-[13px] text-on-surface-variant/70 leading-tight" numberOfLines={1}>
                  The new café at CP is actually amazing.
                </Text>
              </View>
            </Pressable>

            {/* Normal Chat Row 2 */}
            <Pressable className="flex-row items-center gap-4 bg-surface-container-low/30 p-4 rounded-2xl border border-transparent active:scale-95 transition-transform">
              <View className="w-14 h-14 rounded-2xl overflow-hidden border border-outline-variant/10">
                <Image 
                  className="w-full h-full opacity-80" 
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuBexzUZZoooZmbCnJ_1XQn_1KY9R7pBKL4HXOGXlq9ViMV5jSVjw1rRd_7TwaEJh8ohpVEWmvQofo2t4AiiNPLFwKA-7BlUvLxuxDgS9Q_bG57pN2L0rj-jLbzNLkpXkKDac6gaUyQ8z9ctIMc_kIro0WHGPNBQqK-2Ydt_mbli05_UpqK9V-6lFDo0whWDKNI9aWAxREILAyL30GM-yb8Qbn10SMBftaoDrsGPTJ1m4C626pMtb6rjbGX-qswcjcvl3M0hOD_ay0Y" }} 
                />
              </View>
              <View className="flex-1 flex-col justify-center">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-base text-on-surface/90" numberOfLines={1}>Sia Gupta</Text>
                  <Text className="font-bold text-[10px] text-on-surface-variant/50 tracking-widest leading-none">YESTERDAY</Text>
                </View>
                <Text className="text-[13px] text-on-surface-variant/70 leading-tight" numberOfLines={1}>
                  Haha, you definitely haven't seen my playlist yet.
                </Text>
              </View>
            </Pressable>
            
            {/* Normal Chat Row 3 */}
            <Pressable className="flex-row items-center gap-4 bg-surface-container-low/30 p-4 rounded-2xl border border-transparent active:scale-95 transition-transform">
              <View className="w-14 h-14 rounded-2xl overflow-hidden border border-outline-variant/10">
                <Image 
                  className="w-full h-full opacity-80" 
                  source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTHxhhv2fk5Oa3tiGFsjSCZoExahHsAREAaVunmezkdZmX8I2gTmy8ir_1ZuU-wkk30ULl9s5sQ1Dn3nIWskwmhhRTTrwnzXeoz7PGJxLS7KW8Ec7nvQhPnP1yW-udcLI2L0ciJRsFXQqMJkxBwHhzlVngQLNArW2Ji6H7YO3lzqBhXgD7qtV8H_N_4AL3K9sVHjZySAAxIgk1a4Qhq3sJIznMcD76-b7nsMlJv_uQNTzsC8Q9LFQJ9etUN8IUti0hFXxNywgQKxs" }} 
                />
              </View>
              <View className="flex-1 flex-col justify-center">
                <View className="flex-row justify-between items-center mb-1">
                  <Text className="font-bold text-base text-on-surface/90" numberOfLines={1}>Vivaan Shah</Text>
                  <Text className="font-bold text-[10px] text-on-surface-variant/50 tracking-widest leading-none">MON</Text>
                </View>
                <Text className="text-[13px] text-on-surface-variant/70 leading-tight italic" numberOfLines={1}>
                  Sent an attachment
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
