import { Dictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { create } from "zustand";

interface AppStoreState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  countries?: Dictionary["default"]["countries"];
  setCountries: (countries: Dictionary["default"]["countries"]) => void;
}

const useAppStore = create<AppStoreState>()((set) => ({
  locale: "en",
  setLocale: (locale) => set({ locale }),
  countries: undefined,
  setCountries: (countries) => set({ countries }),
}));

export { useAppStore };
