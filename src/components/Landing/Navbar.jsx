import React, { useState } from 'react'
import thumbIcon from '../../assets/icons/thumbIcon.svg'
import menuIcon from '../../assets/icons/menuIcon.svg'
import NavbarLinks from '../NavbarLinks';

const Navbar = () => {

    const links = ["catalog", "how it works", "pricing", "blog", "services", "use-cases", "need help"];

    return (
        <div className='w-full h-[70px] flex justify-between tablet:justify-around items-center shadow-md px-[20px] sm:px-[32px] font-Roboto'>


            {/* logo */}
            <div className='flex gap-1'>
                <img className='w-[25px] flex tablet:hidden' src={menuIcon} alt="" srcSet="" />
                <div className='flex gap-1 text-txtColor1 cursor-pointer'>
                    <img loading='lazy' src={thumbIcon} alt="" srcSet="" />
                    <p className='hidden tablet:block font-bold text-[32px]'>Printify</p>
                </div>
            </div>

            <div className='hidden tablet:flex  gap-4'>
                {links.map((link) => (
                    <NavbarLinks key={link} link={link} />
                ))}
            </div>

            <div className='flex items-center gap-4 text-[12px] sm:text-[16px]'>
                <button className='w-[60px] sm:w-[88px] h-[26px] sm:h-[36px] rounded-sm font-medium capitalize border-2 border-brdrColor1 hover:text-txtColor1'>login</button>
                <button className='w-[60px] sm:w-[88px] h-[26px] sm:h-[36px] rounded-sm font-medium capitalize bg-txtColor1 text-white hover:bg-[#6aec42] '>sign up</button>
            </div>

        </div>
    )
}

export default Navbar