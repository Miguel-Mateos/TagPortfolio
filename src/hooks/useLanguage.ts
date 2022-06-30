import { useAppContext } from "../Context/ContextApi";
import { useEffect, useState } from "react";

export const useLanguage = () => {
  const { language } = useAppContext() as any
  const [languageData, setLanguageData] = useState<any>({});

  useEffect(() => {
    const parseLan = language.split("-")[1].toLowerCase();
    const languageData = async () => await import(`../language/${parseLan}/index.ts`);
    languageData().then(data => setLanguageData(data));
    setLanguageData(languageData);
  }, [language]);

  console.log(languageData[language.split("-")[1].toLowerCase()]);
  return {
    language,
    languageData
  };
}