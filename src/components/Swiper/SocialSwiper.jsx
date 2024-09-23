import React, { useLayoutEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swiper.css'
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import profile1 from '../../assets/profileImages/profile1.jpg'
import profile2 from '../../assets/profileImages/profile2.jpg'
import profile3 from '../../assets/profileImages/profile3.jpg'
import profile4 from '../../assets/profileImages/profile4.jpg'
import profile5 from '../../assets/profileImages/profile5.jpg'
import starIcon from '../../assets/icons/starIcon.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SocialSwiper = () => {

    gsap.registerPlugin(ScrollTrigger)
    const parentRef = useRef();

    useLayoutEffect(() => {

        const ctx1 = gsap.context(() => {

            gsap.from(".slider", {
                scrollTrigger: {
                    trigger: '.slider',
                    start: "top center"
                },
                y: 100,
                opacity: 0,
                duration: 0.5,
                stagger: 0.5
            })

        }, parentRef)

        return () => ctx1.revert();

    }, [])

    const slidesArr = [
        {
            pic: profile1,
            name: "Robert A. Voltaire",
            authorLink: "Store link",
            star: 5,
            description: ' Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! '
        },
        {
            pic: profile2,
            name: "Quinten Barney",
            authorLink: 'Etsy Merchant',
            star: 5,
            description: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better."
        },
        {
            pic: profile3,
            name: "Nikki",
            authorLink: "Store link",
            star: 5,
            description: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze."
        },
        {
            pic: profile4,
            name: "Spencer Brett",
            authorLink: "Store link",
            star: 5,
            description: " Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly. "
        },
        {
            pic: profile5,
            name: "April Showers",
            authorLink: "Store link",
            star: 5,
            description: " I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business. "
        },
    ]

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className='w-full sm:w-[80%] h-full'
            ref={parentRef}
        >
            {slidesArr.map((e) => (
                <SwiperSlide key={e.name} className='slider p-[10px] sm:p-[50px]  flex flex-col gap-5 bg-white rounded-xl' id='socialSlider'>
                    <div className='flex gap-4 items-start'>
                        <img loading='lazy' className='w-[44px] sm:w-[64px] h-[44px] sm:h-[64px] rounded-md' src={e.pic} alt="" srcSet="" />
                        <div className='flex flex-col'>
                            <p className='text-[20px] sm:text-[24px] text-txtColor0'>{e.name}</p>
                            <p className='text-[16px] text-txtColor1'>{e.authorLink}</p>
                            <p className='flex p-1'>{"stars".split("").map((e, i) => (<img key={i} loading='lazy' className='w-[18px]' src={starIcon} alt="" srcSet="" />))}</p>
                        </div>
                    </div>

                    <p className='text-[16px] text-txtColor2'>{e.description}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SocialSwiper