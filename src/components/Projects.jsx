import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-6 md:px-12 lg:px-[90px] py-[140px]">

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="text-[34px] font-semibold text-white mb-14 pop-hover"
      >
        Projects
      </motion.h2>

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* PORTFOLIO WEBSITE */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 pop-hover"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Portfolio Website
          </h3>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
            Developed a responsive personal portfolio website to showcase
            technical skills, projects, and educational background. Implemented
            modern UI design principles, smooth scrolling, and interactive
            components to enhance user experience and accessibility.
          </p>

          <p className="text-purple-400 text-sm font-medium">
            React.js • JavaScript (ES6+) • Tailwind CSS • Vite
          </p>
        </motion.div>

        {/* DAILY TASK REMINDER APP */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 pop-hover"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            AI‑Driven Predictive Maintenance System
          </h3>

          <p className="text-gray-300 text-[15px] leading-relaxed mb-6">
            Developed an end‑to‑end AI‑powered predictive maintenance solution using a multi‑agent workflow architecture.
            The system processes real‑time vehicle sensor data, performs machine‑learning–based failure prediction, 
            and autonomously triggers maintenance actions such as service scheduling, customer notifications, and 
            manufacturing feedback. Designed to demonstrate intelligent decision‑making, workflow automation, and 
            scalable system integration.
          </p>

          <p className="text-purple-400 text-sm font-medium">
            FastAPI • Python • Scikit‑learn • n8n • REST APIs • Webhooks • Cloud Deployment


          </p>
        </motion.div>

      </div>
    </section>
  );
}
