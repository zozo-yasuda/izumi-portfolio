"use client";
//import { Document, pdfjs, Page } from "react-pdf";
import Artwork from "../models/Artwork";

import React from "react";
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
  artwork : Artwork
}

interface PDFPageProps {
  sidebar: React.FC<SideBarProps>;
  fileName: string;
  artwork: Artwork;
}

const PDFPage:React.FC<PDFPageProps> = ({ sidebar, fileName, artwork }) => {
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
