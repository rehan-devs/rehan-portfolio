"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    icon: Code2,
    title: "Front End Developer",
    subtitle: "Freelancer",
    bullets: [
      "Built and maintained 25+ responsive client websites using React, Tailwind CSS, and modern JavaScript",
      "Converted Figma and PSD designs into pixel-perfect, cross-browser compatible websites",
      "Reduced average page load time by 40% through image optimization, lazy loading, and code splitting",
      "Implemented SEO best practices resulting in improved search rankings for client websites",
    ],
  },
  {
    icon: Briefcase,
    title: "Web Developer",
    subtitle: "",
    bullets: [
      "Developed 30+ websites for local businesses including restaurants, clinics, real estate agencies, and startups",
      "Handled full project lifecycle from initial consultation to deployment and post-launch support",
      "Integrated third-party APIs including Google Maps, payment gateways, and social media feeds",
      "Managed hosting setup, domain configuration, and SSL installation for all client projects",
    ],
  },
  {
    icon: GraduationCap,
    title: "BS Software Engineering",
    subtitle: "University Of The Punjab",
    period: "2020 — 2024",
    bullets: [
      "Specialized in modern front-end development & scalable architecture",
      "Built multiple responsive websites and web applications with performance and usability at the core",
      "Strong focus on clean code, UI/UX precision, and component-driven design systems",
      "Continuously sharpening skills in web technologies, performance optimization, and scalable solutions",
    ],
  },
];

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-24" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="My Story"
          subtitle="A journey of crafting responsive, high-performance web experiences from idea to production."
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple/50 via-accent-purple/20 to-transparent hidden sm:block" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-8 w-[18px] h-[18px] rounded-full border-[3px] border-accent-purple bg-bg-primary z-10 hidden sm:block">
                  <div className="absolute inset-1 rounded-full bg-accent-purple animate-pulse" />
                </div>

                {/* Content Card */}
                <div
                  className={`sm:pl-14 md:pl-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right md:w-1/2"
                      : "md:pl-16 md:text-left md:w-1/2 md:ml-auto"
                  }`}
                >
                  <div className="p-6 md:p-8 rounded-2xl bg-bg-card border border-white/[0.05] hover:border-accent-purple/20 transition-all duration-300 card-glow group">
                    {/* Icon */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <div className="p-2.5 rounded-xl bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple/20 transition-colors">
                        <exp.icon size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.title}
                    </h3>
                    {exp.subtitle && (
                      <p className="text-accent-purple font-medium text-sm mb-1">
                        {exp.subtitle}
                      </p>
                    )}
                    {exp.period && (
                      <p className="text-text-muted text-sm mb-4">
                        {exp.period}
                      </p>
                    )}
                    {!exp.period && !exp.subtitle && <div className="mb-4" />}
                    {!exp.period && exp.subtitle && <div className="mb-4" />}

                    {/* Bullets */}
                    <ul
                      className={`space-y-3 ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {exp.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className={`flex gap-3 text-text-secondary text-sm leading-relaxed ${
                            index % 2 === 0
                              ? "md:flex-row-reverse md:text-right"
                              : ""
                          }`}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-purple/60 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}