import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import roomAdditionImg from "@/assets/room-addition.jpeg";
import expectImg from "@/assets/room-addition.jpeg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Home,
  Layers,
  Ruler,
  DoorOpen,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/services/home-additions")({
  head: () => ({
    meta: [
      { title: "Home Additions Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Expand your living space with custom home additions, master suites, second story expansions, and in-law suites in Howell, NJ. Licensed NJ builder. Call (732) 673-1569.",
      },
      { property: "og:title", content: "Home Additions Howell NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Custom home additions, second story builds, master bedroom suites, and family room expansions in Howell Township, NJ by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/home-additions" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Home Additions Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Expert home addition and second-story expansion general contractor in Howell Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/home-additions" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/home-additions#service",
          "name": "Home Addition Services",
          "serviceType": "Home Addition",
          "provider": {
            "@type": "GeneralContractor",
            "@id": "https://www.jhaysconstruction.com/#business",
            "name": "Jhay's Construction",
            "telephone": "+17326731569",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "735 Hulses Corner Rd",
              "addressLocality": "Howell Township",
              "addressRegion": "NJ",
              "postalCode": "07731",
              "addressCountry": "US"
            }
          },
          "areaServed": [
            { "@type": "City", "name": "Howell Township, NJ" },
            { "@type": "City", "name": "Freehold, NJ" },
            { "@type": "City", "name": "Jackson Township, NJ" },
            { "@type": "City", "name": "Brick Township, NJ" },
            { "@type": "City", "name": "Lakewood, NJ" }
          ],
          "description": "Custom home additions in Howell Township, NJ: master suite additions, second-story expansions, family room extensions, in-law suites, sunrooms, and structural framing."
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jhaysconstruction.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.jhaysconstruction.com/services" },
            { "@type": "ListItem", "position": 3, "name": "Home Additions", "item": "https://www.jhaysconstruction.com/services/home-additions" }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does a home addition take to build in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most single-story room additions or master suite bump-outs take between 8 to 14 weeks of active construction once Howell Township building permits are approved. Full second-story additions typically require 14 to 20 weeks."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle the architectural drawings and building permits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Jhay's Construction coordinates architectural plans, structural engineering calculations, and all Howell Township zoning, building, electrical, and plumbing permit submissions."
              }
            },
            {
              "@type": "Question",
              "name": "Will our new addition match our existing home's exterior?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Seamless architectural integration is our specialty. We meticulously match your existing roof pitch, siding color and profile, window grids, and trim details so the addition looks original to the home."
              }
            },
            {
              "@type": "Question",
              "name": "Can we stay in our home while the addition is built?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In the majority of ground-level room additions, homeowners can comfortably stay in their homes. We construct temporary sealed dust barriers between the existing living area and the new addition until the exterior envelope is fully weatherproofed."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: HomeAdditionsPage,
});

const benefits = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Master Bedroom Suites",
    desc: "Spacious master suites featuring walk-in closets, vaulted ceilings, and luxury en-suite spa bathrooms without moving from your neighborhood.",
  },
  {
    icon: <DoorOpen className="w-6 h-6" />,
    title: "Family Room Expansions",
    desc: "Main-floor bump-outs expanding your living room, dining room, or eat-in kitchen with continuous open floor plans.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Second-Story Additions",
    desc: "Double your home's usable square footage by building upwards. Engineered foundation checks, joist reinforcements, and roof framing.",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Four-Season Sunrooms",
    desc: "Energy-efficient insulated sunrooms with thermal break windows, mini-split climate control, and panoramic yard views.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "In-Law Suites & ADUs",
    desc: "Private multi-generational living suites equipped with dedicated accessible bathrooms, separate entrances, and kitchenette areas.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Engineered Framing & Code Compliance",
    desc: "Poured concrete frost-depth foundations, engineered LVL headers, Hurricane tie-downs, and full New Jersey building code compliance.",
  },
];

const steps = [
  { num: "01", title: "Feasibility Consultation", desc: "We evaluate your Howell property's setbacks, zoning limits, lot coverage, and foundation structure to plan what is possible." },
  { num: "02", title: "Architectural & Engineering Plans", desc: "Detailed blueprints and load calculations are developed and submitted to the Howell Township building department." },
  { num: "03", title: "Excavation & Foundation", desc: "We pour reinforced concrete footings, block foundation walls, or concrete slabs tied into the existing structure." },
  { num: "04", title: "Structural Framing & Shell", desc: "Wood framing, roof trusses, sheathing, weatherproofing wrap, premium windows, and roofing create a watertight envelope." },
  { num: "05", title: "Trades, Finishes & Final C/O", desc: "Electrical, plumbing, insulation, drywall, flooring, and exterior matching siding completed for Certificate of Occupancy sign-off." },
];

