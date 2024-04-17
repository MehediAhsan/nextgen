'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import LoginImage from '../../../assets/login.png'
import logo from '../../../assets/logobiwta.png'
import Image from 'next/image';

const LoginPage = () => {
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
        <div className='flex justify-center gap-10 items-center bg-white h-screen'>
            <div className='w-1/2 p-14 bg-[#f5f7fc]'>
                <Image src={logo} className='w-20 h-20 mx-auto mb-5' />
                <Image src={LoginImage} />
            </div>
            <div
                className="text-black w-1/2"
            >
                <div className='w-7/12 mx-auto'>
                    <h1 className='font-semibold text-xl mb-6'>লগ ইন করুন</h1>
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
                                className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
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
                                    className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                                />
                                {
                                    show ? <IoIosEye className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} /> : <IoIosEyeOff className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="w-full rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                             লগ ইন
                        </button>

                        <button
                            type='submit'
                            className="w-full rounded bg-teal-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                            রেজিস্টার
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
