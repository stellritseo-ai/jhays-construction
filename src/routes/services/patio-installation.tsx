import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import patiosImg from "@/assets/patios.jpg";
import expectImg from "@/assets/patios.jpg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  TreePine,
  Shield,
  Wrench,
  Layers,
  Sun,
  Sparkles,
  Clock,
  MapPin,
  ChevronRight,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/services/patio-installation")({
  head: () => ({
    meta: [
      { title: "Patio Installation Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Custom paver patio installation, stone hardscaping, outdoor kitchens, and fire pits in Howell, NJ. Engineered base for New Jersey weather. Free estimates. Call (732) 673-1569.",
      },
      { property: "og:title", content: "Patio Installation Howell NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Custom interlocking paver patios, natural bluestone, pergolas, retaining walls, and outdoor living spaces in Howell Township, NJ by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/patio-installation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Patio Installation Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Expert paver patio design, hardscaping, and outdoor living installations in Howell Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/patio-installation" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/patio-installation#service",
          "name": "Patio Installation & Hardscaping Services",
          "serviceType": "Patio Installation",
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
          "description": "Custom paver patio installation, hardscaping, natural stone walkways, retaining walls, fire pits, and outdoor living areas in Howell Township, NJ."
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
            { "@type": "ListItem", "position": 3, "name": "Patio Installation", "item": "https://www.jhaysconstruction.com/services/patio-installation" }
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
              "name": "How long does a patio installation take in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most residential paver patios take between 3 to 7 days from excavation to final polymeric sand compaction, depending on size, terrain grading, and features like sitting walls or fire pits."
              }
            },
            {
              "@type": "Question",
              "name": "Are interlocking pavers better than stamped concrete in New Jersey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, interlocking pavers flex naturally with New Jersey's winter freeze-thaw ground movement, preventing the inevitable cracking common with large poured concrete slabs. If individual pavers ever shift, they can be re-leveled easily."
              }
            },
            {
              "@type": "Question",
              "name": "Do you install proper drainage under the patio?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Every patio we build includes laser-graded excavation, woven geotextile separation fabric, 6–8 inches of compacted crushed stone aggregate base, and positive slope away from your home's foundation."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a permit for a paver patio in Howell Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard at-grade paver patios that do not alter municipal impervious coverage limits often do not require full building permits. However, gas fire pits, pergolas, and retaining walls over 4 feet do require permits. We verify all Howell Township zoning codes for you."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: PatioInstallationPage,
});

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Custom Paver Patterns",
    desc: "Herringbone, ashlar slate, running bond, and modular multiformat pavers installed with edge restraint borders.",
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Natural Stone Hardscapes",
    desc: "Pennsylvania bluestone, thermal flagstone, travertine pool decking, and granite step treads built to endure.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Pergolas & Shade Pavilions",
    desc: "Custom cedar pergolas, low-maintenance composite lattice covers, and covered outdoor pavilions with integrated lighting.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Outdoor Kitchens & Fire Pits",
    desc: "Built-in stainless gas grills, granite bar counters, wood-burning and gas fire pits, and stone seat walls.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Engineered Base & Drainage",
    desc: "Deep excavation, industrial geotextile cloth, 6-8 inch compacted quarry process gravel, and proper 1-inch bedding sand.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Restoration & Re-Leveling",
    desc: "Sunken, shifting, or weed-filled pavers? We power-wash, re-level base aggregate, apply polymeric sand, and seal.",
  },
];

const steps = [
  { num: "01", title: "Site Assessment & Measure", desc: "We evaluate yard grade, soil conditions, sun patterns, and drainage paths at your Howell or Monmouth County property." },
  { num: "02", title: "Material & Pattern Selection", desc: "Choose top-grade pavers (Cambridge, Techo-Bloc, Unilock) or natural stone with our hardscaping specialists." },
  { num: "03", title: "Excavation & Base Compaction", desc: "Precision excavation to proper frost depth, geotextile barrier installation, and multi-lift mechanical plate compaction." },
  { num: "04", title: "Paver Screeding & Cutting", desc: "Craftsmen hand-lay each stone, cut clean curved borders with diamond saws, and install heavy-duty edge restraints." },
  { num: "05", title: "Polymeric Sanding & Cleanup", desc: "Vibratory plate compaction with polymeric joint sand activation and complete final landscape grading." },
];

