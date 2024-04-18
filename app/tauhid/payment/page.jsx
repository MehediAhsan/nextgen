import React from 'react';
import img from "@/public/assets/payment.svg";
import logo from "@/public/assets/logo.svg";
import Image from 'next/image';
import { TiLockClosed } from "react-icons/ti";
import bkash from '@/public/assets/bkash.png';

const page = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-white to-blue-200 p-4 hidden md:block text-lg font-semibold text-center'>
                <div className='flex justify-around'>
                    <div className='flex-initial w-[66%] flex items-center justify-around'>
                        <Image src={logo} className='h-32 w-32' />
                        <h1>
                            নিরাপদ এবং নিরবচ্ছিন্ন অর্থপ্রদান আপনার জন্য অপেক্ষা করছে! <br /> আমাদের বিশ্বস্ত পেমেন্ট গেটওয়ের সাথে ঝামেলা মুক্ত <br /> লেনদেনের অভিজ্ঞতা নিন।
                        </h1>
                    </div>
                    <Image src={img} className='w-60' />
                </div>
            </div>

            <div className='mt-10 flex justify-around'>
                <div className='w-[33%] border border-gray-700 py-5 px-10 rounded-xl'>
                    <h2 className='font-semibold'>পেমেন্ট বিবরণ</h2>
                    <div className='flex justify-between text-sm py-6'>
                        <p>কোম্পানি নিবন্ধন ফি</p>
                        <p>৳ ১০০০</p>
                    </div>
                    <hr className='my-2 border border-gray-200' />
                    <div className='flex justify-between text-sm '>
                        <p>সাব টোটাল</p>
                        <p>৳ ১০০০</p>
                    </div>
                    <div className='flex justify-between text-sm'>
                        <p>সার্ভিস চার্জ ২%</p>
                        <p>৳ ১০০০</p>
                    </div>
                    <hr className='my-2 border border-gray-200' />
                    <div className='flex justify-between text-sm py-6'>
                        <p>সর্বমোট (ভ্যাট সহ) </p>
                        <p>৳ ২০</p>
                    </div>
                </div>
                <form action="" className='text-sm border border-gray-700 rounded-xl px-10 py-5 space-y-5'>
                    <div className='flex justify-between items-center gap-20'>
                        <h6>পেমেন্ট মেথড সিলেক্ট করুন</h6>
                        <div className='flex items-center gap-2 bg-gray-100 py-2 px-5 rounded-full'>
                            <p className='bg-blue-400 text-white w-7 h-7 p-1 rounded-full text-center'>
                                <TiLockClosed className='h-5 w-5' />
                            </p>
                            <p>সম্পূর্ণ নিরাপদ পেমেন্ট</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-4 border border-gray-700 rounded-lg'>
                        <div className='space-x-5'>
                            <input type="radio" name="bkash" id="bkash" />
                            <label htmlFor="bkash">বিকাশ</label>
                        </div>
                        <Image src={bkash} className='w-32' />
                    </div>
                    <div className='space-x-5'>
                        <input type="checkbox" name="savePhoneNumber" id="savePhoneNumber" />
                        <label htmlFor="savePhoneNumber">বিকাশ ফোন নাম্বারটি সেভ করুন</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;