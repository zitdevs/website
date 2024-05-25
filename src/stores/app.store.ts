import { Locale } from "@/i18n-config";
import { create } from "zustand";

interface AppStoreState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const useAppStore = create<AppStoreState>()((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
}));

export { useAppStore };
