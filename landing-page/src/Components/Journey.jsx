"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"

function PhoneMockup({ screenSrc, label, variant = "open" }) {
  return (
    <div className="flex flex-col items-center space-y-s32">
      <div className="relative w-[281px] h-[572px]">
        <div className="absolute inset-[10px] rounded-[32px] overflow-hidden z-0">
          <Image src={screenSrc} alt="App screen" fill className="object-cover" />
        </div>

        <Image
          src="/Images/bezel.png"
          alt="Phone bezel"
          fill
          className="object-contain z-10 pointer-events-none"
        />
      </div>

      <div
        className={`heading-h4 rounded-r24 p-s8 w-[260px] text-center
          ${
            variant === "open"
              ? "bg-primary-light text-primary-main"
              : "bg-worst/10 text-worst"
          }`}
      >
        {label}
      </div>
    </div>
  )
}

function JourneyLogs() {
  const [latestLog, setLatestLog] = useState(null)

  useEffect(() => {
    const fetchLatestLog = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/journeyLogs", {
          cache: "no-store",
        })
        const data = await res.json()

        if (Array.isArray(data) && data.length > 0) {
          // assuming latest is first, otherwise sort
          setLatestLog(data[0])
        }
      } catch (err) {
        console.error("Failed to fetch journey logs:", err)
      }
    }

    fetchLatestLog()
  }, [])

  if (!latestLog) return null

  return (
    <section className="px-s32 lg:px-0 py-s160 space-y-s104">
      {/* Heading */}
      <div>
        <h2 className="heading-h2 inline-block bg-linear-to-br from-foreground to-primary-main bg-clip-text text-transparent">
          My Journey Logs
        </h2>

        <p className="body-large">
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>

      {/* Content */}
      <div className="lg:flex items-center">

        {/* Left Phone */}
        <PhoneMockup
          screenSrc={latestLog.thumbnailOpen}
          label="Open"
          variant="open"
        />

        {/* Center Text */}
        <div className=" max-w-[300px] mx-auto flex flex-col items-center space-y-s40 py-s80">
          <p className="body-large text-justify max-w-[300px]">
            {latestLog.description}
          </p>

          <div className="grid grid-cols-3 justify-center gap-s24">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-r16 bg-primary-light w-16 h-16"
              />
            ))}
          </div>
        </div>

        {/* Right Phone */}
        <PhoneMockup
          screenSrc={latestLog.thumbnailClose}
          label="Close"
          variant="close"
        />
      </div>
    </section>
  )
}

export default JourneyLogs
