import React, { useState, useEffect } from "react";
import Artwork from "../models/Artwork";
import ImageStack from "./ImageStack";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { artworks } from "@/app/globals";

type ImageStackProps = {
  artwork: Artwork;
};



const Gallery = () => {

  const [displayedArtworks, setDisplayedArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    setDisplayedArtworks([]);
    const timeoutId = setTimeout(() => {
      setDisplayedArtworks(artworks);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const Content:React.FC<ImageStackProps> = ({artwork}) => {
    const nodeRef = React.useRef(null);
      return (
        <CSSTransition
          key={artwork.key}
          timeout={500}
          classNames="item"
          appear={true}
          in={displayedArtworks.includes(artwork)}
          nodeRef={nodeRef}
        >
          <ImageStack artwork={artwork} ref={nodeRef} />
        </CSSTransition>
      );
    };



  return (
    <div className="col-span-2 m-6 place-content-start justify-items-center">
      <div className="flex flex-col">
        <TransitionGroup className="container grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
        {displayedArtworks.map((item) => (
        <Content key={item.key} artwork={item}/>))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Gallery;