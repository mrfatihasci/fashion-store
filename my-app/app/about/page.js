export default function About() {
  return (
    <main className="flex flex-grow items-center justify-center text-center">
      <h2></h2>
      <h3></h3>
      <ul className="text-2xl">
        <li>
          <a href="tel:+1234567890">Call us on +123456789</a>.
        </li>
        <li>
          <a href="mailto:random@random.com">Mail us at random@randon.com</a>
        </li>
        <li className="flex flex-col items-center">
          <iframe
            width="425"
            height="350"
            title="our location on map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=27.16240078210831%2C38.40236106790815%2C27.165850102901462%2C38.40402369993633&amp;layer=mapnik"
            className="border-[1px] border-black"
          ></iframe>
          <br />
          <small>
            <a href="https://www.openstreetmap.org/#map=19/38.40319/27.16413">
              View Larger Map
            </a>
          </small>
        </li>
        <li>
          <address>
            ....
            <br />
            Buca/Izmir
            <br />
            35370
          </address>
        </li>
      </ul>
    </main>
  );
}
