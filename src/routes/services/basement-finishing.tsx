import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import basementImg from "@/assets/basement.jpg";
import expectImg from "@/assets/basement.jpg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Layers,
  Lightbulb,
  Thermometer,
  Film,
  Clock,
  MapPin,
  ChevronRight,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/services/basement-finishing")({
  head: () => ({
    meta: [
      { title: "Basement Finishing Howell NJ | Basement Remodeling Contractor Monmouth County" },
      {
        name: "description",
        content:
          "Transform your basement with Howell's trusted basement remodeling contractor serving Monmouth County, NJ. Home theaters, guest suites, wet bars & moisture control. Call (732) 673-1569.",
      },
      { property: "og:title", content: "Basement Finishing Howell NJ | Basement Remodeling Contractor Monmouth County" },
      {
        property: "og:description",
        content:
          "Professional basement finishing and remodeling in Howell Township and Monmouth County, NJ. Custom home theaters, guest suites, gyms, and wet bars by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/basement-finishing" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Basement Finishing Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Turn your raw basement into livable square footage with Howell Township's trusted remodeling contractor." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/basement-finishing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/basement-finishing#service",
          "name": "Basement Finishing Services",
          "serviceType": "Basement Finishing",
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
          "description": "Professional basement finishing services in Howell Township, NJ: moisture vapor barriers, insulation, drywall, recessed lighting, wet bars, home theaters, and bathroom additions."
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
            { "@type": "ListItem", "position": 3, "name": "Basement Finishing", "item": "https://www.jhaysconstruction.com/services/basement-finishing" }
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
              "name": "How much does it cost to finish a basement in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Basement finishing in Howell Township typically ranges from $45 to $85 per square foot depending on finishes, bathroom additions, egress window requirements, and wet bar installations. We provide comprehensive, itemized estimates."
              }
            },
            {
              "@type": "Question",
              "name": "Do you install basement waterproofing before finishing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we evaluate basement moisture levels prior to framing. We install commercial vapor barriers, closed-cell foam insulation, and can coordinate interior perimeter drain or sump pump systems before installing drywall."
              }
            },
            {
              "@type": "Question",
              "name": "Can I legally add a bedroom in my finished basement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. New Jersey building code requires an egress window or exterior walkout door with at least 5.7 sq ft of clear openable area in any basement bedroom. We handle concrete wall cutting and code-compliant well installation."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle Howell Township building permits for basement finishing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Jhay's Construction handles all architectural submittals, building permits, electrical and plumbing filings, and municipal inspections with the Howell Township Code Enforcement department."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: BasementFinishingPage,
});

const benefits = [
  {
    icon: <Film className="w-6 h-6" />,
    title: "Home Theater & Entertainment",
    desc: "Acoustic insulation, soundproofing channels, built-in media consoles, hidden wire raceways, and dimmable recessed lighting.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Home Offices & Guest Suites",
    desc: "Egress window installations, closet framing, and whisper-quiet HVAC supply air create fully permitted, livable bedroom suites.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Moisture & Vapor Barriers",
    desc: "Heavy-duty vapor barriers against foundation walls, subfloor thermal breaks, and closed-cell spray foam for mold prevention.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "HVAC & Climate Control",
    desc: "Engineered supply and return air duct extensions or dedicated ductless mini-split units keeping your basement comfortable year-round.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Wet Bars & Kitchenettes",
    desc: "Custom quartz bar tops, beverage coolers, sink plumbing, tile backsplashes, and under-cabinet accent lighting.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Dedicated Electrical Subpanels",
    desc: "Licensed electrical work including dedicated circuits for appliances, home gyms, gaming systems, and full code-compliant GFCI outlets.",
  },
];

const steps = [
  { num: "01", title: "Moisture & Space Inspection", desc: "We evaluate existing concrete foundation walls, floor pitch, headroom clearances, and existing plumbing rough-ins." },
  { num: "02", title: "Layout & Architectural Plans", desc: "We design a floor plan that maximizes usable space while cleverly boxing in support columns and ductwork." },
  { num: "03", title: "Permits & Framing", desc: "We pull Howell Township permits and erect treated baseplate stud framing with proper moisture vapor separation." },
  { num: "04", title: "Mechanicals & Insulation", desc: "Electrical rough-ins, bathroom plumbing, HVAC duct runs, and high-R value insulation are inspected and approved." },
  { num: "05", title: "Drywall, Flooring & Finishes", desc: "Mold-resistant drywall, luxury vinyl plank (LVP) waterproof flooring, custom doors, trim, and paint completed." },
];

