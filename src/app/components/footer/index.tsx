"use client";
import { usePathname } from 'next/navigation'
import FooterText from './footerText';

const Footer = ()=>
{
    return (
      <div className='bg-offwhite'>
        {usePathname()!== '/contact' && <FooterText />}
      </div>
    );
}

 export default Footer;