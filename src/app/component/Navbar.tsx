import React from 'react'


import { CiSearch } from "react-icons/ci";

import { IoMdContact } from "react-icons/io";

import { FaRegHeart } from "react-icons/fa";

import { MdShoppingBag } from "react-icons/md";


import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";
import Image from 'next/image';

interface Props {
  openNav:()=>void
}

export default function Navbar({openNav}:Props) {
  return (
    <div className='w-[100%] sticky z-[10000]  top-0 h-[12vh]  px-10 bg-black'  style={{ backgroundImage: "url(/banner1.png)" }}>
        <div className='flex items-center justify-between w-[100%]  h-[100%] '>
        <h1 className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-[30px] text-white font-serif font-bold">
    <Image src="/logo.png" alt='logo' width={200} height={200} className=''/>
        
</h1>

            <div className='flex gap-10 '>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'><Link href="#HomePage"> HOME</Link></div>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'>SHOP</div>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'><Link href="#AboutPage"> ABOUT</Link></div>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'>SERVICES</div>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'>BLOG</div>
            <div className='nav-link text-white md:text-[12px] lg:text-[15px]'>CONTACT</div>

            </div>

            <div className='hidden lg:block text-white   text-2xl gap-11 '>
              <div className='flex gap-4 cursor-pointer'>

            <CiSearch />
            <FaRegHeart />
            <IoMdContact />
            <MdShoppingBag />
              </div>
            </div>

            <div onClick={openNav} className='text-[25px]  w-[2rem] md:hidden h-[2rem] cursor-pointer text-white'><CiMenuFries />
            </div>

        </div>
     
    </div>
  )
}
