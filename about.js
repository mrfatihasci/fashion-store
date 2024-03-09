document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});
const initApp = () => {
  setInterval(changeBanner, 10000);
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
  let t = bannerArray.length;
  if (i == t) {
    i = 0;
  }

  const bannerTranslateUp = [{ transform: "translateY(-35px) " }];
  const bannerTranslateDown = [
    { transform: "translateY(35px) " },
    { transform: "translateY(0px) " },
  ];
  const fastTiming = {
    duration: 250,
    iterations: 1,
  };
  const slowTiming = {
    duration: 250,
    iterations: 1,
  };

  const newspaper = document.querySelector("#banner");

  // Using onfinish event to add another animation end of the animation
  newspaper.animate(bannerTranslateUp, fastTiming).onfinish = () => {
    document.getElementById("banner").innerHTML = bannerArray[i];
    newspaper.animate(bannerTranslateDown, slowTiming);
    i += 1;
  };
};

// Add event listener for nav menu------------------------------------------------------------
const navMenuCollapsing = () => {
  const menuButton = document.querySelector("#menu-button");
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
  menuButton.addEventListener("click", toggleMenu);
};
/* const navMenuCollapsing = () => {
  const menuButton = document.querySelector("#menu-button");
  const menu = document.querySelector("#nav-ul");
  menuButton.addEventListener("click", () => {
    if (menu.classList.contains("flex")) {
      menu.classList.remove("flex");
    } else {
      menu.classList.add("flex");
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
    this.helpMenu.classList.remove("hidden");
    this.aboutMenu.classList.remove("hidden");
    this.socialMenu.classList.remove("hidden");
    this.otherMenu.classList.remove("hidden");
  },

  hideMenus() {
    this.helpMenu.classList.add("hidden");
    this.aboutMenu.classList.add("hidden");
    this.socialMenu.classList.add("hidden");
    this.otherMenu.classList.add("hidden");
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
    menu.classList.toggle("hidden");
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
