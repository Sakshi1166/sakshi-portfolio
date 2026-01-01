import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12
        rounded-xl
        bg-white/10
        backdrop-blur-md
        border border-white/10
        text-white
        flex items-center justify-center
        shadow-lg shadow-black/30
        hover:bg-white/20
        hover:scale-110
        transition
      "
    >
      ↑
    </motion.button>
  );
}
