const Image = require("next/legacy/image").default;

export default function Page() {
  return (
    <section className="bg-offwhite min-h-screen flex flex-col lg:flex-row justify-end">
      <div className="w-3/4 lg:w-1/2 h-full pt-[16vh] mr-16 ml-2">
        <span className="relative inline-block">
          <h1 className="relative z-10 mb-2 text-lime uppercase font-tomarik text-6xl">
            &#8202;HI, I&apos;m Izumi.&nbsp;&nbsp;&nbsp;
          </h1>
          <div className="absolute z-5 w-full h-1/2 bottom-4 left-auto right-auto bg-rose"></div>
        </span>
        <br />
        <h2 className="mb-8 text-green font-bold uppercase font-sans tracking-18">
          thank you for checking out my website!
        </h2>
        <p className="w-full lg:w-3/4 text-green font-sans tracking-5">
          I am a graphic designer and a third year undergraduate student at UF.
          I have international graphic design experience as an intern, designing
          flyers, web designs, and motion graphics for a modern tech startup. I
          am also the multimedia creative director for the Asian Kaleidoscope
          Month (AKM) club.
        </p>
      </div>

      <div className="relative w-full lg:w-1/3 h-screen mt-10 ">
        <Image
          src="/aboutImage.png"
          alt="Izumi Yasuda"
          layout="fill"
          objectFit="contain"
          objectPosition="right top"
        />
      </div>
    </section>
  );
}
