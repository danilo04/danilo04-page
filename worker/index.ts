interface Env {
  DB: D1Database;
  ASSETS_BUCKET: R2Bucket;
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
