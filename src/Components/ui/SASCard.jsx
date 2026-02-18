import React from 'react'
import Image from 'next/image'

function SASCard({text,icon}) {
    return (
        <div className="flex items-center justify-center gap-s8 md:gap-s16">
            <div className="aspect-square w-full max-w-[120px] relative overflow-hidden rounded-r24 md:rounded-r32">
                <Image
                    src={icon}
                    alt="Analytics icon"
                    fill
                    className="object-cover"
                />
            </div>

            <p className="body-default  max-w-[185px] md: max-w-[500px]">
               {text}
            </p>
        </div>
    )
}

export default SASCard
