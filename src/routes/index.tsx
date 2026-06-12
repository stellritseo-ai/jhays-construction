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
      { title: "Jhay's Construction — Residential & Commercial General Contractor in NJ" },
      { name: "description", content: "Jhay's Construction is a trusted residential & commercial general contractor serving New Jersey. Kitchen, bath, paving, additions and more." },
      { property: "og:title", content: "Jhay's Construction — NJ General Contractor" },
      { property: "og:description", content: "No job is too small or too big. Quality residential & commercial general contracting services in New Jersey." },
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
