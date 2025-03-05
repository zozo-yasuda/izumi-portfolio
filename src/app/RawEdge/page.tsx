"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { RAW_EDGE } from "../globals";

export default function DotndonePage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={RAW_EDGE}
      fileName={"/pdfs/RawEdge.pdf"}
    />
  )
}
