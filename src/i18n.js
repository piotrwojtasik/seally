import i18n from 'i18next';
import  {initReactI18next}  from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HTTPApi from "i18next-http-backend";


const Languages = ['en', 'pl'];


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HTTPApi)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: 'https://piotrwojtasik.github.io/seally/locales/{{lng}}/{{ns}}.json'
    },
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;