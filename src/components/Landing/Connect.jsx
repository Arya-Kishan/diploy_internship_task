import React, { useLayoutEffect, useRef } from 'react'
import thumbIcon from '../../assets/icons/thumbIcon.svg'
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
import Button from '../Buttons/Button'

const Connect = () => {

  gsap.registerPlugin(ScrollTrigger)

  const parentRef = useRef();

  const imagesArr = [etsy, bigecommerce, squarespace, wix, woo, prestashop, api, shopify, thumbIcon]

  useLayoutEffect(() => {

    const ctx1 = gsap.context(() => {

      let t3 = gsap.timeline({
        scrollTrigger: {
          trigger: ".head",
        },
      })
        .from(".head", {
          y: "-100",
          duration: 2,
          ease:"elastic.inOut"
        }, 'a')


      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".head",
        },
      })
        .to(".img0", {
          top: "50%",
          left: "85%",
          duration: 1.5,
          scale:1.5
        }, 'a')
        .to(".img1", {
          top: "15%",
          left: "75%",
          duration: 1.5,
        }, 'a')
        .to(".img2", {
          top: "25%",
          left: "35%",
          duration: 1.5,
          scale:1.5
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
          scale:1.2
        }, 'a')

      let t2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".talk",
          // markers: true,
          start: "10% 30%",
          end: "100% 30%",
          scrub: 1,
        }
      })
        .to(".talk", {
          width: '95%',
          height: "200px",
        }, 'a')



    }, parentRef)

    return () => ctx1.revert();

  }, [])

  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center mt-[50px] overflow-hidden' ref={parentRef}>

      <div className='w-full flex flex-col justify-center items-center gap-4'>

        <div className='font-semibold text-txtColor0 text-[25px] sm:text-[40px] overflow-hidden'><p className='head'>Connect your store</p></div>

        <p className='text-txtColor2 text-[16px] text-center sm:text-start'>Printify easily intergrates with major e-commerce platforms and marketplaces</p>

        <div className='w-full sm:w-[80%] h-[100vh] flex justify-center items-center head relative'>

          {imagesArr.map((e, i) => (
            <img key={i} loading='lazy' className={`img${i} w-[55px] sm:w-[90px] hover:w-[60px] hover:sm:w-[100px] cursor-pointer transition-all p-2 sm:p-5 shadow-lg rounded-lg absolute ${e == "top" ? 'top-[50%]' : 'bottom-[50%]'} left-[50%] -translate-x-[50%] -translate-y-[50%] bg-white`} src={e} alt={e} srcSet="" />
          ))}

        </div>

      </div>

      {/* TALK TO SALES */}
      <div className='w-[80%] h-[150px] flex flex-col sm:flex-row justify-around items-center gap-0 lg:gap-10 bg-[#E2F7E3] rounded-lg p-5 talk relative overflow-hidden'>

        <p className='text-txtColor4 text-[16px] text-center sm:text-start sm:text-[25px] font-bold z-20'>Are you a large business looking for custom solutions?</p>

        <Button className='w-[140px] h-[40px] shadow-md text-[12px] sm:text-[16px] bg-white z-20' text={"Talk to sales"}/>

        {/* bg's */}
        <img className='absolute -top-[70%] right-0 rotate-[30deg] z-10' src={bg2} alt="" srcSet="" />

      </div>

    </div>
  )
}

export default Connect