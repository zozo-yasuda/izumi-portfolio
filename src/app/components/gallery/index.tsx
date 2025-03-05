import React, { useState, useEffect } from "react";
import Artwork from "../models/Artwork";
import ImageStack from "./ImageStack";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import * as ART from "@/app/globals";

type ImageStackProps = {
  artwork: Artwork;
};

const Gallery = () => {
  const artworks: Array<Artwork> = [
    ART.AKM_30,
    ART.DESIGN_HEROS,
    ART.FAUX_FLORIDA,
    ART.FETZ_OTTO_DAYCARE,
    ART.FETZ_OTTO_SWIMWEAR,
    ART.IZUMI_YASUDA,
    ART.KISUI_TECH_FLYER,
    ART.MUSIC_THEORY_CAT,
    ART.SOLUNA,
    ART.SWEET_SKETCH,
    ART.DOTNDONE,
  ];

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
    <div className="col-span-2 pt-20">
      <div className="flex flex-col justify-items-start">
        <TransitionGroup className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedArtworks.map((item) => (
        <Content key={item.key} artwork={item}/>))}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Gallery;