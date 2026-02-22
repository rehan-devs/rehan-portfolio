"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rehan-devs",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rehandevs/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:rennylifts@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-lg text-text-muted hover:text-accent-purple hover:bg-accent-purple/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -2 }}
            className="text-xs font-medium text-text-muted hover:text-accent-purple transition-colors uppercase tracking-widest"
          >
            Back to top ↑
          </motion.button>

          {/* Copyright */}
          <p className="text-sm text-text-muted text-center">
            © 2025 Muhammad Rehan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}