interface Env {
  DB: D1Database;
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split("/");

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
