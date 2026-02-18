"use client";
import React from "react";
import Image from "next/image";
import MALCard from "./ui/MALCard";
import { homePage } from "../Data/homePage";
import useInViewAnimation from "../Hooks/useInViewAnimation";
import useInViewOnce from "../Hooks/useInViewOnce";

function MistakesAndLessons() {
  const MistakesAndLessons1 = useInViewAnimation();
  const MistakesAndLessons3 = useInViewOnce();
  const MistakesAndLessons4 = useInViewOnce();

  const { mistakesAndLessons } = homePage;
  return (
    <section className="relative text-white py-s160 px-s32  overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:48px_48px]" />
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%,,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%,,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_100%)]" /> */}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          ref={MistakesAndLessons1.ref}
          className="heading-h2 font-semibold mb-20 animate-ytop-fadein"
        >
          {mistakesAndLessons.heading}
        </h2>

        {/* Top Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 ">
          {/* Image */}
          <MALCard src="/Images/Sample.png" alt="Trading mistake chart" />

          {/* Text */}
          <p
            ref={MistakesAndLessons3.ref}
            className="heading-h6 max-w-md animate-xtoright-fadein"
          >
            {mistakesAndLessons.mistakes}
          </p>
        </div>

        {/* Bottom Row */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <p
            ref={MistakesAndLessons4.ref}
            className="heading-h6 max-w-md md:order-1 order-2 animate-xtoleft-fadein"
          >
            {mistakesAndLessons.learnings}
          </p>

          {/* Image */}
          <MALCard
            src="/Images/Sample.png"
            alt="Trading lesson chart"
            className="md:order-2 order-1 animate-z-fadein"
          />
        </div>
      </div>
    </section>
  );
}

export default MistakesAndLessons;
