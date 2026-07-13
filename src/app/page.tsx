import { Cta } from "@/components/Cta/Cta";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Navbar } from "@/components/Navbar/Navbar";
import { PortfolioGrid } from "@/components/PortfolioGrid/PortfolioGrid";
import { Process } from "@/components/Process/Process";
import { ScrollToTop } from "@/components/ScrollToTop/ScrollToTop";
import { Services } from "@/components/Services/Services";
import { Blog } from "@/components/Blog/Blog";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Webentwicklung, UI & UX in München",
  description:
    "Zemax Digital entwickelt schnelle, hochwertige Websites und digitale Erlebnisse für Unternehmen in München – mit Webentwicklung, UI Design und UX Design.",
  path: "/",
  keywords: [
    "Webentwicklung München",
    "UI UX Agentur München",
    "Next.js Entwickler München",
    "professionelle Website München"
  ]
});

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <PortfolioGrid />
        <Blog />
        <Process />
        <Testimonials />
        <Cta />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}