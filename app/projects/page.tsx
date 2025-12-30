"use client";

import { FadeIn, SlideIn } from "@/components/animations";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/lib/use-translations";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product filtering, and secure payment processing.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A real-time task management application with drag-and-drop functionality, team collaboration, and notifications.",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "An interactive dashboard for visualizing complex data with charts, real-time updates, and custom reports.",
    tags: ["Next.js", "Chart.js", "TypeScript", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "AI Content Generator",
    description:
      "An AI-powered content generation tool integrated with OpenAI API for creating blog posts, social media content, and more.",
    tags: ["React", "OpenAI", "TypeScript", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const t = useTranslations();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <FadeIn>
        <h1 className="text-5xl font-bold tracking-tight mb-4">{t.projects.title}</h1>
        <p className="text-xl mb-12">
          {t.projects.description}
        </p>
      </FadeIn>

      {/* Projects Grid */}
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <SlideIn
            key={project.id}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={index * 0.1}
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                  <p className="mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  {t.projects.code}
                </Link>
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t.projects.live}
                  </Link>
                )}
              </div>
            </div>
          </SlideIn>
        ))}
      </div>

      {/* CTA */}
      <FadeIn delay={0.5}>
        <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{t.projects.cta.title}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {t.projects.cta.description}
          </p>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            <Github className="w-5 h-5" />
            {t.projects.cta.visitGitHub}
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
