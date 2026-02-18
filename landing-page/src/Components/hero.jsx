"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { homePage } from "../Data/homePage";
import useInViewOnce from "../Hooks/useInViewOnce";
import gsap from "gsap";

function Hero() {
  const whychoose2 = useInViewOnce();
  const whychoose3 = useInViewOnce();
  const whychoose4 = useInViewOnce();
  const whychoose5 = useInViewOnce();
  const whychoose6 = useInViewOnce();

  const nameRef = useRef(null);
  const name = "Diyanshmishra";

  // 🔥 Letter Animation (NO layout shift)
  useEffect(() => {
    const letters = nameRef.current.querySelectorAll(".hero-letter");

    gsap.fromTo(
      letters,
      {
        yPercent: 100, // 👈 was 100 (too much for mobile)
      },
      {
        yPercent: 0,
        duration: 2,
        ease: "power4.out",
        stagger: {
          each: 0.15,
        },
      },
    );
  }, []);

  return (
    <div className="relative pb-[100px] bg-white">
      <section className="relative min-h-screen overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Images/motion.mp4" type="video/mp4" />
        </video>

        {/* IMAGE */}
        <Image
          ref={whychoose6.ref}
          src="/Images/karu.png"
          alt="hero"
          width={700}
          height={700}
          className="absolute bottom-0 left-1/2 scale-110 xs:scale-95 md:scale-100 sm:translate-y-50 md:-translate-y-10 md:translate-y-60 -translate-x-1/2 z-20 heroImg"
        />

        {/* GRADIENT OVERLAY */}
        <div
          className="
          absolute inset-0 -bottom-2
          bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_70%,rgba(255,255,255,1)_100%)]
          z-30
          pointer-events-none
        "
        />

        {/* BIG NAME (UNCHANGED POSITIONING) */}
        <div className="absolute bottom-0 md:left-1/2 -translate-x-70 -translate-y-20 md:translate-y-20 md:-translate-x-1/2 z-10 ">
          <div
            ref={nameRef}
            className="text-[250px] sm:text-[250px] lg:text-[350px] rotate-90 md:rotate-0 text-secondary font-secondary whitespace-nowrap"
          >
            {name.split("").map((char, index) => (
              <span
                key={index}
                className="hero-letter inline-block"
                style={{ transformOrigin: "bottom center" }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl px-s24 mx-auto pt-30 md:pt-60 flex justify-between">
          <div className="hidden md:block heading-h3">
            <p ref={whychoose2.ref} className="animate-x-to-rightandz-fadein">
              {homePage.home.left}
            </p>
            <p
              ref={whychoose3.ref}
              className="caption text-primary-main animate-x-to-leftandz-fadein"
            >
              {homePage.home.leftSubheading}
            </p>
          </div>

          <div className="hidden md:block heading-h3">
            <p ref={whychoose4.ref} className="animate-x-to-leftandz-fadein">
              {homePage.home.right}
            </p>
            <p
              ref={whychoose5.ref}
              className="caption text-primary-main animate-x-to-rightandz-fadein"
            >
              {homePage.home.leftSubheading}
            </p>
          </div>

          <div className="block md:hidden absolute right-5 heading-h3">
            <p>{homePage.home.left}</p>
            <p className="caption text-primary-main">
              {homePage.home.leftSubheading}
            </p>
          </div>
        </div>
      </section>

      <div className="block md:hidden absolute bottom-0 translate-y-5 z-100 pb-20 px-s16 heading-h3">
        <p>{homePage.home.right}</p>
        <p
          className="caption bg-gradient-to-b
            from-transparent
            via-transparent
            to-white"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}

export default Hero;
