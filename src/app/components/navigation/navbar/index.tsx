import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const Logo = () => {
    return (
      <div>
        <Link href="/">
          <Image
            src="/favilight.webp"
            alt="Logo"
            width={40}
            height={8}
            className="z-50"
          ></Image>
        </Link>
      </div>
    );
  };

  return (
    <nav className="sticky bg-white flex col-span-1 z-50 top-0 p-5">
      <>
        <div className="flex flex-col justify-between">
          <div className="pl-10">
            <ul className=" text-xs flex flex-row items-center gap-x-3">
              <li className="p-2 pl-5">
                <Logo />
              </li>
              <li>
                <Link
                  href={"/"}
                  className="relative font-bold z-10 py-2 px-7 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 border-2 border-offblack hover:text-white hover:border-transparent hover:bg-offblack"
                >
                  work
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="relative font-bold z-10 py-2 px-4 rounded-full block text-offblack bg-transparent font-sans uppercase tracking-24 border-2 border-offblack hover:text-white hover:border-transparent hover:bg-offblack"
                >
                  about me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
