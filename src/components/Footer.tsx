import { Logo } from "./Logo";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-8 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2">
          <Link to="/">
            <Logo className="mb-6" />
          </Link>
          <p className="text-white/50 text-sm max-w-sm mb-8 leading-relaxed">
            {t("footer.desc")}
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:scale-110 transition-transform">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">{t("footer.capabilities")}</h4>
          <ul className="space-y-4 text-white/40 text-xs tracking-widest uppercase">
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.links.webDev")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.links.mobilePlatforms")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.links.gameDesign")}</a></li>
            <li><a href="#" className="hover:text-white transition-colors">{t("footer.links.uiux")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-6">{t("footer.contact")}</h4>
          <ul className="space-y-4 text-white/40 text-xs tracking-widest uppercase">
            <li><Link to="/#who-are-we" className="hover:text-white transition-colors">{t("footer.links.about")}</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">{t("footer.links.projects")}</Link></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-12">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
          {t("footer.rights")}
        </span>
        
        <div className="flex items-center gap-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
          <a href="#" className="hover:text-white transition-colors">{t("footer.links.privacy")}</a>
          <a href="#" className="hover:text-white transition-colors">{t("footer.links.terms")}</a>
          <a href="#" className="hover:text-white transition-colors">{t("footer.links.legal")}</a>
        </div>
      </div>
    </footer>
  );
}
