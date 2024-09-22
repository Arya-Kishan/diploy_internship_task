import React from 'react'

const Button = ({ text, className, onClick = () => { } }) => {
    return (
        <button onClick={onClick} className={`${className} flex justify-center items-center rounded-sm font-medium capitalize border-brdrColor1 hover:text-txtColor1`}>
            {text}
        </button>
    )
}

export default Button