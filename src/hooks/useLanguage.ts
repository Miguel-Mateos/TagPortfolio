import { useAppContext } from "../Context/ContextApi";
import { useLayoutEffect, useState } from "react";

export const useLanguage = () => {
  const { language } = useAppContext() as any
  const [languageData, setLanguageData] = useState<any>({});

  useLayoutEffect(() => {
    const parseLan = language.split("-")[1].toLowerCase();
    const languageData = async () => await import(`../language/${parseLan}/index.ts`);
    languageData().then(data => setLanguageData(data[language.split("-")[1].toLowerCase()]));
    setLanguageData(languageData);
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