interface Env {
  DB: D1Database;
  ASSETS_BUCKET: R2Bucket;
}

const SITE_URL = "https://danilo04.dev";

// ----- Blog post metadata for social sharing (OG / Twitter Cards) -----
interface PostMeta {
  title: string;
  summary: string;
  coverImage: string;
  author: string;
  date: string;
}

// Each post has English and Spanish variants
const POSTS_META: Record<string, { en: PostMeta; es: PostMeta }> = {
  "reactive-android-kotlin-flows": {
    en: {
      title: "Building Reactive Android Apps with Kotlin Flows",
      summary:
        "A deep dive into using Kotlin Flows to build reactive, responsive Android applications. Learn how to handle asynchronous data streams effectively.",
      coverImage:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=630&fit=crop",
      author: "Danilo Dominguez",
      date: "2026-01-06",
    },
    es: {
      title: "Construyendo Apps Android Reactivas con Kotlin Flows",
      summary:
        "Una inmersión profunda en el uso de Kotlin Flows para construir aplicaciones Android reactivas y responsivas. Aprende a manejar flujos de datos asíncronos de manera efectiva.",
      coverImage:
        "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1200&h=630&fit=crop",
      author: "Danilo Dominguez",
      date: "2026-01-06",
    },
  },
  "software-quality-mobile-apps": {
    en: {
      title: "The importance of quality in mobile app development",
      summary:
        "In this article, we will explore the importance of quality in mobile app development and how we can improve the quality of our applications.",
      coverImage: `${SITE_URL}/software-quality-mobile-header.svg`,
      author: "Danilo Dominguez",
      date: "2026-01-14",
    },
    es: {
      title:
        "La importancia de la calidad en el desarrollo de aplicaciones móviles",
      summary:
        "En este artículo, exploraremos la importancia de la calidad en el desarrollo de aplicaciones móviles y cómo podemos mejorar la calidad de nuestras aplicaciones.",
      coverImage: `${SITE_URL}/software-quality-mobile-header.svg`,
      author: "Danilo Dominguez",
      date: "2026-01-14",
    },
  },
  "zoom-and-other-effects-compose": {
    en: {
      title: "Zoom and other effects in Compose",
      summary:
        "In this article, we will explore the effects such as pinch zoom and panning in Compose.",
      coverImage: `${SITE_URL}/zoom-compose-cover.png`,
      author: "Danilo Dominguez",
      date: "2026-01-23",
    },
    es: {
      title: "Zoom y otros efectos en Compose",
      summary:
        "En este artículo, exploraremos los efectos como el zoom con pellizco y el desplazamiento (panning) en Compose.",
      coverImage: `${SITE_URL}/zoom-compose-cover.png`,
      author: "Danilo Dominguez",
      date: "2026-01-23",
    },
  },
};

// Social-media and messaging-app crawlers that read OG / Twitter Card tags
const CRAWLER_UA_PATTERNS = [
  "Twitterbot",
  "facebookexternalhit",
  "LinkedInBot",
  "WhatsApp",
  "Slackbot",
  "TelegramBot",
  "Discordbot",
  "Embedly",
  "Quora Link Preview",
  "Showyoubot",
  "outbrain",
  "Pinterest",
  "vkShare",
  "W3C_Validator",
  "Baiduspider",
  "Googlebot",
];

