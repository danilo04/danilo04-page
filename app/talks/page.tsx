"use client";

import { FadeIn, SlideIn } from "@/components/animations";
import { Download, Play, Presentation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "@/lib/use-translations";

interface Talk {
  id: number;
  title: string;
  description: string;
  tags: string[];
  conference: string;
  thumbnail?: string;
  videoUrl?: string;
  deckPath: string;
}

// Static talk data (non-translatable fields)
const talkMetadata = [
  {
    id: 1,
    tags: ["Mobile Development", "QA", "Testing", "Open Source", "Best Practices"],
    conference: "FLISOL - Panama 2025",
    videoUrl: "https://www.youtube.com/watch?v=8jaxz3kadOg&t=429s",
    deckPath: "/talks/flisol-2025-tools-mobile-dev.pdf",
    thumbnail: "/talks/flisol-2025-tools-mobile-dev.png",
  },
  {
    id: 2,
    tags: ["Mobile Development", "Kotlin", "Coroutines", "Android"],
    conference: "FLISOL - Panama 2022",
    deckPath: "/talks/flisol-2023-kotlin-coroutines.pdf",
    thumbnail: "/talks/flisol-2023-kotlin-coroutines.png",
  },
];

export default function Talks() {
  const t = useTranslations();

  // Combine translatable content with static metadata
  const talks: Talk[] = talkMetadata.map((metadata, index) => ({
    ...metadata,
    title: t.talks.list[index].title,
    description: t.talks.list[index].description,
  }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <FadeIn>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white">{t.talks.title}</h1>
        <p className="text-xl text-gray-600 dark:text-white mb-12">
          {t.talks.description}
        </p>
      </FadeIn>

      {/* Talks Grid */}
      <div className="grid gap-10">
        {talks.map((talk, index) => (
          <SlideIn
            key={talk.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow flex">
              {/* Thumbnail */}
              {talk.thumbnail && (
                <div className="relative w-48 h-48 flex-shrink-0 bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={talk.thumbnail}
                    alt={talk.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-8 flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{talk.title}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {talk.conference}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {talk.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {talk.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href={talk.deckPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors font-medium"
                  >
                    <Presentation className="w-5 h-5" />
                    {t.talks.deck}
                  </Link>
                  {talk.videoUrl && (
                    <Link
                      href={talk.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                    >
                      <Play className="w-5 h-5" />
                      {t.talks.watch}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SlideIn>
        ))}
      </div>

      {/* Empty State */}
      {talks.length === 0 && (
        <FadeIn>
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t.talks.empty}
            </p>
          </div>
        </FadeIn>
      )}

      {/* CTA */}
      <FadeIn delay={0.5}>
        <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t.talks.cta.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t.talks.cta.description}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Presentation className="w-5 h-5" />
            {t.talks.cta.getInTouch}
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
