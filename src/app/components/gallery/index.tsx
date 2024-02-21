import React from "react";
import Filters from "./filters";
import { artworks } from "../../artwork";

const Gallery = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="grid grid-cols-5 gap-4">
        <Filters />
        <div className="grid col-span-4 grid-cols-4 md:grid-cols-4 gap-4">
          {artworks.map((artwork) => {
            return artwork.render();
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
