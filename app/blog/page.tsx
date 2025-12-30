"use client";

import { FadeIn, SlideIn } from "@/components/animations";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Calendar, User } from "lucide-react";
import { useTranslations } from "@/lib/use-translations";
import { useLanguage } from "@/components/language-provider";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnail?: string;
}

export default function Blog() {
  const t = useTranslations();
  const { language } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(`/api/blog?language=${language}`);
        const data = await res.json();
        setPosts(data);
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
      {/* Header */}
      <FadeIn>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">{t.blog.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          {t.blog.description}
        </p>
      </FadeIn>

      {/* Posts */}
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
        <div className="space-y-8">
          {posts.map((post, index) => (
            <SlideIn key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow overflow-hidden">
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
                      <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
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
    </div>
  );
}
