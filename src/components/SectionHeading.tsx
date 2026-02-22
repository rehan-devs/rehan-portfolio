"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accentWord?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  accentWord,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (accentWord) {
      const parts = title.split(accentWord);
      return (
        <>
          {parts[0]}
          <span className="gradient-text-static">{accentWord}</span>
          {parts[1] || ""}
        </>
      );
    }
    return title;
  };

  return (
    <AnimatedSection className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold tracking-tight mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}