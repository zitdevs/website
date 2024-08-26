import enLang from "./en.json";
import esLang from "./es.json";

export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";

export const ui = {
  en: enLang,
  es: esLang,
} as const;

export const showDefaultLang = false;
