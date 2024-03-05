export default function Coat() {
  return (
    <main className="flex flex-grow items-center justify-center pb-4 text-center">
      <h2></h2>
      <h3></h3>
      <div className="flex flex-grow flex-col flex-wrap items-center justify-center md:flex-row md:flex-nowrap">
        <figure className="w-full sm:w-11/12 md:ml-2 md:mr-2 md:w-1/2 md:pt-4 lg:ml-8 lg:mr-8 xl:ml-16 xl:mr-16">
          <img className="block h-auto w-full max-w-full" loading="lazy" width="1024px" height="1024px" src="../images/coat.jpg" alt="coat" title="non-existing coat by non-existing company, this site is for educational purposes only" />
          <figcaption className="text-center">https://pixabay.com/photos/fashion-male-beautiful-man-car-1399346/</figcaption>
        </figure>
        <p id="p--typewriting" className="block text-center text-2xl/loose md:w-1/2"></p>
      </div>
    </main>
  );
}
