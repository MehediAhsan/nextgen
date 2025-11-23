'use client'
import RegisterImage from '../../../assets/tik.jpg'
import logo from '../../../assets/logobiwta.png'
import Image from 'next/image';
import { HiOutlineClipboardDocument } from "react-icons/hi2";

const Clipboard = () => {
    const transactionId = "PIWT26913";

    const handleCopy = () => {
        // Create a textarea element
        const textarea = document.createElement('textarea');
        // Set the value of the textarea to the text you want to copy
        textarea.value = transactionId;
        // Make the textarea invisible
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;
        // Append the textarea to the DOM
        document.body.appendChild(textarea);
        // Select the text inside the textarea
        textarea.select();
        // Copy the selected text to the clipboard
        document.execCommand('copy');
        // Remove the textarea from the DOM
        document.body.removeChild(textarea);
        // Alert the user that the text has been copied
        alert('Copied to clipboard!');
      };

    return (
        <div className='md:flex justify-center gap-10 items-center bg-white'>
            <div className='w-full md:w-1/2 py-10 bg-[#f5f7fc]'>
                <Image src={logo} className='w-20 h-20 mx-auto mb-5' />
                <h1 className='text-center font-bold'>অভিনন্দন! অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!</h1>
                <Image src={RegisterImage} className='object-cover mx-auto px-10' />
            </div>
            <div
                className="text-black w-full md:w-1/2 py-10 md:py-0"
            >
                <div className='w-9/12 mx-auto'>
                    <div className='flex items-center gap-6 border border-black p-2 rounded font-bold text-sm mb-10 w-fit'>
                        <h1>ট্রান্জেকশন আইডি {transactionId}</h1>
                        <HiOutlineClipboardDocument className='mb-1 text-xl cursor-pointer' onClick={handleCopy} />
                    </div>
                    <h1 className='font-bold mb-6'>আপনার কোম্পানি প্রোফাইল এ ভিজিট করুন</h1>
                    <button
                        className="w-fit px-14 rounded bg-blue-500 text-orange-50 p-3 text-center font-bold text-sm"
                    >
                         কোম্পানি প্রোফাইল
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Clipboard;
