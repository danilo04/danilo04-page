import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

function generateManifest(): void {
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

  files.forEach((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    // Determine language and slug
    const isSpanish = file.includes(".es.mdx");
    const language: "en" | "es" = isSpanish ? "es" : "en";
    const slug = isSpanish
      ? file.replace(".es.mdx", "")
      : file.replace(".mdx", "");

    // Save individual post content
    const postContentFile = path.join(OUTPUT_DIR, `${slug}-${language}.json`);
    fs.writeFileSync(
      postContentFile,
      JSON.stringify({ content: fileContent }, null, 2)
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
  });

  // Sort by date (newest first)
  manifest.posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Write manifest
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(manifest, null, 2));
  console.log(`✅ Generated blog manifest with ${manifest.posts.length} posts`);
}

generateManifest();

