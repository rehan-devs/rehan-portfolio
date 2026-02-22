"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { SiFreecodecamp, SiHackerrank } from "react-icons/si";

const certifications = [
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2026",
    platform: "freecodecamp",
    icon: SiFreecodecamp,
    color: "#0A0A23",
    brandColor: "#ffffff",
  },
  {
    name: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    year: "2026",
    platform: "freecodecamp",
    icon: SiFreecodecamp,
    color: "#0A0A23",
    brandColor: "#ffffff",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    year: "2026",
    platform: "freecodecamp",
    icon: SiFreecodecamp,
    color: "#0A0A23",
    brandColor: "#ffffff",
  },
  {
    name: "CSS Certification",
    issuer: "HackerRank",
    year: "2026",
    platform: "hackerrank",
    icon: SiHackerrank,
    color: "#00EA64",
    brandColor: "#00EA64",
  },
  {
    name: "JavaScript Certification",
    issuer: "HackerRank",
    year: "2026",
    platform: "hackerrank",
    icon: SiHackerrank,
    color: "#00EA64",
    brandColor: "#00EA64",
  },
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    year: "2026",
    platform: "hackerrank",
    icon: SiHackerrank,
    color: "#00EA64",
    brandColor: "#00EA64",
  },
  {
    name: "Front End Developer (React)",
    issuer: "HackerRank",
    year: "2026",
    platform: "hackerrank",
    icon: SiHackerrank,
    color: "#00EA64",
    brandColor: "#00EA64",
  },
  {
    name: "Problem Solving",
    issuer: "HackerRank",
    year: "2026",
    platform: "hackerrank",
    icon: SiHackerrank,
    color: "#00EA64",
    brandColor: "#00EA64",
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-40px" });

  const Icon = cert.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-2xl bg-bg-card border border-white/[0.05] hover:border-accent-purple/30 transition-all duration-300 card-glow"
    >
      <div className="flex items-start gap-4">
        {/* Platform Icon */}
        <div
          className="flex-shrink-0 p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${cert.color}20` }}
        >
          <Icon
            className="text-xl"
            style={{ color: cert.brandColor }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-white mb-1 group-hover:text-accent-purple transition-colors duration-300">
            {cert.name}
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-text-secondary">{cert.issuer}</span>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">{cert.year}</span>
          </div>
        </div>

        {/* Badge */}
        <div className="flex-shrink-0">
          <div className="p-2 rounded-lg bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple/20 transition-colors">
            <Award size={16} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="CERTIFICATIONS"
          subtitle="Professional certifications and achievements validating my skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <CertCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}