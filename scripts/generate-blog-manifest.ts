import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const OUTPUT_DIR = path.join(process.cwd(), "public", "blog-data");
const MANIFEST_FILE = path.join(OUTPUT_DIR, "manifest.json");

interface BlogPostManifest {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnail?: string;
  language: "en" | "es";
}

interface BlogManifest {
  posts: BlogPostManifest[];
}

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

async function generateManifest(): Promise<void> {
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`Blog directory not found: ${BLOG_DIR}`);
    return;
  }

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) =>
    file.endsWith(".mdx")
  );

  const manifest: BlogManifest = { posts: [] };

  for (const file of files) {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content: markdownContent } = matter(fileContent);

    // Determine language and slug
    const isSpanish = file.includes(".es.mdx");
    const language: "en" | "es" = isSpanish ? "es" : "en";
    const slug = isSpanish
      ? file.replace(".es.mdx", "")
      : file.replace(".mdx", "");

    // Convert markdown to HTML
    const htmlContent = await marked(markdownContent);

    // Save individual post content (store both markdown and HTML)
    const postContentFile = path.join(OUTPUT_DIR, `${slug}-${language}.json`);
    fs.writeFileSync(
      postContentFile,
      JSON.stringify({ 
        content: fileContent, // Keep original for compatibility
        html: htmlContent // Add HTML version
      }, null, 2)
    );

    // Add to manifest
    manifest.posts.push({
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Unknown",
      thumbnail: data.thumbnail || undefined,
      language,
    });
  }

  // Sort by date (newest first)
  manifest.posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Write manifest
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  console.log(`✅ Generated blog manifest with ${manifest.posts.length} posts`);
}

generateManifest().catch((error) => {
  console.error("Error generating blog manifest:", error);
  process.exit(1);
});

