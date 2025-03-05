import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";

const HomeNav = () => {
  const Logo = () => {
    return (
  <div className="flex-grow block">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={400}
          height={211}
          className="z-50">
          </Image>
      </Link>
    </div>
  )};
  const [activeLink, setActiveLink] = useState("/");
  const handleClick = (href: string) => {
    setActiveLink(href);
  };


  const workItem = () => {
    const path = "/";
    const label = "Work";
    return (
        <div
          onClick={() => handleClick(path)}
          className="flex-grow block cursor-pointer"
        >
          {activeLink === path? 
          (
            <Link href={path} className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 text-lg border border-red">
                {label}
            </Link>
          ) : (
            <Link href={path} className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 text-lg border border-offblack hover:text-white hover:border-transparent hover:bg-offblack">
                {label}
            </Link>
          )
          } 
        </div>
    );
  }

  const aboutItem = () => {
    const path = "/about";
    const label = "About Me";
    return (
        <div
          onClick={() => handleClick("/about")}
          className="flex-grow inline-block cursor-pointer"
        >
          {activeLink === "/about"? 
          (
            <Link href="/about" className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 text-lg border border-red">
                {label}
            </Link>
          ) : (
            <Link href="/about" className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 text-lg border border-offblack hover:text-white hover:border-transparent hover:bg-offblack">
                {label}
            </Link>
          )
          } 
        </div>
    );
  }

  return (
    <nav className="bg-white flex col-span-1 mx-auto my-auto">
        <>
          <div className="flex flex-col text-center justify-around gap-y-3">
              <Logo></Logo>
                {workItem()}
                {aboutItem()}
          </div>
        </>
    </nav>
  );
};

export default HomeNav;
