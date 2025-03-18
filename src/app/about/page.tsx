"use client";
import HomeNav from "../components/homenav";
import Link from "next/link";
import { useState, useEffect } from "react";
import Navbar from "../components/navigation/navbar";

const Image = require("next/legacy/image").default;

export default function Page() {
  const resumeButton = () => {
    return (
      <div className="mr-4 my-4 inline-block width-5">
        <Link
          href={"https://izumiyasudaresume.tiiny.site/"}
          target="_blank"
          className="px-5 py-2 bg-lime text-white rounded-full"
        >
          {"Resume "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-4 pr-1 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    );
  };

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

  

  const Component = (style:string) => {
    return(
    <div className={style}>
        <section className="bg-white mx-auto my-auto">
            <span className="relative inline-block">
              <h1 className="relative z-10 mb-2 pb-2 text-lime uppercase font-tomarik text-6xl">
                &#8202;HI, I&apos;m Izumi.
              </h1>
              <div className="absolute z-5 w-full h-1/2 bottom-4 left-auto right-auto bg-rose"></div>
            </span>
            <p className="w-full lg:w-3/4 text-offblack font-sans tracking-5">
              I&apos;m a Graphic Design BFA student at the University of
              Florida. I love exploring composition, illustration, and motion
              design to create work that is both engaging and effective. My
              designs often lean toward playful yet minimalist aesthetics, but I
              enjoy adapting my approach based on the project&apos;s goals. One
              of my favorite projects is Remi the Musical Cat, a mascot I
              created for Anisong. It combines my love for classical music,
              cats, and art—things that bring joy and creativity into my life.
            </p>
        </section>
        <div className="text-green font-sans tracking-5 pt-2">
          {resumeButton()}
        </div>
      </div>);
  }

  return (
    <div>
      {isMobile ? (
        <div className="">
        <Navbar></Navbar>
        {Component("mx-auto px-10")}
        </div>
      ) : (
        <div className="grid grid-cols-3 w-screen h-screen">
        <HomeNav
          buttonStyles="cursor-pointer text-sm md:text-lg"
          styles="grid h-screen place-items-center bg-white flex col-span-1 sticky top-0 p-10"
        />
        {Component("col-span-2 m-auto")}
        </div>
      )}
      
    </div>
  );
}
