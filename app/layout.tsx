import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Share/Navbar/Nav";
import Footer from "@/components/Share/Footer/Footer";
import ScrollToTop from "@/components/Share/ScrollToTop/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next"

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


export const metadata: Metadata = {
  title: "Asaduzzaman Portfolio",
  description: "Hi! i am Asaduzzaman a Front-End Web Devloper.",
  keywords: ['asaduzzaman', 'asad', 'asaduzzaman8316', 'asad portfolio', 'portfolio', 'web devloper', 'front-end devloper', 'mern devloper', 'best devloper', 'asaduzzaman-dev.vercel.app', 'asaduzzaman-dev', 'asaduzzaman.dev', 'asaduzzamandev', 'asaduzzamancse'],

  robots:{
    index:true,
    follow:true,
    nocache:false,
    googleBot:{
      index:true,
      follow:true,
      'max-image-preview': 'large',
      "max-snippet":-1,
    }
  },
  alternates:{
    canonical: 'http://asaduzzaman-dev.vercel.app/'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="qivNvac31xAS1b7IeN183t0fKFja4DILfO07pN-U-1A" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      </head>
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <Nav />
        {children}
        <Footer />
        <ScrollToTop />
        <SpeedInsights />
      </body>
    </html>
  );
}
