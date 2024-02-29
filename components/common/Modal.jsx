import React from 'react';
import { ImCross } from "react-icons/im";

const Modal = ({ open, setOpen, children }) => {
    return (
        <>
            <div className={`${open ? 'bg-black fixed inset-0 z-40 opacity-30' : 'hidden'}`}></div>
            <div className={`${open ? 'fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' : 'hidden'}`}>
                <div className='flex justify-between items-center bg-red-500 p-5'>
                    <h1 className='uppercase font-semibold'>All Categories</h1>
                    <ImCross onClick={() => setOpen(false)} className='cursor-pointer text-sm' />
                </div>
                <div className="overflow-y-auto bg-white py-10 px-6">{children}</div>
            </div>
        </>
    );
};

export default Modal;