'use client'
import React from 'react';
import Link from 'next/link';

const MehediPage = () => {
    const routes = [
        {
            path: 'mehedi/dynamictable',
            name: 'Dynamic Table',
        },
        {
            path: 'mehedi/debouncedinput',
            name: 'Debounced Input',
        },
        {
            path: 'mehedi/sidebar',
            name: 'Sidebar',
        },
        {
            path: 'mehedi/dynamicmodal',
            name: 'Dynamic Modal',
        },
        {
            path: 'mehedi/customslider',
            name: 'Custom Slider',
        },
        {
            path: 'mehedi/carousel',
            name: 'Carousel',
        },
        {
            path: 'mehedi/accordion',
            name: 'Accordion',
        },
        {
            path: 'mehedi/accordion',
            name: 'Accordion',
        },
        {
            path: 'mehedi/register',
            name: 'Register',
        },
    ]
    return (
        <div className='flex gap-5 justify-center items-center min-h-screen'>
            {
                routes.map((route, i) => (
                    <Link key={i} href={route.path}><button className='bg-teal-500 p-2 text-gray-800'>{route.name}</button></Link>
                ))
            }
        </div>
    );
};

export default MehediPage;