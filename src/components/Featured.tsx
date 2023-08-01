import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

const Featured = () => {
    return (
        <div className="w-screen overflow-x-scroll text-red-500">
            {/* Wrapper */}
            <div className="w-max flex">
                {/* Single Item */}
                {featuredProducts.map(item => (
                    <div key={item.id} className="w-screen md:w-[50vw] lg:w-[33vw] h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-100 transition-all duration-300">
                        {/* Image Container */}
                        {item.img && <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                            <Image src={item.img} alt="food1" fill className="object-contain" />
                        </div>}
                        {/* Text Container */}
                        <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
                            <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                            <p className="p-4 2xl:p-8">{item?.desc}</p>
                            <span className="text-xl font-bold">${item.price}</span>
                            <button className="bg-red-500 text-white p-2 rounded-md">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Featured;