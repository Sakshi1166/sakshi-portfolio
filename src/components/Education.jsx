import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
      className="
        w-full
        px-4 sm:px-6 md:px-12 lg:px-[90px]
        py-20 md:py-28 lg:py-[140px]
      "
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ amount: 0.3 }}
        className="section-bar text-[28px] sm:text-[32px] md:text-[34px] font-semibold text-white mb-12"
      >
        Education
      </motion.h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {[
          {
            title: "Pursuing BTech CSE",
            inst: "Babu Banarasi Das University",
            loc: "Lucknow, India",
            year: "2023 – 2027",
          },
          {
            title: "Higher School Education (12th)",
            inst: "BSS Education Centre (CBSE)",
            loc: "Kanpur, India",
            year: "2020 – 2022 · 83.0%",
          },
          {
            title: "Secondary Education (10th)",
            inst: "BSS Education Centre (CBSE)",
            loc: "Kanpur, India",
            year: "2020 · 80.0%",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.15,
            }}
            viewport={{ amount: 0.25 }}
            className="
              bg-white/5 backdrop-blur-md
              rounded-2xl
              p-6 md:p-8
              border border-white/10
              pop-hover
              w-full
              max-w-[380px]
              mx-auto
            "
          >
            <h3 className="text-[20px] md:text-[22px] font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-purple-400 text-[15px] md:text-[16px] mb-2">
              {item.inst}
            </p>
            <p className="text-gray-300 text-[14px] md:text-[15px] mb-2">
              {item.loc}
            </p>
            <p className="text-gray-400 text-[13px] md:text-[14px]">
              {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
