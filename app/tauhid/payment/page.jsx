import React from 'react';
import img from "@/public/assets/payment.png";
import logo from "@/public/assets/logo.svg";
import Image from 'next/image';
import { TiLockClosed } from "react-icons/ti";
import bkash from '@/public/assets/bkash.png';
import nagad from '@/public/assets/nagad.png';
import dutchBangla from '@/public/assets/dutch-bangla.png';
import masterCard from '@/public/assets/Mastercard_logo.png';
import visaCard from '@/public/assets/visa-icon.png';

import { FiPhoneCall } from 'react-icons/fi';



const page = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-white to-[#B8E0FF] p-4 hidden md:block text-lg font-semibold text-center'>
                <div className='flex justify-around'>
                    <div className='flex-initial w-[66%] flex items-center justify-around leading-10'>
                        <Image src={logo} className='h-32 w-32' />
                        <h1>
                            নিরাপদ এবং নিরবচ্ছিন্ন অর্থপ্রদান আপনার জন্য অপেক্ষা করছে! <br /> আমাদের বিশ্বস্ত পেমেন্ট গেটওয়ের সাথে ঝামেলা মুক্ত <br /> লেনদেনের অভিজ্ঞতা নিন।
                        </h1>
                    </div>
                    <Image src={img} className='w-60' />
                </div>
            </div>

            <div className='my-10 flex flex-col lg:flex-row justify-around'>
                <div className='w-full lg:w-[33%] border h-full border-gray-700 py-5 px-10 rounded-xl'>
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
                        <p>৳ ২০</p>
                    </div>
                    <hr className='my-2 border border-gray-200' />
                    <div className='flex justify-between text-sm py-6 font-bold'>
                        <p>সর্বমোট <span className='font-normal'>(ভ্যাট সহ)</span> </p>
                        <p>৳ ১০২০</p>
                    </div>
                </div>
                <form action="" className='text-sm border border-gray-700 rounded-xl px-10 py-5 space-y-8'>
                    <div className='flex justify-between items-center gap-20'>
                        <h6>পেমেন্ট মেথড সিলেক্ট করুন</h6>
                        <div className='flex items-center gap-2 bg-[#D9D9D9] py-2 px-5 rounded-full'>
                            <p className='bg-blue-400 text-white w-7 h-7 p-1 rounded-full text-center'>
                                <TiLockClosed className='h-5 w-5' />
                            </p>
                            <p>সম্পূর্ণ নিরাপদ পেমেন্ট</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between p-4 border border-gray-700 rounded-lg'>
                        <div className='space-x-5'>
                            <input type="radio" name="bkash" id="bkash" className='w-4 h-4' />
                            <label htmlFor="bkash">বিকাশ</label>
                        </div>
                        <Image src={bkash} className='w-32' />
                    </div>
                    <div className='space-x-5 flex items-center ms-5'>
                        <input type="checkbox" name="savePhoneNumber" id="savePhoneNumber" className='w-4 h-4' />
                        <label htmlFor="savePhoneNumber">বিকাশ ফোন নাম্বারটি সেভ করুন</label>
                    </div>

                    <div className='flex items-center justify-between p-4 border border-gray-700 rounded-lg'>
                        <div className='space-x-5'>
                            <input type="radio" name="otherPayment" id="otherPayment" className='w-4 h-4' />
                            <label htmlFor="otherPayment">অন্যান্য পেমেন্ট মাধ্যম</label>
                        </div>
                        <div className='flex gap-3'>
                            <Image src={nagad} className='w-8' />
                            <Image src={dutchBangla} className='w-6' />
                            <Image src={visaCard} className='w-10' />
                            <Image src={masterCard} className='w-10' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between p-4 border border-gray-700 rounded-lg'>
                        <div className='flex gap-5 items-center'>
                            <FiPhoneCall size={24} className='text-blue-600' />
                            <p>এজেন্টের সহায়তা নিতে কল করুন 16000 নম্বরে</p>
                        </div>
                    </div>

                    <div className='space-x-5 flex items-center ms-5'>
                        <input type="checkbox" name="agreementStatus" id="agreementStatus" className='w-4 h-4' />
                        <label htmlFor="agreementStatus">আমি এই প্ল্যাটফর্ম
                            <a href="#" className='text-blue-600 hover:underline' target='_blank'> ব্যবহারের শর্তাবলি </a>ও 
                            <a href="#" className='text-blue-600 hover:underline' target='_blank'> গোপনীয়তা নীতির </a>ব্যাপারে সম্মতি দিচ্ছি
                        </label>
                    </div>

                    <button type='submit' className='flex items-center justify-between w-full bg-[#2C74DC] p-3 text-white font-semibold rounded-lg'>
                        <h2>পেমেন্ট করুন</h2>
                        <p>৳ ১০২০</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default page;