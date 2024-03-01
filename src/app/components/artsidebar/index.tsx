import Image from "next/image";
import Link from "next/link";

const Sidebar = (title:string, prompt:string) =>{
  return (
    <aside className="col-span-1 min-h-full shadow-right overflow-auto">
      <Link href="/" className="font-sans text-green tracking-18 uppercase px-6 pt-12 text-xl">
              &lt;back
      </Link>
            <h1 className="px-6 py-6 text-lime uppercase font-tomarik text-6xl">
              {title}
            </h1>
            <h2 className="px-6 py-6 tracking-24 font-tomarik text-2xl">
              Project
            </h2>
            <br />
          <div className="bg-rose rounded-r-full w-5/6">
            <p className="pl-6 pr-12 py-8 mb-3 text-green font-sans tracking-5">
              Prompt:<br />
              {prompt}
            </p>
          </div>
    </aside>
      );
}

export default Sidebar;