import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { fadeUp } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";

import { Link } from "react-router-dom";

export function CTASection() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

  useEffect(() => {
    let hls: Hls;
    if (videoRef.current) {
      if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS (Safari)
        videoRef.current.src = hlsUrl;
      } else if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(videoRef.current);
      }
    }
    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <section className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden min-h-[600px] flex items-center justify-center">
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-40 brightness-50"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-3xl z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <motion.div {...fadeUp(0.1)} className="mb-10">
          <Logo iconOnly className="w-10 h-10" />
        </motion.div>

        <motion.h2 
          {...fadeUp(0.2)}
          className="text-6xl md:text-8xl font-medium tracking-tightest leading-none mb-8"
        >
          <Trans i18nKey="cta.title">
            Vizyonunu <span className="font-serif italic font-normal">inşaa et</span>
          </Trans>
        </motion.h2>

        <motion.p 
          {...fadeUp(0.3)}
          className="text-white/60 text-lg mb-12 max-w-xl mx-auto"
        >
          {t("cta.subtitle")}
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <motion.button 
            {...fadeUp(0.4)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background font-bold px-10 py-4 rounded-lg tracking-widest uppercase text-sm"
          >
            {t("cta.contactBtn")}
          </motion.button>
          
          <Link to="/projects">
            <motion.button 
              {...fadeUp(0.5)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass border-white/10 text-foreground font-bold px-10 py-4 rounded-lg tracking-widest uppercase text-sm"
            >
              {t("cta.viewProjectsBtn")}
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
