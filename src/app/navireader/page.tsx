"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { NAVIREADER } from "../globals";

export default function NaviReaderPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={NAVIREADER}
      fileName={"/pdfs/NaviReader.pdf"}
    />
  )
}
