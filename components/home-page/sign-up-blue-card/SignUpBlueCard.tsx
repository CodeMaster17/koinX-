import Image from 'next/image'
import React from 'react'

const SignUpBlueCard = () => {
  return (
    <div className='w-full bg-lightBlue lg:bg-transparent lg:mt-4 pt-20 pb-20 mt-20 lg:w-1/5 lg:mt-0 lg:pb-0 lg:pt-0'>
        <div className='w-[90%] mx-auto bg-blue  rounded-lg p-4 lg:w-full lg:p-8' >
            <p className="font-inter text-xl font-bold text-white-100 text-center w-8/5"> Get Started with KoinX for FREE </p>
            <div className='w-full flex justify-center items-center' >
                <Image
                src="/assets/start-free-component-icon.svg"
                alt="subscribe-img"
                width={149}
                height={139}
                />
            </div>
            <p className="text-white-100 text-center text-lg font-bold leading-10" >Track your portfolio & taxes</p>
            <p className='text-white-100 text-sm font-medium text-center' >

            With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.
            </p>
            <div className="w-full flex justify-center items-center mt-4">


            <button className="text-black text-sm leading-7 font-semibold p-2 bg-white-100 w-4/5 mx-auto rounded-sm">
            Sign up at KoinX for free

            </button>
                </div>
        </div>
    </div>
  )
}

export default SignUpBlueCard