"use client";
import Image from "next/image";
import TypeWriting from "../ui/typewriting";
export default function Jacket() {
  return (
    <main className="flex flex-grow items-center justify-center pb-4 text-center">
      <h2></h2>
      <h3></h3>
      <div className="flex flex-grow flex-col flex-wrap items-center justify-center md:flex-row md:flex-nowrap">
        <figure className="w-full sm:w-11/12 md:ml-2 md:mr-2 md:w-1/2 md:pt-4 lg:ml-8 lg:mr-8 xl:ml-16 xl:mr-16">
          <Image className={"block h-auto w-full max-w-full"} src={"/jacket2.png"} alt="jacket" width={1119} height={1286} priority title="non-existing product by non-existing company, this site is for educational purposes only" sizes="(max-width: 576px) 100vw,(max-width: 768px) 90vw, 50vw" />

          <figcaption className="text-center">https://pixabay.com/photos/fashion-male-beautiful-man-car-1399346/</figcaption>
        </figure>

        <TypeWriting />
      </div>
    </main>
  );
}
