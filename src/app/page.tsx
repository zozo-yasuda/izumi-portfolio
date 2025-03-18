"use client";
import Gallery from "./components/gallery";
import HomeNav from "./components/homenav";
import { useState, useEffect } from "react";
import Navbar from "./components/navigation/navbar";

export default function Page() {
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
  return (
    <div>
      {isMobile ? (
        <div className="bg-white">
          <Navbar />
          <Gallery />
        </div>
      ) : (
        <div className="bg-white grid grid-cols-3">
          <HomeNav
            buttonStyles="cursor-pointer text-sm md:text-lg"
            styles="grid h-screen place-items-center bg-white flex col-span-1 sticky top-0 p-20"
          />
          <Gallery />
        </div>
      )}
    </div>
  );
}
