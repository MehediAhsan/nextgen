'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { RiShoppingBasketLine } from "react-icons/ri";
import { IoHeartSharp } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { ImEye } from "react-icons/im";

const DailyDealsCard = ({ offer = 20, img = '', cardTitle = 'Card Title', currentPrice = 450, previousPrice = 500, data }) => {

    data = [
        {
            available: 500,
            sold: 50
        }
    ]

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isHover, setIsHover] = useState(false);

    useEffect(() => {
        const targetDate = new Date() // Replace with your tour date

        targetDate.setDate(targetDate.getDate() + 7)

        const interval = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;

            if (timeDifference <= 0) {
                clearInterval(interval);
                // Handle tour date reached
            } else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div className='flex gap-10' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>

            <div className='relative z-[15] hover:cursor-pointer'>
                <div className={`absolute z-20 left-2 top-7 flex flex-col gap-2 ${isHover ? "block" : "hidden"}`}>
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
                {
                    offer !== 0 && (<div className='absolute top-5 right-5 size-10 rounded-full bg-rose-500 pt-3 text-xs text-center font-bold'>
                        <span className='mt-3'>-{offer}%</span>
                    </div>)
                }
                <Image
                    src={`${img ? img : 'https://images.unsplash.com/photo-1671600493594-edb52f00c6d7?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}`}
                    width={250}
                    height={200}
                // layout='responsive'
                ></Image>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold hover:text-rose-500 cursor-pointer'>{cardTitle}</h1>
                <p className='text-xl text-rose-500 font-bold'>${currentPrice} {previousPrice !== 0 && <span className='text-sm font-normal line-through text-gray-300'>${previousPrice}</span>}</p>
                <div className='flex gap-10 justify-between items-center text-sm'>
                    <h1>Available: <span className='text-rose-500'>{data[0].available}</span></h1>
                    <h1>Sold: <span className='font-bold'>{data[0].sold}</span></h1>
                </div>
                <div className='w-full h-[10px] bg-gray-600 rounded-full'>
                    <div className={`h-[10px] bg-rose-500 rounded-full w-[calc(10%)]`}></div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-600 rounded-full size-10 p-2 text-center'>{countdown.days}</h1>
                        <p className='text-xs uppercase'>Days</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-600 rounded-full size-10 p-2 text-center'>{countdown.hours}</h1>
                        <p className='text-xs uppercase'>Hours</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-600 rounded-full size-10 p-2 text-center'>{countdown.minutes}</h1>
                        <p className='text-xs uppercase'>Mins</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-600 rounded-full size-10 p-2 text-center'>{countdown.seconds}</h1>
                        <p className='text-xs uppercase'>Secs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyDealsCard;