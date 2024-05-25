"use client";
import { Locale } from "@/i18n-config";
import { useAppStore } from "@/stores/app.store";
import { useEffect } from "react";

export type SetAppStoreProps = {
  locale: Locale;
};

const SetAppStore: React.FC<SetAppStoreProps> = ({ locale }) => {
  const setLocale = useAppStore((state) => state.setLocale);

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  return null;
};

export default SetAppStore;
