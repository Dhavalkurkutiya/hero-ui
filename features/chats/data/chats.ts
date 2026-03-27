export type Chat = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  liked?: boolean;
};

export const CHATS: Chat[] = [
  {
    id: "1",
    name: "Jessica",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&auto=format&fit=crop",
    lastMessage: "Hey! Are you free this weekend? 🎉",
    time: "2m ago",
    unread: 3,
    online: true,
    liked: true,
  },
  {
    id: "2",
    name: "Sarah",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    lastMessage: "That place sounds amazing 😍",
    time: "18m ago",
    unread: 1,
    online: true,
  },
  {
    id: "3",
    name: "Alex",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    lastMessage: "You: Sure, let's go! 🏃",
    time: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: "4",
    name: "Michael",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop",
    lastMessage: "You: haha same 😂",
    time: "3h ago",
    unread: 0,
    online: false,
  },
  {
    id: "5",
    name: "Emma",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&auto=format&fit=crop",
    lastMessage: "Can't wait! See you there 🎵",
    time: "Yesterday",
    unread: 0,
    online: true,
  },
  {
    id: "6",
    name: "Olivia",
    avatar: "https://images.unsplash.com/photo-1488716820095-cbe80883c496?q=80&w=200&auto=format&fit=crop",
    lastMessage: "You: Coffee tomorrow? ☕",
    time: "2 days ago",
    unread: 0,
    online: false,
  },
];

// New matches (no messages yet)
export type Match = {
  id: string;
  name: string;
  avatar: string;
  isNew?: boolean;
};

export const NEW_MATCHES: Match[] = [
  {
    id: "m1",
    name: "You",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    isNew: false,
  },
  {
    id: "m2",
    name: "Priya",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "m3",
    name: "Zoe",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: "m4",
    name: "Mia",
    avatar: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=200&auto=format&fit=crop",
    isNew: true,
  },
];
