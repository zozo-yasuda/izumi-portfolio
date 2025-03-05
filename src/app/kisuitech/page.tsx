"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { KISUI_TECH_FLYER } from "../globals";

export default function KisuiTechFlyerPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={KISUI_TECH_FLYER}
      fileName={"/pdfs/KisuiTech.pdf"}
    />
  )
}
