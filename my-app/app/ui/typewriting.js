import { useEffect } from "react";

export default function TypeWriting() {
  useEffect(() => {
    // Client-side JavaScript code

    const typewritingP = document.querySelector("#p--typewriting");
    const text =
      "setInterval for this typewriting effect is removed when completed, 5 event listeners for menuButton and footer list items are removed with only one left, the window resize event listener(in branch 'tailwindcss' only), which is basically used to add those removed event listeners when necessary. I'm not sure and did not compare the two cases if they were really necessary to remove. well we can discuss..";
    const textArray = text.split(" ");
    const textArrayLength = textArray.length;
    let x = 0;
    let typeWriterInterval;

    // Add typewriter effect function for the text of element to be added character by character(2letters at once)
    /*  function typeWriter() {
      if (x < text.length) {
        typewritingP.innerHTML = " ";
        typewritingP.innerHTML += text.charAt(x);
        x++;
      } else {
        clearInterval(typeWriterInterval);
        console.log("typewriter setInterval is inActive!");
      }
    } */

    // Add typewritter effect function for the text of element to be added word by word
    const typeWriter = () => {
      //typewritingP.classList.add("text-3xl");
      if (x < textArrayLength) {
        typewritingP.innerHTML = "";
        typewritingP.innerHTML += ( " " + textArray[x] ); // prettier-ignore
        x++;
      } else {
        clearInterval(typeWriterInterval);
        //typewritingP.classList.remove("text-3xl");
        typewritingP.innerHTML = text;
        console.log("typewriter setInterval is inActive!");
      }
    };
    typeWriterInterval = setInterval(typeWriter, 250);

    console.log("Running JavaScript on the client side");
  }, []);
  return (
    <p id="p--typewriting" className="block text-center text-2xl/loose md:w-1/2">
      Hey..
    </p>
  );
}
