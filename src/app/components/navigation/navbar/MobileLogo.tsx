"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const MobileLogo = () => {
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
    <div className="flex flex-shrink-0 items-center p-6">
      <Link href="/">
        <Image src="/favilight.webp" alt="Logo" width={51} height={27}/>
      </Link>
    </div>
  );
};

export default MobileLogo;
