"use client";
import Artwork from "../models/Artwork";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Document = dynamic(
  () => import("react-pdf").then((module) => (module.Document)),
  {
    ssr: false,
  }
);
const Page = dynamic(
  () => import("react-pdf").then((module) => (module.Page)),
  {
    ssr: false,
  }
);

interface SideBarProps {
  artwork: Artwork;
}

interface PDFPageProps {
  sidebar: React.FC<SideBarProps>;
  fileName: string;
  artwork: Artwork;
  video?: string;
  mindfullVideo1?: string;
  mindfullVideo2?: string;
}

const PDFPage: React.FC<PDFPageProps> = ({ sidebar, fileName, artwork, video, mindfullVideo1, mindfullVideo2 }) => {
  

  useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });
  }, []);
  

  const SidebarComponent = sidebar;

  const [pageWidth, setPageWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageWidth(window.innerWidth);

      const handleResize = () => {
          setPageWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  interface VideoProps {
    videoFile: string;
  }

  const Video: React.FC<VideoProps> = ({videoFile}) => {
    return (
      <video width={Math.floor(2/3 * pageWidth) } height="240" controls preload="none">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }

  return (
    <section className="bg-offwhite flex flex-col">
      <div className="grid grid-cols-3">
        <SidebarComponent artwork={artwork} />
        <div className="col-span-2 flex flex-col">
          {video?(<Video videoFile={video}></Video>):(<></>)}
          <Document file={fileName}>
            <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} width={ Math.floor(2/3 * pageWidth)} />
          </Document>
          {mindfullVideo1?(<Video videoFile={mindfullVideo1}></Video>):(<></>)}
          {mindfullVideo2?(<Video videoFile={mindfullVideo2}></Video>):(<></>)}
          </div>
      </div>
      
    </section>
  );
};

export default PDFPage;