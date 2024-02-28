document.addEventListener("readystatechange", event => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});
const initApp = () => {
  setInterval(changeBanner, 10000);
  typeWriterInterval();
  document.getElementById("footer__year").innerHTML = new Date().getFullYear(); //prettier-ignore
  navMenuCollapsing();
  footerUlCollapsing();
};

// BANNER ----------------------------------------------------------------
let i = 0;
const bannerArray = [
  "Custom Tailored",
  "Free Shipping on Europe Orders over $10000",
  "5% Discount on Orders over $10000",
];
const changeBanner = () => {
  if (i === bannerArray.length) {
    i = 0;
  }
  document.getElementById("banner").innerHTML = bannerArray[i];
  i += 1;
  something();
};
function something() {
  const newspaperSpinning = [
    { transform: "translateY(25px)" },
    { transform: "translateY(-25px) rotateX(130deg)" },
  ];
  const newspaperTiming = {
    duration: 150,
    iterations: 1,
  };
  const newspaper = document.querySelector("#banner");
  newspaper.animate(newspaperSpinning, newspaperTiming);
}

//type writing code--------------------------------------------------------------
const typewritingP = document.querySelector("#p--typewriting");
const text =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iste perferendis architecto eos eligendi placeat mollitia vitae dolores qui!";
const textArray = text.split(" ");
const textArrayLength = textArray.length;
let x = 0;
var typeWriterInterval = () => {
  setInterval(typeWriter, 150);
};
function typeWriter2() {
  // Typewriter effect function for the text of element to be added character by character
  if (x < text.length) {
    typewritingP.innerHTML += text.charAt(x);
    x++;
    //    console.log("setInterval is Active!");
  } else {
    clearInterval(typeWriterInterval);
    console.log("setInterval is inActive!");
  }
}
function typeWriter() {
  //Typewritter effect function for the text of element to be added word by word
  if (x <= textArrayLength - 1) {
    typewritingP.innerText += ( " " + textArray[x] ); // prettier-ignore
    x++;
    //    console.log("setInterval is Active!");
  } else {
    clearInterval(typeWriterInterval);
    console.log("setInterval is inActive!");
  }
}

//nav-menu event listener------------------------------------------------------------
const navMenuCollapsing = () => {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-ul");
  menuButton.addEventListener("click", () => {
    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
    } else {
      menu.classList.add("menu-open");
    }
  });
};

//footer unorder list collapsing events------------------------------------------------
const footerUlCollapsing = () => {
  const helpMenu = document.getElementById("footer__help");
  const aboutMenu = document.getElementById("footer__about");
  const socialMenu = document.getElementById("footer__social");
  const otherMenu = document.getElementById("footer__other");
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (mediaQuery.matches) {
    helpMenu.classList.remove("offscreen");
    aboutMenu.classList.remove("offscreen");
    socialMenu.classList.remove("offscreen");
    otherMenu.classList.remove("offscreen");
  } else {
    const helpButton = document.getElementById("footer__help-button");
    helpButton.addEventListener("click", event => {
      if (helpButton.classList.contains("blue")) {
        helpButton.classList.remove("blue");
        helpMenu.classList.add("offscreen");
      } else {
        helpButton.classList.add("blue");
        helpMenu.classList.remove("offscreen");
      }
    });
    const aboutButton = document.getElementById("footer__about-button");
    aboutButton.addEventListener("click", event => {
      if (aboutButton.classList.contains("blue")) {
        aboutButton.classList.remove("blue");
        aboutMenu.classList.add("offscreen");
      } else {
        aboutButton.classList.add("blue");
        aboutMenu.classList.remove("offscreen");
      }
    });
    const socialButton = document.getElementById("footer__social-button");
    socialButton.addEventListener("click", event => {
      if (socialButton.classList.contains("blue")) {
        socialButton.classList.remove("blue");
        socialMenu.classList.add("offscreen");
      } else {
        socialButton.classList.add("blue");
        socialMenu.classList.remove("offscreen");
      }
    });
    const otherButton = document.getElementById("footer__other-button");
    otherButton.addEventListener("click", event => {
      if (otherButton.classList.contains("blue")) {
        otherButton.classList.remove("blue");
        otherMenu.classList.add("offscreen");
      } else {
        otherButton.classList.add("blue");
        otherMenu.classList.remove("offscreen");
      }
    });
  }
};
