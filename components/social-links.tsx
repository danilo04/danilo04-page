import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/danilo04",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/danilo-dominguez/",
    label: "LinkedIn",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com/danilo04",
    label: "Twitter",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:danilo.dominguez.0416@gmail.com",
    label: "Email",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          aria-label={link.label}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
