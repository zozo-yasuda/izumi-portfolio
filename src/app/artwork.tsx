import React, { useState } from "react";
import Image from "next/image";

export class Artwork {
  key: number;
  alt: string;
  thumbnail: string;
  desc: string;
  width: number = 249;
  height: number = 249;

  constructor(key: number, alt: string, thumbnail: string, desc: string) {
    this.key = key;
    this.alt = alt;
    this.thumbnail = thumbnail;
    this.desc = desc;
  }

  render() {
    const [image, setImage] = useState(this.thumbnail);
    const handleMouseOver = () => {
      setImage(this.desc);
    };
    const handleMouseOut = () => {
      setImage(this.thumbnail);
    };
    return (
      <div className="h-auto max-w-full" key={this.key}>
        <Image
          src={this.thumbnail}
          alt={this.alt}
          width={this.width}
          height={this.height}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />
      </div>
    );
  }
}

export const artworks = [
  new Artwork(1, "Image 1", "/thumbnails/tn1.png", "/desc/desc1.png"),
  new Artwork(2, "Image 2", "/thumbnails/tn2.png", "/desc/desc2.png"),
  new Artwork(3, "Image 3", "/thumbnails/tn3.png", "/desc/desc3.png"),
  new Artwork(4, "Image 4", "/thumbnails/tn4.png", "/desc/desc4.png"),
  new Artwork(5, "Image 5", "/thumbnails/tn5.png", "/desc/desc5.png"),
  new Artwork(6, "Image 6", "/thumbnails/tn6.png", "/desc/desc6.png"),
  new Artwork(7, "Image 7", "/thumbnails/tn7.png", "/desc/desc7.png"),
  new Artwork(8, "Image 8", "/thumbnails/tn8.png", "/desc/desc8.png"),
  new Artwork(9, "Image 9", "/thumbnails/tn9.png", "/desc/desc9.png"),
  new Artwork(10, "Image 10", "/thumbnails/tn10.png", "/desc/desc10.png"),
  new Artwork(11, "Image 11", "/thumbnails/tn11.png", "/desc/desc11.png"),
];

export default Artwork;
