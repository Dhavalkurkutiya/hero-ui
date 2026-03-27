export type MessageType = "text" | "image" | "file";

export type Message = {
  id: string;
  senderId: "me" | string;
  type: MessageType;
  text?: string;
  imageUri?: string;
  fileName?: string;
  fileSize?: string;
  fileExt?: string;
  timestamp: string;
  seen?: boolean;
};

type ConversationMap = Record<string, Message[]>;

export const CONVERSATIONS: ConversationMap = {
  "1": [
    { id: "1", senderId: "1", type: "text", text: "Hey! 👋 How are you?", timestamp: "10:00 AM", seen: true },
    { id: "2", senderId: "me", type: "text", text: "I'm great, thanks! How about you? 😊", timestamp: "10:01 AM", seen: true },
    { id: "3", senderId: "1", type: "text", text: "Doing amazing! I saw you're into travel ✈️", timestamp: "10:03 AM", seen: true },
    { id: "4", senderId: "me", type: "image", imageUri: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=600", timestamp: "10:05 AM", seen: true },
    { id: "5", senderId: "me", type: "text", text: "Took this last summer in the Alps! 🏔️", timestamp: "10:05 AM", seen: true },
    { id: "6", senderId: "1", type: "text", text: "Oh wow that's beautiful! 😍 I love mountains", timestamp: "10:07 AM", seen: true },
    { id: "7", senderId: "1", type: "image", imageUri: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600", timestamp: "10:08 AM", seen: true },
    { id: "8", senderId: "1", type: "text", text: "Here's me in Santorini last year 🌊", timestamp: "10:08 AM", seen: true },
    { id: "9", senderId: "me", type: "file", fileName: "travel_itinerary.pdf", fileSize: "2.4 MB", fileExt: "PDF", timestamp: "10:10 AM", seen: true },
    { id: "10", senderId: "me", type: "text", text: "I made this itinerary for our potential trip! 😄", timestamp: "10:11 AM", seen: true },
    { id: "11", senderId: "1", type: "text", text: "Are you free this weekend? 🎉", timestamp: "2m ago", seen: false },
  ],
  "2": [
    { id: "1", senderId: "2", type: "text", text: "Hi! I love your photography portfolio 📸", timestamp: "Yesterday", seen: true },
    { id: "2", senderId: "me", type: "text", text: "Thank you so much! 😊 Are you into photography too?", timestamp: "Yesterday", seen: true },
    { id: "3", senderId: "2", type: "image", imageUri: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600", timestamp: "Yesterday", seen: true },
    { id: "4", senderId: "2", type: "text", text: "That place sounds amazing 😍", timestamp: "18m ago", seen: false },
  ],
};
