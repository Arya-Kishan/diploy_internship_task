import React, { useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../App.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const HowItWorksSwiper = ({ slidesArr }) => {

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="w-full h-[50vh]"
        >
            {slidesArr.map((e, index) => (
                <SwiperSlide key={index} className={`w-full flex flex-col gap-6 justify-center items-center sm:items-start`}>
                    <p className={`w-full h-[120px] rounded-full overflow-hidden flex justify-center items-center`} style={{ backgroundColor: e.color }}>
                        <img loading='lazy' className='w-[80px]' src={e.pic} alt="" srcSet="" />
                    </p>
                    <div className='flex flex-col'>
                        <p className='text-center text-[18px] font-bold text-txtColor1 uppercase sm:text-start'>{e.title1}</p>
                        <p className='text-center text-[15px] font-bold text-black capitalize'>{e.title2}</p>
                    </div>
                    <p className='text-center text-[12px] text-txtColor2'>{e.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default HowItWorksSwiper