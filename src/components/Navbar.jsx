import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1120]/80 backdrop-blur">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-[90px] py-4">

        {/* LEFT — NAME */}
        <div className="section-pill px-4 py-1.5 text-[20px] font-bold text-white">
          Sakshi
        </div>

        {/* CENTER — NAV LINKS (DESKTOP ONLY — UNCHANGED) */}
        <div className="hidden md:flex gap-6">
          {["Education", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="section-pill px-4 py-1.5 text-[16px] font-medium text-gray-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT — ICONS */}
        <div className="flex items-center gap-4">

          {/* GitHub */}
          <a
            href="https://github.com/Sakshi1166"
            target="_blank"
            rel="noreferrer"
            className="section-pill p-2 text-white flex items-center justify-center"
          >
            <FaGithub size={34} />
          </a>

          {/* LinkedIn — STRICTLY UNCHANGED */}
          <a
            href="https://www.linkedin.com/in/sakshi-nigam-3871872a9"
            target="_blank"
            rel="noreferrer"
            className="pop-hover bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-white text-[16px] font-semibold"
          >
            LinkedIn
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden section-pill p-2 text-white"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {["Education", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="section-pill px-4 py-2 text-[16px] font-medium text-gray-200 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
