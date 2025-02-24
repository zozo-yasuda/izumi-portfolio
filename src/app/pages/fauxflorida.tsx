"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { FAUX_FLORIDA } from "../globals";

export default function FauxFloridaPage() {
  return PDFPage(Sidebar(FAUX_FLORIDA), FAUX_FLORIDA.pdf);
}
