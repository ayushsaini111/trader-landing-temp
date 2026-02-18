"use client"
import { useEffect, useState } from "react"
function InsightCard({ text }) {

    return (
        <div
            className="
      relative max-w-[320px] rounded-2xl px-6 py-4
      bg-[#0f140f]/70 backdrop-blur-xl
      border border-green-500/30
      shadow-[0_0_40px_rgba(34,197,94,0.15)]
    ">
            <span className="absolute left-3 top-4 text-green-400 text-3xl">“</span>

            <p className="body-default p-s8 leading-relaxed text-neutral-300">
                 {text}
            </p>

            <span className="absolute right-4 bottom-4 text-green-400 text-3xl">”</span>
        </div>
    )
}

function DailyInsights() {
    const [insights, setInsights] = useState([])
    console.log("SDfs", insights);

    useEffect(() => {
        fetch("http://localhost:3001/api/dailyBlogs")
            .then(res => res.json())
            .then(data => {
                setInsights(data)
                console.log(data);

            })
            
    }, [])

    return (
        <section data-nav="white" className=" min-h-screen py-s160  flex justify-center items-center bg-black px-s16 ms:px-s32">

          <div className="space-y-s160">
              {/* Content */}
            <div className=" max-w-7xl mx-auto text-center">

                {/* Heading glass plate */}
                <div className=" rounded-r24 md:rounded-r32  px-s16
           backdrop-blur-xl border-[1px] border-white/30
        ">
                    <h2 className=" transition -translate-y-7 sm:-translate-y-15 lg:-translate-y-22
            text-6xl sm:text-[120px] lg:text-[160px] font-bold
            bg-gradient-to-b from-white to-/30
            bg-foreground bg-clip-text text-transparent 
          ">
                        Daily Insights
                    </h2>
                </div>

                {/* Cards */}

            </div>
            <div className="flex  flex-col md:flex-row items-center justify-center gap-10">
                {insights.map(item => (

                    <InsightCard key={item._id} text={item.blog} />
                ))}
            </div>
          </div>
        </section>
    )
}

export default DailyInsights
