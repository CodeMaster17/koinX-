import React from 'react'
import Image from 'next/image'
import { footerLinkData, footerLinksImageData } from '@/constants'
const Footer = () => {
    return (
        <div className='w-full bg-black'>
            <div className="w-[90%] mx-auto p-4" >
                <div className="flex flex-col lg:flex-row gap-8 justify-center lg:justify-between items-center border-b-[1px] border-[rgba(255, 255, 255, 0.20)] pb-8 lg:pt-8" >
                    <Image
                        src="/assets/footer-icons/logo.svg"
                        width={109}
                        height={23.23}
                        alt="logo"
                    />
                    <div className='w-full flex justify-between lg:w-1/4' >
                        {footerLinksImageData.map((item) => {
                            return (
                                <Image
                                    key={item.id}
                                    src={item.imgURL}
                                    width={24}
                                    height={24}
                                    alt="social"
                                />
                            )
                        })}
                    </div>
                </div>

                <div className='w-full flex gap-2 mt-8 flex-wrap justify-between border-b-[1px] border-[rgba(255, 255, 255, 0.20)] pb-8 '>
                    {footerLinkData.map((item, index) => {
                        return (
                            <div className="mt-8 w-[48%] lg:w-1/5 " key={index} >
                                <p className="text-base font-bold leading-4 text-white-100 font-inter"  >
                                    {item.heading}
                                </p>
                                {item.subHeading.map((element, index) => {
                                    return (
                                        <p className='text-white-400 mt-2 font-inter  text-xs font-normal leading-5' key={index}>
                                            {element}
                                        </p>
                                    )
                                })}
                            </div>
                        )
                    })}

                </div>
            </div>
            <p className="text-sm text-white-100 font-normal text-center leading-4 pb-8 text-white-400 ">© All rights reserved by Simplify Infotech Pvt. Ltd.</p>
        </div>
    )
}

export default Footer
