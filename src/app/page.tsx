import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { PortfolioGrid } from "@/components/PortfolioGrid/PortfolioGrid";
import { Process } from "@/components/Process/Process";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { Services } from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <Process />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}