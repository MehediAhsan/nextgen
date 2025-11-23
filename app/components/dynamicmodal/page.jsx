'use client'
import React, { useState } from 'react';
import Modal from '../../../components/common/Modal'

const DynamicModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <button onClick={() => setOpen(true)} className='bg-red-500 p-2 rounded'>Open Modal</button>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <div className='text-black'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores, reiciendis at eligendi magni explicabo numquam nemo debitis dolor, vero mollitia provident fugiat animi suscipit. Ea reprehenderit unde ab dignissimos?
                </div>
            </Modal>
        </>
    );
};

export default DynamicModal;