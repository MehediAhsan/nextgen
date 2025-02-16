import React from 'react';
import Image from 'next/image';

const MailIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 8L12 13L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 16.92V19C22 19.53 21.79 20.04 21.41 20.41C21.04 20.79 20.53 21 20 21C16.12 20.65 12.44 18.84 9.56 15.96C6.66 13.06 4.85 9.38 4.5 5.5C4.5 4.97 4.71 4.46 5.09 4.09C5.46 3.71 5.97 3.5 6.5 3.5H9.08C9.6 3.5 10.07 3.71 10.41 4.09C10.75 4.46 10.94 4.96 10.9 5.48C10.82 6.41 10.9 7.33 11.15 8.22C11.38 9.07 11.76 9.86 12.27 10.55L13.73 9.09C14.09 8.73 14.59 8.54 15.09 8.54H17.5C18.03 8.54 18.54 8.75 18.91 9.12C19.29 9.49 19.5 10 19.5 10.53C19.2 14.12 17.34 17.42 14.41 19.86C15.14 20.08 15.89 20.22 16.65 20.26C17.12 20.3 17.58 20.19 18 19.92C18.41 19.65 18.71 19.26 18.9 18.81L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MapPinIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 11.39 6.21 14.2 8.28 17.43C9.69 19.62 10.99 21.38 11.34 21.83C11.46 21.99 11.72 21.99 11.84 21.83C12.19 21.38 13.49 19.62 14.9 17.43C16.97 14.2 18.18 11.39 18.18 9C18 5.13 14.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const contactDetails = [
    {
        icon: <MailIcon />,
        title: "E-Mail",
        details: ["Info@Veiligreserveren-Nl", "Support@Veiligreserveren.Nl"]
    },
    {
        icon: <PhoneIcon />,
        title: "Mobile",
        details: ["+31 (6) 11 66 40 36"]
    },
    {
        icon: <MapPinIcon />,
        title: "Location",
        details: ["Main Street 4, 5973 NE Lottum"]
    }
];

const footerLinks = [
    {
        title: "Secure Reservation",
        items: ["IBAN- NL24 INGB 0662 5162 81", "BIC - INGBNL2A", "VAT - NL860110229B01", "KvK - 75017059"]
    },
    {
        title: "Dashboards",
        items: ["Ticketing", "Horse Riding"]
    },
    {
        title: "Scan",
        items: ["Online Scanning", "Download Scan App"]
    },
    {
        title: "Legal",
        items: ["Privacy", "Algemene Voorwaarden", "Terms"]
    }
];

const Footer = () => {
    return (
        <footer className='bg-[#00231C] text-white p-12 mt-60 relative overflow-x-clip'>
            <div className='absolute -z-30 top-8 left-0 w-[110%] h-24 bg-[#00231C] -ml-8 transform -translate-y-full' style={{ borderRadius: '100% 50% 0 0' }}></div>
            <div className='text-center md:text-left'>
                <h2 className='text-base font-semibold text-orange-400 mb-4'>Contact Us</h2>
                <h3 className='text-5xl leading-[64px] font-semibold mb-6'>Schedule A No-Obligation Appointment Now Shall We Have A Beer (Or Coffee) Together Soon?</h3>
                <div className='grid md:grid-cols-3 gap-6 mb-10'>
                    {contactDetails.map((item, index) => (
                        <div key={index} className='bg-[#034E3F] p-10 rounded-lg flex flex-col items-center'>
                            {item.icon}
                            <h4 className='text-lg font-semibold my-3'>{item.title}</h4>
                            {item.details.map((detail, idx) => (
                                <p key={idx} className='text-gray-300'>{detail}</p>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-t border-white border-opacity-25 pt-6'>
                    <div className='flex gap-4'>
                        <Image src='/google-play.png' alt='Google Play' width={150} height={50} />
                        <Image src='/app-store.png' alt='App Store' width={150} height={50} />
                    </div>
                    <div className='grid md:grid-cols-4 gap-6 text-gray-300'>
                        {footerLinks.map((section, index) => (
                            <div key={index}>
                                <h4 className='font-semibold'>{section.title}</h4>
                                {section.items.map((item, idx) => (
                                    <p key={idx}>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-20  text-sm text-center border-t border-[#284A51] pt-6'>
                    Copyright © 20234 nibus payments | All rights reserved. | All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;