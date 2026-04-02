"use client"
import React from "react"
import Image from "next/image"
import { useEffect, useState } from "react"

function PerformanceTrack() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchPerformance = async () => {
            const res = await fetch("http://localhost:3001/api/performanceTrack");

            console.log(res);
            if (!res.ok) return;
            const json = await res.json();
            console.log("kui", json);

            setData(json);
        };

        fetchPerformance();
    }, []);

    if (!data) return null;
    return (
        <section className="w-full md:py-s160 space-y-s104 px-s32 lg:px-0">

            {/* Heading */}
            <h2 className="heading-h2">
                Performance Track
            </h2>

            {/* Layout */}
            <div className="flex flex-col xl:flex-row items-center justify-between">

                {/* Left Text */}
                <p className="body-default w-[200px] text-justify">
                {data && `I have executed a total of ${data.totalTrades} trades in my trading career, with an overall accuracy of ${data.accuracy}%.`} 
                </p>

                {/* Device */}
                {/* <DeviceMockup screenSrc="/Images/Sample.png" /> */}
                 <div className="relative scale-55 md:scale-100  w-[640px] h-[480px]">

            {/* Screen */}
            <div className="absolute space-y-s16 p-s16  flex flex-col items-center justify-center inset-[18px]  overflow-hidden z-0">
                <div className="w-full flex-col flex gap-s6 px-s16">
                    <div className="flex max-w-[600px]  justify-between items-center">
                        <p className="heading-h6">Performance Track</p>

                        <p className="caption">Lifetime</p>

                    </div>
                    <div className="bg-secondary-main h-0.5 "></div>
                    <div className=" caption" >Tracking execution, not profits - improving</div>
                </div>
                <div className="flex  justify-center items-center gap-s8  ">
                    {/* Total Trades */}
                    <Card
                        title="Total Trades"
                        value={data.totalTrades}
                        footer="This month"
                        bg="bg-primary-main text-background"
                    />

                    {/* Accuracy */}
                    <Card
                        title="Accuracy"
                        value={data.accuracy}
                        footer="Win rate"
                        bg="bg-gray-100"
                    />

                    {/* Avg Risk : Reward */}
                    <Card
                        title="Avg Risk : Reward"
                        value={data.avgRiskToReward}
                        footer="Based on executed trades"
                        bg="bg-primary-light"
                    />

                    {/* Best / Worst */}
                    <Card
                        title="Best / Worst"
                        value={`${data.best} / ${data.worst}`}
                        footer="
 Learning focus Measured in R-multiples (risk units)"
                        bg="bg-main text-background"
                    />
                </div>
                <div className="w-full space-y-s6 px-s16">

                    <div className="bg-secondary-main h-0.5 "></div>
                    <div className="text-center body-default" >Disclaimer: This is for documentation and educational journaling, not financial advice. Trading involves risk.</div>
                </div>
            </div>

            {/* Bezel */}
            <Image
                src="/Images/tablet-bezel.png"
                alt="Tablet bezel"
                fill
                loading="eager"
                className="object-contain  z-10 pointer-events-none"
            />
        </div>

                {/* Right Text */}
                <p className="body-default w-[200px] text-justify">
                 {data && `I have maintained an average risk-to-reward of ${data.avgRiskToReward} across trades, with my best trade at ${data.best} and my largest loss limited to ${data.worst}.`}
                </p>

            </div>
        </section>
    )
}

export default PerformanceTrack


function Card({ title, value, footer, bg }) {
    return (
        <div
            className={`
        flex flex-col items-center justify-between 
         p-s8 rounded-r16 min-w-[120px] max-w-[130px] min-h-[250px]
        text-center ${bg}
      `}
        >
            <p className="border-b  border-background pb-s8 min-w-[90px] caption">
                {title}
            </p>

            <p className="heading-h4 transition -rotate-90">{value}</p>

            <p className="border-t  border-background pt-s6  min-w-[90px] text-center   text-[9px]">
                {footer}
            </p>

        </div>
    );
}
