"use client";
import { usePathname } from "next/navigation";
import FooterText from "./footerText";

const Footer = () => {
  const exceptions = [
    "/contact",
    "/fauxflorida",
    "/example",
    "/dotndone",
    "/fetzottoswimwear",
  ];
  return (
    <div className="pt-6 bg-offwhite">
      {!exceptions.includes(usePathname()) && <FooterText />}
    </div>
  );
};
export default Footer;
