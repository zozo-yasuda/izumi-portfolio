"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { FETZ_OTTO_SWIMWEAR } from "../globals";

export default function FetzOttoSwimWearPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={FETZ_OTTO_SWIMWEAR}
      fileName={"/pdfs/FetzOtto (1).pdf"}
    />
  )
}
