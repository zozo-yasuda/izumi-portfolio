"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { DOTNDONE } from "../globals";

export default function DotndonePage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={DOTNDONE}
      fileName={"/pdfs/DotnDone.pdf"}
    />
  )
}
