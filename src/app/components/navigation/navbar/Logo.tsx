"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <Link href="/">
        <Image src="/Logo.png" alt="Logo" width={153} height={81} />
      </Link>
    </div>
  );
};

export default Logo;
