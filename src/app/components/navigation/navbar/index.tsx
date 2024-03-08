import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import MobileLogo from './MobileLogo';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = (href:string) => {
    setActiveLink(href);
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== 'undefined') {
      // Set initial state
      setIsMobile(window.innerWidth <= 768);
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const menuItems = (
    [['/','Work'],['/about','About'],['/contact','Contact']].map(([path, label],index) => {
      return (
      <li key={index}>
      <span onClick={() => handleClick(path)} className="relative inline-block cursor-pointer">
        <div className="relative z-10"><Link href = {path} className="block py-2 px-3"><h1 className="text-green font-sans uppercase tracking-18">{label}</h1></Link></div>
        {activeLink === path && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/6 w-3/4 h-2 bg-rose z-0"></div>
          )}
      </span> 
      </li>
      )
      }
    ));
  
  return (
    <nav className="bg-offwhite shadow sticky w-full z-50 top-0">
      {isMobile ? (
        <>
        <div className='flex justify-between items-center'>
        <MobileLogo />
            <div className=''>
              <ul className="flex justify-end px-6 mt-4 ">
                {menuItems}
              </ul>
            </div>
          </div>
          </>
      ) : (
      <div className="relative flex flex-1 items-center justify-between mx-auto pl-12 pt-6 pb-2">
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
      )}
    </nav>
  );
};

export default Navbar;
