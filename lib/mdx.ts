import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  thumbnail?: string;
  content?: string;
}

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

async function getManifest(baseUrl: string = ""): Promise<BlogManifest | null> {
  try {
    // Construct absolute URL for Edge Runtime
    const manifestUrl = baseUrl
      ? `${baseUrl}/blog-data/manifest.json`
      : "/blog-data/manifest.json";
    
    const response = await fetch(manifestUrl, {
      cache: "force-cache", // Cache the manifest
    });

    if (!response.ok) {
      console.error("Failed to fetch blog manifest:", response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching blog manifest:", error);
    return null;
  }
}

export async function getBlogPosts(language: "en" | "es" = "en", baseUrl: string = ""): Promise<BlogPost[]> {
  const manifest = await getManifest(baseUrl);
  
  if (!manifest) {
    return [];
  }

  // Filter posts by language
  const posts = manifest.posts
    .filter((post) => post.language === language)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      author: post.author,
      thumbnail: post.thumbnail,
    }))
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return posts;
}

export async function getBlogPost(slug: string, language: "en" | "es" = "en", baseUrl: string = ""): Promise<BlogPost | null> {
  try {
    // Construct absolute URL for Edge Runtime
    const postUrl = baseUrl
      ? `${baseUrl}/blog-data/${slug}-${language}.json`
      : `/blog-data/${slug}-${language}.json`;
    
    let response = await fetch(postUrl, {
      cache: "force-cache",
    });

    // Fallback to English if Spanish version doesn't exist
    if (!response.ok && language === "es") {
      const englishUrl = baseUrl
        ? `${baseUrl}/blog-data/${slug}-en.json`
        : `/blog-data/${slug}-en.json`;
      response = await fetch(englishUrl, {
        cache: "force-cache",
      });
    }

    if (!response.ok) {
      return null;
    }

    const jsonData = await response.json();
    const { content: fileContent, html } = jsonData;
    
    // Use HTML if available, otherwise parse markdown
    let content: string;
    if (html) {
      content = html;
    } else {
      // Fallback: parse markdown from fileContent
      const { data, content: markdownContent } = matter(fileContent);
      content = markdownContent;
    }
    
    // Parse frontmatter for metadata
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString(),
      author: data.author || "Unknown",
      thumbnail: data.thumbnail || undefined,
      content,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
