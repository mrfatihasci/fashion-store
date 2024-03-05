document.addEventListener("readystatechange", event => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});
const initApp = () => {
  setInterval(changeBanner, 10000);
  typeWriterInterval = setInterval(typeWriter2, 150);
  document.getElementById("footer__year").innerHTML = new Date().getFullYear(); //prettier-ignore
  navMenuCollapsing();
  footerMenu.init();
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
const text ="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero iste perferendis architecto eos eligendi placeat mollitia vitae dolores qui!";
const textArray = text.split(" ");
const textArrayLength = textArray.length;
let x = 0;
let typeWriterInterval;
  // Add typewriter effect function for the text of element to be added character by character(2letters at once)
function typeWriter() {
  if (x < text.length) {
    typewritingP.innerHTML += text.charAt(x);
    x++;
  } else {
    clearInterval(typeWriterInterval);
    console.log("typewriter setInterval is inActive!");
  }
}
// Add typewritter effect function for the text of element to be added word by word
function typeWriter2() {
  if (x < textArrayLength) {
    typewritingP.innerHTML += ( " " + textArray[x] ); // prettier-ignore
    x++;
  } else {
    clearInterval(typeWriterInterval);
    console.log("typewriter setInterval is inActive!");
  }
}

// Add event listener for nav menu------------------------------------------------------------
const navMenuCollapsing = () => {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-ul");

  const toggleMenu = () => {
    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
    } else {
      menu.classList.add("menu-open");
    }
  };
  menuButton.addEventListener("click", toggleMenu);
};
/* const navMenuCollapsing = () => {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-ul");
  menuButton.addEventListener("click", () => {
    if (menu.classList.contains("menu-open")) {
      menu.classList.remove("menu-open");
    } else {
      menu.classList.add("menu-open");
    }
  });
}; */

// Add footer menu event listeners  -------------------------------------------------------
const footerMenu = {
  helpMenu: null,
  aboutMenu: null,
  socialMenu: null,
  otherMenu: null,
  mediaQuery: null,
  isScreenWidthLarge: false,
  helpButton: null,
  aboutButton: null,
  socialButton: null,
  otherButton: null,

  init() {
    this.helpMenu = document.getElementById("footer__help");
    this.aboutMenu = document.getElementById("footer__about");
    this.socialMenu = document.getElementById("footer__social");
    this.otherMenu = document.getElementById("footer__other");
    this.mediaQuery = window.matchMedia("(min-width: 768px)");
    this.isScreenWidthLarge = this.mediaQuery.matches;
    this.helpButton = document.getElementById("footer__help-button");
    this.aboutButton = document.getElementById("footer__about-button");
    this.socialButton = document.getElementById("footer__social-button");
    this.otherButton = document.getElementById("footer__other-button");

    // Bind event listeners
    this.helpEvent = this.helpEvent.bind(this);
    this.aboutEvent = this.aboutEvent.bind(this);
    this.socialEvent = this.socialEvent.bind(this);
    this.otherEvent = this.otherEvent.bind(this);
    this.addRemoveEventListeners = this.addRemoveEventListeners.bind(this);

    // Add initial event listeners and set initial state
    this.addRemoveEventListeners(this.isScreenWidthLarge);
    this.updateMenus();

    // Add resize event listener
    window.addEventListener("resize", () => this.handleResize());
  },

  handleResize() {
  const newIsScreenWidthLarge = this.mediaQuery.matches;
  
  if (newIsScreenWidthLarge !== this.isScreenWidthLarge) {
    this.isScreenWidthLarge = newIsScreenWidthLarge;
    this.updateMenus();
    this.addRemoveEventListeners(this.isScreenWidthLarge);
  }
},

  updateMenus() {
    if (this.isScreenWidthLarge) {
      this.showMenus();
    } else {
      this.hideMenus();
    }
  },

  showMenus() {
    this.helpMenu.classList.remove("offscreen");
    this.aboutMenu.classList.remove("offscreen");
    this.socialMenu.classList.remove("offscreen");
    this.otherMenu.classList.remove("offscreen");
    this.helpButton.classList.remove("blue");
    this.aboutButton.classList.remove("blue");
    this.socialButton.classList.remove("blue");
    this.otherButton.classList.remove("blue");
  },

  hideMenus() {
    this.helpMenu.classList.add("offscreen");
    this.aboutMenu.classList.add("offscreen");
    this.socialMenu.classList.add("offscreen");
    this.otherMenu.classList.add("offscreen");
  },

  helpEvent() {
    this.toggleButtonAndMenu(this.helpButton, this.helpMenu);
  },

  aboutEvent() {
    this.toggleButtonAndMenu(this.aboutButton, this.aboutMenu);
  },

  socialEvent() {
    this.toggleButtonAndMenu(this.socialButton, this.socialMenu);
  },

  otherEvent() {
    this.toggleButtonAndMenu(this.otherButton, this.otherMenu);
  },

  toggleButtonAndMenu(button, menu) {
    button.classList.toggle("blue");
    menu.classList.toggle("offscreen");
  },

  addRemoveEventListeners(addListeners) {
    if (!addListeners) {
      this.helpButton.addEventListener("click", this.helpEvent);
      this.aboutButton.addEventListener("click", this.aboutEvent);
      this.socialButton.addEventListener("click", this.socialEvent);
      this.otherButton.addEventListener("click", this.otherEvent);
      console.log("footer-menu event listeners are active");
    } else {
      this.helpButton.removeEventListener("click", this.helpEvent);
      this.aboutButton.removeEventListener("click", this.aboutEvent);
      this.socialButton.removeEventListener("click", this.socialEvent);
      this.otherButton.removeEventListener("click", this.otherEvent);
      console.log("footer-menu event listeners are inActive");
    }
  },
};