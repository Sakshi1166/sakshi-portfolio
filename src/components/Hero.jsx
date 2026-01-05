import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const imgRef = useRef(null);
  const typingInterval = useRef(null);

  const fullText = "A Web Developer";

  // TYPEWRITER — runs EVERY time hero enters viewport
  const startTyping = () => {
    // clear any previous typing
    if (typingInterval.current) {
      clearInterval(typingInterval.current);
    }

    setTypedText("");
    let i = 0;

    typingInterval.current = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(typingInterval.current);
      }
    }, 120);
  };

  // MAGNETIC IMAGE EFFECT (desktop only)
  useEffect(() => {
    const el = imgRef.current;
    if (!el || window.innerWidth < 768) return;

    const move = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    };

    const reset = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <motion.section
        id="hero"
        onViewportEnter={startTyping}
        viewport={{ amount: 0.6 }}
        className="
          min-h-screen w-full
          flex flex-col-reverse lg:flex-row
          items-center justify-center
          gap-12 md:gap-16
          px-6 md:px-12 lg:px-[90px]
          text-center lg:text-left
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-[620px]">
          <h1 className="text-[36px] sm:text-[42px] md:text-[56px] font-bold leading-tight text-white mb-4">
            Hi, I am <br />
            <span>Sakshi Nigam</span>
          </h1>

          {/* TYPEWRITER */}
          <h2 className="text-[22px] sm:text-[24px] md:text-[30px] font-semibold text-purple-400 mb-6 min-h-[40px]">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[28px] md:leading-[30px] text-gray-300 mb-10">
            I am a passionate web developer with a strong foundation in full-stack
            development. I enjoy building responsive, user-friendly web
            applications using modern technologies like React, JavaScript, and
            Tailwind CSS.
          </p>

          <a
            href="/Sakshi_Nigam_Resume.pdf"
            download
            className="
              inline-block bg-purple-600 hover:bg-purple-700
              transition px-8 py-4 rounded-xl
              text-white text-[16px] font-semibold
            "
          >
            Download Resume
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative cursor-pointer mt-16 sm:mt-10 md:mt-0">
          <div
            ref={imgRef}
            onClick={() => setShowModal(true)}
            className="
              w-[200px] h-[200px]          /* mobile smaller */
              sm:w-[260px] sm:h-[260px]
              md:w-[360px] md:h-[360px]

              rounded-full
              border-[6px] border-purple-500
              flex items-center justify-center
              transition-transform duration-300
            "
  >

            <img
              src={profile}
              alt="Sakshi Nigam"
              className="w-[90%] h-[90%] object-cover rounded-full"
            />
          </div>

          {/* FLOATING DOTS (hidden on very small screens) */}
          <span className="hidden sm:block absolute top-[30px] right-[-30px] w-4 h-4 bg-purple-500 rounded-full" />
          <span className="hidden sm:block absolute bottom-[20px] left-[-20px] w-3 h-3 bg-pink-500 rounded-full" />
          <span className="hidden sm:block absolute bottom-[-30px] right-[40px] w-3 h-3 bg-blue-500 rounded-full" />
        </div>
      </motion.section>

      {/* IMAGE MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <img
            src={profile}
            alt="Profile"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}
