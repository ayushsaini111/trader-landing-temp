"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useInViewOnce from "../Hooks/useInViewOnce";

import { footerLinks } from "../Data/footerLinks";
function LetsConnect() {
  const LetsConnect1 = useInViewOnce();
  const LetsConnect2 = useInViewOnce();
  const LetsConnect3 = useInViewOnce();

  const { socialMedia } = footerLinks;
  useEffect(() => {
    if (window.location.hash === "#letsConnect") {
      setTimeout(() => {
        document
          .getElementById("letsConnect")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <section
      id="letsConnect"
      className="relative  h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={LetsConnect1.ref}
        className="absolute inset-0 z-10 animate-z-fadein "
      >
        <Image
          src="/Images/handshak.png"
          alt="Let’s Connect background"
          className="object-contain scale-110 md:object-cover opacity-100 "
          fill
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center gap-10">
        <h2
          ref={LetsConnect2.ref}
          className="
                    text-6xl md:text-[100px] lg:text-[170px] font-semibold tracking-wide
                bg-gradient-to-r from-black/5 via-white/70 to-black/5

                    bg-clip-text text-transparent animate-ytop-fadein
                "
        >
          LET’S <br /> CONNECT
        </h2>

        {/* Social Icons */}
        <div
          ref={LetsConnect3.ref}
          className="
                    flex items-center gap-s16 md:gap-s32 px-s32 py-s16 md:py-s24
                    rounded-full bg-black backdrop-blur-xl
                    border border-white/30
                    shadow-[0_0_40px_rgba(255,255,255,0.08)]
                    animate-z-fadein
                "
        >
          {socialMedia.map((s) => {
            return (
              <a
                key={s.label}
                href={s.path}
                target="_blank"
                className=" rounded-full bg-black flex items-center justify-center hover:scale-110 transition"
              >
                <img src={s.icon} className="w-9 h-9" alt={s.label} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LetsConnect;