const faqs = [
  {
    q: "How long does a patio installation take in Howell, NJ?",
    a: "Most residential paver patios take between 3 to 7 days from excavation to final polymeric sand compaction, depending on size, terrain grading, and features like sitting walls or fire pits.",
  },
  {
    q: "Are interlocking pavers better than stamped concrete in New Jersey?",
    a: "Yes, interlocking pavers flex naturally with New Jersey's winter freeze-thaw ground movement, preventing the inevitable cracking common with large poured concrete slabs. If individual pavers ever shift, they can be re-leveled easily.",
  },
  {
    q: "Do you install proper drainage under the patio?",
    a: "Every patio we build includes laser-graded excavation, woven geotextile separation fabric, 6–8 inches of compacted crushed stone aggregate base, and positive slope away from your home's foundation.",
  },
  {
    q: "Do I need a permit for a paver patio in Howell Township?",
    a: "Standard at-grade paver patios that do not alter municipal impervious coverage limits often do not require full building permits. However, gas fire pits, pergolas, and retaining walls over 4 feet do require permits. We verify all Howell Township zoning codes for you.",
  },
];

function PatioInstallationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${patiosImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Patio Installation</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Patio Installation <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Expand your living space outdoors with engineered paver patios, natural bluestone, custom fire pits, and stone seating walls built specifically for New Jersey's freeze-thaw climate.
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
            <div className="text-sm text-gray-400">Hardscaping Specialists In</div>
            <div className="text-lg font-bold text-white">Howell, Freehold, Jackson &amp; Brick, NJ</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Foundation Engineering</div>
            <div className="text-lg font-bold text-white">Commercial-Grade Compacted Aggregates</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Call For Pricing</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Outdoor Living Excellence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Custom Hardscape &amp; Patio Solutions in Howell, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From backyard entertainment patios to pool decks and custom fire pit gathering areas, we build durable, stunning outdoor retreats.
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Precision Engineering</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Our 5-Step Patio Installation Process
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Quality That Lasts Decades</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Built to Withstand Severe NJ Winters
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                In Monmouth County, poor base preparation causes pavers to shift, sink, and separate during winter freeze-thaw cycles. We never take shortcuts on excavation depth, sub-base gravel, or edge restraints.
              </p>
              <ul className="space-y-4">
                {[
                  "Laser-guided excavation to ensure positive water pitch away from foundations",
                  "Heavy-duty woven geotextile fabric prevents soil contamination into gravel base",
                  "Minimum 6–8 inches of densely compacted quarry process aggregate base",
                  "Commercial snap-edge paver restraints spiked with 10-inch steel pins",
                  "Polymeric sand jointing prevents weed growth and insect infestation",
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
                alt="Custom paver patio installation in Howell NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Fast Build Time</div>
                    <div className="text-xs text-gray-500">Most projects finished in 3–7 business days</div>
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
                <Home className="w-5 h-5 text-[#008000]" /> Related Exterior Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/services/driveway-paving" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Driveway Paving &amp; Belgian Block Borders
                  </a>
                </li>
                <li>
                  <a href="/services/home-additions" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Home Additions &amp; Covered Porches
                  </a>
                </li>
                <li>
                  <a href="/services/kitchen-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Kitchen Remodeling in Howell, NJ
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Hardscaping Project Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Patio Installation Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ (07731)
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Paver Patios
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Outdoor Living
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/brick-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Brick Township, NJ Decks &amp; Patios
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Common Hardscape Questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Patio Installation FAQs</h2>
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
            Ready to Build Your Outdoor Living Oasis?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free design consultation and comprehensive quote.
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
