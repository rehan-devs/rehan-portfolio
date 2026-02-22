"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useInView as useIntersectionView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { Zap, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Zap,
    number: 50,
    suffix: "+",
    label: "PROJECTS COMPLETED",
    description: "Websites, landing pages & web apps delivered",
  },
  {
    icon: Users,
    number: 30,
    suffix: "+",
    label: "HAPPY CLIENTS",
    description: "Across freelance & collaborative projects",
  },
  {
    icon: Clock,
    number: 100,
    suffix: "%",
    label: "ON-TIME DELIVERY",
    description: "Consistent, deadline-driven execution",
  },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const { ref, inView } = useIntersectionView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative p-8 rounded-2xl bg-bg-card border border-white/[0.05] hover:border-accent-purple/30 transition-all duration-300 card-glow overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/[0.05] rounded-full blur-[60px] group-hover:bg-accent-purple/[0.1] transition-all duration-500" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-5 inline-flex p-3 rounded-xl bg-accent-purple/10 text-accent-purple group-hover:bg-accent-purple/20 transition-colors">
          <stat.icon size={24} />
        </div>

        {/* Number */}
        <div className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text-static">
          {inView ? (
            <CountUp
              start={0}
              end={stat.number}
              duration={2.5}
              separator=","
              suffix={stat.suffix}
            />
          ) : (
            `0${stat.suffix}`
          )}
        </div>

        {/* Label */}
        <div className="text-xs font-semibold uppercase tracking-[2px] text-text-secondary mb-2">
          {stat.label}
        </div>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-10 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Command Center"
          subtitle="Delivery metrics & client impact"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}