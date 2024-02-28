'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DailyDealsCard = () => {

    const data = [
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

            <div className='relative hover:cursor-pointer'>
                {
                    isHover && (<div className='absolute top-0'>
                        hi hi hi hih ih ih ih ih ih
                    </div>)
                }
                <div className='absolute top-5 right-5 size-10 rounded-full bg-rose-500 pt-3 text-xs text-center font-bold'>
                    <span className='mt-3'>-20%</span>
                </div>
                <Image
                    src="https://images.unsplash.com/photo-1671600493594-edb52f00c6d7?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={250}
                    height={200}
                // layout='responsive'
                ></Image>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold hover:text-rose-500 cursor-pointer'>Card Header</h1>
                <p className='text-xl text-rose-500 font-bold'>$450 <span className='text-sm font-normal line-through text-gray-300'>$500</span></p>
                <div className='flex gap-10 justify-between items-center text-sm'>
                    <h1>Available: <span className='text-rose-500'>{data[0].available}</span></h1>
                    <h1>Sold: <span className='font-bold'>{data[0].sold}</span></h1>
                </div>
                <div className='w-full h-[10px] bg-slate-400 rounded-full'>
                    <div className={`h-[10px] bg-rose-500 rounded-full w-[calc(10%)]`}></div>
                </div>
                <div className='flex gap-5'>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-500 rounded-full size-10 p-2 text-center'>{countdown.days}</h1>
                        <p className='text-xs uppercase'>Days</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-500 rounded-full size-10 p-2 text-center'>{countdown.hours}</h1>
                        <p className='text-xs uppercase'>Hours</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-500 rounded-full size-10 p-2 text-center'>{countdown.minutes}</h1>
                        <p className='text-xs uppercase'>Mins</p>
                    </div>
                    <div className='flex flex-col items-center' >
                        <h1 className='bg-gray-500 rounded-full size-10 p-2 text-center'>{countdown.seconds}</h1>
                        <p className='text-xs uppercase'>Secs</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyDealsCard;