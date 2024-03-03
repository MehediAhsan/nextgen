'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CustomSlider = () => {
    const items = [
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://plus.unsplash.com/premium_photo-1709311417346-0497456aef0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            img: 'https://images.unsplash.com/photo-1682687220247-9f786e34d472?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ]
    return (
        <div className='mt-52 mx-20'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                style={{padding: '20px', border: '2px solid gray'}}
                className="mySwiper custom-swiper"
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <img className='w-full h-28 object-cover' src={item.img} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CustomSlider;