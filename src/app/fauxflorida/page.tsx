"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { FAUX_FLORIDA } from "../globals";

export default function FauxFloridaPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={FAUX_FLORIDA}
      fileName={FAUX_FLORIDA.pdf}
    />
  );
}
