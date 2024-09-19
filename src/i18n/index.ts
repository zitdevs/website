import english from "./en.json";
import espanol from "./es.json";

export const LANG = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const getI18n = ({
  currentLocale,
}: {
  currentLocale: string | null;
}) => {
  if (currentLocale === LANG.SPANISH) return espanol;
  return english;
};

export const AvailableLanguages = [
  {
    params: {
      lang: "en",
    },
  },
  {
    params: {
      lang: "es",
    },
  },
];
