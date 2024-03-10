import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const bannerArray = ["Custom Tailored", "Free Shipping on Europe Orders over $10000", "5% Discount on Orders over $10000"];
    //const bannerArray = ["Banner Array Item #0.", "#1", "#2", "Custom Tailored.", "Free Shipping on Europe Orders over $1000.", "10% Discount for Any Order Today"];

    let i;
    const banner = document.querySelector("#banner");
    const bannerText = document.querySelector("#banner-text");
    const t = bannerArray.length;
    const bannerTranslateUp = [{ transform: "translateY(0px)" }, { transform: "translateY(-35px)" }];
    const bannerTranslateDown = [{ transform: "translateY(35px)" }, { transform: "translateY(0px)" }];
    const fastTiming = {
      duration: 250,
      iterations: 1,
    };
    const slowTiming = {
      duration: 450,
      iterations: 1,
    };

    function changeBanner() {
      banner.animate(bannerTranslateUp, fastTiming).onfinish = () => {
        i = (i + 1) % t;
        bannerText.innerHTML = bannerArray[i];
        banner.animate(bannerTranslateDown, slowTiming);
        sessionStorage.setItem("bannerIndex", i.toString());
      };
      setTimeout(() => {
        changeBanner();
      }, 10000);
    }

    if (typeof window !== "undefined") {
      banner.style.animation = "none";
      clearTimeout();
      i = parseInt(sessionStorage.getItem("bannerIndex")) || 0;
      bannerText.innerHTML = bannerArray[i];
      setTimeout(changeBanner, 10000);
    } else {
      i = 0;
      setTimeout(changeBanner, 10000);
    }

    const endDate = new Date("January 1, 2025");

    const setRemainingTime = () => {
      const currentTime = new Date();
      const remainingTime = endDate.getTime() - currentTime.getTime();
      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
      document.getElementById("banner-time").innerHTML = `2024 Discount: ${days}d ${hours}d, ${minutes}m, ${seconds}s`;
      setTimeout(() => {
        setRemainingTime();
      }, 1000);
    };
    setRemainingTime();
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <div className="  bg-DARKBG pb-2 pt-2.5 font-nunito text-base/4 text-LIGHTC sm:text-basesm">
      <p id="banner" className=" min-h-4 text-center text-base/4">
        <span id="banner-text" className="text-xl"></span>
        <span id="banner-time" className="block md:absolute md:right-0 md:inline"></span>
      </p>
    </div>
  );
}
