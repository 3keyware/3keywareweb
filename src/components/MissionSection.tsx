import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import React from "react";
import { useTranslation } from "react-i18next";

export function MissionSection() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const missionText1 = t("mission.text1");
  const missionText2 = t("mission.text2");
  const highlightWords = t("mission.highlights", { returnObjects: true }) as string[];

  return (
    <section id="mission" ref={containerRef} className="container mx-auto px-6 pt-0 pb-32 md:pb-44 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-32 overflow-hidden rounded-2xl relative group">
        {/* Top Gradient Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full aspect-square md:aspect-video object-cover transition-transform duration-1000 group-hover:scale-105"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-5xl text-center space-y-20">
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tightest leading-snug">
          {missionText1.split(" ").map((word, i) => {
            const isHighlighted = highlightWords.includes(word.replace(/[,.—]/g, "").toLowerCase());
            return (
              <Word 
                key={`${word}-${i}`} 
                progress={scrollYProgress} 
                range={[0.2 + (i * 0.005), 0.4 + (i * 0.005)]}
                className={isHighlighted ? "text-foreground" : "text-hero-subtitle"}
              >
                {word}
              </Word>
            );
          })}
        </div>

        <div className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed opacity-80">
          {missionText2.split(" ").map((word, i) => (
            <Word 
              key={`${word}-${i}`} 
              progress={scrollYProgress} 
              range={[0.5 + (i * 0.005), 0.7 + (i * 0.005)]}
              className="text-hero-subtitle"
            >
              {word}
            </Word>
          ))}
        </div>
      </div>
    </section>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
  className?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={`inline-block mr-[0.25em] ${className}`}>
      {children}
    </motion.span>
  );
};
