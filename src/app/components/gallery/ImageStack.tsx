import React, { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Artwork from "../models/Artwork";

type ImageStackProps = {
    artwork: Artwork;
};

const ImageStack = (props: ImageStackProps) => {
    
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    return (
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-1 md:p-2"
        key={props.artwork.key}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative',
            height: props.artwork.height,
            width: props.artwork.width}}
        >
        <Link href = {props.artwork.key}>
        <Image
        style={{
            transition: 'opacity 0.5s ease-in-out',
            opacity: isHovered ? 0: 1,
            position: 'absolute',
            objectFit: 'contain',
            left: 0,
            top:0 
        }}
        className = "shadow-xl"
          src={props.artwork.thumbnail}
          alt={props.artwork.alt}
          width={props.artwork.width}
          height={props.artwork.width}
        />
        <Image
        style={{
            transition: 'opacity 0.5s ease-in-out',
            opacity: isHovered? 1:0,
            position: 'absolute',
            objectFit: 'contain',
            left: 0,
            top:0
        }}
        className = "shadow-xl"
          src={props.artwork.desc}
          alt={props.artwork.descAlt}
          width={props.artwork.width}
          height={props.artwork.width}
        />
        </Link>
        </div>
    );
};

export default ImageStack;