const faqs = [
  {
    q: "How long does a home addition take to build in Howell, NJ?",
    a: "Most single-story room additions or master suite bump-outs take between 8 to 14 weeks of active construction once Howell Township building permits are approved. Full second-story additions typically require 14 to 20 weeks.",
  },
  {
    q: "Do you handle the architectural drawings and building permits?",
    a: "Yes. Jhay's Construction coordinates architectural plans, structural engineering calculations, and all Howell Township zoning, building, electrical, and plumbing permit submissions.",
  },
  {
    q: "Will our new addition match our existing home's exterior?",
    a: "Seamless architectural integration is our specialty. We meticulously match your existing roof pitch, siding color and profile, window grids, and trim details so the addition looks original to the home.",
  },
  {
    q: "Can we stay in our home while the addition is built?",
    a: "In the majority of ground-level room additions, homeowners can comfortably stay in their homes. We construct temporary sealed dust barriers between the existing living area and the new addition until the exterior envelope is fully weatherproofed.",
  },
];

function HomeAdditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${roomAdditionImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Home Additions</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Home Additions <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Need more living space? We design and build seamless room additions, luxury master suites, second-story expansions, and family room extensions that enhance your lifestyle and home value.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:7326731569"
              className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-sm tracking-wide bg-white text-gray-800 shadow-xl hover:bg-gray-50 transition-all"
            >
              Call (732) 673-1569
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Location Banner */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 text-center">
          <div>
            <div className="text-sm text-gray-400">Serving New Jersey Homeowners In</div>
            <div className="text-lg font-bold text-white">Howell Township, Freehold, Jackson &amp; Brick</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Permits &amp; Code</div>
            <div className="text-lg font-bold text-white">Turnkey Permit Filing &amp; Inspection Management</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Consultations</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Custom Space Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Expert Home Addition Services in Howell, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From foundation excavation and timber framing to fine architectural millwork, our in-house craftsmen manage your expansion from concept to certificate of occupancy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="group p-8 rounded-2xl border border-gray-150 hover:border-green-300 hover:shadow-lg transition-all duration-300 bg-white hover:bg-green-50/20">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform" style={{ background: "#1a7c1a" }}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">From Blueprints to Build</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our 5-Stage Home Addition Process
            </h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-green-200" />
            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step) => (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-extrabold text-lg mb-4 z-10 shadow-lg" style={{ background: "#1a7c1a" }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{step.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Seamless Integration</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Designed to Look Like Part of the Original Home
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nothing looks worse than an addition that feels tacked onto a house. Jhay's Construction works meticulously to blend rooflines, foundation finishes, siding, and interior ceiling heights seamlessly.
              </p>
              <ul className="space-y-4">
                {[
                  "Architectural plans prepared to Howell Township zoning setback requirements",
                  "Deep poured concrete footings below New Jersey frost line",
                  "Engineered floor joists and LVL ridge beams for long open spans",
                  "Air-tight weatherproofing, thermal insulation, and efficient HVAC integration",
                  "Dedicated lead carpenter on-site ensuring cleanliness and craftsmanship",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={expectImg}
                alt="Framing and home addition project in Howell NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Full Permit Management</div>
                    <div className="text-xs text-gray-500">We handle all township zoning &amp; inspections</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links: Related Services & Areas */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-[#008000]" /> Related Remodeling Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/services/kitchen-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Kitchen Expansions &amp; Remodeling
                  </a>
                </li>
                <li>
                  <a href="/services/bathroom-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Master En-Suite Bathroom Additions
                  </a>
                </li>
                <li>
                  <a href="/services/basement-finishing" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Basement Finishing &amp; Lower-Level Suites
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Structural Framing &amp; Additions Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Home Addition Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ (07731)
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Home Expansions
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Home Additions
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/lakewood-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Lakewood, NJ Multi-Generational Additions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Common Inquiries</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Home Addition FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-green-700 font-extrabold shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Expand Your Home?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Speak with an experienced NJ addition builder about feasibility, layouts, and estimated budgets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:7326731569"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-lg text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              Call (732) 673-1569
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
