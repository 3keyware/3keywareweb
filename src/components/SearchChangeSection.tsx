import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";

export function SearchChangeSection() {
  const { t } = useTranslation();

  const members = [
    {
      key: "K",
      name: "Kaan",
      role: t("members.kaan.role"),
      desc: t("members.kaan.desc"),
    },
    {
      key: "E",
      name: "Emin",
      role: t("members.emin.role"),
      desc: t("members.emin.desc"),
    },
    {
      key: "Y",
      name: "Yekta",
      role: t("members.yekta.role"),
      desc: t("members.yekta.desc"),
    },
  ];

  return (
    <section id="our-projects" className="container mx-auto px-6 pt-52 md:pt-64 pb-20 overflow-hidden">
      <div className="text-center max-w-5xl mx-auto mb-32">
        <motion.h2 
          {...fadeUp(0.1)}
          className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tightest mb-8 leading-[0.95]"
        >
          <Trans i18nKey="search.title">
            <span className="font-serif italic font-normal">evrildi.</span> Ya siz?
          </Trans>
        </motion.h2>
        <motion.p 
          {...fadeUp(0.2)}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {t("search.subtitle")}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-24">
        {members.map((member, i) => (
          <motion.div 
            key={member.name}
            {...fadeUp(0.1 * i + 0.3)}
            className="flex flex-col items-center text-center p-8 transition-all group"
          >
            <div className="w-48 h-48 mb-8 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
              <div className="w-32 h-32 relative z-10 liquid-glass rounded-2xl flex items-center justify-center text-5xl font-bold border border-white/10 group-hover:scale-105 transition-transform">
                {member.key}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-1 tracking-tight">{member.name}</h3>
            <p className="text-white/40 text-xs tracking-widest uppercase font-bold mb-4">{member.role}</p>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {member.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p 
        {...fadeUp(0.8)}
        className="text-muted-foreground text-sm text-center tracking-widest uppercase opacity-50"
      >
        {t("search.tagline")}
      </motion.p>
    </section>
  );
}
