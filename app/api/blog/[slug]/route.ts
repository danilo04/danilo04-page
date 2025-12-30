import { getBlogPost } from "@/lib/mdx";
import { NextResponse } from "next/server";

export const runtime = 'edge';

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
    
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

