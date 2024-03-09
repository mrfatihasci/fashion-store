import { useEffect } from "react";

export default function TypeWriting() {
  useEffect(() => {
    const typewritingP = document.querySelector("#p--typewriting");
    const text =
      "setInterval for this typewriting effect is removed when completed, 5 event listeners for menuButton and footer list items are removed with only one left, the window resize event listener(in branch 'tailwindcss' only), which is basically used to add those removed event listeners when necessary. I'm not sure and did not compare the two cases if they were really necessary to remove. well we can discuss..";
    const textArray = text.split(" ");
    const textArrayLength = textArray.length;

    let x = 0;
    const typeWriterInterval = setInterval(() => {
      if (x < textArrayLength) {
        typewritingP.innerHTML = textArray[x] + " "; // Display one word at a time
        x++;
      } else {
        clearInterval(typeWriterInterval);
        typewritingP.innerHTML = text;
        console.log("typewriter setInterval is inActive!");
      }
    }, 250);

    // Cleanup function to clear the interval on component unmount
    return () => clearInterval(typeWriterInterval);

    // Include variables used in the effect in the dependency array
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <p id="p--typewriting" className="block text-center text-2xl/loose md:w-1/2">
      Hey..
    </p>
  );
}
