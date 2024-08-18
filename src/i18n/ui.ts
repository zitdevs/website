import enLang from "./en";

export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en: enLang,
    fr: {
      'nav.home': 'Accueil',
      'nav.about': 'À propos',
    },
} as const;

export const showDefaultLang = false;
