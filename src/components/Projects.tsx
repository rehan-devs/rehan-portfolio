"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    name: "Flowsync — SaaS Landing Page",
    tags: ["React", "Tailwind CSS", "GSAP"],
    image: "/projects/flowsync.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-600/20 to-blue-600/20",
    accentColor: "purple",
  },
  {
    name: "Aurum — Restaurant Website",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/aurum.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-600/20 to-red-600/20",
    accentColor: "orange",
  },
  {
    name: "Nexus — Digital Agency",
    tags: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    image: "/projects/nexus.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-600/20 to-purple-600/20",
    accentColor: "cyan",
  },
  {
    name: "Stride — E-commerce Platform",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/stride.png",
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-600/20 to-teal-600/20",
    accentColor: "green",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-bg-card border border-white/[0.05] hover:border-accent-purple/30 overflow-hidden transition-all duration-300 card-glow"
    >
      {/* Project Thumbnail */}
<div
  className={`relative h-48 md:h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}
>
  {project.image ? (
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <>
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white/[0.08] flex items-center justify-center">
              <ExternalLink size={20} className="text-white/40" />
            </div>
            <p className="text-white/30 text-sm font-medium">Preview</p>
          </div>
        </div>
      </div>
    </>
  )}

  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-accent-purple/0 group-hover:bg-accent-purple/[0.05] transition-colors duration-300" />
</div>

      {/* Content */}
      <div className="p-6">
        {/* Project Name */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-4 group-hover:text-accent-purple transition-colors duration-300">
          {project.name}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/[0.05] text-text-secondary border border-white/[0.05] hover:border-accent-purple/20 hover:text-accent-purple transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium gradient-bg text-white hover:shadow-lg hover:shadow-accent-purple/20 transition-shadow duration-300"
          >
            <ExternalLink size={14} />
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-white/[0.1] text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Github size={14} />
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="PROJECTS"
          subtitle="A selection of projects I've built and shipped."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}