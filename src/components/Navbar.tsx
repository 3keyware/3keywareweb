import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { name: "Anasayfa", href: isHome ? "#hero" : "/#hero" },
    { name: "Süreç", href: isHome ? "#mission" : "/#mission" },
    { name: "Ekibimiz", href: isHome ? "#who-are-we" : "/#who-are-we" },
    { name: "Projelerimiz", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-28 py-4 flex items-center justify-between pointer-events-none">
      {/* Logo Alanı */}
      <div className="pointer-events-auto">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      
      {/* Orta Menü (Desktop) */}
      <div className="hidden md:flex items-center gap-4 liquid-glass px-6 py-2 rounded-full pointer-events-auto border border-white/5">
        {navLinks.map((link, i) => (
          <div key={link.href} className="flex items-center">
            {link.href.startsWith("#") || link.href.includes("#") ? (
              <a
                href={link.href}
                className="text-white/40 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.href}
                className="text-white/40 text-[10px] font-bold tracking-widest uppercase hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            )}
            {i < navLinks.length - 1 && (
              <span className="mx-4 text-white/5">•</span>
            )}
          </div>
        ))}
      </div>

      {/* Sağ Taraf - Sosyal Medya */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Instagram Linki */}
        <a
          href="https://www.instagram.com/3keyware/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center liquid-glass hover:scale-110 transition-transform cursor-pointer"
        >
          <Instagram className="w-4 h-4 text-white" />
        </a>
      </div>
    </nav>
  );
}