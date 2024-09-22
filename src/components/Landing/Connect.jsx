import React from 'react'
import thumbIcon from '../../assets/icons/thumbIcon.svg'
import etsy from '../../assets/icons/etsy.svg'
import bigecommerce from '../../assets/icons/bigecommerce.svg'
import squarespace from '../../assets/icons/squarespace.svg'
import wix from '../../assets/icons/wix.svg'
import woo from '../../assets/icons/woo.svg'
import prestashop from '../../assets/icons/prestashop.svg'
import api from '../../assets/icons/api.svg'
import shopify from '../../assets/icons/shopify.svg'

const Connect = () => {

  const connectArr = [
    {
      title: 'bigecommerce',
      pic: bigecommerce
    },
    {
      title: 'squarespace',
      pic: squarespace
    },
    {
      title: 'wix',
      pic: wix
    },
    {
      title: 'woo',
      pic: woo
    },
    {
      title: 'etsy',
      pic: etsy
    },
    {
      title: 'api',
      pic: api
    },
    {
      title: 'prestashop',
      pic: prestashop
    },
    {
      title: 'squarespace',
      pic: squarespace
    },
    {
      title: 'shopify',
      pic: shopify
    },
  ]

  return (
    <div className='w-full min-h-dvh flex flex-col justify-center items-center mt-[150px]'>

      <div className='w-full flex flex-col justify-center items-center gap-4'>

        <p className='font-semibold text-txtColor0 text-[25px] sm:text-[40px]'>Connect your store</p>

        <p className='text-txtColor2 text-[16px] text-center sm:text-start'>Printify easily intergrates with major e-commerce platforms and marketplaces</p>

        <div className='w-full sm:w-[80%] h-[100vh] flex justify-center items-center relative'>

          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute top-[15%] left-[75%]' src={wix} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute top-[20%] left-[35%]' src={bigecommerce} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute top-[10%] left-[15%]' src={squarespace} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute bottom-[10%] left-[60%]' src={woo} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute bottom-[25%] left-[70%]' src={etsy} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute bottom-[30%] left-[15%]' src={api} alt="" srcset="" />
          <img className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute bottom-[15%] left-[25%]' src={prestashop} alt="" srcset="" />
          <img
            className='w-[55px] sm:w-[80px] p-2 sm:p-5 bg-white shadow-lg rounded-lg absolute top-[50%] left-[50%] -translate-x-[50%]' src={thumbIcon} alt="" srcset="" />

        </div>

      </div>

      {/* TALK TO SALES */}
      <div className='w-[80%] h-[150px] flex flex-col sm:flex-row justify-around items-center gap-10 bg-[#18C75A] rounded-lg p-5'>

        <p className='text-txtColor4 text-[16px] text-center sm:text-start sm:text-[25px] font-bold'>Are you a large business looking for custom solutions?</p>

        <p className='w-[140px] h-[40px] rounded-sm bg-white flex justify-center items-center text-[12px] sm:text-[16px]'>Talk to sales</p>

      </div>

    </div>
  )
}

export default Connect