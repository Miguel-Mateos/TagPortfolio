import { useAppContext } from "../Context/ContextApi";
import { useLayoutEffect, useState } from "react";
// import all the languages
import { es } from '../language/es';
import { us } from '../language/us'
export const useLanguage = () => {
  const { language } = useAppContext() as any
  const [languageData, setLanguageData] = useState<any>({});

  useLayoutEffect(() => {
    const languages: {es: any, us: any} = { es: es, us: us };
    const parseLan = language && language.split("-")[1].toLowerCase();
    setLanguageData((languages as any)[parseLan?.toLowerCase() || 'en']);
  }, [language]);

  const t = (str: string) => {
    return languageData[str] || str;
  }

  return {
    language,
    languageData,
    t
  };
}