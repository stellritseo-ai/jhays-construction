import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import drivewayImg from "@/assets/driveway.jpeg";
import expectImg from "@/assets/driveway.jpeg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Layers,
  Truck,
  Sparkles,
  Thermometer,
  Clock,
  MapPin,
  ChevronRight,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/services/driveway-paving")({
  head: () => ({
    meta: [
      { title: "Driveway Paving Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Professional asphalt driveway paving, concrete driveways, Belgian block curbing, and sealcoating in Howell, NJ. Durable foundations built for heavy vehicles. Call (732) 673-1569.",
      },
      { property: "og:title", content: "Driveway Paving Howell NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Expert driveway paving in Howell Township, NJ. Hot-mix asphalt, reinforced concrete, interlocking pavers, and Belgian block curbing by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/driveway-paving" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Driveway Paving Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Reliable residential and commercial driveway paving contractor serving Howell Township and Monmouth County, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/driveway-paving" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/driveway-paving#service",
          "name": "Driveway Paving Services",
          "serviceType": "Driveway Paving",
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
          "description": "Professional driveway paving in Howell Township, NJ: hot-mix asphalt paving, fiber-reinforced concrete driveways, interlocking pavers, Belgian block apron curbing, and sealcoating."
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
            { "@type": "ListItem", "position": 3, "name": "Driveway Paving", "item": "https://www.jhaysconstruction.com/services/driveway-paving" }
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
              "name": "How long will a new asphalt driveway last in New Jersey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "When installed over a properly compacted 6-to-8 inch stone aggregate base and maintained with commercial sealcoating every 3 to 4 years, a residential asphalt driveway in Howell typically lasts 20 to 30 years."
              }
            },
            {
              "@type": "Question",
              "name": "How long do I need to wait before parking on a newly paved driveway?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "For hot-mix asphalt, you can walk on it immediately, but keep passenger cars off for 48 to 72 hours during warm months. For poured concrete, wait a minimum of 7 full days before driving or parking on it."
              }
            },
            {
              "@type": "Question",
              "name": "Do you install Belgian block curbing around driveways?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Belgian block (granite cobblestone) curbing and driveway aprons are among our most requested curb-appeal enhancements. We set each block in a concrete footing to prevent edge unraveling."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a permit to repave my driveway in Howell Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A direct replacement of an existing driveway footprint generally does not require a complex building permit, but widening a driveway or modifying the street curb cut / apron requires Howell Township engineering approval. We guide you through all local zoning rules."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: DrivewayPavingPage,
});

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Hot-Mix Asphalt Paving",
    desc: "Commercial-grade I-4 and I-5 hot asphalt laid at 300°F with laser grade controls and multi-ton vibratory roller compaction.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Reinforced Concrete Driveways",
    desc: "4,000 PSI fiber-reinforced concrete with steel rebar grids, expansion joints, and broom or decorative stamped finishes.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Belgian Block & Paver Aprons",
    desc: "Granite Belgian block borders, cobblestone edging, and interlocking paver entry aprons that elevate your home's exterior curb appeal.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Resurfacing & Overlay",
    desc: "Pothole patching, hot rubberized crack sealing, and 2-inch asphalt overlay paving for structurally sound existing driveway bases.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Commercial Sealcoating",
    desc: "Coal-tar and asphalt emulsion sealcoating with silica sand additives to protect against gas/oil spills, oxidation, and winter salt.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Engineered Drainage Grading",
    desc: "Precision crown or side pitches to channel stormwater away from garages, walkways, and your home's foundation walls.",
  },
];

