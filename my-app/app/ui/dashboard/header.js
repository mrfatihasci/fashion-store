

export default function Header() {
    return (
        <header>
      <div class="bg-DARKBG pb-2 pt-2.5 font-nunito text-base text-LIGHTC sm:text-basesm">
        <p id="banner" class="text-center">5% Discount on Orders over $10000</p>
      </div>
      <div class="flex items-center justify-between">
        <h1 class="flex-grow p-2 text-center font-cute text-5xl sm:text-5xlsm">
          <a href="./index.html" translate="no">Lorem Fashion Store</a>
        </h1>
        <div id="menu-button" class="relative justify-self-end md:hidden">
          <span class="span--icon absolute right-[0.8rem] top-[-0.6rem]">
            <i class="fas fa-bars text-black"></i>
          </span>
        </div>
      </div>
      <nav class="relative">
        <ul id="nav-ul" class="absolute right-0 hidden h-[60vh] w-[75vw] list-none flex-col items-center justify-evenly rounded-2xl border-2 border-DARKBG bg-DARKBG text-center text-2xl sm:text-2xlsm md:static md:flex md:h-auto md:w-full md:flex-row md:border-none md:bg-LIGHTBG">
          <li>
            <a class="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./products/coat.html">Coat</a>
          </li>
          <li>
            <a class="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./products/jacket.html">Jacket</a>
          </li>

          <li>
            <a class="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./products/pant.html">Pant</a>
          </li>
          <li>
            <a class="header__nav-a md:text-DARKC md:visited:text-DARKC md:hover:text-DARKC md:focus:text-DARKC" href="./products/vest.html">Vest</a>
          </li>
        </ul>
      </nav>
    </header>
    );
}