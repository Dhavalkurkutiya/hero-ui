import { Redirect } from "expo-router";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Redirect href={"/onboarding" as any} />
    </>
  );
}
