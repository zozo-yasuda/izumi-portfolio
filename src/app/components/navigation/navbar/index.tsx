import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MobileLogo from "./MobileLogo";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [isMobile, setIsMobile] = useState(false);

  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      // Set initial state
      setIsMobile(window.innerWidth <= 768);

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const menuItems = [
    ["/", "Work"],
    ["/about", "About"],
    ["/contact", "Contact"],
  ].map(([path, label], index) => {
    return (
      <li key={index}>
        <span
          onClick={() => handleClick(path)}
          className="relative inline-block cursor-pointer"
        >
          {activeLink === path? 
          (
            <Link href={path} className="relative z-10 block text-red font-sans uppercase tracking-18">
                {label}
            </Link>
          ) : (
            <Link href={path} className="relative z-10 block text-offblack font-sans uppercase tracking-18">
                {label}
            </Link>
          )
          } 
          {/*activeLink === path && (
            <div className="absolute bottom-1 left-auto right-auto w-full h-1 bg-rose z-0"></div>
          )*/}
        </span>
      </li>
    );
  });

  return (
    <nav className="bg-offwhite shadow sticky w-full z-50 top-0">
      {isMobile ? (
        <>
          <div className="flex justify-between items-center">
            <MobileLogo />
            <div className="">
              <ul className="text-xs flex justify-end space-x-4">{menuItems}</ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <Logo />
            <div className="">
              <ul className="text-md mr-4 flex justify-end space-x-4">{menuItems}</ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
