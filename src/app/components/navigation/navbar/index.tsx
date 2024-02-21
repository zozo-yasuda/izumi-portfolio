const React = require("react").default;
const Link = require("next/link").default;
const Logo = require("./Logo").default;

const Navbar = () => {
  return (
    <nav className="bg-offwhite shadow sticky w-full z-50 top-0 start-0">
      <div className="relative max-w-screen-xl container flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Logo />
        <div
          className=" text-lime-900 text-base font-sans uppercase items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3">
                <p>Work</p>
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="#footer" className="block py-2 px-3">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
