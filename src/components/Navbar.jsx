import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-[#0b1120]/80 backdrop-blur
        px-4 sm:px-6 lg:px-[90px]
        py-4
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          flex flex-col gap-3
          lg:flex-row lg:items-center lg:justify-between
        "
      >
        {/* TOP ROW (Mobile) / LEFT (Desktop) */}
        <div className="flex items-center justify-between">
          {/* NAME */}
          <div className="section-bar inline-flex items-center text-[20px] font-bold text-white">
            Sakshi
          </div>

          {/* GITHUB + LINKEDIN (Mobile Right) */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="https://github.com/Sakshi1166"
              target="_blank"
              className="section-bar p-2 text-white"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-nigam-3871872a9"
              target="_blank"
              className="
                bg-purple-600 hover:bg-purple-700
                transition px-4 py-2 rounded-xl
                text-white text-[14px] font-semibold
              "
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* CENTER LINKS */}
        <div
          className="
            flex flex-wrap justify-center gap-3
            lg:gap-8
            text-[16px] text-gray-300 font-medium
          "
        >
          {["Education", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="section-bar text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT ICONS (Desktop only) */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://github.com/Sakshi1166"
            target="_blank"
            className="section-bar p-2 text-white"
          >
            <FaGithub size={26} />
          </a>

          {/* ❗ LinkedIn untouched */}
          <a
            href="https://www.linkedin.com/in/sakshi-nigam-3871872a9"
            target="_blank"
            className="
              bg-purple-600 hover:bg-purple-700
              transition px-6 py-3 rounded-xl
              text-white text-[16px] font-semibold
            "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
