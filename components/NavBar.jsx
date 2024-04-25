import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-1'>
        <Image src='/logo.png' alt='logo' width={100} height={100} />
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>Contact Us</h2>
        </div>
        <UserButton />
    </div>
  )
}

export default NavBar