import { useEffect } from "react";

export default function FooterButton() {
  useEffect(() => {
    const helpMenu = document.getElementById("footer__help");
    const aboutMenu = document.getElementById("footer__about");
    const socialMenu = document.getElementById("footer__social");
    const otherMenu = document.getElementById("footer__other");
    const helpButton = document.getElementById("footer__help-button");
    const aboutButton = document.getElementById("footer__about-button");
    const socialButton = document.getElementById("footer__social-button");
    const otherButton = document.getElementById("footer__other-button");
    const helpEvent = () => {
      if (helpMenu.classList.contains("hidden")) {
        helpMenu.classList.remove("hidden");
      } else {
        helpMenu.classList.add("hidden");
      }
    };
    const aboutEvent = () => {
      if (aboutMenu.classList.contains("hidden")) {
        aboutMenu.classList.remove("hidden");
      } else {
        aboutMenu.classList.add("hidden");
      }
    };
    const socialEvent = () => {
      if (socialMenu.classList.contains("hidden")) {
        socialMenu.classList.remove("hidden");
      } else {
        socialMenu.classList.add("hidden");
      }
    };
    const otherEvent = () => {
      if (otherMenu.classList.contains("hidden")) {
        otherMenu.classList.remove("hidden");
      } else {
        otherMenu.classList.add("hidden");
      }
    };
    helpButton.addEventListener("click", helpEvent);
    aboutButton.addEventListener("click", aboutEvent);
    socialButton.addEventListener("click", socialEvent);
    otherButton.addEventListener("click", otherEvent);
  }, []);
}
