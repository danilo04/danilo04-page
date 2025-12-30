"use client";

import { useTranslations } from "@/lib/use-translations";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Danilo Dominguez. {t.footer.copyright}
          </p>    
        </div>
      </div>
    </footer>
  );
}
