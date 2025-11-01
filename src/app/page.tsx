import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Toolstack from "@/components/Toolstack";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <Toolstack />
      <Testimonials />
      <Contact />
    </main>
  );
}
