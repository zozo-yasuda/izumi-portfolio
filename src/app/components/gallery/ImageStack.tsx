import React, { useState, useEffect} from 'react';
import Image from "next/image";
import Link from 'next/link';
import Artwork from "../models/Artwork";

type ImageStackProps = {
    artwork: Artwork;
};

const ImageStack = (props: ImageStackProps) => {
    
    const [isHovered, setIsHovered] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        const img = document.createElement('img');
        img.src = props.artwork.thumbnail;
        img.width = 249;
        img.height = 249;
        img.onload = () => setImgLoaded(true);
    }, [props.artwork.thumbnail]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const tagsList = Array.from(props.artwork.tags).map((tag,index) =>
        <div className="text-green font-sans text-md uppercase pl-5 tracking-18"
            key = {index}>{tag}</div>);


return (
        <div className="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
        key={props.artwork.key}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative',
            height: props.artwork.height,
            width: props.artwork.width}}
        >
            <p>Loading...</p>

    { imgLoaded &&
    <>
        <div className="absolute bg-rose w-full h-full left-0 top-0 shadow-xl
                        transition-opacity duration-500 ease-in" 
                        style={{ opacity: isHovered ? 1 : 0 }}>
            <h1 className="text-5xl font-tomarik text-left text-lime pl-4 pt-4">{props.artwork.alt}</h1>
            <p className="flex flex-col">
                {tagsList}
            </p>
        </div>
        <Link href = {props.artwork.key}>
        <Image
        className="shadow-xl"
            src={props.artwork.thumbnail}
            alt={props.artwork.alt}
            width={props.artwork.width}
            height={props.artwork.width}
            style={{
                transition: 'opacity 0.5s ease-in-out',
                opacity: isHovered ? 0: 1,
                position: 'absolute',
                objectFit: 'fill',
                left: 0,
                top:0,
            }} />
        </Link>
        </>  
    }
    </div>
    );
};

export default ImageStack;