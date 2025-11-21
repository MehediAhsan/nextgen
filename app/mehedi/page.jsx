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
        {
            path: 'mehedi/login',
            name: 'Login',
        },
        {
            path: 'mehedi/resetPassword',
            name: 'Reset Password',
        },
        {
            path: 'mehedi/clipboard',
            name: 'Clipboard',
        },
        {
            path: 'mehedi/forgotPassword',
            name: 'Forgot Password',
        },
        {
            path: 'mehedi/productDetails',
            name: 'Product Details',
        },
        {
            path: 'mehedi/banner',
            name: 'Banner',
        },
        {
            path: 'mehedi/footer',
            name: 'Footer',
        },
        {
            path: 'mehedi/stepper',
            name: 'Stepper',
        },
    ]
    return (
        <div className='flex flex-wrap gap-6 justify-center items-center pt-28'>
            {
                routes.map((route, i) => (
                    <Link key={i} href={route.path}><button className='bg-teal-500 p-2 text-gray-800 -skew-y-12 hover:-skew-y-0 transition-all duration-500 font-semibold'>{route.name}</button></Link>
                ))
            }
        </div>
    );
};

export default MehediPage;