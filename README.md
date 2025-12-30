# 🚀 Danilo's Portfolio

A modern, performant portfolio website built with Next.js, TypeScript, Tailwind CSS, and MDX for static blog content.

## ✨ Features

- **⚡ Next.js 16+** - Latest React framework with App Router
- **🎨 Tailwind CSS 4** - Utility-first CSS for rapid styling
- **📝 MDX Blog** - Write blog posts in Markdown with React components
- **🎭 Framer Motion** - Smooth animations and transitions
- **🎯 TypeScript** - Full type safety throughout the project
- **🌙 Dark Mode** - Built-in dark mode support
- **📱 Responsive** - Mobile-first, fully responsive design
- **⚙️ Lucide Icons** - Beautiful SVG icons

## 📁 Project Structure

```
.
├── app/
│   ├── about/                 # About page
│   ├── blog/                  # Blog pages
│   │   ├── page.tsx           # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx       # Individual blog post
│   ├── projects/              # Projects page
│   ├── api/
│   │   └── blog/
│   │       └── route.ts       # Blog API endpoint
│   ├── layout.tsx             # Root layout with navigation & footer
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── animations.tsx         # Framer Motion animation components
│   ├── footer.tsx             # Footer component
│   ├── navigation.tsx         # Navigation bar
│   └── social-links.tsx       # Social media links
├── content/
│   └── blog/
│       ├── framer-motion-guide.mdx
│       ├── nextjs-typescript-guide.mdx
│       └── tailwind-css-guide.mdx
├── lib/
│   ├── mdx.ts                 # MDX utilities and blog post fetching
│   └── utils.ts               # Utility functions (cn, formatDate)
└── public/                    # Static assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 Creating Blog Posts

Blog posts are MDX files located in `content/blog/`. Each post must have YAML frontmatter:

```mdx
---
title: "My First Blog Post"
description: "A brief description of the post"
date: "2024-11-19"
author: "Your Name"
---

# Your Blog Post Content

This is where your blog content goes...
```

### MDX Features

- ✅ Write in Markdown
- ✅ Use React components inside posts
- ✅ Syntax highlighting for code blocks
- ✅ Full TypeScript support

## 🎨 Customization

### Update Social Links
Edit `components/social-links.tsx` to add your social media profiles.

### Customize Navigation
Edit `components/navigation.tsx` to modify the navigation links.

### Update Projects
Edit `app/projects/page.tsx` and update the projects array with your projects.

### Modify About Page
Edit `app/about/page.tsx` to personalize your experience and skills.

## 🎭 Animation Components

### FadeIn
Fade in elements with optional delay:
```tsx
<FadeIn delay={0.2}>
  <h1>Hello World</h1>
</FadeIn>
```

### SlideIn
Slide in elements from left or right:
```tsx
<SlideIn direction="left" delay={0.1}>
  <p>Sliding content</p>
</SlideIn>
```

### StaggerContainer
Create staggered animations for child elements:
```tsx
<StaggerContainer staggerChildren={0.1}>
  {/* Children will animate with staggered delays */}
</StaggerContainer>
```

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

## 🔧 Development Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📚 Technology Stack

| Technology | Purpose |
|-----------|---------|
| [Next.js](https://nextjs.org/) | React framework with SSR/SSG |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Animation library |
| [MDX](https://mdxjs.com/) | Markdown + React |
| [Lucide React](https://lucide.dev/) | Icon library |
| [gray-matter](https://github.com/jonschlinkert/gray-matter) | YAML frontmatter parser |

## 🌐 Pages Overview

### Home (`/`)
Hero section with introduction, featured projects, and call-to-action.

### About (`/about`)
Personal bio, skills, experience, and values.

### Projects (`/projects`)
Showcase of your projects with links and technologies used.

### Blog (`/blog`)
List of blog posts with ability to view individual posts.

## 🚀 Performance

- **Optimized Images** - Automatic image optimization
- **Code Splitting** - Automatic code splitting per page
- **Static Generation** - Blog posts pre-rendered at build time
- **Dark Mode** - Efficient dark mode implementation
- **TypeScript** - Catch errors at compile time

## 📋 Next Steps

1. **Personalize Content** - Update social links, projects, and about information
2. **Add Blog Posts** - Create MDX files in `content/blog/`
3. **Customize Styling** - Modify `tailwind.config.ts` for your brand colors
4. **Deploy** - Deploy to Vercel, Netlify, or your preferred host

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 💡 Tips & Best Practices

- Use `@/` imports for cleaner import paths
- Keep components small and reusable
- Use TypeScript interfaces for better type safety
- Test animations in development before deploying
- Optimize images before adding to the project
- Use semantic HTML for better accessibility
- Test responsive design on mobile devices

## 🐛 Troubleshooting

### Blog posts not showing up?
- Ensure files are in `content/blog/` folder
- Check file extension is `.mdx`
- Verify frontmatter format is correct
- Restart development server

### Build errors?
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check TypeScript errors: `npm run build`

### Styling issues?
- Ensure Tailwind CSS is properly configured
- Check `tailwind.config.ts` exists
- Clear browser cache

---

**Happy coding! 🎉**
