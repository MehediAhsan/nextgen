'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import RegisterImage from '../../../assets/reset.jpg'
import Image from 'next/image';

const ResetPassword = () => {
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)
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
            <div className='w-full md:w-1/2 bg-[#f5f7fc] py-10 md:py-28 flex items-center justify-center'>
                <Image src={RegisterImage} className='object-cover px-10' />
            </div>
            <div
                className="text-black w-full md:w-1/2 py-10 md:py-0"
            >
                <div className='w-9/12 md:w-7/12 mx-auto'>
                    <h1 className='font-semibold text-xl mb-6'>পাসওয়ার্ড রিসেট করুন</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-secondary">

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600"
                            >  নতুন পাসওয়ার্ড দিন
                            </label>
                            <div className='relative'>
                                <input
                                    {...register("password", { required: true })}
                                    required
                                    type={`${show ? 'text' : 'password'}`}
                                    // placeholder='আপনার পাসওয়ার্ড দিন'
                                    className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                                />
                                {
                                    show ? <IoIosEye className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} /> : <IoIosEyeOff className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow(!show)} />
                                }
                            </div>
                        </div>

                        <div className='mb-4'>
                            <label
                                className="text-sm font-semibold text-gray-600"
                            >  পুনরায় পাসওয়ার্ড দিন
                            </label>
                            <div className='relative'>
                                <input
                                    {...register("repeatPassword", { required: true })}
                                    required
                                    type={`${show2 ? 'text' : 'password'}`}
                                    className="w-full px-3 py-5 mt-1 outline-none ring-none border border-gray-500 bg-[#E8F0FE] text-xs rounded"
                                />
                                {
                                    show2 ? <IoIosEye className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow2(!show2)} /> : <IoIosEyeOff className='absolute top-6 right-4 text-xl text-gray-600 cursor-pointer' onClick={() => setShow2(!show2)} />
                                }
                            </div>
                        </div>

                        <button
                            type='submit'
                            className="w-full rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm mt-5"
                        >
                            সাবমিট
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
