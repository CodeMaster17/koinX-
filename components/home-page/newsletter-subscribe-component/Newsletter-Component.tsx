import Image from 'next/image'
import React from 'react'

const NewsletterComponent = () => {
  return (
    <div className="   w-full p-8 border-2 ">

      <div className=" w-[80%] mt-12 mb-12 rounded-lg mx-auto gap-8 bg-blue flex justify-center items-center ">
        <Image
          src="/assets/subscribe-to-newsletter.svg"
          alt="subscribe-img"
          width={235}
          height={236}
        />
        <div className='flex flex-col gap-8 '>
        
        <div className='flex flex-col  '>
           <p className="text-2xl font-inter font-bold text-white-100">Stay up to date with latest crypto news</p>
           <p className="text-2xl font-inter font-bold text-white-100"> and events. Subscribe to our newsletter</p>
           
           </div>
           <div className="w-4/5  h-[48px]" >
          <input type="text" className="h-full w-3/5 p-2 rounded-l-[5px] bg-white-100" placeholder="Enter your email address" />
          <button className='h-full w-2/5 rounded-r-[5px] bg-orange'>Subscribe</button>
           </div>

        </div>
      </div>
    </div>
  )
}

export default NewsletterComponent