const ideas = [
  "Home Theater / Media Room",
  "Home Office or Study",
  "Guest Bedroom Suite (with Egress)",
  "Kids' Playroom & Game Area",
  "Home Gym & Fitness Studio",
  "Custom Wet Bar & Lounge",
  "Full Lower-Level Bathroom",
  "Wine Cellar / Tasting Room",
  "Multi-Generational Living Suite",
];

const faqs = [
  {
    q: "How much does it cost to finish a basement in Howell, NJ?",
    a: "Basement finishing in Howell Township typically ranges from $45 to $85 per square foot depending on finishes, bathroom additions, egress window requirements, and wet bar installations. We provide comprehensive, itemized estimates.",
  },
  {
    q: "Do you install basement waterproofing before finishing?",
    a: "Yes, we evaluate basement moisture levels prior to framing. We install commercial vapor barriers, closed-cell foam insulation, and can coordinate interior perimeter drain or sump pump systems before installing drywall.",
  },
  {
    q: "Can I legally add a bedroom in my finished basement?",
    a: "Yes. New Jersey building code requires an egress window or exterior walkout door with at least 5.7 sq ft of clear openable area in any basement bedroom. We handle concrete wall cutting and code-compliant well installation.",
  },
  {
    q: "Do you handle Howell Township building permits for basement finishing?",
    a: "Yes, Jhay's Construction handles all architectural submittals, building permits, electrical and plumbing filings, and municipal inspections with the Howell Township Code Enforcement department.",
  },
];

function BasementFinishingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${basementImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Basement Finishing</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Basement Finishing <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Unlock your home's hidden square footage. We turn dark, unutilized basements into bright, luxurious family rooms, home theaters, guest suites, and wet bars. Serving Monmouth and Ocean County.
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
            <div className="text-sm text-gray-400">Serving Local Homeowners In</div>
            <div className="text-lg font-bold text-white">Howell Township, Freehold, Jackson &amp; Brick</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Moisture Protection</div>
            <div className="text-lg font-bold text-white">Continuous Vapor Barriers &amp; Waterproofing</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Schedule Consultation</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Ideas Pills */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
            Popular Finished Basement Concepts We Build
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ideas.map((idea) => (
              <span key={idea} className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-xs font-semibold shadow-sm">
                {idea}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Custom Space Transformations</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Complete Basement Remodeling Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We manage your basement renovation with careful attention to moisture mitigation, ceiling height optimization, and building code compliance.
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">From Raw to Refined</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our 5-Stage Basement Finishing Process
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Warm &amp; Dry Living Spaces</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Engineered Specifically for Below-Grade Longevity
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Basements require specialized building science. Using organic materials directly against cold concrete leads to moisture problems. We install thermal breaks, mold-resistant drywall, and waterproof LVP flooring so your space stays clean and fresh.
              </p>
              <ul className="space-y-4">
                {[
                  "Continuous wall vapor barriers and subfloor air gaps",
                  "Closed-cell spray foam insulation sealing rim joist perimeters",
                  "Quiet exhaust ventilation and properly balanced HVAC air runs",
                  "All permits pulled with Howell Township Code Enforcement",
                  "Full 1-year warranty on all remodeling craftsmanship",
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
                alt="Finished basement family room in Howell NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Fast Build Timelines</div>
                    <div className="text-xs text-gray-500">Typical projects finish in 4–6 weeks</div>
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
                <Home className="w-5 h-5 text-[#008000]" /> Related Home Improvement Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/services/bathroom-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Basement Bathroom Additions
                  </a>
                </li>
                <li>
                  <a href="/services/home-additions" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Home Additions &amp; Above-Ground Space
                  </a>
                </li>
                <li>
                  <a href="/services/kitchen-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Kitchen Remodeling in Howell, NJ
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Basement Before &amp; After Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Basement Finishing Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ (07731)
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Basement Remodeling
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Basement Finishing
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/brick-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Brick Township, NJ Finished Basements
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Common Questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Basement Finishing FAQs</h2>
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
            Ready to Finish Your Basement?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free on-site moisture check and detailed layout estimate.
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
