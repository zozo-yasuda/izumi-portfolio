import Sidebar from "../components/artsidebar";
import Link from "next/link";
import Process from "./process";

export default function Page() {
  return (
    <section className="bg-offwhite flex flex-col sm:flex-row">
        {Sidebar("Faux Florida", 
        "Make 2 magazine spreads for a section called local stories on a fictional town in North Florida")}
      <div className="h-screen w-full">
        <object
          data="/PDFs/clv.pdf"
          type="application/pdf"
          width='100%'
          height='100%' 
          className = "pt-4">
            <p>It appears you don&apos;t have a PDF plugin for this browser. You can <Link href="/fauxflorida/ff1.pdf">click here to download the PDF file.</Link></p>
          </object>
        </div>
    </section>
    )
}
