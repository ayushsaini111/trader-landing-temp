import React from 'react'
import Image from 'next/image'

function MALCard({ src, alt, className = "" }) {
    return (
        <div className={`relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-green-500/30 ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover opacity-80"
            />

            {/* green glow */}
            <div className="absolute inset-0 bg-green-500/10 mix-blend-screen" />
        </div>
    )
}


export default MALCard
