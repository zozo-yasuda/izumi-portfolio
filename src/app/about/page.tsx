"use client";
import HomeNav from "../components/homenav";

const Image = require("next/legacy/image").default;

export default function Page() {
  return (
    <div className="grid grid-cols-3 w-screen h-screen">
    <HomeNav></HomeNav>
    <div className="col-span-2 mx-auto my-auto">
    <section className="bg-white mx-auto my-auto">
      <div className="">
        <span className="relative inline-block">
          <h1 className="relative z-10 mb-2 pb-2 text-lime uppercase font-tomarik text-6xl">
            &#8202;HI, I&apos;m Izumi.
          </h1>
          <div className="absolute z-5 w-full h-1/2 bottom-4 left-auto right-auto bg-rose"></div>
        </span>
        <br />
        <h2 className="mb-4 text-green font-sans">
          Thank you for checking out my website!
        </h2>
        <p className="w-full lg:w-3/4 text-offblack font-sans tracking-5">
          I am a graphic designer and a third year undergraduate student at UF.
          I have international graphic design experience as an intern, designing
          flyers, web designs, and motion graphics for a modern tech startup. I
          am also the multimedia creative director for the Asian Kaleidoscope
          Month (AKM) club.
        </p>
      </div>
    </section>
    </div>
    </div>
  );
}