const steps = [
  { num: "01", title: "Free On-Site Assessment", desc: "We evaluate your current driveway slope, sub-base stability, and square footage to provide an accurate, transparent quote." },
  { num: "02", title: "Excavation & Base Prep", desc: "Complete removal of failing pavement, grading of subgrade soil, and installation of dense-graded quarry aggregate." },
  { num: "03", title: "Heavy Compaction", desc: "Tandem vibratory rollers compact the stone base to municipal load-bearing standards to prevent tire ruts." },
  { num: "04", title: "Paving / Pouring", desc: "Hot-mix asphalt is machine-laid and rolled, or concrete is poured, screeded, jointed, and textured with clean borders." },
  { num: "05", title: "Final Inspection & Care Guide", desc: "Edge trimming, clean-up of surrounding lawn, and clear curing guidelines to maximize driveway lifespan." },
];

const faqs = [
  {
    q: "How long will a new asphalt driveway last in New Jersey?",
    a: "When installed over a properly compacted 6-to-8 inch stone aggregate base and maintained with commercial sealcoating every 3 to 4 years, a residential asphalt driveway in Howell typically lasts 20 to 30 years.",
  },
  {
    q: "How long do I need to wait before parking on a newly paved driveway?",
    a: "For hot-mix asphalt, you can walk on it immediately, but keep passenger cars off for 48 to 72 hours during warm months. For poured concrete, wait a minimum of 7 full days before driving or parking on it.",
  },
  {
    q: "Do you install Belgian block curbing around driveways?",
    a: "Yes. Belgian block (granite cobblestone) curbing and driveway aprons are among our most requested curb-appeal enhancements. We set each block in a concrete footing to prevent edge unraveling.",
  },
  {
    q: "Do I need a permit to repave my driveway in Howell Township?",
    a: "A direct replacement of an existing driveway footprint generally does not require a complex building permit, but widening a driveway or modifying the street curb cut / apron requires Howell Township engineering approval. We guide you through all local zoning rules.",
  },
];

function DrivewayPavingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${drivewayImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Driveway Paving</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Driveway Paving <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Smooth, durable asphalt, reinforced concrete, and elegant paver driveways built on engineered stone foundations. Serving Howell Township, Freehold, Jackson, and Monmouth County homeowners.
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
            <div className="text-sm text-gray-400">Paving Crew Operating In</div>
            <div className="text-lg font-bold text-white">Howell, Freehold, Jackson &amp; Monmouth County</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Paving Standards</div>
            <div className="text-lg font-bold text-white">Heavy-Duty Vibratory Compaction</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Fast Estimates</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Complete Paving Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Residential &amp; Commercial Driveway Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Whether you need a brand-new driveway installation, resurfacing over a sound foundation, or decorative Belgian block aprons, our crew delivers flawless results.
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Proven Installation Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How We Pave Your Driveway
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Engineering That Outlasts Winters</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Why Foundation Preparation Is 90% of a Great Driveway
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Most driveway failures occur because contractors pave over spongy, uncompacted sub-soils. At Jhay's Construction, we excavate deep, install genuine quarry process stone, and mechanically compact every layer before paving.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete removal and off-site disposal of old asphalt or deteriorated concrete",
                  "Heavy-duty roller compaction on all subsoil and aggregate base layers",
                  "Engineered slope control to direct water away from garage doorways",
                  "Commercial state-approved hot asphalt mix delivered at peak temperature",
                  "Neat, hand-tamped edges and clean tie-ins to roadways and sidewalks",
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
                alt="Driveway paving project completed in Howell NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Quick Turnaround</div>
                    <div className="text-xs text-gray-500">Most residential driveways paved in 1–2 days</div>
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
                <Home className="w-5 h-5 text-[#008000]" /> Related Exterior Remodeling
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/services/patio-installation" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Patio Installation &amp; Walkways
                  </a>
                </li>
                <li>
                  <a href="/services/home-additions" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Garage Additions &amp; Expansions
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Driveway &amp; Paving Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Driveway Paving Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ Driveway Paving
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Asphalt &amp; Concrete
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Driveway Contractors
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/brick-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Brick Township, NJ Paving Services
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Paving Inquiries</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Driveway Paving FAQs</h2>
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
            Ready for a Smooth, Long-Lasting Driveway?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free on-site consultation and guaranteed pricing.
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
