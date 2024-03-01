import Sidebar from "../components/artsidebar";
import Image from "next/image";
import Process from "./process";

export default function Page() {
  return (
    <section className="bg-offwhite grid grid-cols-5">
        {Sidebar("Faux Florida", 
        "Make 2 magazine spreads for a section called local stories on a fictional town in North Florida")}
      <div className="col-span-4">
        <Image
          src="/fauxflorida/ff1.svg"
          alt="Faux Florida spread 1"
          width={800}
          height={600} 
          className = "w-full"
        />
        <Process />
        </div>
    </section>
    )
}
