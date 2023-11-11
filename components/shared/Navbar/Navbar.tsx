import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-16 w-full border-b-[1px] border-gray-50  bg-white-100'>
            <div className='mx-auto flex  h-full w-[90%]  items-center justify-between' >
                <div className='flex w-1/2 items-center justify-start' >
                    <Image
                        src='/assets/logo.svg'
                        alt="Logo"
                        width={81}
                        height={20.25}
                        className=''
                    />
                </div>
                <div className='flex justify-end lg:justify-between h-full lg:w-1/2' >
                    <Image
                        src='/assets/hamburger-menu.svg'
                        alt="Logo"
                        width={27.41}
                        height={27.41}
                        className=' lg:hidden'
                    />
                    <div className=" h-full  w-full flex gap-8 justify-center items-center ">
                        <ul className="flex w-full  h-full justify-around items-center ">
                            <li>Features</li>
                            <li>Exchanges</li>
                            <li>How it works?</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            </ul>
                            <button className="border-[1px] border-blue h-10 w-[112px] rounded-xsm p-2 " >
                                Sign In
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
/*

*/