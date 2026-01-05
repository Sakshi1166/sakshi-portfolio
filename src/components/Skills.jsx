import { motion } from "framer-motion";
import { FaGlobe, FaServer, FaLayerGroup, FaTools } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 md:px-12 lg:px-[90px] py-[140px]">

      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="section-bar text-[34px] font-semibold text-white mb-12"
      >
        Skills
      </motion.h2>

      {/* SKILL CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* FRONTEND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 pop-hover"
        >
          <FaGlobe className="text-purple-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">
            Frontend Development
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Building responsive, user-friendly interfaces with modern UI
            frameworks and clean component-based design.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• React.js</li>
            <li>• JavaScript </li>
            <li>• Tailwind CSS</li>
            <li>• Responsive Design</li>
          </ul>
        </motion.div>

        {/* BACKEND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 pop-hover"
        >
          <FaServer className="text-purple-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">
            Backend Development
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Developing structured server-side logic and RESTful APIs to support
            dynamic web applications.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Node.js & Express</li>
            <li>• RESTful APIs</li>
            <li>• Authentication Basics</li>
            <li>• API Integration</li>
          </ul>
        </motion.div>

        {/* FULL STACK */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 pop-hover"
        >
          <FaLayerGroup className="text-purple-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">
            Full Stack Development
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Creating complete web applications by integrating frontend interfaces
            with backend services.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• End-to-End Development</li>
            <li>• Frontend–Backend Integration</li>
            <li>• Data Flow Handling</li>
            <li>• Debugging</li>
          </ul>
        </motion.div>

        {/* TOOLS */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
          viewport={{ amount: 0.25 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 pop-hover"
        >
          <FaTools className="text-purple-400 text-3xl mb-4" />
          <h3 className="text-xl font-semibold text-white mb-3">
            Tools & Technologies
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Using modern development tools to write clean code, manage versions,
            and maintain efficient workflows.
          </p>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Git & GitHub</li>
            <li>• VS Code</li>
            <li>• NPM & CLI</li>
            <li>• Debugging Tools</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
