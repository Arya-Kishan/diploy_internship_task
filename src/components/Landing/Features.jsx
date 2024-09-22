import React from 'react'
import rocketIcon from '../../assets/icons/rocketIcon.png'
import profitIcon from '../../assets/icons/profitIcon.png'
import selectionIcon from '../../assets/icons/selectionIcon.png'
const Features = () => {

    const arr = [
        {
            title: 'Higher Profits',
            description: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.',
            color: '#DDF8E1',
            pic: profitIcon
        },
        {
            title: "robust scaling",
            description: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.',
            color: '#E8E6F7',
            pic: rocketIcon
        },
        {
            title: "best selection",
            description: 'With 900+ products and top quality brands, you can choose the best products for your business..',
            color: '#FAF7D7',
            pic: selectionIcon
        },
    ]
    return (
        <div className='w-full min-h-[500px] h-fit flex flex-col sm:flex-row justify-center items-center gap-10 font-Roboto px-[32px]'>
            {arr.map((e) => (
                <div className='max-w-[320px] flex flex-col gap-6 justify-center items-center sm:items-start'>
                    <p className={`w-[120px] h-[120px] rounded-full overflow-hidden flex justify-center items-center`} style={{backgroundColor:e.color}}>
                        <img className='w-[80px]' src={e.pic} alt="" srcset="" />
                    </p>
                    <p className='text-[24px] font-bold text-txtColor0 capitalize'>{e.title}</p>
                    <p className='text-[16px] text-txtColor2'>{e.description}</p>
                </div>
            ))}

        </div>
    )
}

export default Features