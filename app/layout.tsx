
import type { Metadata } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
// import { dachi } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AIRO | ინდივიდუალური სამზარეულოს ავეჯი",
    template: "%s | AIRO",
  },
  description: "AIRO ქმნის ინდივიდუალურ სამზარეულოს ავეჯს — დიზაინიდან მონტაჟამდე.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ka">
      <body >
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
