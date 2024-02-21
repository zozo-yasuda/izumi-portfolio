import React from "react";
import Filters from "./filters";
import Artwork from "../models/Artwork";
import ImageStack from "./ImageStack";

const Gallery = () => {
  const artworks:Array<Artwork> = [
    new Artwork(1, "Image 1", "Desc 1", "/thumbnails/tn1.png", "/descs/desc1.png"),
    new Artwork(2, "Image 2", "Desc 2", "/thumbnails/tn2.png", "/descs/desc2.png"),
    new Artwork(3, "Image 3", "Desc 3", "/thumbnails/tn3.png", "/descs/desc3.png"),
    new Artwork(4, "Image 4", "Desc 4", "/thumbnails/tn4.png", "/descs/desc4.png"),
    new Artwork(5, "Image 5", "Desc 5", "/thumbnails/tn5.png", "/descs/desc5.png"),
    new Artwork(6, "Image 6", "Desc 6", "/thumbnails/tn6.png", "/descs/desc6.png"),
    new Artwork(7, "Image 7", "Desc 7", "/thumbnails/tn7.png", "/descs/desc7.png"),
    new Artwork(8, "Image 8", "Desc 8", "/thumbnails/tn8.png", "/descs/desc8.png"),
    new Artwork(9, "Image 9", "Desc 9", "/thumbnails/tn9.png", "/descs/desc9.png"),
    new Artwork(10, "Image 10", "Desc 10", "/thumbnails/tn10.png", "/descs/desc10.png"),
    new Artwork(11, "Image 11", "Desc 11", "/thumbnails/tn11.png", "/descs/desc11.png"),
  ];

  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
      <div className="grid grid-cols-5 gap-4">
        <Filters />
        <div className="grid col-span-4 grid-cols-4 md:grid-cols-4 gap-4">
          {artworks.map((artwork)=> {return (<ImageStack key={artwork.key} artwork={artwork}/>);})}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
