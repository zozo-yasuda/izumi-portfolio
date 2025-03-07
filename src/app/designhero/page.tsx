"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { DESIGN_HERO } from "../globals";

export default function DesignHerosPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={DESIGN_HERO}
      fileName={"/pdfs/CarolynHawkins.pdf"}
      video={"./Videos/CarolynHawkins.mp4"}
    />
  )
}
