import React from 'react'
import watering from '../../assets/watering.jpg'
import { motion } from 'framer-motion'

const Financials = () => {
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
        <div className='w-full flex justify-center items-center my-[50px]'>

            <div className='w-[90%] sm:w-[80%] flex items-center justify-center'>
                {/* left */}
                <motion.div
                    initial={{ opacity: 1, x: 800 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    // transition={{duration:5}}
                    className='w-full sm:w-[80%] lg:w-[50%] bg-[#203741] text-white px-[24px] sm:px-[60px] py-[56px] rounded-[30px] flex flex-col gap-2 sm:gap-6'>

                    <p className='text-[25px] sm:text-[40px] font-semibold'>Make Money, Risk-Free</p>

                    <p className='text-[14px] sm:text-[16px] font-medium'>You pay for fulfillment only when you make a sale</p>

                    <div className='w-[90%] h-fit bg-[#17262B] p-[24px] sm:p-[40px] rounded-[20px] flex flex-col gap-2 sm:gap-8 my-[30px] text-[12px] sm:text-[16px]'>

                        <div className='font-semibold flex flex-col  gap-2 sm:gap-8 border-b-2 border-b-txtColor2 pb-[20px]'>
                            {billArr.map((e) => (
                                <div className='w-full flex justify-between items-center gap-2'>
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

                    <p className='font-bold bg-btnColor1 w-full sm:w-[118px] h-[40px] rounded-md flex justify-center items-center text-[13px] sm:text-[16px]'>Start Selling</p>

                    <p className='font-medium text-txtColor3 text-[13px] sm:text-[16px]'>100% Free to use · 900+ Products · Largest print network</p>

                </motion.div>

                {/* right */}
                <div className='hidden w-[50%] lg:flex justify-center items-end'>
                    <img src={watering} alt="" srcset="" />
                </div>

            </div>

        </div>
    )
}

export default Financials