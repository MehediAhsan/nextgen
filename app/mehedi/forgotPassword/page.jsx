'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import RegisterImage from '../../../assets/reset.jpg'
import logo from '../../../assets/logobiwta.png'
import Image from 'next/image';

const ForgotPassword = () => {
    const [show, setShow] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = (value) => {
        console.log(value);
        reset();
    };
    return (
        <div className='md:flex justify-center gap-10 items-center bg-white'>
            <div className='w-full md:w-1/2 p-10 bg-[#f5f7fc]'>
                <Image src={logo} className='w-20 h-20 mx-auto mb-5' />
                <h1 className='text-center font-bold mb-10'>চিন্তা করবেন না! ভুলে যেতেই পারেন। ফোন নম্বর লিখুন
                    আমরা এই ফোন নম্বরে OTP পাঠাব।</h1>
                <Image src={RegisterImage} className='w-96 mx-auto object-cover' />
            </div>
            <div
                className="text-black w-full md:w-1/2 py-10 md:py-0"
            >
                <div className='w-9/12 md:w-7/12 mx-auto'>
                    <h1 className='font-semibold text-xl mb-10'>পাসওয়ার্ড ভুলে গেছেন?</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600"
                            >  ফোন নাম্বার
                            </label>
                            <input
                                onWheel={(e) => e.target.blur()}
                                {...register("phone", { required: true })}
                                required
                                type="number"
                                placeholder='আপনার ফোন নাম্বার দিন'
                                className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                            />
                        </div>

                        <button
                            type='submit'
                            className="w-full rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                            চালিয়ে যান
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
