"use client";

import { useLanguage } from "@/components/language-provider";
import { translations } from "./translations";

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
}

