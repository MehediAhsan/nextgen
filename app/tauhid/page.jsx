import Link from 'next/link';
import React from 'react';

const page = () => {
    const nav = [
        {
            title: "Debounce",
            path: '/tauhid/debounce'
        },
        {
            title: "table",
            path: '/tauhid/table'
        },
        {
            title: "Card",
            path: '/tauhid/card'
        },
    ]

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className='p-2 my-5 space-x-4'>
                {
                    nav.map(menu => (
                        <Link className='border-2 px-4 py-2 border-yellow-200 rounded-lg hover:underline hover:text-yellow-200' href={menu.path}>
                            {menu.title}
                        </Link>
                    ))
                }
            </div>

            
        </div>
    );
};

export default page;