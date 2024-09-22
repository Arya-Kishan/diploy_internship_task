import React from 'react'
import SocialSwiper from '../Swiper/SocialSwiper'
import triangle2 from '../../assets/triangle2.svg'

const SocialProof = () => {

  return (
    <div className='w-full flex flex-col gap-5 justify-center items-center p-[10px] sm:p-[32px] my-[50px] bg-bgColor1 relative'>

      {/* socail proofs description */}
      <div className='w-full sm:w-[80%] h-fit flex flex-col sm:flex-row gap-5 sm:gap-[100px] m-[50px]'>

        {/* left */}
        <p className='w-full sm:w-[35%] text-[30px] sm:text-[40px] font-bold text-txtColor0'>Trusted by over 8M sellers around the world</p>
        {/* right */}
        <p className='w-full sm:w-[30%] text-txtColor2 flex justify-start items-center'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>

      </div>

      {/* socail proofs swiper */}
      <SocialSwiper />

      <img loding="lazy" className='absolute -bottom-10 left-[50%] -translate-x-[50%]' src={triangle2} alt="" srcSet="" />

    </div>
  )
}

export default SocialProof