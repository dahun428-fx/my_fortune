import { create } from "zustand";
import { persist } from "zustand/middleware";
import { encryptStorage } from "../utils/encryptStorage";

export type UserInfo = {
  name: string;
  gender: string;
  birth: string;
  birthTime: string;
  calendarType: "solar" | "lunar";
};

type State = {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo | null) => void;
  selectedFortune: string;
  setSelectedFortune: (value: string) => void;
  language: "ko" | "en";
  setLanguage: (lang: "ko" | "en") => void;
  toggleLanguage: () => void;
};

export const useUserStore = create<State>()(
  persist(
    (set, get) => ({
      userInfo: null,
      setUserInfo: (info) => set({ userInfo: info }),
      selectedFortune: "",
      setSelectedFortune: (value) => set({ selectedFortune: value }),
      language: "ko",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () => {
        const next = get().language === "ko" ? "en" : "ko";
        set({ language: next });
      },
    }),
    {
      name: "user-store",
      storage: {
        getItem: async (key) => encryptStorage.getItem(key),
        setItem: async (key, value) => encryptStorage.setItem(key, value),
        removeItem: async (key) => encryptStorage.removeItem(key),
      },
    }
  )
);
