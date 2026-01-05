import { useLanguage } from "./language-provider";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle language"
      title={language === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      <div className="flex items-center gap-1.5">
        <Globe className="h-5 w-5" />
        <span className="text-sm font-medium uppercase">{language}</span>
      </div>
    </button>
  );
}