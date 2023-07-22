"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const slideData = [
    {
        id: 1,
        title: "always fresh & always crispy & always hot.",
        img: "/slide1.png"
    },
    {
        id: 2,
        title: "we deliver your food all over in Dhaka.",
        img: "/slide2.png"
    },
    {
        id: 3,
        title: "the best pizza to share with your family.",
        img: "/slide3.jpg"
    }
]

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() =>
            setCurrentSlide(prev => (prev === slideData.length - 1 ? 0 : prev + 1))
            , 4000)
        return () => clearInterval(interval);
    }, [])
    return (
        <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
            {/* Text Container */}
            <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
                <h1 className="text-3xl text-center uppercase px-4 md:px-10 md:text-6xl xl:text-6xl">
                    {slideData[currentSlide].title}
                </h1>
                <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
            </div>
            {/* Image Container */}
            <div className="w-full flex-1 relative">
                <Image src={slideData[currentSlide].img} alt="" fill className="object-cover" />
            </div>
        </div>
    );
};

export default Slider;