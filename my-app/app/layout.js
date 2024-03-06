import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"], weight: "400", variable: "--font-nunito" });
/* import { Grape_Nuts } from "next/font/google"; */
import "./globals.css";

/* const capriola = Capriola({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-capriola",
}); */

/* import { Analytics } from '@vercel/analytics/react'; */
import Footer from "./ui/footer";
import Header from "./ui/header";

export const metadata = {
  title: "Lorem Fashion Store",
  description: "Products of Lorem Fashion Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen max-w-full flex-col overflow-y-scroll bg-LIGHTBG text-xl text-DARKC">
        <Header />
        {children}
        <Footer />
      </body>
      {/*  <Analytics mode={'production'} /> */}
    </html>
  );
}
