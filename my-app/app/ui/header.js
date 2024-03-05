import { Cute_Font } from "next/font/google";
const cute = Cute_Font({ subsets: ["latin"], weight: "400" });

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-DARKBG pb-2 pt-2.5 font-nunito text-base text-LIGHTC sm:text-basesm">
        <p id="banner" className="text-center">
          5% Discount on Orders over $10000
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="flex-grow p-2 text-center font-cute text-5xl sm:text-5xlsm">
          <a href="./index.html" translate="no">
            Lorem Fashion Store
          </a>
        </h1>
        <div id="menu-button" className="relative justify-self-end md:hidden">
          <span className="span--icon absolute right-[0.8rem] top-[-0.6rem]">
            <i className="fas fa-bars text-black"></i>
          </span>
        </div>
      </div>
      <nav className="relative">
        <ul id="nav-ul" className="absolute right-0 hidden h-[60vh] w-[75vw] list-none flex-col items-center justify-evenly rounded-2xl border-2 border-DARKBG bg-DARKBG text-center text-2xl sm:text-2xlsm md:static md:flex md:h-auto md:w-full md:flex-row md:border-none md:bg-LIGHTBG">
          <li>
            <a className="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./coat">
              Coat
            </a>
          </li>
          <li>
            <a className="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./jacket">
              Jacket
            </a>
          </li>

          <li>
            <a className="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./pant">
              Pant
            </a>
          </li>
          <li>
            <a className="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./vest">
              Vest
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
