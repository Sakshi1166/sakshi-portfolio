import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show only AFTER hero section
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-6 right-6 z-50
                 bg-white/10 hover:bg-white/20
                 text-white p-3 rounded-full
                 backdrop-blur-md transition"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
