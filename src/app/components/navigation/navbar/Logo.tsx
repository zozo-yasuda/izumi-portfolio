"use client";
import Image from "next/legacy/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center px-6 pt-4">
      <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo"
            width="150"
            height="75"
          />
      </Link>
    </div>
  );
};

export default Logo;
