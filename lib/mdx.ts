import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnail?: string;
  content?: string;
}

export async function getBlogPosts(language: "en" | "es" = "en"): Promise<BlogPost[]> {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR).filter((file) => {
    if (language === "en") {
      // For English, only include files that don't have .es. in the name
      return file.endsWith(".mdx") && !file.includes(".es.mdx");
    } else {
      // For Spanish, only include files that have .es.mdx
      return file.endsWith(".es.mdx");
    }
  });

  const posts: BlogPost[] = files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      // Extract base slug (remove .es.mdx or .mdx)
      const slug = language === "es" 
        ? file.replace(".es.mdx", "")
        : file.replace(".mdx", "");

      return {
        slug,
        title: data.title || "Untitled",
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        author: data.author || "Unknown",
        thumbnail: data.thumbnail || undefined,
      };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export async function getBlogPost(slug: string, language: "en" | "es" = "en"): Promise<BlogPost | null> {
  const fileName = language === "es" ? `${slug}.es.mdx` : `${slug}.mdx`;
  const filePath = path.join(BLOG_DIR, fileName);

  if (!fs.existsSync(filePath)) {
    // Fallback to English if Spanish version doesn't exist
    if (language === "es") {
      const englishPath = path.join(BLOG_DIR, `${slug}.mdx`);
      if (fs.existsSync(englishPath)) {
        const fileContent = fs.readFileSync(englishPath, "utf-8");
        const { data, content } = matter(fileContent);
        return {
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          author: data.author || "Unknown",
          thumbnail: data.thumbnail || undefined,
          content,
        };
      }
    }
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "Unknown",
    thumbnail: data.thumbnail || undefined,
    content,
  };
}
