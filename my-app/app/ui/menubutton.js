import { useEffect } from "react";

export default function MenuButton() {
  useEffect(() => {
    const menuputton = document.querySelector("#menu-button");
    const menu = document.querySelector("#nav-ul");

    const toggleMenu = () => {
      if (menu.classList.contains("flex")) {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
      } else {
        menu.classList.add("flex");
        menu.classList.remove("hidden");
      }
    };
    menuputton.addEventListener("click", toggleMenu);
  }, []);
  return (
    <div id="menu-button" className="relative justify-self-end md:hidden">
      <span className="span--icon absolute right-[0.8rem] top-[-0.6rem]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      </span>
    </div>
  );
}
