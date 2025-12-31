import { getBlogPost } from "@/lib/mdx";
import { NextResponse } from "next/server";
import { marked } from "marked";

export const runtime = 'edge';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const url = new URL(request.url);
    const { searchParams } = url;
    const language = (searchParams.get("language") || "en") as "en" | "es";
    const baseUrl = `${url.protocol}//${url.host}`;
    const post = await getBlogPost(slug, language, baseUrl);
    
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    
    // Convert markdown content to HTML if not already HTML
    // (HTML content is now generated at build time, but this serves as a fallback)
    if (post.content && !post.content.trim().startsWith('<')) {
      post.content = await marked(post.content);
    }
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

