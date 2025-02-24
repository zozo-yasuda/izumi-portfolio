import React, { useState, useEffect, useRef } from "react";
import Filters from "./filters";
import Artwork from "../models/Artwork";
import ImageStack from "./ImageStack";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { TAG } from "@/app/globals";
import * as ART from "@/app/globals";

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

  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [filterChanged, setFilterChanged] = useState(false);
  const [currFilter, setFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    if (filter !== currFilter) {
      setFilterChanged(true);
      setFilter(filter);
      if (filter === "all") {
        setFilteredArtworks(artworks);
      } else {
        setFilteredArtworks(artworks.filter((artwork) => artwork.tags.has(filter)));
      }
    } else {
      setFilterChanged(false);
    }
  };

  const [displayedArtworks, setDisplayedArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    setDisplayedArtworks([]);
    const timeoutId = setTimeout(() => {
      setDisplayedArtworks(filteredArtworks);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [filteredArtworks]);

  const nodeRef = useRef(null);

  return (
    <div className="pb-6 sm:p-6 px-4 min-h-screen">
      <div className="flex flex-col sm:flex-row">
        <Filters onFilterChange={handleFilterChange} />
        <TransitionGroup className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedArtworks.map((artwork: Artwork, index) => {
            
            return (
              <CSSTransition
                key={artwork.key}
                timeout={500}
                classNames="item"
                appear={filterChanged}
                enter={filterChanged}
                nodeRef={nodeRef}
              >
                <ImageStack artwork={artwork} ref={nodeRef} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Gallery;