import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  const handleClick = (href:string) => {
    setActiveLink(href);
  }

  const menuItems = (
    [['/','Work'],['/about','About'],['/contact','Contact']].map(([path, label],index) => {
      return (
      <li key={index}>
      <span onClick={() => handleClick(path)} className="relative inline-block cursor-pointer">
        <div className="relative z-10"><Link href = {path} className="block py-2 px-3"><h1 className="text-green tracking-18">{label}</h1></Link></div>
        {activeLink === path && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 w-3/4 h-2 bg-rose z-0"></div>
          )}
      </span> 
      </li>
      )
      }
    ));
  
  return (
    <nav className="bg-offwhite shadow sticky w-full z-50 top-0 start-0">
      <div className="relative max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Logo />
        <div
          className=" text-lime-900 text-base font-sans uppercase items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          {menuItems}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
