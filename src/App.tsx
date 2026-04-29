import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchChangeSection } from "./components/SearchChangeSection";
import { MissionSection } from "./components/MissionSection";
import { SolutionSection } from "./components/SolutionSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { ProjectsPage } from "./components/ProjectsPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchChangeSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/3keywareweb">
      <ScrollToTop />
      <main className="min-h-screen bg-background selection:bg-white selection:text-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </Router>
  );
}