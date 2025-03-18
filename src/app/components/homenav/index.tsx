"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "../navigation/navbar";

interface HomeNavProps{
  styles?: string;
  buttonStyles?: string
}

const HomeNav:React.FC<HomeNavProps> = ({styles, buttonStyles}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const Logo = () => {
    return (
      <div className="">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={400}
            height={211}
            className="z-50"
          ></Image>
        </Link>
      </div>
    );
  };

  const pathName = usePathname();
  const [activeLink, setActiveLink] = useState(pathName);
  const handleClick = (href: string) => {
    setActiveLink(href);
  };

  useEffect(() => {
    setActiveLink(pathName); 
  }, [pathName]);

  const workItem = () => {
    return (
      <div
        onClick={() => handleClick("/")}
        className={buttonStyles}
      >
        {activeLink === "/" ? (
          <Link
            href="/"
            className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 border-2 border-red"
          >
            Work
          </Link>
        ) : (
          <Link
            href="/"
            className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 border-2 border-offblack hover:text-white hover:border-transparent hover:bg-offblack"
          >
            Work
          </Link>
        )}
      </div>
    );
  };

  const aboutItem = () => {
    return (
      <div
        onClick={() => handleClick("/about")}
        className={buttonStyles}
      >
        {activeLink === "/about" ? (
          <Link
            href="/about"
            className="font-bold z-10 py-3 px-9 rounded-full block text-red bg-rose font-sans uppercase tracking-24 border-2 border-red"
          >
            About Me
          </Link>
        ) : (
          <Link
            href="/about"
            className="font-bold z-10 py-3 px-9 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 border-2 border-offblack hover:text-white hover:border-transparent hover:bg-offblack"
          >
            About Me
          </Link>
        )}
      </div>
    );
  };

  return (
    <nav className={styles}>
      {isMobile ? (
        <div className="flex flex-col text-center gap-y-3">
          <Logo></Logo>
          {workItem()}
          {aboutItem()}
        </div>
      ) : (
        <div className="flex flex-col text-center gap-y-3">
          <Logo></Logo>
          {workItem()}
          {aboutItem()}
        </div>
      )}
    </nav>
  );
};

export default HomeNav;
