'use client'
import React, { useState, useEffect } from 'react';

function DebouncedInput() {
    const [searchItem, setSearchItem] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            console.log("Performing search with term:", searchItem);
        }, 2000);

        console.log(debounceTimer);

        // Cleanup function to clear the timer if component unmounts or searchItem changes
        return () => clearTimeout(debounceTimer);
    }, [searchItem]);


    return (
        <div className='flex justify-center items-center h-screen'>
            <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Type something..."
            className='p-2 rounded bg-transparent border focus:outline-none text-gray-300'
        />
        </div>
    );
}

export default DebouncedInput;
