import React, { useState } from 'react';
import Image from 'next/image';
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
        <div className="h-auto max-w-full" key={props.artwork.key}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative',
            height: props.artwork.height,
            width: props.artwork.width}}
        >
        <Image
        style={{
            transition: 'opacity 0.5s ease-in-out',
            opacity: isHovered ? 0: 1,
            position: 'absolute',
            objectFit: 'contain',
            left: 0,
            top:0
        }}
          src={props.artwork.thumbnail}
          alt={props.artwork.alt}
          width={props.artwork.width}
          height={props.artwork.height}
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
          src={props.artwork.desc}
          alt={props.artwork.descAlt}
          width={props.artwork.width}
          height={props.artwork.height}
        />
        </div>
    );
};

export default ImageStack;