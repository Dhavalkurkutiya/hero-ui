export type Profile = {
  id: string;
  name: string;
  age: number;
  distance: string;
  image: string;
  tags: string[];
};

export const PROFILES: Profile[] = [
  {
    id: "1",
    name: "Jessica",
    age: 24,
    distance: "2 miles away",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    tags: ["🎵 Music", "☕ Coffee", "✈️ Travel"],
  },
  {
    id: "2",
    name: "Alex",
    age: 27,
    distance: "5 miles away",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    tags: ["📸 Photography", "🏃 Running"],
  },
  {
    id: "3",
    name: "Sarah",
    age: 22,
    distance: "1 mile away",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    tags: ["🎨 Art", "🍷 Wine"],
  },
  {
    id: "4",
    name: "Michael",
    age: 29,
    distance: "10 miles away",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    tags: ["🏋️ Fitness", "📚 Reading"],
  },
];
