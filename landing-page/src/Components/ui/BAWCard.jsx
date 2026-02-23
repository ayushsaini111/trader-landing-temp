import React from 'react'
import Image from 'next/image'

function BAWCard({ type,className ,text}) {
    const isBest = type === 'best'

    return (
        <div
            className={`relative w-[230px] overflow-hidden py-s32 px-s16 md:p-s32 rounded-r40 space-y-s16
            backdrop-blur-[1px] border border-white/30 shadow-[2px_2px_10px_rgba(0,0,0,0.25)]
            ${isBest ? 'bg-primary-main/50' : 'bg-worst/50'} ${className}`}
        >

            <h4 className="relative z-10 text-center heading-h4">
                {isBest ? 'Best Trade' : 'Worst Trade'}
            </h4>

            <div className="relative z-10 w-full aspect-3/4 overflow-hidden border border-white/30 rounded-r24 md:rounded-r32">
                <Image
                    src={isBest ? '/Images/Sample.png' : '/Images/Sample.png'}
                    alt="trade visual"
                    fill
                    className="object-cover"
                />
            </div>

            <p className="relative z-10 text-justify text-xs md:text-lg font-primary font-normal">
                {text}
            </p>
        </div>
    )
}


export default BAWCard
