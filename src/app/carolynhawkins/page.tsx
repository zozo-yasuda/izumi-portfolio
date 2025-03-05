"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { DESIGN_HEROS } from "../globals";

export default function DesignHerosPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={DESIGN_HEROS}
      fileName={"/pdfs/CarolynHawkins.pdf"}
    />
  )
}
