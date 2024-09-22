import React, { useLayoutEffect, useRef } from 'react'
import thumbIcon from '../../assets/icons/easyIcon.svg'
import etsy from '../../assets/icons/etsy.svg'
import bigecommerce from '../../assets/icons/bigecommerce.svg'
import squarespace from '../../assets/icons/squarespace.svg'
import wix from '../../assets/icons/wix.svg'
import woo from '../../assets/icons/woo.svg'
import prestashop from '../../assets/icons/prestashop.svg'
import api from '../../assets/icons/api.svg'
import shopify from '../../assets/icons/shopify.svg'
import bg2 from '../../assets/bg2.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Connect = () => {

  gsap.registerPlugin(ScrollTrigger)

  const parentRef = useRef();

  const imagesArr = [etsy, bigecommerce, squarespace, wix, woo, prestashop, api, shopify, thumbIcon]

  useLayoutEffect(() => {

    const ctx1 = gsap.context(() => {

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".head",
        },
      })
        .to(".img1", {
          top: "15%",
          left: "75%",
          duration: 1.5,
        }, 'a')
        .to(".img2", {
          top: "20%",
          left: "35%",
          duration: 1.5,
        }, 'a')
        .to(".img3", {
          top: "10%",
          left: "15%",
          duration: 1.5,
        }, 'a')
        .to(".img4", {
          bottom: "10%",
          left: "60%",
          duration: 1.5,
        }, 'a')
        .to(".img5", {
          bottom: "25%",
          left: "70%",
          duration: 1.5,
        }, 'a')
        .to(".img6", {
          bottom: "30%",
          left: "15%",
          duration: 1.5,
        }, 'a')
        .to(".img7", {
          bottom: "15%",
          left: "25%",
          duration: 1.5,
        }, 'a')



    }, parentRef)

    return () => ctx1.revert();

  }, [])

  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center mt-[150px]' ref={parentRef}>

      <div className='w-full flex flex-col justify-center items-center gap-4'>

        <p className='font-semibold text-txtColor0 text-[25px] sm:text-[40px] head'>Connect your store</p>

        <p className='text-txtColor2 text-[16px] text-center sm:text-start'>Printify easily intergrates with major e-commerce platforms and marketplaces</p>

        <div className='w-full sm:w-[80%] h-[100vh] flex justify-center items-center relative'>

          {imagesArr.map((e, i) => (
            <img key={i} loading='lazy' className={`img${i} w-[55px] sm:w-[90px] hover:w-[60px] hover:sm:w-[100px] cursor-pointer transition-all p-2 sm:p-5 shadow-lg rounded-lg absolute ${e == "top" ? 'top-[50%]' : 'bottom-[50%]'} left-[50%] -translate-x-[50%] -translate-y-[50%] ${e == "/src/assets/icons/easyIcon.svg" ? "bg-green-500" : "bg-white"}`} src={e} alt={e} srcSet="" />
          ))}

        </div>

      </div>

      {/* TALK TO SALES */}
      <div className='w-[80%] h-[150px] flex flex-col sm:flex-row justify-around items-center gap-10 bg-[#E2F7E3] rounded-lg p-5 relative overflow-hidden'>

        <p className='text-txtColor4 text-[16px] text-center sm:text-start sm:text-[25px] font-bold z-20'>Are you a large business looking for custom solutions?</p>

        <p className='w-[140px] h-[40px] rounded-lg shadow-md bg-white flex justify-center items-center text-[12px] sm:text-[16px] font-medium hover:text-txtColor1 cursor-pointer z-20'>Talk to sales</p>

        {/* bg's */}
        <img className='absolute -top-[70%] right-0 rotate-[30deg] z-10' src={bg2} alt="" srcset="" />

      </div>

    </div>
  )
}

export default Connect