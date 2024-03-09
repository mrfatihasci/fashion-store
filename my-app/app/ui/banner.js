import { useEffect } from "react";

export default function Banner() {
  let i = 0;
  const bannerArray = ["Custom Tailored", "Free Shipping on Europe Orders over $10000", "5% Discount on Orders over $10000"];

  const changeBanner = () => {
    const t = bannerArray.length;
    i = (i + 1) % t;

    const bannerTranslateUp = [{ transform: "translateY(-35px)" }];
    const bannerTranslateDown = [{ transform: "translateY(35px)" }, { transform: "translateY(0px)" }];
    const fastTiming = {
      duration: 250,
      iterations: 1,
    };
    const slowTiming = {
      duration: 250,
      iterations: 1,
    };

    const newspaper = document.querySelector("#banner");

    newspaper.getAnimations().forEach((animation) => animation.cancel());

    newspaper.animate(bannerTranslateUp, fastTiming).onfinish = () => {
      document.getElementById("banner").innerHTML = bannerArray[i];
      requestAnimationFrame(() => {
        newspaper.animate(bannerTranslateDown, slowTiming);
      });
    };

    setTimeout(() => {
      changeBanner();
    }, 10000);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      changeBanner();
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="bg-DARKBG pb-2 pt-2.5 font-nunito text-base text-LIGHTC sm:text-basesm">
      <p id="banner" className="text-center">
        5% Discount on Orders over $10000
      </p>
    </div>
  );
}
