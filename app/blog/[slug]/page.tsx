"use client";

import { FadeIn } from "@/components/animations";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState, use } from "react";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useTranslations } from "@/lib/use-translations";
import { useLanguage } from "@/components/language-provider";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useTranslations();
  const { language } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/blog/${slug}?language=${language}`);
        if (res.ok) {
          const data = await res.json();
          setPost(data);
          setContent(data.content || "");
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug, language]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-center text-gray-600 dark:text-gray-400">
          {t.common.loading}
        </p>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.blog.back}
          </Link>
          <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t.blog.postNotFound}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {t.blog.postNotFoundDescription}
            </p>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <FadeIn>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.blog.back}
        </Link>

        <article className="prose dark:prose-invert max-w-none">
          {post && (
            <>
              <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{post.title}</h1>
              <div className="flex gap-4 text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
              </div>
            </>
          )}

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            {content ? (
              <div 
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <>
                <p className="text-gray-600 dark:text-gray-400">
                  {t.common.loading}
                </p>
              </>
            )}
          </div>
        </article>
      </FadeIn>
    </div>
  );
}
