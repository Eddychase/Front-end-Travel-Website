import React from 'react'
import Image from "next/image"

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-3xl font-bold mb-3 w-64">{title}</h3>
                <p className="font-semibold">{description}</p>

                <button className="text-sm font-semibold text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
            </div>
        </section>
    )
}

export default LargeCard
