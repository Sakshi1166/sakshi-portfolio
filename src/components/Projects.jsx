import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 md:px-12 lg:px-[90px] py-24"
    >
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }}
        className="section-bar text-[30px] md:text-[34px] font-semibold text-white mb-12"
      >
        Projects
      </motion.h2>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ===================== PROJECT 1 ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden pop-hover"
        >
          {/* VIDEO */}
          <video
            src="/portfolio.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-[220px] object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
              A fully responsive personal portfolio built with React and Tailwind CSS, featuring smooth animations, modern UI/UX principles, and clean component architecture.
            </p>

            <p className="text-purple-400 text-sm mb-6">
              React • Tailwind CSS • Vite • Framer Motion • Responsive Design
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/Sakshi1166/sakshi-portfolio"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub />
                Code
              </a>

              <a
                href="https://sakshi-nigam.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

        {/* ===================== PROJECT 2 ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden pop-hover"
        >
          {/* VIDEO */}
          <video
            src="/signalist-preview.mp4"
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-[220px] object-cover"
          />

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-3">
              Signalist – Stock Market Intelligence Platform
            </h3>

            <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
              A full-stack stock market intelligence platform providing real-time stock data, personalized watchlists, interactive TradingView charts, and automated email notifications.
            </p>

            <p className="text-purple-400 text-sm mb-6">
              Next.js 16 • React 19 • TypeScript • Tailwind CSS • Finnhub API 
            </p>

            <div className="flex gap-6 items-center">
              <a
                href="https://github.com/Sakshi1166/Signalist"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaGithub />
                Code
              </a>

              <a
                href="https://signalist-stocks-web-app.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
