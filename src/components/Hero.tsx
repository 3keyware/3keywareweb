import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState(""); // Input değerini tutmak için

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  // Mail gönderme fonksiyonu
  const handleMailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Yeni İş Birliği Talebi");
    const body = encodeURIComponent(`Merhaba, ben ${email}. Sizinle projelerimiz hakkında görüşmek istiyorum.`);
    
    // mailto linkini tetikler
    window.location.href = `mailto:3keyware@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Arka Plan Videosu */}
      <motion.div 
        style={{ opacity: videoOpacity, scale: videoScale }}
        className="absolute inset-0 z-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Alt Gradyan Geçişi */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[1]" />

      {/* İçerik Alanı */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 container flex flex-col items-center text-center px-6 pt-32 md:pt-40"
      >
        {/* Ana Başlık */}
        <motion.h1 
          {...fadeUp(0.4)}
          className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tightest leading-[0.95] max-w-6xl mb-8"
        >
          Dijital <span className="font-serif italic font-normal">Geleceği</span> Tasarlıyoruz
        </motion.h1>

        {/* Alt Başlık */}
        <motion.p 
          {...fadeUp(0.6)}
          className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed"
        >
          3Keyware; yüksek performanslı web, mobil ve oyun deneyimleri üzerine uzmanlaşmış, butik bir dijital zanaat stüdyosudur.
        </motion.p>

        {/* İletişim Formu (Mailto Entegreli) */}
        <motion.form 
          {...fadeUp(0.8)}
          className="w-full max-w-lg liquid-glass rounded-full p-1.5 flex items-center mb-24 pointer-events-auto"
          onSubmit={handleMailSubmit}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresinizi girin"
            className="flex-1 bg-transparent px-6 py-3 text-sm focus:outline-none placeholder:text-white/30 text-white"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-bold text-xs tracking-widest px-8 py-3 rounded-full uppercase cursor-pointer"
          >
            İletişim
          </motion.button>
        </motion.form>

        {/* Alt Bilgi Izgarası */}
        <motion.div 
          {...fadeUp(1.0)}
          className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 text-left border-t border-white/10 pt-12"
        >
          <div className="md:border-r md:border-white/10 md:pr-6">
            <p className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-4">Vizyonumuz</p>
            <p className="text-sm leading-snug text-white/80">
              Kusursuz <span className="text-white">işlevselliği</span> estetikle harmanlayan ürünler geliştiriyoruz.
            </p>
          </div>
          
          <div className="md:col-span-2 px-0 md:px-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-light mb-4 text-white/90">
              Yazılım <span className="font-serif italic">evrildi</span>. Ya siz?
            </h2>
            <div className="flex gap-10">
              {[
                { id: "K", name: "Kaan", role: "Mobil & Web Geliştirici" },
                { id: "E", name: "Emin", role: "Oyun Geliştirici" },
                { id: "Y", name: "Yekta", role: "Mobil & Web Geliştirici" }
              ].map((member) => (
                <div key={member.id} className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 liquid-glass rounded-xl flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {member.id}
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">{member.name}</span>
                    <span className="text-[8px] text-white/40 uppercase tracking-tighter whitespace-nowrap">{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:border-l md:border-white/10 md:pl-6 flex flex-col justify-between items-end text-right">
            <div className="text-xs text-white/40 leading-relaxed mb-4 italic">
              "Sadece kod yazmıyoruz; yarının zorlukları için dijital çözümler mimarlıyoruz."
            </div>
            <Link to="/projects" className="px-5 py-2 liquid-glass rounded-lg text-[10px] uppercase tracking-widest font-bold hover:bg-white/5 transition-colors">
              Projelerimiz
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}