import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-[90px] py-6 bg-[#0b1120]/80 backdrop-blur">

      {/* LEFT — NAME */}
      <div className="text-[24px] font-bold text-white pop-hover">
        Sakshi 
      </div>

      {/* CENTER — FRONT PAGE LINKS */}
      <div className="flex gap-10 text-[18px] text-gray-300 font-medium">
        <a href="#education" className="pop-hover hover:text-white">
          Education
        </a>
        <a href="#skills" className="pop-hover hover:text-white">
          Skills
        </a>
        <a href="#projects" className="pop-hover hover:text-white">
          Projects
        </a>
        <a href="#contact" className="pop-hover hover:text-white">
          Contact
        </a>
      </div>

      {/* RIGHT — GITHUB + LINKEDIN */}
      <div className="flex items-center gap-6">
        <a
          href="https://github.com/Sakshi1166"
          target="_blank"
          className="pop-hover text-white"
        >
          <FaGithub size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/sakshi-nigam-3871872a9"
          target="_blank"
          className="pop-hover bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-white text-[16px] font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
