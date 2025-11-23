'use client';

import React from 'react';

const steps = [
    { step: 1, title: 'Aanmelden', active: true },
    { step: 2, title: 'Maak Jouw Evenement Aan', active: false },
    { step: 3, title: 'Verkoop Online Jouw Tickets', active: false },
    { step: 4, title: 'Houd De Verkoop Hij', active: false },
    { step: 5, title: 'Scan De Tickets Op Jouw Evenement', active: false },
];

const HowItWorks = () => {
    return (
        <section className='bg-green-900 text-white py-20 px-10 '>
            <h3 className='text-orange-500 font-semibold text-sm uppercase mb-2 text-center'>How It Works</h3>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Hoe Werkt Veilig Reserveren.NL</h2>
            <p className='text-gray-300 max-w-2xl mx-auto mb-8 text-center'>
                Via Ons Online Ticketsysteem Kun Jij Eenvoudig En Professioneel Je Eigen Ticketshop Opzetten Voor Jouw Evenement.
            </p>

            <div className='relative flex flex-col md:flex-row items-center justify-between w-full mx-auto'>

                {steps.map((step, index) => (
                    <div key={index} className='relative grid grid-rows-3 w-full'>

                        <div
                            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold z-10
                                ${step.active ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
                        >
                            {step.step}
                        </div>
                        <hr className={`absolute top-5 w-full border-2 border-dashed ${step.active ? 'border-orange-500' : 'border-white'}`} />

                        <div className='absolute top-1/2 w-1/2'>
                            <p className='text-xs text-gray-300 mt-2'>Stap {step.step}</p>
                            <p className={`text-sm font-semibold ${step.active ? 'text-white' : 'text-gray-500'} mt-2`}>
                                {step.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
