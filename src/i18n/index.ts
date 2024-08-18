import english from './en.json';
import espanol from './es.json';

const LANG = {
    ENGLISH: 'en',
    SPANISH: 'es',
};

export const getI18n = ({currentLocale}: {currentLocale: string | null}) => {
    if (currentLocale === LANG.ENGLISH) return english;
    return espanol;
}
