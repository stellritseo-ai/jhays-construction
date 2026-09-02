import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "General Contractor in Howell, NJ | Jhay's Construction" },
      { name: "description", content: "Jhay's Construction is Howell Township's trusted general contractor for kitchen remodeling, bathroom renovation, basement finishing, home additions, patio installation, and driveway paving. Serving Howell, NJ and surrounding areas. Call (732) 673-1569." },
      { property: "og:title", content: "General Contractor in Howell, NJ | Jhay's Construction" },
      { property: "og:description", content: "Trusted residential and commercial general contractor in Howell Township, NJ. Kitchen remodeling, bathroom renovation, basement finishing, home additions, patios, and driveway paving. Free estimates." },
      { property: "og:url", content: "https://www.jhaysconstruction.com/" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />
      <Hero />
      <Welcome />
      <CTAStrip />
      <Services />
      <Stats />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Contact />
      <AreasCovered />
      <Footer />
    </div>
  );
}
