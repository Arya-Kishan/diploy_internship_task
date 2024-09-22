import React, { useState } from 'react'
import thumbIcon from '../../assets/icons/thumbIcon.svg'
import menuIcon from '../../assets/icons/menuIcon.svg'
import NavbarLinks from '../NavbarLinks';

const Navbar = () => {

    const links = ["catalog", "how it works", "pricing", "blog", "services", "use-cases", "need help"];
    const [sideBar, setSideBar] = useState(false);

    return (
        <div className='w-full h-[70px] flex justify-between tablet:justify-around items-center shadow-md px-[20px] sm:px-[32px] font-Roboto fixed top-0 left-0 bg-white z-50'>


            {/* logo */}
            <div className='flex gap-1'>
                <img onClick={() => setSideBar(!sideBar)} className='w-[25px] flex tablet:hidden' src={menuIcon} alt="" srcSet="" />
                <div className='flex gap-1 text-txtColor1 cursor-pointer'>
                    <img loading='lazy' src={thumbIcon} alt="" srcSet="" />
                    <p className='hidden tablet:block font-bold text-[32px]'>Printify</p>
                </div>
            </div>

            <div className='hidden tablet:flex gap-4'>
                {links.map((link) => (
                    <NavbarLinks key={link} link={link} />
                ))}
            </div>

            <div onClick={() => setSideBar(!sideBar)} className={`fixed top-0 ${!sideBar ? "-left-full" : "left-0"} transition-all duration-700 w-full h-dvh tablet:hidden bg-[#00000093]`}>

                <div onClick={e => e.stopPropagation()} className='w-[60%] h-full flex flex-col bg-white'>
                    <p className='w-full text-[30px] font-bold text-center border-b-2 p-5'>Menu</p>

                    <div className='flex flex-col pl-1'>
                        {links.map((link) => (
                            <NavbarLinks key={link} link={link} />
                        ))}
                    </div>

                </div>

            </div>

            <div className='flex items-center gap-4 text-[12px] sm:text-[16px]'>
                <button className='w-[60px] sm:w-[88px] h-[26px] sm:h-[36px] rounded-sm font-medium capitalize border-2 border-brdrColor1 hover:text-txtColor1'>login</button>
                <button className='w-[60px] sm:w-[88px] h-[26px] sm:h-[36px] rounded-sm font-medium capitalize bg-txtColor1 text-white hover:bg-btnColor2 '>sign up</button>
            </div>

        </div>
    )
}

export default Navbar