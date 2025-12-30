"use client";

import Link from "next/link";
import { FadeIn, SlideIn } from "@/components/animations";
import { SocialLinks } from "@/components/social-links";
import { ArrowRight, Calendar, User } from "lucide-react";
import { useTranslations } from "@/lib/use-translations";
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnail?: string;
}

export default function Home() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`/api/blog?language=${language}`);
        const data = await res.json();
        // Get only the first 2 posts for the featured section
        setPosts(data.slice(0, 2));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [language]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-200px)] flex flex-col justify-center gap-8">
        <FadeIn>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {t.home.hero.greeting} <span className="text-blue-600 dark:text-blue-400">Danilo Dominguez</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed space-y-4">
            <p>{t.home.hero.subtitle1}</p>
            <p>{t.home.hero.subtitle2}</p>
            <p>{t.home.hero.subtitle3}</p>
            <p>{t.home.hero.subtitle4}</p>
            <p>{t.home.hero.subtitle5}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex gap-4 items-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              {t.home.hero.viewWork}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors font-medium text-gray-900 dark:text-gray-100"
            >
              {t.home.hero.learnMore}
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="pt-8">
            <SocialLinks />
          </div>
        </FadeIn>
      </section>

      {/* Featured Blog Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{t.blog.title}</h2>
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium flex items-center gap-2"
            >
              {t.home.featured.learnMore.replace("→", "")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">{t.blog.loading}</p>
          </div>
        ) : posts.length === 0 ? (
          <FadeIn>
            <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t.blog.empty.title}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {t.blog.empty.description}
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <SlideIn key={post.slug} direction={index % 2 === 0 ? "right" : "left"}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg hover:shadow-lg transition-shadow h-full overflow-hidden">
                      {post.thumbnail && (
                        <div className="w-full h-48 overflow-hidden">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.description}
                        </p>
                        <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </SlideIn>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-800">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{t.home.cta.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              {t.home.cta.description}
            </p>
            <Link
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              {t.home.cta.getInTouch}
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
