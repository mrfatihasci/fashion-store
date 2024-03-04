import { Nunito } from "next/font/google";
import "./globals.css";
/* import { Analytics } from '@vercel/analytics/react'; */

const nunito = Nunito({subsets: ['latin']});
import Footer from "./ui/dashboard/footer";
import Header from "./ui/dashboard/header";
export const metadata = {
  title: "Lorem Fashion Store",
  description: "Products of Lorem Fashion Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
        </body>
     {/*  <Analytics mode={'production'} /> */}
    </html>
  );
}
