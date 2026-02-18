// "use client"
// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// function TradingRules() {
//   const pathRef = useRef(null)
//   const svgWrapRef = useRef(null)
//   const endRef = useRef(null)
  

// useEffect(() => {
//   const path = pathRef.current
//   if (!path) return // ✅ safety

//   const length = path.getTotalLength()

//   // hide path initially
//   gsap.set(path, {
//     strokeDasharray: length,
//     strokeDashoffset: length,
//   })

//   gsap.to(path, {
//     strokeDashoffset: 0,
//     ease: "none",
//     scrollTrigger: {
//       trigger: svgWrapRef.current, // ✅ SINGLE, VALID TRIGGER
//       start: "top 80%",
//       endTrigger: endRef.current,
//       end: "top center",
//       scrub: true,
//     },
//   })

//   ScrollTrigger.refresh()
// }, [])



//     return (
//         <section className=" overflow-hidden ">

//             {/* Heading */}
//             <h2 className=" max-w-7xl mx-auto text-cente heading-h2  mb-24">
//                 My Trading Rules
//             </h2>

//             {/* Blob Container */}
//           <div ref={svgWrapRef} className="relative w-full max-w-[1760px] mx-auto pt-[150px] md:pt-[150px]">
//             <svg    className="w-full z-50 h-auto scale-155 sm:scale-120  lg:scale-110 -translate-x-14 -translate-y-10 sm:-translate-x-0 sm:-translate-y-0 " xmlns="http://www.w3.org/2000/svg"  width="1761" height="1542" viewBox="0 0 1761 1542" fill="none">
//                     <path  ref={pathRef} d="M-23 501.234C34.7266 530.21 382.788 750.859 476.506 571.952C535.79 458.779 287.635 233.123 517.068 55.5704C622.027 -25.6548 940.57 26.6024 871.232 270.73C783.973 577.955 929.424 553.134 1246.59 651.787C1531.48 740.399 1820.36 751.569 1721.02 1003.44C1698.85 1059.66 1505.22 1319.46 1350.95 1204.98C1150.35 1056.1 1089.4 499.806 795.37 662.829C711.753 709.19 560.03 993.692 937.357 1114.08C1168.97 1187.98 1115.28 1400.6 1101.45 1542" stroke="url(#paint0_linear_147_669)" stroke-width="40" stroke-miterlimit="6" stroke-linecap="square" stroke-linejoin="round" />
//                     <defs>
//                         <linearGradient id="paint0_linear_147_669" x1="809.5" y1="802" x2="1741" y2="20" gradientUnits="userSpaceOnUse">
//                             <stop stop-color="#49B73E" />
//                             <stop offset="1" stop-color="#58FF48" />
//                         </linearGradient>
//                     </defs>


//     {/* TEXT BLOCKS */}

//     <foreignObject x="530" y="180" width="260" height="350">
//       <p className="text-2xl font-medium font-primary md:text-xl text-justify">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//     </foreignObject>

//     <foreignObject x="1100" y="260" width="260" height="350">
//       <p className="text-2xl font-medium font-primary md:text-xl text-justify">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//     </foreignObject>

//     <foreignObject x="780" y="755" width="250" height="300">
//       <p className="text-2xl font-medium font-primary md:text-xl text-justify">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//     </foreignObject>

//     <foreignObject x="1300" y="840" width="220" height="300">
//       <p className="text-2xl font-medium font-primary md:text-xl text-justify">
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//       </p>
//     </foreignObject>
//   </svg>
// </div>


//             {/* Bottom Statement */}
//             <div  ref={endRef} className="h-screen flex justify-center items-center relative z-100 border-t-[12px] lg:border-t-[40px] border-primary-main pt-20 text-center bg-green-50">

              
//                  <p className="max-w-[290px] heading-h3 md:max-w-2xl mx-auto">
//                     Some <span className="text-primary-main ">rules</span> are meant to be
//                     <span className="text-primary-main "> broken</span> but these
//                     rules have taken me so far.
//                 </p>
            

