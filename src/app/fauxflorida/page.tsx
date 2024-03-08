import Sidebar from "../components/artsidebar";
import Link from "next/link";
import Process from "./process";

export default function Page() {
  return (
    <section className="bg-offwhite grid grid-cols-5">
        {Sidebar("Faux Florida", 
        "Make 2 magazine spreads for a section called local stories on a fictional town in North Florida")}
      <div className="col-span-4 h-screen">
        <object
          data="/fauxflorida/ff1.pdf"
          type="application/pdf"
          width={800}
          height={1500} 
          className = "h-full w-full">
            <p>It appears you don't have a PDF plugin for this browser. You can <Link href="/fauxflorida/ff1.pdf">click here to download the PDF file.</Link></p>
          </object>
        </div>
    </section>
    )
}
