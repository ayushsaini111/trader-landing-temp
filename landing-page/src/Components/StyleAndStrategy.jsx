"use client";
import React from "react";
import Image from "next/image";
import SASCard from "./ui/SASCard";
import { homePage } from "../Data/homePage";
import useInViewAnimation from "../Hooks/useInViewAnimation";
import useInViewOnce from "../Hooks/useInViewOnce";

function StyleAndStrategy() {
  const StyleAndStrategy1 = useInViewAnimation();
  const StyleAndStrategy2 = useInViewOnce();
  const StyleAndStrategy3 = useInViewOnce();
  const StyleAndStrategy4 = useInViewOnce();
  const StyleAndStrategy5 = useInViewOnce();
  const StyleAndStrategy6 = useInViewOnce();

  const { strategyData } = homePage;
  return (
    <section className="space-y-s104 px-s32  py-s160">
      <h2
        ref={StyleAndStrategy1.ref}
        className="heading-h2 animate-ytop-fadein "
      >
        {strategyData.heading}
      </h2>

      <div className="flex flex-col md:flex-row items-start space-x-s48 lg:space-x-s48 space-y-s48">
        <div
          ref={StyleAndStrategy2.ref}
          className="relative w-full  aspect-4/3 overflow-hidden rounded-r40 animate-xtoleft-fadein"
        >
          <Image
            src="/Images/Sample.png"
            alt="Market visual"
            fill
            className="object-cover"
          />
        </div>
        <p
          ref={StyleAndStrategy3.ref}
          className="px-s16  md:px-0 body-default max-w-[350px] animate-xtoright-fadein"
        >
          {strategyData.description}
        </p>
      </div>
      {/* Cards Row */}
      <div className="space-y-s32 lg:space-y-0 flex flex-col lg:flex-row  lg:justify-between lg:items-center lg:space-x-s16  ">
        {strategyData.cards.map((card) => (
          <SASCard key={card.id} text={card.description} icon={card.icon} />
        ))}
      </div>
    </section>
  );
}

export default StyleAndStrategy;
