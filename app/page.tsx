import Hero from "@/components/Home/Hero/Hero";
import Resume from "@/components/Home/Resume/Resume";
import Services from "@/components/Home/Services/Services";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <Hero />
      <Services />
      <Resume />
    </div>
  );
}
