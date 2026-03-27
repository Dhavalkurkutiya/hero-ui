export type MyProfile = {
  name: string;
  age: number;
  location: string;
  bio: string;
  avatar: string;
  coverImage: string;
  tags: string[];
  stats: {
    matches: number;
    likes: number;
    superLikes: number;
  };
  details: {
    height: string;
    job: string;
    education: string;
    lookingFor: string;
    zodiac: string;
  };
};

export const MY_PROFILE: MyProfile = {
  name: "Jessica",
  age: 24,
  location: "New York, NY",
  bio: "Coffee addict ☕, amateur photographer 📸, and lover of spontaneous road trips. Looking for someone to share adventures and lazy Sundays with.",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  coverImage:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
  tags: ["🎵 Music", "☕ Coffee", "✈️ Travel", "📸 Photography", "🍕 Foodie", "🏃 Running"],
  stats: {
    matches: 128,
    likes: 342,
    superLikes: 18,
  },
  details: {
    height: "5'6\"",
    job: "UX Designer",
    education: "NYU Graduate",
    lookingFor: "Long-term relationship",
    zodiac: "♊ Gemini",
  },
};
