import React, { useState } from 'react'
import arrowBlackIcon from '../assets/icons/arrowBlackIcon.svg'
import arrowGreenIcon from '../assets/icons/arrowGreenIcon.svg'


const NavbarLinks = ({ link }) => {

    const linksArrow = ["how it works", "services", "use-cases", "need help"];

    const [options, setOptions] = useState(false);

    const handleHover = () => {
        console.log("enter");
        setOptions(true);
    }

    const handleLeave = () => {
        console.log("levea");
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
        <div className='h-[70px] capitalize flex items-center gap-2 text-[15px] font-normal text-txtColor2 cursor-pointer relative' onMouseEnter={handleHover} onMouseLeave={handleLeave}>

            <span className='hover:text-txtColor1'>{link}</span>

            {linksArrow.includes(link) && <img className={`w-[15px] transition duration-500 ease-in-out ${!options ? " rotate-180" : "rotate-0"}`} src={!options ? arrowBlackIcon : arrowGreenIcon} alt="" srcSet="" />}

            {linksArrow.includes(link) && <div className={`w-[200px] h-fit ${options ? "flex" : "hidden"} flex-col gap-2 p-2 absolute top-full left-0 bg-white text-txtColor2 transition-all duration-700 shadow-md`}>
                {getOptions(link).map((option) => (
                    <p key={option} className='hover:text-txtColor1'>{option}</p>
                ))}
            </div>}

        </div>
    )
}

export default NavbarLinks