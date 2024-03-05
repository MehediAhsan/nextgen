'use client'
import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Accordion = () => {
    const [open, setOpen] = useState(null)
    const data = [
        {
            name: 'This is the first time to create a dynamic',
            details: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d lorem ipsum d lorem ipsum d lorem ips  lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips'
        },
        {
            name: 'This is the first time to create a dynamic',
            details: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d lorem ipsum d lorem ipsum d lorem ips  lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips'
        },
        {
            name: 'This is the first time to create a dynamic',
            details: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum d lorem ipsum d lorem ipsum d lorem ips  lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips lorem ips'
        },
    ]
    console.log(open);
    return (
        <div className='mt-40 w-6/12 mx-auto'>
            {
                data.map((dt, i) => (
                    <div key={i} className='cursor-pointer' onClick={() => { open !== i ? setOpen(i) : setOpen(null) }}>
                        <h1 className='bg-gray-700 p-2 flex justify-between items-center cursor-pointer'>
                            {dt.name}
                            {
                                open === i ? <FaMinus></FaMinus> : <FaPlus></FaPlus>
                            }
                        </h1>
                        <p className={`${open === i ? "h-40 visible transition-all duration-500 translate-y-0 opacity-100" : "invisible h-0 opacity-0 -translate-y-4 transition-all duration-500"} p-3`}>{dt.details}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Accordion;