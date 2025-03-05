"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { SOLUNA } from "../globals";

export default function SolulnaPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={SOLUNA}
      fileName={"/pdfs/Soluna.pdf"}
    />
  )
}
