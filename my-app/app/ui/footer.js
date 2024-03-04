import Link from "next/link";


export default function Footer(){
    return(
         <footer class="bg-DARKBG pb-2 pt-6 text-left text-2xl/loose text-LIGHTC sm:text-2xlsm">
      <div class="flex flex-col flex-wrap items-center justify-center md:flex-row md:flex-wrap md:items-start md:justify-around">
        <div>
          <h4 class="text-center font-bold" id="footer__help-button">
            Help and Support
            <span class="span--icon inline-block md:hidden">
              <i class="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__help" class="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li class="text-center"><a href="#">FAQ</a></li>
            <li class="text-center"><a href="#">Size Guide</a></li>
            <li class="text-center"><a href="#">Shipping Locations</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-center font-bold" id="footer__about-button">
            About Us
            <span class="span--icon inline-block md:hidden">
              <i class="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__about" class="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li class="text-center">
              <a href="./about" title="Lorem Fashion Store About Page">About Company</a>
            </li>
            <li class="text-center">
              <a href="./about" title="Lorem Fashion Store About Page">Company Location</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-center font-bold" id="footer__social-button">
            Social Media
            <span class="span--icon inline-block md:hidden">
              <i class="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__social" class="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li class="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on instagram">
                Instagram
                <span class="span--icon">
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
            </li>
            <li class="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on youtube">
                Youtube
                <span class="span--icon"><i class="fab fa-youtube"></i></span>
              </a>
            </li>
            <li class="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store on twitter">
                Twitter
                <span class="span--icon"><i class="fab fa-twitter"></i></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center">
          <h4 class="text-center font-bold" id="footer__other-button">
            Other
            <span class="span--icon inline-block md:hidden">
              <i class="fas fa-angle-down fa-border"></i>
            </span>
          </h4>
          <ul id="footer__other" class="m-0 hidden list-none p-0 text-xl sm:text-xlsm md:block">
            <li class="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store Chat Page">
                Chat Box
                <span class="span--icon">
                  <i class="fas fa-comments"></i>
                </span>
              </a>
            </li>
            <li class="flex flex-row items-center justify-center">
              <a href="#" title="Lorem Fashion Store Chat Page">
                Email
                <span class="span--icon">
                  <i class="fas fa-mail-bulk"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img class="b-0 mt-0 mb-0 mr-auto ml-auto" width="88px" height="auto" src="images/vcss-blue.gif" alt="Valid CSS!" />
      </a>
      <p id="copyright" class="text-center">
        Copyright &copy;
        <span id="footer__year">2025</span>
        <span class="whitespace-nowrap" translate="no">Lorem Fashion Store</span>
      </p>
    </footer>
    );
}