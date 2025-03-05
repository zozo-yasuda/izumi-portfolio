"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { MUSIC_THEORY_CAT } from "../globals";

export default function MusicTheoryCatPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={MUSIC_THEORY_CAT}
      fileName={"/pdfs/Remi.pdf"}
    />
  )
}
