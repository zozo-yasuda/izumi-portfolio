import Sidebar from "../components/artsidebar";
import Image from "next/image";

export default function Process() {
  return (
    <section className="col-start-2 col-end-5">
        <span className="relative inline-block">
        <h1 className="relative pt-12 font-tomarik text-lime text-6xl uppercase pl-2 pr-4 z-20 bg-offwhite left-2">
          Process
        </h1>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-6 -translate-y-1/2 w-screen h-4 bg-rose z-0"></div>
        </span>
        <Image src="/fauxflorida/ff2.svg" alt="Faux Florida spread 2" width={800} height={600} className="w-full" />
        <Image src={"/fauxflorida/ff3.svg"} alt="Faux Florida spread 3" width={800} height={600} className="w-full" />
    </section>
  );
}