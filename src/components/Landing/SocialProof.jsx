import React, { useLayoutEffect, useRef } from 'react'
import SocialSwiper from '../Swiper/SocialSwiper'
import triangle2 from '../../assets/triangle2.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SocialProof = () => {

  gsap.registerPlugin(ScrollTrigger)
  const parentRef = useRef();

  useLayoutEffect(() => {

    const ctx1 = gsap.context(() => {

      // let t1 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: ".right",
      //     toggleActions: "restart none none none",
      //   },
      // })
      //   .from(".right", {
      //     opacity: 0,
      //     x: 400,
      //     duration: 1,
      //   }, 'a')

      gsap.from(".rightText", {
        scrollTrigger: {
          trigger: '.rightText',
        },
        x: -200,
        opacity: 0,
        duration: 0.5
      })

    }, parentRef)

    return () => ctx1.revert();

  }, [])

  return (
    <div className='w-full flex flex-col gap-5 justify-center items-center p-[10px] sm:p-[32px] my-[50px] bg-bgColor1 relative' ref={parentRef}>

      {/* socail proofs description */}
      <div className='w-full sm:w-[80%] h-fit flex flex-col sm:flex-row gap-5 sm:gap-[100px] m-[50px]'>

        {/* left */}
        <p className='w-full sm:w-[35%] text-[30px] sm:text-[40px] font-bold text-txtColor0'>Trusted by over 8M sellers around the world</p>
        {/* right */}
        <p className='w-full sm:w-[30%] text-txtColor2 flex justify-start items-center rightText'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.</p>

      </div>

      {/* socail proofs swiper */}
      <SocialSwiper />

      <img loding="lazy" className='absolute -bottom-10 left-[50%] -translate-x-[50%]' src={triangle2} alt="" srcSet="" />

    </div>
  )
}

export default SocialProof