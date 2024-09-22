import React from 'react'
import twitter from '../../assets/socialIcons/twitter.svg'
import fb from '../../assets/socialIcons/fb.svg'
import instagram from '../../assets/socialIcons/instagram.svg'
import linkedIn from '../../assets/socialIcons/linkedIn.svg'
import reddit from '../../assets/socialIcons/reddit.svg'
import tiktok from '../../assets/socialIcons/tiktok.svg'
import youtube from '../../assets/socialIcons/youtube.svg'
import thumbIcon from '../../assets/icons/thumbIcon.svg'

const Footer = () => {
    const socialArr = [fb, instagram, linkedIn, twitter, youtube, tiktok, reddit];

    const footerArr = [
        {
            title: 'integrations',
            dataArr: ["Shopify", "Etsy", "eBay", "Amazon", "TikTok Shop", "PrestaShop", "BigCommerce", "Wix", "WooCommerce", "Squarespace", "Printify API", "Printify Pop-Up Store", "Shutterstock"]
        },
        {
            title: 'discover',
            dataArr: ["Blog", "Guides", "Products", "Etsy print-on-demand", "Shopify print-on-demand", "Woocommerce print-on-demand", "Wix print-on-demand", "Squarespace print-on-demand", "Make Your Own Shirt", "Brands", "Pricing", "Shipping Rates", "Mockup Generator"]
        },
        {
            title: 'start',
            dataArr: ["Custom ", "Custom Hoodies", "Custom Mugs", "Custom Socks", "Custom Backpacks", "Custom Branding", "Sell on Etsy", "Sell on Social Media", "Free T-shirt Designs", "Custom Products", "Custom All Over-Print Hoodies", "Start a Clothing Line", "Start POD Business", "Bulk Orders", "Transfering To Printify"]
        },
        {
            title: 'printify',
            dataArr: ["Print on Demand", "Print Providers", "Experts Program", "Printify Express Delivery", "Become a Partner", "About", "Printify Quality Promise", "Jobs", "Webinars", "Printing Profits Podcast", "Contact Us", "Affiliate", "Contact Sales", "POD Glossary", "Network Fulfillment Status", "Merchant Protection", "Security", "Sitemap"]
        },
    ]

    const siteInfoArr = ["Intellectual Property Policy", "Terms of Service", "Privacy Policy", "Security"]

    return (
        <div className='w-full flex flex-col px-[32px]'>

            <div className='w-full min-h-[50px] flex flex-col sm:flex-row justify-between gap-1'>
                <div className='flex gap-1 text-txtColor1'>
                    <img loading='lazy' src={thumbIcon} alt="" srcSet="" />
                    <p className='block font-bold text-[32px]'>Printify</p>
                </div>
                <div className='flex flex-wrap gap-4'>
                    {socialArr.map((e) => (
                        <img key={e} loading='lazy' className='w-[32px]' src={e} alt="" srcSet="" />
                    ))}
                </div>
            </div>

            <div className='w-full flex flex-wrap justify-between mt-[40px] sm:mt-[96px] mb-[72px]'>
                {footerArr.map((e) => (
                    <div key={e.title} className='max-w-[50%] flex flex-col gap-8 basis-[50%] tablet:basis-[17%] pt-[20px]'>
                        <p className='text-txtColor0 font-semibold capitalize'>{e.title}</p>
                        <div className='flex flex-col gap-2 text-txtColor2 text-[12px] sm:text-[14px]'>
                            {e.dataArr.map((e) => (
                                <p key={e}>{e}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full flex flex-col justify-center items-center gap-5 bg-bgColor1 pt-[36px] pb-[24px]'>
                <div className='flex gap-6 flex-wrap'>
                    {siteInfoArr.map((e) => (
                        <p key={e} className='text-[#949494] text-[14px] font-medium'>{e}</p>
                    ))}
                </div>
                <p className='text-center text-[13px] font-medium text-txtColor0'>© 2024 Printify, Inc. All rights reserved.</p>
            </div>


        </div>
    )
}

export default Footer