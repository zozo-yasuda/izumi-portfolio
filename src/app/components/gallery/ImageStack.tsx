import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import Artwork from "../models/Artwork";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageStackProps = {
  artwork: Artwork;
};

const ImageStack = forwardRef<HTMLDivElement, ImageStackProps>((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const tagsList = Array.from(props.artwork.tags).map((tag, index) => (
    <div
      className="text-green font-sans text-md uppercase pl-5 tracking-18"
      key={index}
    >
      {tag}
    </div>
  ));

  const [pageWidth, setPageWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageWidth(window.innerWidth);

      const handleResize = () => {
        setPageWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      key={props.artwork.key}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className=""
      style={{
        position: "relative",
        height: isMobile?Math.floor((2 / 3) * pageWidth):props.artwork.height,
        width: isMobile?Math.floor((2 / 3) * pageWidth):props.artwork.width,
      }}
      ref={ref} 
    >
      <div
        className="absolute bg-rose w-full h-full left-0 top-0
                                          transition-opacity duration-500 ease-in"
        style={{ opacity: isHovered ? 1 : 0 }}
      >
        <h1 className="text-4xl uppercase font-tomarik break-words text-lime pl-4 pt-4 w-full">
          {props.artwork.title}
        </h1>
        <div className="flex flex-col">{tagsList}</div>
      </div>
      <Link href={props.artwork.key}>
        <LazyLoadImage
          src={props.artwork.thumbnail}
          alt={props.artwork.title}
          width={isMobile?Math.floor((2 / 3) * pageWidth):props.artwork.width}
          height={isMobile?Math.floor((2 / 3) * pageWidth):props.artwork.width}
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isHovered ? 0 : 1,
            position: "absolute",
            objectFit: "fill",
            left: 0,
            top: 0,
          }}
        />
      </Link>
    </div>
  );
});

ImageStack.displayName = "ImageStack";

export default ImageStack;