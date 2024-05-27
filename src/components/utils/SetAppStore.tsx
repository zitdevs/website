"use client";
import { Dictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { useAppStore } from "@/stores/app.store";
import { useEffect } from "react";

export type SetAppStoreProps = {
  locale: Locale;
  countries: Dictionary["default"]["countries"];
};

const SetAppStore: React.FC<SetAppStoreProps> = ({ locale, countries }) => {
  const setLocale = useAppStore((state) => state.setLocale);
  const setCountries = useAppStore((state) => state.setCountries);

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  useEffect(() => {
    setCountries(countries);
  }, [countries, setCountries]);

  return null;
};

export default SetAppStore;
