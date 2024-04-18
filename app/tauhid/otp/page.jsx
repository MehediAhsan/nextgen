"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import img from '@/public/assets/otp.svg';
import { useForm } from 'react-hook-form';
import OTPInput from 'react-otp-input';

const page = () => {
    const { register } = useForm();
    const numInputs = 4;
    const [otp, setOtp] = useState(new Array(numInputs).fill(''));
    const inputRefs = useRef([]);

    const handleInputChange = (e, index) => {
        const value = e.target.value;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < numInputs - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <div className='bg-white flex flex-row justify-around items-center'>
            <div className='text-center p-5 space-y-5'>
                <h2 className='text-black font-bold text-xl'>
                    আপনার ফোন নম্বরে একটি OTP পাঠানো হয়েছে যা আপনার অ্যাকাউন্ট নিবন্ধনের জন্য ব্যবহৃত হবে।
                </h2>
                <Image src={img} alt='phone otp image' className='object-cover h-[86%] w-[86%] mx-auto' />
            </div>
            <div className='text-center p-5 flex flex-col space-y-10'>
                <h1 className='text-black text-2xl font-bold'>OTP ভেরিফিকেশন</h1>
                <p className='text-black text-sm'>
                    4-সংখ্যার একটি 1কোড লিখুন যা আপনার <br /> <span className='text-blue-400'> +880129234</span> নাম্বারে পাঠানো হয়েছে।
                </p>
                <form className='grid grid-cols-4 gap-5 mx-auto w-[50%]'>
                    {
                        otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                ref={(input) => (inputRefs.current[index] = input)}
                                className="text-black w-full text-2xl text-center border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 transition-colors focus:outline-none peer bg-inherit"
                            />)
                        )
                    }

                </form>
                <p className='text-sm text-black'>
                    কোড কি পাননি?
                </p>
                <h2 className='text-blue-700 underline font-semibold'>পুনরায় কোড পাঠান</h2>
            </div>
        </div>
    );
};

export default page;