'use client'
import Blog from "@/components/Home/Blog/Blog";
import Contact from "@/components/Home/Contact/Contact";
import Hero from "@/components/Home/Hero/Hero";
import Project from "@/components/Home/Project/Project";
import Resume from "@/components/Home/Resume/Resume";
import Services from "@/components/Home/Services/Services";
import Skills from "@/components/Home/Skills/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Whatsapp from "@/components/Home/Whtasapp/Whatsapp";
import Cursor from "./Animation/Cursor";
import IntroAnimation from "./Animation/IntroAnimation";

export default function Home() {
  const [introFinish, setIntrFinish] = useState(false)
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: false,
        anchorPlacement: 'bottom-top'
      })
    }
    initAOS()
  }, [])
  return (

    <main>
      {!introFinish && <IntroAnimation finish={() => setIntrFinish(true)} />}
      {introFinish && (

        <div id="home" className=" relative overflow-x-clip min-h-screen">

          <Cursor />
          <Whatsapp />
          <Hero />
          <Services />
          <Project />
          <Resume />
          <Skills />
          <Blog />
          <Contact />
        </div>
      )}
    </main>
  );
}
