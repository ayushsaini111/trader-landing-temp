"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

function PhoneMockup({ screenSrc, label, variant }) {
  return (
    <div className="flex flex-col items-center space-y-s24">
      <div className="relative w-[110px] h-[235px] md:w-[210px] md:h-[435px]">
        <div className="absolute inset-[5px] md:inset-[10px] rounded-[20px] overflow-hidden">
          <Image src={screenSrc} alt="App screen" fill className="object-cover" />
        </div>

        <Image
          src="/Images/bezel.png"
          alt="Phone bezel"
          fill
          className="object-contain pointer-events-none"
        />
      </div>

      <div
        className={`heading-h6 rounded-r24 p-s8 w-[180px] text-center
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

export default function JourneyLogModal({ log, onClose }) {

  const [mounted, setMounted] = useState(false)
  const [date, setDate] = useState("")
  const [isClosing, setIsClosing] = useState(false)

  /* body scroll lock */
  useEffect(() => {
    if (!log) return

    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = ""
    }
  }, [log])

  /* avoid hydration mismatch */
  useEffect(() => {
    setMounted(true)

    if (log?.createdAt) {
      setDate(new Date(log.createdAt).toLocaleDateString())
    }
  }, [log])

  /* CLOSE WITH ANIMATION */
  const handleClose = () => {
    setIsClosing(true)

    setTimeout(() => {
      setIsClosing(false)   // reset for next open
      onClose()
    }, 300) // must match slideDown animation duration
  }

  if (!log || !mounted) return null

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm
             flex items-center justify-center px-s16"
      onClick={handleClose}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-background rounded-r32 translate-y-30 md:translate-y-30
          w-full max-w-5xl
          relative
          ${isClosing ? "animate-slideDown" : "animate-slideUp"}
          max-h-[80vh]
          lg:max-h-[90vh]
          flex flex-col
        `}
      >
        {/* Content */}
        <div className="overflow-y-auto px-s24 py-s64 md:px-s56">

          <div className="flex flex-col lg:flex-row items-center gap-s48">

            {/* Fixed close bar */}
            <div className="
              fixed top-0 left-1/2 -translate-x-1/2
              z-50
              flex justify-center items-center
              h-[56px]
              w-full max-w-xs md:max-w-3xl
              bg-background
              rounded-t-r16
            ">
              <button
                onClick={handleClose}
                className="
                  text-secondary font-bold
                  px-s16 py-s8
                  hover:bg-primary-light
                  rounded-full
                  text-xl
                "
              >
                ✕
              </button>
            </div>

            {/* Open */}
            <PhoneMockup
              screenSrc={log.thumbnailOpen}
              label="Open"
              variant="open"
            />

            {/* Center */}
            <div className="max-w-[300px] mx-auto flex flex-col items-center space-y-s16 py-s32">
              <p className="caption text-secondary">{date}</p>

              <p className="body-large text-center max-w-[300px] break-words">
                {log.description}
              </p>
            </div>

            {/* Close */}
            <PhoneMockup
              screenSrc={log.thumbnailClose}
              label="Close"
              variant="close"
            />

          </div>
        </div>
      </div>
    </div>
  )
}
