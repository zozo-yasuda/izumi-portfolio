"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { FETZ_OTTO_SWIMWEAR } from "../globals";

export default function FetzOttoSwimWearPage() {
  return PDFPage(Sidebar(FETZ_OTTO_SWIMWEAR), FETZ_OTTO_SWIMWEAR.pdf);
}