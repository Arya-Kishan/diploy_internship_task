import React, { useLayoutEffect, useRef } from 'react'
import rightArrowIcon from '../../assets/icons/rightArrowIcon.svg'
import triangle1 from '../../assets/triangle1.svg'
import triangle2 from '../../assets/triangle2.svg'
import create from '../../assets/icons/create.png'
import handle from '../../assets/icons/handle.png'
import sell from '../../assets/icons/sell.png'
import shirt from '../../assets/shirt.webp'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LottieImage2 from '../LottieImage2'
import HowItWorksSwiper from '../Swiper/HowItWorksSwiper'

const HowItWorks = () => {

    gsap.registerPlugin(ScrollTrigger)

    const parentRef = useRef();


    useLayoutEffect(() => {

        const ctx1 = gsap.context(() => {

            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".box",
                    start: "top center"
                },
            })
                .from(".box", {
                    opacity: 0,
                    x: -400,
                    duration: 0.5,
                }, 'a')
                .from(".right", {
                    opacity: 0,
                    y: 400,
                    duration: 0.5,
                }, 'b')

            gsap.from(".card0", {
                scrollTrigger: {
                    trigger: '.card0',
                    start: 'top center'
                },
                y: -100,
                opacity: 0,
                delay: 0,
                duration: 0.4
            })
            gsap.from(".card1", {
                scrollTrigger: {
                    trigger: '.card1',
                    start: 'top center'
                },
                y: -100,
                opacity: 0,
                delay: 0.4,
                duration: 0.4
            })
            gsap.from(".card2", {
                scrollTrigger: {
                    trigger: '.card2',
                    start: 'top center'
                },
                y: -100,
                opacity: 0,
                delay: 0.8,
                duration: 0.4
            })

        }, parentRef)

        return () => ctx1.revert();

    }, [])

    const arr = [
        {
            title1: "create",
            title2: "custom products",
            description: "Easily add your designs to a wide range of products using our free tools",
            pic: create
        },
        {
            title1: "sell",
            title2: "on your terms",
            description: "You choose the products, sale price, and where to sell",
            pic: sell
        },
        {
            title1: "we handle",
            title2: "fullfillment",
            description: " Once an order is placed, we automatically handle all the printing and delivery logistics ",
            pic: handle
        },
    ]

    return (
        <div className='howItWorks w-full h-fit flex flex-col justify-center items-center bg-bgColor1 px-[24px] py-[100px] overflow-hidden relative' ref={parentRef}>

            {/* fist box */}
            <div className='w-full lg:w-[80%] min-h-[420px] h-fit flex flex-col sm:flex-row bg-white sm:bg-transparent rounded-md mt-[50px] sm:mt-[180px] p-2 sm:p-0 main_box relative'>

                {/* left */}
                <div className='w-full lg:w-[50%] flex justify-center items-center gap-2 relative z-20'>
                    <img loading='lazy' className='w-[55%] sm:w-[40%] lg:w-[55%] lg:absolute bottom-0 left-0' src={shirt} alt="" srcSet="" />
                    <div className='hidden lg:flex lg:absolute bottom-10 right-0 z-30'><LottieImage2 /></div>
                </div>

                {/* right */}
                <div className='w-full sm:w-[50%] flex justify-center items-center sm:items-end lg:items-center gap-2 overflow-hidden z-20'>

                    {/* right inner */}
                    <div className='max-w-[400px] flex flex-col gap-8 right'>
                        <p className='text-[20px] sm:text-[26px] lg:text-[32px] text-txtColor0 font-bold'>Easily add your design to a wide range of products</p>

                        <p className='text-txtColor2 text-[12px] sm:text-[16px]'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products</p>

                        <button className='text-txtColor1 flex gap-4 font-bold'>
                            <p>All Products</p>
                            <img loading='lazy' src={rightArrowIcon} alt="" srcSet="" />
                        </button>
                    </div>

                </div>

                <div className='w-full lg:w-[80%] min-h-[420px] h-fit flex flex-col sm:flex-row bg-white shadow-lg rounded-md mt-[50px] sm:mt-[180px] p-2 sm:p-0 absolute bottom-0 right-0 z-10 box'></div>

            </div>

            {/* HOWITWORKS THREE CARDS */}
            <div className='hidden w-full min-h-[520px] h-fit sm:flex flex-col sm:flex-row justify-center items-center gap-10 font-Roboto px-[32px] pt-[120px]'>
                {arr.map((e, index) => (
                    <div key={index} className={`card${index} max-w-[320px] flex flex-col gap-6 justify-center items-center sm:items-start`}>
                        <p className={`w-[120px] h-[120px] rounded-full overflow-hidden flex justify-center items-center`} style={{ backgroundColor: e.color }}>
                            <img loading='lazy' className='w-[80px]' src={e.pic} alt="" srcSet="" />
                        </p>
                        <div className='flex flex-col'>
                            <p className='text-[24px] font-bold text-txtColor1 uppercase text-center sm:text-start'>{e.title1}</p>
                            <p className='text-[22px] font-bold text-black capitalize'>{e.title2}</p>
                        </div>
                        <p className='text-[16px] text-txtColor2'>{e.description}</p>
                    </div>
                ))}

            </div>

            <div className='w-[90%] block sm:hidden mt-20'><HowItWorksSwiper slidesArr={arr} /></div>

            <img loading='lazy' className='w-[350px] absolute -top-[5px] left-[50%] -translate-x-[50%]' src={triangle1} alt="" srcSet="" />
            <img loading='lazy' className='w-[350px] absolute top-full left-[50%] -translate-x-[50%]' src={triangle2} alt="" srcSet="" />

        </div>
    )
}

export default HowItWorks