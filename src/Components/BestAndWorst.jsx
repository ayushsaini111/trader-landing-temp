"use client"

import React, { useEffect, useRef, useState } from "react"
import Image from "next/image"
import BAWCard from "./ui/BAWCard"
import { homePage } from "../Data/homePage"

function BestAndWorst() {
  const { bestAndWorst } = homePage

  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
        // active when section is around middle of screen
       rootMargin: "-40% 0px -90% 0px"

      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-s160 px-s32  overflow-hidden space-y-s104"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Images/bg.svg"
          alt="background texture"
          fill
          className="object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%,rgba(255,255,255,1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_100%)]" />
      </div>

      {/* Heading */}
      <h2 className="max-w-7xl mx-auto relative z-10 heading-h2">
        <span className="text-primary-main">Best</span> &
        <span className="text-worst"> Worst</span> Trade
      </h2>

      {/* Cards */}
      <div className="flex justify-center items-end relative py-s160 space-x-s16 md:space-x-s48">

        <BAWCard
          type="worst"
          text={bestAndWorst.worst}
          className={`
            transition-transform duration-700 ease-out
            ${isVisible ? "translate-y-50" : "translate-y-0"}
          `}
        />

        <BAWCard
          type="best"
          text={bestAndWorst.best}
          className={`
            transition-transform duration-1700 ease-out
            ${isVisible ? "-translate-y-40" : "translate-y-0"}
          `}
        />

      </div>
    </section>
  )
}

export default BestAndWorst
