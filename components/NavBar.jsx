import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from "next/link";
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b'>
      <Image src='/logo.png' alt='logo' width={100} height={100} />
      <div className='hidden md:flex gap-5'>
      <Link href="#" className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>
          Home
        </Link>
        <Link href="#cars-catalog" className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>
          Rent a Car
        </Link>
        <Link href="#sell-cars" className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>
          Sell Your Car
        </Link>
        <Link href="#contact" className='hover:bg-blue-500 p-2 px-3 cursor-pointer rounded-full hover:text-white'>
          Contact Us
        </Link>
      </div>
      <UserButton />
    </div>
  )
}

export default NavBar