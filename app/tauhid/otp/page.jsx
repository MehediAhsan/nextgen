import Image from 'next/image';
import React from 'react';
import img from '@/public/assets/otp.svg';

const page = () => {
    const {} = useForm();
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
                    <div>
                        <input
                            type="text"
                            maxLength={1}
                            name='otp-1'
                            className="text-black w-full text-center border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            maxLength={1}
                            name='otp-2'
                            className="text-black w-full text-center border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            maxLength={1}
                            name='otp-3'
                            className="text-black w-full text-center border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            maxLength={1}
                            name='otp-4'
                            className="text-black w-full text-center border-b-2 border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 focus:text-blue-700 transition-colors focus:outline-none peer bg-inherit"
                        />
                    </div>

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