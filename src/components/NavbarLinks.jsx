import React, { useState } from 'react'
import arrowBlackIcon from '../assets/icons/arrowBlackIcon.svg'
import arrowGreenIcon from '../assets/icons/arrowGreenIcon.svg'


const NavbarLinks = ({ link }) => {

    const linksArrow = ["how it works", "services", "use-cases", "need help"];

    const [options, setOptions] = useState(false);

    const handleHover = () => {
        setOptions(true);
    }

    const handleLeave = () => {
        setOptions(false);
    }

    const linksOptions = [
        {
            title: "how it works",
            data: ["how prinitfy works", "print on demand", "printify quality promise", "what to sell"]
        },
        {
            title: "services",
            data: ["printify studio", "printify express delivery", "transfer products", "order in bulk", "experts program"]
        },
        {
            title: "use-cases",
            data: ["merch for fans", "merch for ecommerce", "merch for enterprises", "grow your store"]
        },
        {
            title: "need help",
            data: ["help center", "contacts", "my request"]
        },
    ]


    const getOptions = (link) => {
        let a = (linksOptions.filter((e) => {
            if (e.title == link) {
                return e.data
            }
        }))
        return (a[0].data);
    }

    return (
        <>

            {/* desktop */}
            <div className='hidden tablet:flex h-[40px] lg:h-[70px] capitalize items-center gap-2 text-[15px] font-normal text-txtColor2 cursor-pointer relative' onMouseEnter={handleHover} onMouseLeave={handleLeave}>

                <span className='hover:text-txtColor1 text-[16px]'>{link}</span>

                {linksArrow.includes(link) && <img className={`w-[15px] transition duration-500 ease-in-out ${!options ? " rotate-180" : "rotate-0"}`} src={!options ? arrowBlackIcon : arrowGreenIcon} alt="" srcSet="" />}

                {linksArrow.includes(link) && <div className={`w-[200px] h-fit ${options ? "flex" : "hidden"} flex-col gap-2 p-2 absolute top-full left-0 bg-white text-txtColor2 transition-all duration-700 shadow-md`}>
                    {getOptions(link).map((option) => (
                        <p key={option} className='hover:text-txtColor1'>{option}</p>
                    ))}
                </div>}

            </div>

            {/* mobile */}
            <div className='flex flex-col tablet:hidden min-h-[40px] h-fit lg:h-[70px] capitalize items-start gap-2 text-[15px] font-normal text-txtColor2 cursor-pointer' onClick={() => (setOptions(!options))} >

                <div className='w-full flex justify-between gap-2 px-2 mt-5'>
                    <span className='hover:text-txtColor1 font-bold'>{link}</span>
                    {linksArrow.includes(link) && <img className={`w-[15px] transition duration-500 ease-in-out ${!options ? " rotate-180" : "rotate-0"}`} src={!options ? arrowBlackIcon : arrowGreenIcon} alt="" srcSet="" />}
                </div>

                {linksArrow.includes(link) && <div className={`w-fit h-fit ${options ? "flex" : "hidden"} flex-col gap-2 p-2 bg-white text-txtColor2 transition-all duration-700`}>
                    {getOptions(link).map((option) => (
                        <p key={option} className='hover:text-txtColor1 text-[14px]'>{option}</p>
                    ))}
                </div>}

            </div>
        </>
    )
}

export default NavbarLinks