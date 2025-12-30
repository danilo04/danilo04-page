"use client";

import { FadeIn } from "@/components/animations";
import { Code2, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "@/lib/use-translations";

interface Skill {
  category: string;
  items: string[];
}

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string | string[];
}

// Skills data - keeping technical terms in English as they're universal
const skillItems = {
  mobile: ["Kotlin", "Java", "Android", "Cross-Platform Development", "Privacy-Focused Solutions", "Native Apps", "Local-first Architecture"],
  backend: ["Python", "Ruby on Rails", "Java", "Kotlin", "Sync Engines", "REST APIs", "Network Protocols", "Encryption", "Scalable Systems", "Architectural Patterns"],
  tools: ["Static Analysis", "Git & GitHub", "Docker", "AWS, GCP", "CI/CD", "Security", "Performance Optimization", "Team Leadership"],
};


export default function About() {
  const t = useTranslations();
  
  const skills: Skill[] = [
    {
      category: t.about.skills.categories.mobile,
      items: skillItems.mobile,
    },
    {
      category: t.about.skills.categories.backend,
      items: skillItems.backend,
    },
    {
      category: t.about.skills.categories.tools,
      items: skillItems.tools,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <FadeIn>
        <h1 className="text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100">{t.about.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
          {t.about.subtitle}
        </p>
      </FadeIn>

      {/* Bio */}
      <section className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-16">
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg ring-2 ring-gray-200 dark:ring-gray-700 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <Image
                  src="/danilo-cartoon.png"
                  alt="Danilo Dominguez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-lg text-gray-700 dark:text-gray-300">
              <p>
                {t.about.bio.p1}
              </p>
              <p>
                {t.about.bio.p2}
              </p>
              <p>
                {t.about.bio.p3}
              </p>
              <p>
                {t.about.bio.p4}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Skills */}
      <section className="mb-16 border-b border-gray-200 dark:border-gray-800 pb-16">
        <FadeIn delay={0.2}>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.about.skills.title}</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <FadeIn key={skill.category} delay={0.2 + index * 0.1}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <FadeIn delay={0.3}>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.about.experience.title}</h2>
        </FadeIn>

        <div className="space-y-8">
          {t.about.experience.list.map((exp, index) => (
            <FadeIn key={exp.company + exp.title} delay={0.3 + index * 0.1}>
              <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400 transition-all duration-300 hover:shadow-md hover:from-blue-100 dark:hover:from-blue-900/30">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <div className="flex-1">
                    {exp.title && (
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1">{exp.title}</h3>
                    )}
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    {exp.location && (
                      <p className="text-sm text-gray-600 dark:text-gray-500 mt-1">
                        {exp.location}
                      </p>
                    )}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap sm:ml-4 font-medium">
                    {exp.period}
                  </span>
                </div>
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  {Array.isArray(exp.description) ? (
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.description}</p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section>
        <FadeIn delay={0.5}>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">{t.about.values.title}</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Code2 className="w-8 h-8" />,
              title: t.about.values.security.title,
              description: t.about.values.security.description,
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: t.about.values.leadership.title,
              description: t.about.values.leadership.description,
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: t.about.values.scalability.title,
              description: t.about.values.scalability.description,
            },
          ].map((value, index) => (
            <FadeIn key={value.title} delay={0.5 + index * 0.1}>
              <div className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900/50 hover:shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mb-4 transition-all duration-300 hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
