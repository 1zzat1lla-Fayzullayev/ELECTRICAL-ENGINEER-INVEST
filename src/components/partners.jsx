/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { getText } from "../locale";
import { LanguageContext } from "../context/LanguageContext";

const Partners = () => {
    const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);
    return (
        <div className="my-[100px]">
            <h2 className="text-[30px] md:text-[52px] font-[600] leading-[1.23] text-center py-[100px]">{getText("partnersTitle")}</h2>
            <Swiper
                spaceBetween={30}
                freeMode={true}
                modules={[FreeMode, Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 8,
                    },
                }}
                className="mySwiper"
            >
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part1.png"
                        alt="Partner 1"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part2.png"
                        alt="Partner 2"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part3.png"
                        alt="Partner 3"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part4.png"
                        alt="Partner 4"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part5.png"
                        alt="Partner 5"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part6.png"
                        alt="Partner 6"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part7.png"
                        alt="Partner 7"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part8.png"
                        alt="Partner 8"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part9.png"
                        alt="Partner 9"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part10.png"
                        alt="Partner 10"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part12.png"
                        alt="Partner 12"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part13.jpeg"
                        alt="Partner 13"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part14.png"
                        alt="Partner 14"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part15.png"
                        alt="Partner 15"
                    />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center h-[150px]">
                    <img
                        className="w-[70px] md:w-[120px] h-full object-contain"
                        src="img/part16.png"
                        alt="Partner 16"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Partners;
