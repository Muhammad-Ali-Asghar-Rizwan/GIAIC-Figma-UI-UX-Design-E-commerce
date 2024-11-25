"use client"
import HomePage from "./component/Home";
import MobileNavbar from "./component/Mobile/MobileNavbar";
import Navbar from "./component/Navbar";
import React ,{useState}  from "react";

export default function Home() {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  return (
      <div className="">
       
       <MobileNavbar  nav={nav} closeNav={closeNav}/>

        <Navbar openNav={openNav}/>

        <HomePage/>
        
      </div>
  );
}
