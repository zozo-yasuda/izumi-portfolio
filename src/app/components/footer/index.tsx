"use client";
import { usePathname } from 'next/navigation'
import FooterText from './footerText';

const Footer = ()=>
{
    const exceptions = ['/contact', '/fauxflorida'];
    return (
      <div>
        {!exceptions.includes(usePathname()) && <FooterText />}
      </div>
    );
}

 export default Footer;