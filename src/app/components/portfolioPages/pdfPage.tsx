"use client";
import Artwork from "../models/Artwork";
import React, { useEffect } from "react";
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
}

const PDFPage: React.FC<PDFPageProps> = ({ sidebar, fileName, artwork }) => {
  useEffect(() => {
    import("react-pdf").then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });
  }, []);

  const SidebarComponent = sidebar;

  return (
    <section className="bg-offwhite flex flex-col sm:flex-row">
      <SidebarComponent artwork={artwork} />
      <div className="h-screen w-full">
        <Document file={fileName}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default PDFPage;