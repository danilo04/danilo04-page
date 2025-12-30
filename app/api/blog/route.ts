import { getBlogPosts } from "@/lib/mdx";
import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const { searchParams } = url;
    const language = (searchParams.get("language") || "en") as "en" | "es";
    const baseUrl = `${url.protocol}//${url.host}`;
    const posts = await getBlogPosts(language, baseUrl);
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json([], { status: 500 });
  }
}
