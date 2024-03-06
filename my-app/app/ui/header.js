"use client";
import Link from "next/link";
import React from "react";
import { Cute_Font } from "next/font/google";
const cute = Cute_Font({ subsets: ["latin"], weight: "400" });
import Banner from "./banner";
import MenuButton from "./menubutton";

const Header = React.memo(() => {
  return (
    <header>
      <Banner />
      <div className="flex items-center justify-between">
        <h1 className="flex-grow p-2 text-center font-cute text-5xl sm:text-5xlsm">
          <Link href="./" translate="no">
            Lorem Fashion Store
          </Link>
        </h1>
        <MenuButton />
      </div>
      <nav className="relative">
        <ul id="nav-ul" className="absolute right-0 hidden h-[60vh] w-[75vw] list-none flex-col items-center justify-evenly rounded-2xl border-2 border-DARKBG bg-DARKBG text-center text-2xl sm:text-2xlsm md:static md:flex md:h-auto md:w-full md:flex-row md:border-none md:bg-LIGHTBG">
          <li>
            <Link className="header__nav-a text-LIGHTC md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./coat">
              Coat
            </Link>
          </li>
          <li>
            <Link className="header__nav-a text-LIGHTC md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./jacket">
              Jacket
            </Link>
          </li>

          <li>
            <Link className="header__nav-a text-LIGHTC md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./pant">
              Pant
            </Link>
          </li>
          <li>
            <Link className="header__nav-a text-LIGHTC md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./vest">
              Vest
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
export default Header;
