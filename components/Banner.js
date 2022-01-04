import React from 'react'
import Image from "next/image"

function Banner() {
    return (
        <div className="relative h-[300px] ">
            <Image
                src="/pixels2.jpg"
                layout="fill"
                objectFit="cover"
                width="100%"
            />
            <div className="absolute top-1/2 w-full text-center" >
                
                <button className="text-white px-10 py-4 
                shadow-md rounded-md font-bold my-3 hover:shadow-xl
                active:scale-90 transition bg-gray-900 duration-150">
                    Explore</button>
            </div>
        </div>
    )
}

export default Banner
