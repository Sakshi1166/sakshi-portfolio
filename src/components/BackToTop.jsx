import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show arrow ONLY when hero is NOT visible
        setShow(!entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-50
        p-4 rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white
        hover:bg-purple-600
        hover:scale-110
        transition-all duration-300
      "
    >
      <FaArrowUp />
    </motion.button>
  );
}
