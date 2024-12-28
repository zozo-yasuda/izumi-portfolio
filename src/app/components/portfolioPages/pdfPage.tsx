"use client";
import { Document, pdfjs, Page } from "react-pdf";
import { ReactElement } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PDFPage = (sidebar: ReactElement, fileName: string) => {
  return (
    <section className="bg-offwhite flex flex-col sm:flex-row">
      {sidebar}
      <div className="h-screen w-full">
        <Document file={fileName}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default PDFPage;
