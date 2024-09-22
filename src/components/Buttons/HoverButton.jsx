import React from 'react'

const HoverButton = ({ text, className,onClick = () => { } }) => {
    return (
        <button onClick={onClick} className={`${className} flex justify-center items-center rounded-sm font-medium capitalize bg-txtColor1 text-white hover:bg-btnColor2 `}>
            {text}
        </button>
    )
}

export default HoverButton