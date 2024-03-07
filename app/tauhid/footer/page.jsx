import React from 'react';
import cLogo from "../../../public/logo.png";
import { FaLocationArrow } from 'react-icons/fa';
import { CgEditBlackPoint } from "react-icons/cg";
import Image from 'next/image';

const page = () => {
    console.log(cLogo.src);
    return (
        <div className='p-10 bg-white'>
            <div className='flex gap-[5%] text-sm text-gray-500 pt-5 pb-10'>
                <div>
                    <div><Image src={cLogo.src} height={100} width={150}></Image></div>
                    <div className='flex gap-4 items-center text-sm'>
                        <div><FaLocationArrow /></div>
                        <div>Rupayan Millennium Center, Bir Uttam <br /> Rafiqul Islam Ave, Dhaka 1212</div>
                    </div>
                </div>
                <div>
                    <div className=' text-black  border-rose-500 font-bold uppercase'>Information <hr className='w-1/2 h-[2px] bg-rose-500  border-rose-500' /></div>
                    <div className='mt-8'>
                        <ul className='space-y-3'>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> About us</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> FAQ</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> Warranty And Services</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> Support 24/7 page</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> Product Registration</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'> <CgEditBlackPoint /> Product Support</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' text-black  border-rose-500 font-bold uppercase'>My Account <hr className='w-1/2 h-[2px] bg-rose-500  border-rose-500' /></div>
                    <div className='mt-8'>
                        <ul className='space-y-3'>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Brands</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> gift certificate</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Affiliates</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Specials</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> FAQs</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Custom Link</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' text-black  border-rose-500 font-bold uppercase'>Services <hr className='w-1/2 h-[2px] bg-rose-500  border-rose-500' /></div>
                    <div className='mt-8'>
                        <ul className='space-y-3'>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Contact Us</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Returns</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Support</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Site Map</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Customer Service</li>
                            <li className='flex gap-2 items-center hover:text-rose-500 cursor-pointer'><CgEditBlackPoint /> Custom Link</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className=' text-black  border-rose-500 font-bold uppercase'>Instagram Gallery <hr className='w-1/2 h-[2px] bg-rose-500  border-rose-500' /></div>
                    <div className=' grid grid-cols-4 w-60'>
                        <Image className='col-span-2 row-span-2' src={cLogo}></Image>
                        <Image src={cLogo}></Image>
                        <Image src={cLogo}></Image>
                        <Image src={cLogo}></Image>
                        <Image src={cLogo}></Image>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                
            </div>
        </div>
    );
};

export default page;