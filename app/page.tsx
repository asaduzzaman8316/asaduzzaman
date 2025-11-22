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
import { useEffect } from "react";
import TargetCursor from "./Animation/TargetCursor";
import Whatsapp from "@/components/Home/Whtasapp/Whatsapp";

export default function Home() {
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
    <div id="home" className="overflow-hidden ">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <Whatsapp />
      <Hero />
      <Services />
      <Project />
      <Resume />
      <Skills />
      <Blog />
      <Contact />
    </div>
  );
}
