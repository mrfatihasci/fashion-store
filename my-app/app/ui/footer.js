"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import FooterButton from "./footerbutton";
const Footer = React.memo(() => {
  return (
    <footer className=" bg-DARKBG pb-2 pt-6 text-left text-2xl/loose text-LIGHTC sm:text-2xlsm">
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:flex-wrap md:items-start md:justify-around">
        <div>
          <h4 className="flex items-center justify-center text-center font-bold" id="footer__help-button">
            Help and Support
            <span className="span--icon inline-block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
              </svg>
            </span>
          </h4>
          <ul id="footer__help" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="text-center">
              <Link href="#">FAQ</Link>
            </li>
            <li className="text-center">
              <Link href="#">Size Guide</Link>
            </li>
            <li className="text-center">
              <Link href="#">Shipping Locations</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center justify-center text-center font-bold" id="footer__about-button">
            About Us
            <span className="span--icon inline-block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
              </svg>
            </span>
          </h4>
          <ul id="footer__about" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="text-center">
              <Link href="./about" title="Lorem Fashion Store About Page">
                About Company
              </Link>
            </li>
            <li className="text-center">
              <Link href="./about" title="Lorem Fashion Store About Page">
                Company Location
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="flex items-center justify-center text-center font-bold" id="footer__social-button">
            Social Media
            <span className="span--icon inline-block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
              </svg>
            </span>
          </h4>
          <ul id="footer__social" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="flex flex-row items-center justify-center">
              <Link href="#" title="Lorem Fashion Store on instagram">
                Instagram
                <span className="span--icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </Link>
            </li>
            <li className="flex flex-row items-center justify-center">
              <Link href="#" title="Lorem Fashion Store on youtube">
                Youtube
                <span className="span--icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </Link>
            </li>
            <li className="flex flex-row items-center justify-center">
              <Link href="#" title="Lorem Fashion Store on twitter">
                Twitter
                <span className="span--icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="flex items-center text-center font-bold" id="footer__other-button">
            Other
            <span className="span--icon inline-block md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
              </svg>
            </span>
            <FooterButton />
          </h4>
          <ul id="footer__other" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="flex flex-row items-center justify-center">
              <Link href="#" title="Lorem Fashion Store Chat Page">
                Chat Box
                <span className="span--icon">
                  <i className="fas fa-comments"></i>
                </span>
              </Link>
            </li>
            <li className="flex flex-row items-center justify-center">
              <Link href="#" title="Lorem Fashion Store Chat Page">
                Email
                <span className="span--icon">
                  <i className="fas fa-mail-bulk"></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link href="http://jigsaw.w3.org/css-validator/check/referer">
        <Image className="b-0 mb-0 ml-auto mr-auto mt-0 h-auto w-[88px]" src={"/vcss-blue.gif"} alt="Valif CSS!" width={88} height={31} priority={false} title="worldwideweb cosorsium css" />
      </Link>
      <p id="copyright" className="text-center">
        Copyright &copy;
        <span id="footer__year">2025</span>
        <span className="whitespace-nowrap" translate="no">
          Lorem Fashion Store
        </span>
      </p>
    </footer>
  );
});
export default Footer;
