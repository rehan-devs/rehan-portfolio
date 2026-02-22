"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiGooglechrome,
  SiWordpress,
  SiElementor,
  SiNetlify,
  SiVercel,
  SiGreensock,
} from "react-icons/si";
import {
  Monitor,
  Search,
  Globe,
  Plug,
  Smartphone,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: Code2, color: "#007ACC", isLucide: true },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Chrome DevTools", icon: SiGooglechrome, color: "#4285F4" },
    ],
  },
  {
    category: "Platforms",
    skills: [
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      { name: "Elementor", icon: SiElementor, color: "#92003B" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Responsive Design", icon: Smartphone, color: "#8b5cf6", isLucide: true },
      { name: "SEO", icon: Search, color: "#22c55e", isLucide: true },
      { name: "REST APIs", icon: Plug, color: "#f59e0b", isLucide: true },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Cross-Browser", icon: Globe, color: "#06b6d4", isLucide: true },
    ],
  },
];

function SkillCard({
  skill,
  index,
  categoryIndex,
}: {
  skill: any;
  index: number;
  categoryIndex: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-30px" });

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 0.8 }
      }
      transition={{
        duration: 0.4,
        delay: categoryIndex * 0.1 + index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4, scale: 1.05 }}
      className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-bg-card border border-white/[0.05] hover:border-accent-purple/30 transition-all duration-300 card-glow cursor-default"
    >
      <div
        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        <Icon
          size={skill.isLucide ? 24 : undefined}
          className={`${!skill.isLucide ? "text-2xl" : ""} transition-colors duration-300`}
          style={{ color: skill.color }}
        />
      </div>
      <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-10 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="TECH Stack"
          accentWord="TECH"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="text-sm font-semibold uppercase tracking-[3px] text-text-muted mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-px bg-accent-purple/40" />
                {category.category}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    categoryIndex={catIndex}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}