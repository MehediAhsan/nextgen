'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import RegisterImage from '../../../assets/register.png'
import Image from 'next/image';

const RegisterPage = () => {
    const [show, setShow] = useState(false)
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    const onSubmit = async (value) => {
        reset();
    };
    return (
        <div className='flex justify-center gap-10 items-center bg-white h-screen'>
            <div className='w-1/2'>
                <Image src={RegisterImage} />
            </div>
            <div
                className="text-black w-1/2"
            >
                <div className='w-7/12 mx-auto'>
                    <h1 className='font-semibold text-xl mb-6'>একাউন্ট রেজিস্ট্রেশন করুন</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            > ই মেইল
                            </label>
                            <input
                                {...register("email", { required: true })}
                                required
                                type="email"
                                placeholder='আপনার ইমেইল এ ড্রেস দিন'
                                className="w-full px-[10px] py-4 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                            />
                        </div>

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            >  মোবাইল নাম্বার
                            </label>
                            <input
                                {...register("email", { required: true })}
                                required
                                type="email"
                                placeholder='আপনার ফোন নাম্বার দিন'
                                className="w-full px-[10px] py-4 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                            />
                        </div>

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600 after:content-['*'] after:text-red-400"
                            > পাসওয়ার্ড
                            </label>
                            <div className='relative'>
                                <input
                                    {...register("password", { required: true })}
                                    required
                                    type={`${show ? 'text' : 'password'}`}
                                    placeholder='আপনার পাসওয়ার্ড দিন'
                                    className="w-full px-[10px] py-4 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                                />
                                {
                                    show ? <IoIosEye className='absolute top-5 right-3 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} /> : <IoIosEyeOff className='absolute top-5 right-3 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="w-full rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                             রেজিস্টার
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
