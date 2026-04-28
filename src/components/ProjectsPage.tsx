import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kuponperest",
    category: "Web Patform and App",
    link: "https://kuponperest.com/",
   image: "/assets/projects/kuponperest.jpg",
  },
  {
    id: 2,
    title: "Kandez",
    category: "Personal Web Platform",
    link: "https://www.kandez.com/",
    image: "/assets/projects/kandezpp.jpg",
  },
  {
    id: 3,
    title: "PitchIQ",
    category: " Scout Web Platform and App",
    link: "https://example.com/pulse",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "TourismHub",
    category: "Tourism Web and App fot Hotels",
    link: "https://example.com/zenith",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 5,
    title: "Yörükoğlu Yapı Market",
    category: "E-commerce Web Platform",
    link: "https://example.com/aether",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
  },
  
];

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="container mx-auto px-8 md:px-28 pt-40 md:pt-52 pb-32">
        <div className="max-w-4xl mb-24">
          <motion.h1 
            {...fadeUp(0.1)}
            className="text-6xl md:text-8xl font-medium tracking-tightest leading-tight mb-8"
          >
            <Trans i18nKey="projects.title">
              Yayında Olan <span className="font-serif italic font-normal">Projelerimiz</span>
            </Trans>
          </motion.h1>
          <motion.p 
            {...fadeUp(0.2)}
            className="text-xl text-white/50 leading-relaxed max-w-2xl"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp(0.1 * i + 0.3)}
              className="group relative h-[450px] overflow-hidden rounded-2xl bg-white/5 border border-white/10"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              
              {/* Overlay with Ocean Gradient effect */}
              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 z-[2] p-8 flex flex-col justify-end">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2 transform group-hover:translate-x-2 transition-transform duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl font-medium tracking-tightest mb-6 transform group-hover:-translate-y-1 transition-transform duration-500">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 overflow-hidden h-6">
                  <span className="text-[10px] font-bold tracking-widest uppercase transition-all duration-500 group-hover:translate-y-0 translate-y-10">
                    {t("projects.clickLink")}
                  </span>
                  <ArrowRight className="w-3 h-3 transition-all duration-500 group-hover:translate-x-0 -translate-x-10 group-hover:opacity-100 opacity-0" />
                </div>
              </div>

              {/* Animated Ocean Wave Overlay */}
              <div className="absolute inset-0 z-0 bg-blue-500/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="absolute bottom-0 left-0 right-0 h-1/2 animate-wave bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
