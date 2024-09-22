import React from 'react'
import playIcon from '../../assets/icons/playIcon.svg'
import correctIcon from '../../assets/icons/correctIcon.svg'
import LottieImage1 from '../LottieImage1'

const Front = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col sm:flex-row mt-10'>

      {/* left */}
      <div className='w-full sm:w-[50%] h-full flex justify-center items-center'>

        {/* inner left div */}
        <div className='max-w-[500px] h-fit flex flex-col gap-5 pl-10'>

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

            <button className='w-[100px] sm:w-[160px] h-[30px] sm:h-[48px] flex gap-2 rounded-sm bg-btnColor1 justify-center items-center text-white font-semibold sm:text-[16px]'>Start for free</button>

            <button className='w-[100px] sm:w-[160px] h-[30px] sm:h-[48px] flex gap-2 rounded-sm border-2 border-gray-400 justify-center items-center text-txtColor2 font-semibold sm:text-[16px]'>
              <img loading='lazy' className='w-[15px] sm:w-[25px]' src={playIcon} alt="" />
              <p>How it works</p>
            </button>

          </div>

          <p className='text-txtColor1 text-[12px] sm:text-[16px] font-semibold'>Trusted by over 8M sellers around the world</p>

        </div>

      </div>


      {/* right */}
      <div className='w-full sm:w-[50%] h-full flex justify-start items-center'>
        <div className='w-full'><LottieImage1 /></div>
      </div>


    </div>
  )
}

export default Front