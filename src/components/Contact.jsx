import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

export default function Contact() {
  const [showArrow, setShowArrow] = useState(false);

  // Back-to-top visibility logic (NOT visible on Hero)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="contact"
      className="w-full px-6 md:px-12 lg:px-[90px] py-24 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* CONTACT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-[34px] font-semibold text-white mb-8 pop-hover"
          >
            Contact
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                       min-h-[220px] flex flex-col justify-center pop-hover"
          >
            <p className="text-gray-300 text-[15px] mb-3">
              Email:&nbsp;
              <a
                href="mailto:sakshi.sn13@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition"
              >
                sakshi.sn13@gmail.com
              </a>
            </p>

            <p className="text-gray-400 text-[14px]">
              Available for internships, projects, and collaborations
            </p>
          </motion.div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-[34px] font-semibold text-white mb-8 pop-hover"
          >
            Social Links
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6
                       min-h-[220px] flex flex-col justify-center pop-hover"
          >
            <div className="space-y-4">
              <a
                href="https://github.com/Sakshi1166"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub size={22} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sakshi-nigam-3871872a9"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <FaLinkedin size={22} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/Sakshi_nigam_"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <FaTwitter size={22} />
                <span>Twitter (X)</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="mt-20 text-center text-gray-400 text-[15px] pop-hover"
      >
        © 2026 Sakshi Nigam
      </motion.p>

      {/* BACK TO TOP (single arrow, correct logic) */}
      {showArrow && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-label="Back to top"
          className="
            fixed bottom-6 right-6 z-50
            bg-white/10 backdrop-blur-md
            border border-white/20
            text-white
            p-4 rounded-full
            hover:bg-purple-600 hover:scale-110
            transition-all duration-300
          "
        >
          <FaArrowUp />
        </motion.button>
      )}
    </section>
  );
}
