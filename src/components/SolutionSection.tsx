import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";

export function SolutionSection() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("solution.features.web.title"),
      desc: t("solution.features.web.desc"),
    },
    {
      title: t("solution.features.mobile.title"),
      desc: t("solution.features.mobile.desc"),
    },
    {
      title: t("solution.features.game.title"),
      desc: t("solution.features.game.desc"),
    },
    {
      title: t("solution.features.strategy.title"),
      desc: t("solution.features.strategy.desc"),
    },
  ];

  return (
    <section id="who-are-we" className="border-t border-border/30 py-32 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.span 
          {...fadeUp(0.1)}
          className="text-xs tracking-[3px] uppercase text-white/40 mb-6 block"
        >
          {t("solution.label")}
        </motion.span>
        
        <motion.h2 
          {...fadeUp(0.2)}
          className="text-5xl md:text-7xl font-medium tracking-tightest leading-tight mb-16"
        >
          <Trans i18nKey="solution.title">
         Özelleştirilmiş kişiye özel  <span className="font-serif italic font-normal"></span> Yazılımlar
          </Trans>
        </motion.h2>

        <motion.div 
          {...fadeUp(0.3)}
          className="w-full mb-24 rounded-2xl overflow-hidden border border-border/20 shadow-2xl"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full aspect-[3/1] object-cover"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={feature.title}
              {...fadeUp(0.1 * i + 0.4)}
              className="flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
