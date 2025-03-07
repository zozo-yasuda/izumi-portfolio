"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { ELECTROPHYSICS } from "../globals";

export default function ElectrophysicsPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={ELECTROPHYSICS}
      fileName={"/pdfs/NaviReader.pdf"}
      video={"/Videos/Electrophysics.mp4"}
    />
  )
}
