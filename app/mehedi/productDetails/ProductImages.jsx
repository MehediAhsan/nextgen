'use client'
import { BsCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import Image from 'next/image';
// import '../../styles/ProjectDetailsStyle.css'


const ProductImages = () => {
    const [isLightbox, setLightbox] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const images = [
        {
            thumbnail: "https://images.unsplash.com/photo-1614681792161-e883a0380275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1616534900631-c875e41ab2c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1614681792161-e883a0380275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1614681792161-e883a0380275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1614681792161-e883a0380275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            thumbnail: "https://images.unsplash.com/photo-1614681792161-e883a0380275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    function handleClick() {
        setLightbox(!isLightbox);
    }

    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            setLightbox(!isLightbox);
        }
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    function nextImage() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    function prevImage() {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    }

    return (
        <>
            <div className='overflow-hidden project'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }}
                    loop={true}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {
                        images?.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image onClick={handleClick} width={100} height={100} src={img.thumbnail} alt='' className='w-full h-96 object-cover' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    style={{ paddingTop: 20 }}
                    className="mySwiper"
                >
                    {
                        images?.map((img, i) => (
                            <SwiperSlide key={i}>
                                <Image width={100} height={100} src={img.thumbnail} alt='' className='w-full h-16 object-cover' />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div
                onClick={handleOverlayClick}
                style={{ display: isLightbox ? "flex" : "none" }}
                className="flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start z-50"
            >
                <div className="relative flex flex-col items-end">
                    <BsFillCaretLeftFill onClick={prevImage} className="hover:opacity-80 cursor-pointer rounded-full w-fit h-[54px] absolute -left-16 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:left-0 text-white" />
                    <BsCaretRightFill onClick={nextImage} className="hover:opacity-80 cursor-pointer rounded-full w-fit h-[54px] absolute -right-16 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:right-0 text-white" />
                    <ImCross onClick={handleClick} className=" fill-white active:fill-orange cursor-pointer mb-2" />
                    <img
                        className="rounded-lg max-sm:mt-12 max-sm:h-2/3"
                        src={images[currentIndex].thumbnail}
                        alt={`Image ${currentIndex + 1}`}
                        width={550}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductImages;