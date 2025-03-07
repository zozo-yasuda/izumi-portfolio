"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { MINDFULL } from "../globals";

export default function MindfullPage() {
  return (
    <PDFPage
      sidebar={Sidebar}
      artwork={MINDFULL}
      fileName={"/pdfs/Mindfull.pdf"}
      mindfullVideo1={"/Videos/Motion_Demo_1"}
      mindfullVideo2={"/Videos/Motion_Demo_2"}
    />
  )
}
