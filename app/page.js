import Experts from "@/components/experts/Experts";
import Feature from "@/components/feature/Feature";
import Hero from "@/components/Hero/Hero";
import Join from "@/components/join/Join";
import LicenseSection from "@/components/license/LicenseSection";
import Testimonials from "@/components/testimonials/Testimonials";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Feature />
      <LicenseSection />
      <Testimonials />
      <Join />
      <Experts />
    </div>
  );
}
