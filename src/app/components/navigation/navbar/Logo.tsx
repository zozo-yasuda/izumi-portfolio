"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="">
      <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width="53"
            height="47"
          />
      </Link>
    </div>
  );
};

export default Logo;