function isCrawler(userAgent: string | null): boolean {
  if (!userAgent) return false;
  return CRAWLER_UA_PATTERNS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Build a minimal HTML page with the correct OG / Twitter Card meta tags.
 * Crawlers only read <head> meta; they don't need the full SPA bundle.
 * A <meta http-equiv="refresh"> redirects real browsers that somehow land here.
 */
function buildCrawlerHtml(
  post: PostMeta,
  slug: string,
  lang: "en" | "es"
): string {
  const pageUrl = `${SITE_URL}/blog/${slug}`;
  const fullTitle = `${escapeHtml(post.title)} | Danilo Dominguez`;
  const description = escapeHtml(post.summary);
  const image = escapeHtml(post.coverImage);
  const locale = lang === "es" ? "es_ES" : "en_US";

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullTitle}</title>
  <meta name="description" content="${description}">
  <meta name="author" content="${escapeHtml(post.author)}">
  <link rel="canonical" href="${pageUrl}">
  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Danilo Dominguez">
  <meta property="og:title" content="${fullTitle}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:image" content="${image}">
  <meta property="og:locale" content="${locale}">
  <meta property="article:published_time" content="${post.date}">
  <meta property="article:author" content="${escapeHtml(post.author)}">
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@danilo04">
  <meta name="twitter:title" content="${fullTitle}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <!-- Redirect real browsers to the SPA -->
  <meta http-equiv="refresh" content="0;url=${pageUrl}">
</head>
<body>
  <p>Redirecting to <a href="${pageUrl}">${escapeHtml(post.title)}</a>…</p>
</body>
</html>`;
}

// Map of public URL paths to R2 object keys
const R2_MEDIA_FILES: Record<string, string> = {
  "/media/sample-app-graphics-layer.mp4": "sample-app-graphics-layer.mp4",
  "/media/touch-events-setup.GIF": "touch-events-setup.GIF",
};

const CONTENT_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".gif": "image/gif",
  ".GIF": "image/gif",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");
    const userAgent = request.headers.get("User-Agent");

    // --- Social-media crawler interception for blog posts ---
    // Serve pre-rendered meta tags so OG / Twitter Cards show the right
    // title, description, and thumbnail when links are shared.
    const blogPostMatch = url.pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/);
    if (blogPostMatch && isCrawler(userAgent)) {
      const slug = blogPostMatch[1];
      const postMeta = POSTS_META[slug];
      if (postMeta) {
        const langParam = url.searchParams.get("lang");
        const lang: "en" | "es" =
          langParam === "es" ? "es" : "en";
        const html = buildCrawlerHtml(postMeta[lang], slug, lang);
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    }

    // Serve media files from R2
    if (url.pathname.startsWith("/media/")) {
      const objectKey = R2_MEDIA_FILES[url.pathname];
      if (!objectKey) {
        return new Response("Not Found", { status: 404 });
      }

      const object = await env.ASSETS_BUCKET.get(objectKey);
      if (!object) {
        return new Response("Not Found", { status: 404 });
      }

      const ext = objectKey.substring(objectKey.lastIndexOf("."));
      const contentType = CONTENT_TYPES[ext] || "application/octet-stream";

      const headers = new Headers();
      headers.set("Content-Type", contentType);
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      headers.set("ETag", object.httpEtag);

      return new Response(object.body, { headers });
    }

    // API Routes: /api/posts/:slug/...
    if (url.pathname.startsWith("/api/posts/")) {
      const slug = pathParts[3];
      const action = pathParts[4];

      if (!slug) {
        return Response.json({ error: "Slug is required" }, { status: 400 });
      }

      // GET /api/posts/:slug/interactions
      if (request.method === "GET" && action === "interactions") {
        try {
          const likes = await env.DB.prepare(
            "SELECT count FROM post_likes WHERE post_slug = ?"
          ).bind(slug).first<{ count: number }>();

          const comments = await env.DB.prepare(
            "SELECT id, author_name, content, created_at FROM comments WHERE post_slug = ? ORDER BY created_at DESC"
          ).bind(slug).all();

          return Response.json({
            likes: likes?.count || 0,
            comments: comments.results || [],
          });
        } catch (error: any) {
          return Response.json({ error: error.message }, { status: 500 });
        }
      }

      // POST /api/posts/:slug/like
      if (request.method === "POST" && action === "like") {
        try {
          await env.DB.prepare(`
            INSERT INTO post_likes (post_slug, count)
            VALUES (?, 1)
            ON CONFLICT(post_slug) DO UPDATE SET count = count + 1
          `).bind(slug).run();

          const result = await env.DB.prepare(
            "SELECT count FROM post_likes WHERE post_slug = ?"
          ).bind(slug).first<{ count: number }>();

          return Response.json({ likes: result?.count || 0 });
        } catch (error: any) {
          return Response.json({ error: error.message }, { status: 500 });
        }
      }

      // POST /api/posts/:slug/comments
      if (request.method === "POST" && action === "comments") {
        try {
          const { author_name, content } = await request.json() as { author_name: string, content: string };

          if (!author_name || !content) {
            return Response.json({ error: "Author name and content are required" }, { status: 400 });
          }

          const result = await env.DB.prepare(
            "INSERT INTO comments (post_slug, author_name, content) VALUES (?, ?, ?) RETURNING id, author_name, content, created_at"
          ).bind(slug, author_name, content).first();

          return Response.json(result, { status: 201 });
        } catch (error: any) {
          return Response.json({ error: error.message }, { status: 500 });
        }
      }
    }

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "danilo04-page-api",
        version: "1.0.0"
      });
    }

    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;
