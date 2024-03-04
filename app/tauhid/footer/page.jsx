import React from 'react';
import { logo } from "@/public/logo.png";
import Image from 'next/image';

const page = () => {
    return (
        <div className='flex gap-[10%] '>
            <div>
                <div><Image href={logo} height={100} width={200}></Image></div>
                <div>
                    <div>address logo</div>
                    <div>address</div>
                </div>
            </div>
            <div>
                <div>Information</div>
                <div>
                    <ul>
                        <li>About us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>My Account</div>
                <div>
                    <ul>
                        <li>gift certificate</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>Services</div>
                <div>
                    <ul>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div>
                <div>Instagram Gallery</div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default page;