import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 md:px-12 lg:px-[90px] py-[140px]"
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3, once: false }}
        className="section-bar text-[34px] font-semibold text-white mb-12"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* ================= PORTFOLIO WEBSITE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ amount: 0.25, once: false }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden pop-hover"
        >
          {/* VIDEO */}
          <video
            src="/portfolio.mp4"
            poster="/portfolio-poster.png"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="w-full h-[220px] object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
              A fully responsive personal portfolio showcasing projects,
              technical expertise, and academic background with smooth
              animations and modern UI/UX design.
            </p>

            <p className="text-purple-400 text-sm mb-6">
              React • Tailwind CSS • Vite • UI/UX
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/Sakshi1166/sakshi-portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://sakshi-nigam.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* ================= AUTOGENIE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ amount: 0.25, once: false }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden pop-hover"
        >
          {/* VIDEO */}
          <video
            src="/autogenie.mp4"
            poster="/autogenie-poster.png"
            muted
            autoPlay
            loop
            playsInline
            preload="metadata"
            className="w-full h-[220px] object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-3">
              AI-Driven Predictive Maintenance System
            </h3>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
              An AI-powered predictive maintenance system using machine
              learning and agent-based workflows to detect failures and
              automate maintenance actions.
            </p>

            <p className="text-purple-400 text-sm mb-6">
              FastAPI • Python • Scikit-learn • n8n • Cloud
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/Sakshi1166/autogenie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub /> Code
              </a>

              <a
                href="https://autogenie.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}