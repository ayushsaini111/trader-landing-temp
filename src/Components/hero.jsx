import Image from 'next/image'
import React from 'react'
import { homePage } from "../Data/homePage"

function hero() {
    return (
        <div className='relative  bg-white'>
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
                    src="/Images/diyvansh.png"
                    alt="hero"
                    width={700}
                    height={700}
                    className="absolute  -bottom-10 sm:-bottom-70 md:-bottom-70 left-1/2 scale-140 sm:scale-135 -translate-x-1/2 z-20 "
                />

                {/* ✅ GRADIENT OVERLAY (ABOVE IMAGE) */}
                <div className="
    absolute inset-0 -bottom-2 
    bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,1)_96%)]
    z-30
    pointer-events-none
  " />
                <div className="absolute bottom-0 md:left-1/2 -translate-x-55 -translate-y-20  md:translate-y-20 md:-translate-x-1/2 z-10">
                    <div className="text-[200px]   lg:text-[350px] left-0 rotate-90 md:rotate-0 text-secondary font-secondary right-0">
                        Diyanshmishra
                    </div>
                </div>
                {/* CONTENT */}

                <div className=" relative z-10 max-w-7xl px-s24 mx-auto pt-30 md:pt-60 flex justify-between">
                    <div className="hidden md:block heading-h3 ">
                        <p>
                            {homePage.home.left}
                        </p>
                        <p className=" caption text-primary-main">{homePage.home.leftSubheading}</p>

                    </div>



                    <div className="hidden md:block  heading-h3 max-w-[180px]">
                        <p>
                            {homePage.home.right}
                        </p>
                        <p className=" caption ">{homePage.home.rightSubheading}</p>

                    </div>

                    <div className="block md:hidden absolute right-5  heading-h3 ">
                        <p>
                            {homePage.home.left}
                        </p>
                        <p className=" caption text-primary-main">{homePage.home.leftSubheading}</p>

                    </div>

                </div>

            </section>
            <div className="block md:hidden absolute  bottom-0 translate-y-5   z-100 pb-12 px-s16 heading-h3 ">
                <p>
                    {homePage.home.right}f
                </p>
                <p className=" caption ">{homePage.home.rightSubheading}</p>

            </div>

        </div>


    )
}

export default hero