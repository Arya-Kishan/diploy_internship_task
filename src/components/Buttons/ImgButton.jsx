import React from 'react'

const ImgButton = ({ text, className, src, onClick = () => { } }) => {
    return (
        <button onClick={onClick} className={`${className} flex gap-2 rounded-sm border-2 border-gray-400 justify-center items-center text-txtColor2 font-semibold p-1`}>
            <img loading='lazy' className='w-[15px] sm:w-[25px]' src={src} alt="" />
            <p className='hover:text-txtColor1'>{text}</p>
        </button>
    )
}

export default ImgButton