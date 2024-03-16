import React, { useState, useEffect } from "react";
import Filters from "./filters";
import Artwork from "../models/Artwork";
import ImageStack from "./ImageStack";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Gallery = () => {
  const artworks: Array<Artwork> = [
    new Artwork(
      "/fauxflorida",
      "FAUX FLORIDA",
      "Desc 1",
      "/thumbnails/tn1.png",
      "/descs/desc1.png",
      ["print"]
    ),
    new Artwork(
      "/soluna",
      "SOLUNA",
      "Desc 2",
      "/thumbnails/tn2.png",
      "/descs/desc2.png",
      ["branding"]
    ),
    new Artwork(
      "/kisuitechflyer",
      "KISUI TECH FLYER",
      "Desc 3",
      "/thumbnails/tn3.png",
      "/descs/desc3.png",
      ["print", "marketing"]
    ),
    new Artwork(
      "/akm30",
      "AKM 30",
      "Desc 4",
      "/thumbnails/tn4.png",
      "/descs/desc4.png",
      ["marketing"]
    ),
    new Artwork(
      "/musictheorycat",
      "MUSIC THEORY CAT",
      "Desc 5",
      "/thumbnails/tn5.png",
      "/descs/desc5.png",
      ["illustration"]
    ),
    new Artwork(
      "/designheros",
      "DESIGN HEROS",
      "Desc 6",
      "/thumbnails/tn6.png",
      "/descs/desc6.png",
      ["motion", "marketing"]
    ),
    new Artwork(
      "/fetzandottoswimwear",
      "FETZ AND OTTO SWIM WEAR",
      "Desc 7",
      "/thumbnails/tn7.png",
      "/descs/desc7.png",
      ["branding"]
    ),
    new Artwork(
      "/therabbithole",
      "THE RABBIT HOLE",
      "Desc 8",
      "/thumbnails/tn8.png",
      "/descs/desc8.png",
      ["branding", "print", "motion"]
    ),
    new Artwork(
      "/fetzandottodaycare",
      "FETZ AND OTTO DAYCARE",
      "Desc 9",
      "/thumbnails/tn9.png",
      "/descs/desc9.png",
      ["branding"]
    ),
    new Artwork(
      "/sweetsketch",
      "SWEET SKETCH",
      "Desc 10",
      "/thumbnails/tn10.png",
      "/descs/desc10.png",
      ["branding", "motion"]
    ),
    new Artwork(
      "/izumiyasuda",
      "IZUMI YASUDA",
      "Desc 11",
      "/thumbnails/tn11.png",
      "/descs/desc11.png",
      ["branding", "print"]
    ),
  ];

  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  const [filterChanged, setFilterChanged] = useState(false);
  const [currFilter, setFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    if(filter !== currFilter){
      setFilterChanged(true);
      setFilter(filter);
      if (filter === "all") {
        setFilteredArtworks(artworks);
      } else {
        setFilteredArtworks(
          artworks.filter((artwork) => artwork.tags.has(filter))
        );
      }
  }
    else{
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

  return (
    <div className="pb-6 sm:p-6 px-4 min-h-screen">
      <div className="flex flex-col sm:flex-row">
        <Filters onFilterChange={handleFilterChange} />
        <TransitionGroup className="mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedArtworks.map((artwork: Artwork) => (
            <CSSTransition
              key={artwork.key}
              timeout={500}
              classNames="item"
              appear={filterChanged}
              enter={filterChanged}
            >
              <ImageStack artwork={artwork} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Gallery;
