import React from 'react'

const ImgButton = ({ text, className, src, onClick = () => { } }) => {
    return (
        <button className='w-[100px] sm:w-[160px] h-[30px] sm:h-[48px] flex gap-2 rounded-sm border-2 border-gray-400 justify-center items-center text-txtColor2 font-semibold sm:text-[16px]'>
            <img loading='lazy' className='w-[15px] sm:w-[25px]' src={src} alt="" />
            <p className='hover:text-txtColor1'>{text}</p>
        </button>
    )
}

export default ImgButton