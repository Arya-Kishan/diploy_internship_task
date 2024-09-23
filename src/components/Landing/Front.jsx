import React from 'react'
import playIcon from '../../assets/icons/playIcon.svg'
import correctIcon from '../../assets/icons/correctIcon.svg'
import LottieImage1 from '../LottieImage1'
import Button from '../Buttons/Button'
import HoverButton from '../Buttons/HoverButton'
import ImgButton from '../Buttons/ImgButton'

const Front = () => {

  const listArr = ["100% Free to use", "900+ High Quality Products", "Largest global print network"];

  return (
    <div className='w-full min-h-[600px] h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] sm:max-h-[600px] flex flex-col justify-between sm:flex-row gap-4 sm:gap-0 pt-[70px]'>

      {/* left */}
      <div className='w-full sm:w-[50%] h-full flex justify-center items-center sm:items-end'>

        {/* inner left div */}
        <div className='max-w-[500px] w-[90%] h-fit flex flex-col gap-5 pl-4 sm:pl-8'>

          <p className='text-[32px] sm:text-[46px] lg:text-[56px] font-bold text-txtColor0'>Create and sell custom products</p>

          <div className='flex flex-col gap-2 text-[12px] sm:text-[16px] font-medium text-txtColor2 pl-2'>
            {listArr.map((e) => (
              <div key={e} className='flex gap-2'>
                <img loading='lazy' className='w-[16px] sm:w-[20px]' src={correctIcon} alt="" srcSet="" />
                <p>{e}</p>
              </div>
            ))}
          </div>

          <div className='flex gap-2 sm:gap-4 mt-5 text-[12px] sm:text-[16px]'>
            <HoverButton className={"min-w-[100px] sm:w-[160px] h-[35px] sm:h-[48px] gap-2"} text={"Start for free"} />
            <ImgButton className={"min-w-[100px] sm:w-[160px] h-[35px] sm:h-[48px]"} src={playIcon} text={"How it works"} />
          </div>

          <p className='text-txtColor1 text-[12px] sm:text-[16px] font-semibold'>Trusted by over 8M sellers around the world</p>

        </div>

      </div>

      {/* right */}
      <div className='w-full sm:w-[50%] h-[full] flex justify-start items-end '>
        <div className='w-full'><LottieImage1 /></div>
      </div>

    </div>
  )
}

export default Front