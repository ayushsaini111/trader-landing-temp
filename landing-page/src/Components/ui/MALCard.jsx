"use client";
import React from "react";
import Image from "next/image";
import useInViewOnce from "../../Hooks/useInViewOnce";

function MALCard({ src, alt, className = "" }) {
  const MistakesAndLessons2 = useInViewOnce();
  return (
    <div
      ref={MistakesAndLessons2.ref}
      className={`relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-green-500/30  animate-z-fadein${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover opacity-80" />

      {/* green glow */}
      <div className="absolute inset-0 bg-green-500/10 mix-blend-screen" />
    </div>
  );
}

export default MALCard;
