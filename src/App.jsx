import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1120] via-[#0f1b3d] to-[#0b1120]">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <BackToTop />
    </div>
  );
}
