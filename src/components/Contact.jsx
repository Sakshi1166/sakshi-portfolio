import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only AFTER Hero section
      if (window.scrollY > window.innerHeight * 0.9) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      aria-label="Back to top"
      className="
        fixed bottom-6 right-6 z-50
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white
        p-4 rounded-full
        hover:bg-purple-600 hover:scale-110
        transition-all duration-300
        shadow-lg
      "
    >
      <FaArrowUp className="text-lg" />
    </motion.button>
  );
}
