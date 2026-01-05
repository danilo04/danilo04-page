import { translations } from "../translations";
import { useLanguage } from "../components/language-provider";

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}

