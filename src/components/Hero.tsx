"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, ChevronDown } from "lucide-react";

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
  {
    icon: MessageCircle,
    href: "https://wa.me/923107322554?text=Hi%20Rehan%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
    label: "WhatsApp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <>
      {/* First Screen — Only heading, tagline, description, buttons, and scroll indicator */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent-purple/[0.08] to-accent-purple-dark/[0.05] blur-[120px] animate-pulse-glow pointer-events-none" />

        {/* Top Spacer */}
        <div className="flex-1" />

        {/* Main Content */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            {/* Available Badge */}
           <motion.div
           variants={itemVariants}
           className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] mb-10 mt-0 sm:mt-14"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-sm text-text-secondary font-medium">
           Available for Work
           </span>
           </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-extrabold leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-white">Muhammad</span>
              <br />
              <span className="gradient-text">Rehan</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-6 max-w-2xl"
            >
              Designing fast, responsive web experiences from concept to code.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-text-secondary leading-relaxed mb-12 max-w-2xl"
            >
              Specialized in transforming Figma designs and rough ideas into
              pixel-perfect, high-performance websites, landing pages, and web
              applications with clean architecture and seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-xl gradient-bg text-white font-semibold text-sm tracking-wide shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/40 transition-shadow duration-300"
              >
                Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm tracking-wide hover:border-accent-purple/50 hover:bg-white/[0.03] transition-all duration-300"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="flex-1" />

        {/* Scroll Indicator — Fixed at the very bottom of the screen */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="pb-4 sm:pb-10 ml-0 mt-4 sm:mt-4"
        >
          <motion.a
  href="#social-section"
  onClick={(e) => {
    e.preventDefault();
    document
      .querySelector("#social-section")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="flex flex-col items-center text-text-muted hover:text-accent-purple transition-colors cursor-pointer"
>
  <ChevronDown size={20} className="scroll-indicator" />
</motion.a>
        </motion.div>
      </section>

      {/* Second Section — Social Icons (below the fold, user has to scroll to see) */}
      <section id="social-section" className="relative pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <p className="text-sm font-medium uppercase tracking-[3px] text-text-muted mb-8">
              Connect with me
            </p>

            <div className="flex items-center gap-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] text-text-secondary hover:text-accent-purple hover:border-accent-purple/30 hover:bg-accent-purple/[0.05] transition-all duration-300 hover:shadow-lg hover:shadow-accent-purple/10"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8">
              {socialLinks.map((social) => (
                <span
                  key={social.label}
                  className="text-xs text-text-muted font-medium"
                >
                  {social.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}