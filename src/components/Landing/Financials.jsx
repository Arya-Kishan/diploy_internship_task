import React, { useLayoutEffect, useRef } from 'react'
import watering from '../../assets/watering.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Financials = () => {

    gsap.registerPlugin(ScrollTrigger)
    const parentRef = useRef();

    useLayoutEffect(() => {

        const ctx1 = gsap.context(() => {

            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".leftBox2",
                },
            })
                .from(".leftBox", {
                    x: 400,
                    opacity: 0,
                    duration: 0.5
                }, 'a')
                .from(".leftBox2", {
                    y: 400,
                    opacity: 0,
                    duration: 0.5
                }, 'b')

        }, parentRef)

        return () => ctx1.revert();

    }, [])

    const billArr = [
        {
            title: "You sell a t-shirt",
            cost: "30"
        },
        {
            title: "You pay for its production",
            cost: "12"
        }
    ]

    return (
        <div className='w-full flex justify-center items-center py-[50px] my-[80px] overflow-hidden' ref={parentRef}>

            <div className='w-[90%] sm:w-[80%] flex items-center justify-center'>
                {/* left */}
                <div className='w-full sm:w-[80%] lg:w-[50%] bg-[#203741] text-white px-[24px] sm:px-[60px] py-[56px] rounded-[30px] leftBox overflow-hidden z-10'>
                    <div className=' flex flex-col gap-2 sm:gap-6 leftBox2'>

                        <p className='text-[25px] sm:text-[40px] font-semibold'>Make Money, Risk-Free</p>

                        <p className='text-[14px] sm:text-[16px] font-medium'>You pay for fulfillment only when you make a sale</p>

                        <div className='w-[90%] h-fit bg-[#17262B] p-[24px] sm:p-[40px] rounded-[20px] flex flex-col gap-2 sm:gap-8 my-[30px] text-[12px] sm:text-[16px]'>

                            <div className='font-semibold flex flex-col  gap-2 sm:gap-8 border-b-2 border-b-txtColor2 pb-[20px]'>
                                {billArr.map((e) => (
                                    <div key={e.title} className='w-full flex justify-between items-center gap-2'>
                                        <p>{e.title}</p>
                                        <p className='flex'><span>$</span><span>{e.cost}</span></p>
                                    </div>
                                ))}
                            </div>

                            <div className='w-full flex justify-between items-center gap-2 font-bold text-txtColor1'>
                                <p>Your Profit</p>
                                <p>$ 18</p>
                            </div>

                        </div>

                        <p className='font-bold bg-btnColor1 hover:bg-btnColor2 cursor-pointer w-full sm:w-[118px] h-[40px] rounded-md flex justify-center items-center text-[13px] sm:text-[16px]'>Start Selling</p>

                        <p className='font-medium text-txtColor3 text-[13px] sm:text-[16px]'>100% Free to use · 900+ Products · Largest print network</p>

                    </div>
                </div>

                {/* right */}
                <div className='hidden w-[50%] lg:flex justify-center items-end z-20'>
                    <img loading='lazy' src={watering} alt="" srcSet="" />
                </div>

            </div>

        </div>
    )
}

export default Financials