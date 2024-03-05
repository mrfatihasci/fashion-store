import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-DARKBG pb-2 pt-6 text-left text-2xl/loose text-LIGHTC sm:text-2xlsm">
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row md:flex-wrap md:items-start md:justify-around">
        <div>
          <h4 className="text-center font-bold" id="footer__help-button">
            Help and Support
            <span className="span--icon inline-block md:hidden">
              <i className="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__help" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="text-center">
              <a href="#">FAQ</a>
            </li>
            <li className="text-center">
              <a href="#">Size Guide</a>
            </li>
            <li className="text-center">
              <a href="#">Shipping Locations</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-center font-bold" id="footer__about-button">
            About Us
            <span className="span--icon inline-block md:hidden">
              <i className="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__about" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="text-center">
              <a href="./about" title="Lorem Fashion Store About Page">
                About Company
              </a>
            </li>
            <li className="text-center">
              <a href="./about" title="Lorem Fashion Store About Page">
                Company Location
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-center font-bold" id="footer__social-button">
            Social Media
            <span className="span--icon inline-block md:hidden">
              <i className="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__social" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on instagram">
                Instagram
                <span className="span--icon">
                  <i className="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li className="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on youtube">
                Youtube
                <span className="span--icon">
                  <i className="fab fa-youtube"></i>
                </span>
              </a>
            </li>
            <li className="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on twitter">
                Twitter
                <span className="span--icon">
                  <i className="fab fa-twitter"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h4 className="text-center font-bold" id="footer__other-button">
            Other
            <span className="span--icon inline-block md:hidden">
              <i className="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__other" className="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li className="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store Chat Page">
                Chat Box
                <span className="span--icon">
                  <i className="fas fa-comments"></i>
                </span>
              </a>
            </li>
            <li className="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store Chat Page">
                Email
                <span className="span--icon">
                  <i className="fas fa-mail-bulk"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <Image className="b-0 mb-0 ml-auto mr-auto mt-0 h-auto" src={"/vcss-blue.gif"} alt="Valif CSS!" width={88} height={31} priority title="worldwideweb cosorsium css" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </a>
      <p id="copyright" className="text-center">
        Copyright &copy;
        <span id="footer__year">2025</span>
        <span className="whitespace-nowrap" translate="no">
          Lorem Fashion Store
        </span>
      </p>
    </footer>
  );
}
