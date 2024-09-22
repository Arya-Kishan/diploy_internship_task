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
      title:'bigecommerce',
      pic:bigecommerce
    },
    {
      title:'squarespace',
      pic:squarespace
    },
    {
      title:'wix',
      pic:wix
    },
    {
      title:'woo',
      pic:woo
    },
    {
      title:'etsy',
      pic:etsy
    },
    {
      title:'api',
      pic:api
    },
    {
      title:'prestashop',
      pic:prestashop
    },
    {
      title:'squarespace',
      pic:squarespace
    },
    {
      title:'shopify',
      pic:shopify
    },
  ]
  
  return (
    <div className='w-full h-dvh flex justify-center items-center mt-10'>

        <div className='flex flex-col justify-center items-center gap-4'>

        <p className='font-semibold text-txtColor0 text-[40px]'>Connect your store</p>

        <p className='text-txtColor2 text-[16px]'>Printify easily intergrates with major e-commerce platforms and marketplaces</p>

        <div className='w-full h-[60vh] flex justify-center items-center'>
            
        </div>

        </div>

    </div>
  )
}

export default Connect