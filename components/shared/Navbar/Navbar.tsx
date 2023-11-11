import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='h-16 w-full border-2'>
            <div className='mx-auto flex  h-full w-[90%] items-center justify-between' >
                <div className='flex w-1/2 items-center justify-start' >
                    <Image
                        src='/assets/logo.svg'
                        alt="Logo"
                        width={81}
                        height={20.25}
                        className='border-2'
                    />
                </div>
                <div className='flex justify-end' >
                    <Image
                        src='/assets/hamburger-menu.svg'
                        alt="Logo"
                        width={27.41}
                        height={27.41}
                        className='border-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar
