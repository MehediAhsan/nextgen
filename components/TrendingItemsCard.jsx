"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { ImEye } from "react-icons/im";

const TrendingItemsCard = () => {
    const [isHover, setIsHover] = useState(false);
    const myStyle = {
        itemShapes: RoundedStar,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className='w-[200px] bg-gradient-to-r from-[#B7B5B6] to-[#C7C7C7] text-center'>
            <div className='relative z-[15] hover:cursor-pointer'>
                <div className={`absolute z-20 left-2 top-[54px] flex flex-col gap-2 ${isHover ? "block" : "hidden"}`}>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-out hover:bg-rose-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.3s_ease-in-out]'>
                        <RiShoppingBasketLine />
                        <span className='absolute w-20 p-1 -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-out group-hover:bg-rose-500'>Add to cart</span>
                    </div>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-in-out hover:bg-rose-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.5s_ease-in-out]'>
                        <IoHeartSharp />
                        <span className='absolute w-28 p-1 -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-rose-500'>Add to whitelist</span>
                    </div>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-in-out hover:bg-rose-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.7s_ease-in-out]'>
                        <TfiReload />
                        <span className='absolute w-36 p-1 -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-rose-500'>Compare this product</span>
                    </div>
                    <div className='group relative bg-gray-600 transition-colors duration-500 ease-in-out hover:bg-rose-500 p-[6px] rounded font-bold text-xs flex gap-1 animate-[horizontalWave_0.9s_ease-in-out]'>
                        <ImEye />
                        <span className='absolute w-16 p-1 -z-10 rounded-e bg-gray-600 top-0 left-0 group-hover:left-5 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-500 ease-in-out group-hover:bg-rose-500'>Preview</span>
                    </div>
                </div>
                <Image src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={400} width={200}></Image>
            </div>
            <div className='pb-10'>
                <Link href='#' className='text-base hover:text-rose-500 tracking-tighter'>Product Name</Link>
                <div>
                    <Rating style={{ maxWidth: 100, margin: 'auto' }} value={4} itemStyles={myStyle} readOnly={true} />
                </div>
                <h3 className='text-rose-500 font-bold text-base'>$200</h3>
            </div>
        </div>
    );
};

export default TrendingItemsCard;