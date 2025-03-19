import Artwork from "../models/Artwork";
import Navigation from "../navigation";
import { artworks } from "../../globals";
import Link from "next/link";

interface SideBarProps {
  artwork : Artwork;
  styles?: string;
}

const Sidebar:React.FC<SideBarProps> = ({artwork, styles}) => {
  const Tags = () => Array.from(artwork.tags).map((tag, index) => {
    return (
    <li key={index} className="flex bg-rose rounded-full px-5 py-2">
      {tag}
    </li>);
  });
  const currIndex =  artworks.indexOf(artwork);
    const prevArt:Artwork|null = currIndex > 0? artworks[currIndex-1]: null;
    const nextArt:Artwork|null = currIndex < artworks.length-1? artworks[currIndex+1]: null;
  
    const prevButton = () => {
      if (prevArt != null){
        return (
          <Link href={prevArt.key} className="flex items-center px-5 py-2 bg-lime text-white text-sm rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 pr-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
          {prevArt.title}</Link>
        );
      }
    }
    const nextButton = () => {
      if (nextArt != null){
        return (
          <Link href={nextArt.key} className="flex items-center px-5 py-2 bg-lime text-white text-sm rounded-full" >{nextArt.title}  
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4 pl-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
          </Link>
        );
      }
    }
  return (
    <aside className={styles}>
      <Navigation />
      <div className="sm:pt-6">
        </div>
      <div className="px-20 pt-2 text-lime uppercase font-tomarik text-4xl md:text-5xl lg:text-6xl">
        {artwork.title}
      </div>
      <div className="px-20 tracking-24 font-tomarik text-offblack text-xl md:text-lg lg:text-xl">
        {artwork.subtitle}
      </div>
      <ul className="pt-4 px-20 py-2 uppercase text-bold text-green tracking-18 font-sans flex flex-row flex-wrap gap-x-2 gap-y-3 text-sm">
        {Tags()}
      </ul>
      <div className="px-20 text-left pt-4 text-offblack font-sans tracking-5 text-sm text-pretty">
        {artwork.text}
      </div>
      <div className="flex justify-between py-16 px-20 text-left pt-8 text-green font-sans tracking-5 text-sm">
        {prevButton()}
        {nextButton()}
      </div>
    </aside>
  );
};

export default Sidebar;
