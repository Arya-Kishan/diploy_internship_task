import React from 'react'
import playIcon from '../../assets/icons/playIcon.svg'
import correctIcon from '../../assets/icons/correctIcon.svg'
import LottieImage1 from '../LottieImage1'
import Button from '../Buttons/Button'
import HoverButton from '../Buttons/HoverButton'
import ImgButton from '../Buttons/ImgButton'

const Front = () => {
  return (
    <div className='w-full min-h-[600px] h-[calc(100vh-70px)] flex flex-col justify-between sm:flex-row pt-[70px]'>

      {/* left */}
      <div className='w-full sm:w-[50%] h-full flex justify-center items-center'>

        {/* inner left div */}
        <div className='max-w-[500px] w-[90%] h-fit flex flex-col gap-5 pl-8'>

          <p className='text-[30px] sm:text-[56px] font-bold text-txtColor0'>Create and sell custom products</p>

          <div className='flex flex-col gap-2 text-[12px] sm:text-[16px] font-medium text-txtColor2 pl-2'>
            <div className='flex gap-2'>
              <img loading='lazy' className='w-[15px] sm:w-[20px]' src={correctIcon} alt="" srcSet="" />
              <p>100% Free to use</p>
            </div>
            <div className='flex gap-2'>
              <img loading='lazy' className='w-[15px] sm:w-[20px]' src={correctIcon} alt="" srcSet="" />
              <p>900+ High Quality Products</p>
            </div>
            <div className='flex gap-2'>
              <img loading='lazy' className='w-[15px] sm:w-[20px]' src={correctIcon} alt="" srcSet="" />
              <p>Largest global print network</p>
            </div>
          </div>

          <div className='flex gap-1 sm:gap-4 mt-5 text-[10px] sm:text-[12px]'>
            <HoverButton className='w-[100px] sm:w-[160px] h-[30px] sm:h-[48px] gap-2 sm:text-[16px]' text={"Start for free"} />
            <ImgButton src={playIcon} text={"How it works"} />
          </div>

          <p className='text-txtColor1 text-[12px] sm:text-[16px] font-semibold'>Trusted by over 8M sellers around the world</p>

        </div>

      </div>

      {/* right */}
      <div className='w-full sm:w-[50%] h-[full] flex justify-start items-center '>
        <div className='w-full'><LottieImage1 /></div>
      </div>


    </div>
  )
}

export default Front