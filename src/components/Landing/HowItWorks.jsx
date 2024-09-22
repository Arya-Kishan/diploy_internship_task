import React from 'react'
import rightArrowIcon from '../../assets/icons/rightArrowIcon.svg'
import triangle1 from '../../assets/triangle1.svg'
import triangle2 from '../../assets/triangle2.svg'
import create from '../../assets/icons/create.png'
import handle from '../../assets/icons/handle.png'
import sell from '../../assets/icons/sell.png'

const HowItWorks = () => {

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
        <div className='howItWorks w-full h-fit flex flex-col justify-center bg-bgColor1 px-[24px] py-[100px] relative'>

            {/* fist box */}
            <div className='w-[90%] h-[460px] flex bg-white rounded-md mt-[180px]'>

                {/* left */}
                <div className='w-full sm:w-[50%] flex justify-center items-center gap-2 relative'>
                    <div className='w-[50%] h-[120%] bg-teal-600 absolute bottom-0 left-[30%]'></div>
                </div>

                {/* right */}
                <div className='w-full sm:w-[50%] flex justify-center items-center gap-2'>

                    {/* right inner */}
                    <div className='max-w-[400px] flex flex-col gap-8'>
                        <p className='text-[32px] text-txtColor0 font-bold'>Easily add your design to a wide range of products</p>

                        <p className='text-txtColor2'>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products</p>

                        <button className='text-txtColor1 flex gap-4 font-bold'>
                            <p>All Products</p>
                            <img src={rightArrowIcon} alt="" srcset="" />
                        </button>
                    </div>

                </div>

            </div>

            {/* second div */}
            <div className='w-full min-h-[520px] h-fit flex flex-col sm:flex-row justify-center items-center gap-10 font-Roboto px-[32px] pt-[120px]'>
                {arr.map((e) => (
                    <div className='max-w-[320px] flex flex-col gap-6 justify-center items-center sm:items-start'>
                        <p className={`w-[120px] h-[120px] rounded-full overflow-hidden flex justify-center items-center`} style={{ backgroundColor: e.color }}>
                            <img className='w-[80px]' src={e.pic} alt="" srcset="" />
                        </p>
                        <div className='flex flex-col'>
                            <p className='text-[24px] font-bold text-txtColor1 uppercase'>{e.title1}</p>
                            <p className='text-[24px] font-bold text-black capitalize'>{e.title2}</p>
                        </div>
                        <p className='text-[16px] text-txtColor2'>{e.description}</p>
                    </div>
                ))}

            </div>

            <img className='w-[350px] absolute top-0 left-[50%] -translate-x-[50%]' src={triangle1} alt="" srcset="" />
            <img className='w-[350px] absolute top-full left-[50%] -translate-x-[50%]' src={triangle2} alt="" srcset="" />

        </div>
    )
}

export default HowItWorks