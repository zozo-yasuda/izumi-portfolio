const Image = require("next/image").default;

export default function Page() {
  return (
    <section className="bg-offwhite min-h-screen flex flex-row">
      <div className="p-8 lg:py-16">
        <span className="relative inline-block">
          <h1 className="relative z-10 mb-2 text-lime uppercase font-tomarik text-6xl">
            HI, I’m Izumi.
          </h1>
          <div className="absolute bottom-0 left-auto right-auto w-full bg-rose z-0"></div>
        </span>
        <br />
        <h2 className="mb-8 text-green font-bold uppercase font-sans tracking-18">
          thank you for checking out my website!
        </h2>
        <p className="w-1/2 mb-3 text-green font-sans tracking-5">
          I am a graphic designer and a third year undergraduate student at UF.
          I have international graphic design experience as an intern, designing
          flyers, web designs, and motion graphics for a modern tech startup.
          I'm also the multimedia creative director for the Asian Kaleidoscope
          Month (AKM) club.
        </p>
      </div>
        <Image
          src="/aboutImage.png"
          alt="Izumi Yasuda"
          width={800}
          height={800}
          layout="absolute"
        />
    </section>
  );
}
