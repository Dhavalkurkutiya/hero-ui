import { View, Text, Image, TextInput, Pressable, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function VerifyCollegeScreen() {
  const { width } = Dimensions.get('window');

  return (
    <View className="flex-1 bg-surface">
      {/* Top Navigation Bar */}
      <SafeAreaView edges={['top']} className="absolute top-0 w-full flex-row justify-between items-center px-6 h-20 bg-surface/90 border-b border-outline-variant/20 z-50">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="verified" size={24} color="#FF2D55" />
          <Text className="font-extrabold italic text-2xl uppercase text-[#E5E2E3]">
            APNU
          </Text>
        </View>
        <Pressable onPress={() => router.back()} className="active:scale-95 transition-transform p-2">
          <MaterialIcons name="close" size={24} className="text-[#E5E2E3]/70" />
        </Pressable>
      </SafeAreaView>

      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingTop: 100, paddingBottom: 160, paddingHorizontal: 24, gap: 48 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Branding */}
        <View className="flex-col gap-4">
          <View className="flex-row items-center gap-2">
            <View className="w-8 h-[1px] bg-primary-container" />
            <Text className="text-primary-container text-[11px] font-bold uppercase tracking-[0.2em]">
              Membership Verification
            </Text>
          </View>
          <Text className="font-extrabold text-4xl text-on-surface leading-tight tracking-tight">
            Verify Your{" "}
            <Text className="italic text-secondary-container">College</Text>
          </Text>
          <Text className="text-on-surface/60 text-base leading-relaxed max-w-sm mt-2">
            Connect your academic identity to unlock the exclusive digital concierge ecosystem of APNU.
          </Text>
        </View>

        {/* Search Section */}
        <View className="flex-col gap-6">
          <View className="relative justify-center group">
            <View className="absolute left-4 z-10">
              <MaterialIcons name="search" size={20} className="text-on-surface/30" />
            </View>
            <TextInput 
              placeholder="Find your university..."
              placeholderTextColor="rgba(229, 226, 227, 0.2)"
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl py-4 pl-12 pr-4 text-on-surface text-base"
              style={{ backgroundColor: 'rgba(32, 31, 32, 0.6)' }}
            />
          </View>
          
          <View className="flex-row flex-wrap gap-2">
            {['IIT Delhi', 'SRCC', 'BITS Pilani', 'LSR'].map((college) => (
              <Pressable 
                key={college} 
                className="px-4 py-2 rounded-md bg-surface-container-high border border-outline-variant/10 active:scale-95"
              >
                <Text className="text-on-surface/80 text-xs font-medium tracking-wide">{college}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Verification Methods */}
        <View className="flex-col gap-4 mt-4">
          {/* EDU Email Card */}
          <Pressable className="overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-6 active:scale-[0.98] mb-4">
            <View className="flex-col gap-8">
              <View className="flex-row justify-between items-start">
                <View className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center">
                  <MaterialIcons name="alternate-email" size={20} className="text-primary-container" />
                </View>
                <MaterialIcons name="arrow-outward" size={20} className="text-on-surface/20" />
              </View>
              <View>
                <Text className="font-bold text-lg text-on-surface mb-1">.edu Email</Text>
                <Text className="text-on-surface/40 text-[12px] leading-relaxed mt-1">
                  Instant verification via your university assigned email address.
                </Text>
              </View>
            </View>
          </Pressable>

          {/* Upload ID Card */}
          <Pressable className="overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container-low p-6 active:scale-[0.98]">
            <View className="flex-col gap-8">
              <View className="flex-row justify-between items-start">
                <View className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center">
                  <MaterialIcons name="badge" size={20} className="text-secondary" />
                </View>
                <MaterialIcons name="arrow-outward" size={20} className="text-on-surface/20" />
              </View>
              <View>
                <Text className="font-bold text-lg text-on-surface mb-1">Upload ID</Text>
                <Text className="text-on-surface/40 text-[12px] leading-relaxed mt-1">
                  Securely upload a photo of your student identification card.
                </Text>
              </View>
            </View>
          </Pressable>
        </View>

        {/* Visual Anchor / Editorial Image */}
        <View className="w-full aspect-[21/9] rounded-xl overflow-hidden border border-outline-variant/10 mt-4 relative">
          <Image 
            source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1L7ytvGokKCZuOjvKWXQAZJJHY6bDtVX56zIsoieCpfEDgS5h2LHuWzt5N71JrjN1zXiinKBKYbB--x7vaKwWPD1EFl8f2yrN4wSoJAvGzROaozp2cltIqKlmpDWvGlCxw9Kfr5mvEbhOGv4ZyvwIgYAlNII76gM6RAo6FqV5diQ5kgAHq74AWtQ3xHRkGoyZonM2NFIu6qcBTcd2HWRux6TJOnpvxK3xo1qH-dMxSWaX-OrX0iZCs-nmFcHwIobLDbkTAj_R6h4" }}
            className="w-full h-full opacity-50"
            resizeMode="cover"
          />
          <View className="absolute inset-0 bg-surface/30" />
          <View className="absolute bottom-4 left-6 flex-row items-center gap-3">
            <View className="flex-row">
              <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5U7gEzusdYKtI9UukZXgj15FRzyw9ulI0GVmi9JBzeHF04yUnhjleF_e7l28PBgYc4OgkhHB2t2YgzZ7MQ3JHGJY2iiSQsVssMIv3Ww-K6CnUGsAAk9qFar6NfvA5Mck01611FEyS8BlWRFKSUs3qKYaobsooIl9bSCtv1LXRYEfMjsYUZBqEQ_3F9egQ-3xPcjjwOXG2TZdH1zroXiz6i1k6ToYSIAEjVBjstr-g0XLeJ62tyNPJQqApbT7NVbGaUSUFT1HjXjY" }} className="w-6 h-6 rounded-full border border-surface -mr-2 z-30" />
              <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5KExBnHTArosUtOIKYXLFCZBX_PrtKUK7BgtDsrQff9J-UqTEPl2tHsmTsQFiUQIhZjcxz0ajU-x4yYwtHIYAWmyB38HLSOIWY8d-_EfmV4v8YnmzYCuM5aqX2fwJzbGGcOG4X-iII50-q1Sd2ED9CysjK3r5TZrDFVXO1kS55M8RanXDt-0okpUorD0ZOxikC7UWLIgk4Z-oxtosqPBayaxbAz3PwccCOY85dWmRmVpUcUFApT060QyTCE-RiYgJW1GVMHu-onM" }} className="w-6 h-6 rounded-full border border-surface -mr-2 z-20" />
              <Image source={{ uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuCozWDh47BE9BJNmCE-DfR53PBejc9SsqIGMIHR05TBlLya4cSWtneiwPywt46ofzKbyg13totmGhIMfqKfmyNkRFOCYHAf1h3ahyyvSOdj8pnIW8wRYqmU3lMQhApTkKFO31eeH2rqqnN89FO2HBwueImUpcMGbqS03bHj2iXDZOYoS5WMX2OuZm8YI7cnJIJ2sge0fPsDdafEEUCsKSX11iGYYrSbFk0e8J3JgtyWZ0c8FyUSZqNb36lk4zOtQeQ8eIG-cNcfH9A" }} className="w-6 h-6 rounded-full border border-surface z-10" />
            </View>
            <Text className="text-[10px] uppercase tracking-widest text-on-surface/60 font-medium ml-2">
              Join 12k+ verified students
            </Text>
          </View>
        </View>

      </ScrollView>

      {/* Fixed Footer CTA */}
      <SafeAreaView edges={['bottom']} className="absolute bottom-0 w-full px-6 py-8 border-t border-outline-variant/10 bg-surface/90 flex-col items-center gap-4 z-50">
        <Pressable className="w-full max-w-md py-4 rounded-full bg-primary-container text-white active:scale-95 transition-all items-center shadow-lg">
          <Text className="text-white font-bold text-[12px] uppercase tracking-[0.1em]">
            Continue
          </Text>
        </Pressable>
        <View className="flex-row items-center gap-1.5 opacity-40">
          <MaterialIcons name="security" size={14} className="text-on-surface" />
          <Text className="text-[10px] uppercase tracking-widest text-on-surface font-bold">
            Verified & Secure
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
