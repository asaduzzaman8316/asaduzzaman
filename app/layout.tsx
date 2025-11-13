import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Share/Navbar/Nav";
import Footer from "@/components/Share/Footer/Footer";
import ScrollToTop from "@/components/Share/ScrollToTop/ScrollToTop";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Asaduzzaman | Next.js",
  description: "Asaduzzaman portfolio , asaduzzaman8316",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <Nav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
