export type ExploreProfile = {
  id: string;
  name: string;
  age: number;
  distance: string;
  image: string;
  tags: string[];
  isOnline: boolean;
  isVerified?: boolean;
};

export const EXPLORE_PROFILES: ExploreProfile[] = [
  {
    id: "e1",
    name: "Sophia",
    age: 23,
    distance: "0.5 mi",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=600&auto=format&fit=crop",
    tags: ["Art", "Travel"],
    isOnline: true,
    isVerified: true,
  },
  {
    id: "e2",
    name: "Liam",
    age: 27,
    distance: "1.2 mi",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    tags: ["Fitness", "Music"],
    isOnline: false,
  },
  {
    id: "e3",
    name: "Zoe",
    age: 25,
    distance: "2 mi",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop",
    tags: ["Coffee", "Books"],
    isOnline: true,
    isVerified: true,
  },
  {
    id: "e4",
    name: "Noah",
    age: 29,
    distance: "3 mi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    tags: ["Hiking", "Dogs"],
    isOnline: true,
  },
  {
    id: "e5",
    name: "Mia",
    age: 22,
    distance: "4 mi",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=600&auto=format&fit=crop",
    tags: ["Foodie", "Yoga"],
    isOnline: false,
    isVerified: true,
  },
  {
    id: "e6",
    name: "Ethan",
    age: 31,
    distance: "5 mi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    tags: ["Tech", "Gaming"],
    isOnline: true,
  },
  {
    id: "e7",
    name: "Ava",
    age: 24,
    distance: "6 mi",
    image: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?q=80&w=600&auto=format&fit=crop",
    tags: ["Dance", "Travel"],
    isOnline: false,
  },
  {
    id: "e8",
    name: "Lucas",
    age: 26,
    distance: "7 mi",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    tags: ["Photography", "Surf"],
    isOnline: true,
    isVerified: true,
  },
];

export const FILTER_CATEGORIES = [
  { id: "all",      label: "✨ All" },
  { id: "nearby",   label: "📍 Nearby" },
  { id: "online",   label: "🟢 Online" },
  { id: "verified", label: "✅ Verified" },
  { id: "new",      label: "🆕 New" },
];
