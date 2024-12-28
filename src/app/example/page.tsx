"use client";
import Sidebar from "../components/artsidebar";
import PDFPage from "../components/portfolioPages/pdfPage";
import { EXAMPLE } from "../globals";

export default function ExamplePage() {
  return PDFPage(Sidebar(EXAMPLE), EXAMPLE.pdf);
}
