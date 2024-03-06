import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    //BANNER CODE--------------------------------------------------------------------
    console.log("Running BANNER JS Code on CS !");
    let i = 0;
    const bannerArray = ["Custom Tailored", "Free Shipping on Europe Orders over $10000", "5% Discount on Orders over $10000"];
    const changeBanner = () => {
      if (i === bannerArray.length) {
        i = 0;
      }
      document.getElementById("banner").innerHTML = bannerArray[i];
      i += 1;
      something();
    };
    function something() {
      const newspaperSpinning = [{ transform: "translateY(25px)" }, { transform: "translateY(-25px) rotateX(130deg)" }];
      const newspaperTiming = {
        duration: 50,
        iterations: 1,
      };
      const newspaper = document.querySelector("#banner");
      newspaper.animate(newspaperSpinning, newspaperTiming);
    }
    setInterval(changeBanner, 10000);
  }, []);
  return (
    <div className="bg-DARKBG pb-2 pt-2.5 font-nunito text-base text-LIGHTC sm:text-basesm">
      <p id="banner" className="text-center">
        5% Discount on Orders over $10000
      </p>
    </div>
  );
}
