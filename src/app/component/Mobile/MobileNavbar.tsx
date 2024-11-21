import Link from 'next/link';
import React from 'react';
import { IoMdClose } from "react-icons/io";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

export default function MobileNavbar({ nav, closeNav }: Props) {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div className={`fixed ${navAnimation} transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-black`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        {/* Each link will close the navbar on click */}
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#Home">HOME</Link>
        </div>
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#About">SERVICES</Link>
        </div>
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#Contact">ABOUT</Link>
        </div>
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#Contact">PROJECT</Link>
        </div>
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#Contact">BLOG</Link>
        </div>
        <div className='nav-link-mobile' onClick={closeNav}>
          <Link href="#Contact">CONTACT</Link>
        </div>
      </div>
      {/* Close icon to close navbar */}
      <div onClick={closeNav} className='absolute z-[10000000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white text-[25px]'>
        <IoMdClose />
      </div>
    </div>
  );
}
