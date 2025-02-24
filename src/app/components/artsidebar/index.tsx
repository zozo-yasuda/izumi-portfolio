import { TAG } from "@/app/globals";
import Link from "next/link";
import Artwork from "../models/Artwork";

interface SideBarProps {
  artwork : Artwork
}

const Sidebar:React.FC<SideBarProps> = ({artwork}) => {
  return (
    <aside className="min-h-full w-screen h-[200px] sm:h-[400px] sm:w-[350px] bg-offwhite flex flex-col justify-between">
      <div className="sm:pt-6"></div>
      <Link
        href="/"
        className="p-2 sm:p-6 font-sans text-green tracking-18 uppercase text-sm"
      >
        &lt;back
      </Link>
      <h1 className="pl-2 sm:pl-6 text-lime uppercase font-tomarik sm:text-3xl md:text-4xl lg:text-6xl">
        {artwork.title}
      </h1>
      <h2 className="pl-2 sm:pl-6 sm:pb-6 tracking-24 font-tomarik text-xs sm:text-base md:text-xl lg:text-2xl">
        {artwork.subtitle}
      </h2>
      <div className="p-6 pr-8 pl-8 sm:p-10 text-green font-sans tracking-5 text-xs sm:text-sm md:text-sm">
        {artwork.text}
      </div>
    </aside>
  );
};

export default Sidebar;