//             </div>

//         </section>
//     )
// }

// export default TradingRules

"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function TradingRules() {
     const pathRef = useRef(null)
  const endRef = useRef(null)

  useEffect(() => {
    const path = pathRef.current
    const length = path.getTotalLength()

    // Initial hidden stroke
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    })

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        endTrigger: endRef.current,
        end: "top center",
        scrub: true,
      },
    })
  }, [])
  
    return (
        <section className="overflow-hidden  md:pt-s160  lg:px-0 ">

            {/* Heading */}
            <h2 className=" max-w-7xl mx-auto px-s32 text-cente heading-h2 mb-s80 sm:mb-[200px]">
                My Trading Rules
            </h2>

            {/* Blob Container */}
          <div className="relative w-full max-w-[1760px] mx-auto pt-[150px] md:pt-[150px]">
            <svg   className="w-full z-50 h-auto transition scale-170 -translate-x-13 -translate-y-10 lg:scale-110 " xmlns="http://www.w3.org/2000/svg"  width="1761" height="1542" viewBox="0 0 1761 1542" fill="none">
                    <path  ref={pathRef} d="M-23 501.234C34.7266 530.21 382.788 750.859 476.506 571.952C535.79 458.779 287.635 233.123 517.068 55.5704C622.027 -25.6548 940.57 26.6024 871.232 270.73C783.973 577.955 929.424 553.134 1246.59 651.787C1531.48 740.399 1820.36 751.569 1721.02 1003.44C1698.85 1059.66 1505.22 1319.46 1350.95 1204.98C1150.35 1056.1 1089.4 499.806 795.37 662.829C711.753 709.19 560.03 993.692 937.357 1114.08C1168.97 1187.98 1115.28 1400.6 1101.45 1542" stroke="url(#paint0_linear_147_669)" strokeWidth="40" strokeMiterlimit="6" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                        <linearGradient id="paint0_linear_147_669" x1="809.5" y1="802" x2="1741" y2="20" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#49B73E" />
                            <stop offset="1" stopColor="#58FF48" />
                        </linearGradient>
                    </defs>


    {/* TEXT BLOCKS */}

    <foreignObject x="530" y="180" width="260" height="350">
      <p className="text-2xl font-medium font-primary md:text-xl text-justify">
     I invest with a long-term mindset, giving ideas enough time to grow. 
Short-term noise is ignored, and market timing is never forced
      </p>
    </foreignObject>

    <foreignObject x="1100" y="260" width="260" height="350">
      <p className="text-2xl font-medium font-primary md:text-xl text-justify">
      No borrowed money or external funds are ever used for trading. 
Only capital that allows clear thinking and disciplined decisions is deployed. 
      </p>
    </foreignObject>

    <foreignObject x="780" y="755" width="250" height="300">
      <p className="text-2xl font-medium font-primary md:text-xl text-justify">
   These rules exist to protect mindset before protecting capital. 
Following them consistently matters more than any single trade outcome. 
      </p>
    </foreignObject>

    <foreignObject x="1300" y="840" width="220" height="300">
      <p className="text-2xl font-medium font-primary md:text-xl text-justify">
     Breaking these rules once can cost more than multiple losing trades. 
Consistency comes from respect for process, not shortcuts. 
      </p>
    </foreignObject>
  </svg>
</div>


            {/* Bottom Statement */}
            <div   ref={endRef} className="h-screen flex justify-center items-center relative z-100 border-t-[12px] lg:border-t-[40px] border-primary-main pt-20 text-center bg-green-50">

              
                 <p className="max-w-[290px]  heading-h3 md:max-w-2xl mx-auto">
                    Some <span className="text-primary-main ">rules</span> are meant to be
                    <span className="text-primary-main "> broken</span> but these
                    rules have taken me so far.
                </p>
            

            </div>

        </section>
    )
}

export default TradingRules   