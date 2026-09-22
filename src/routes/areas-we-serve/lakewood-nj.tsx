import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/kitchen.webp";
import basementImg from "@/assets/basement.jpg";
import patiosImg from "@/assets/patios.jpg";
import drivewayImg from "@/assets/driveway.jpeg";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ChevronRight,
  Home,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/areas-we-serve/lakewood-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Lakewood NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Licensed general contractor serving Lakewood, NJ (08701). Custom home additions, dual-sink kitchen remodeling, finished basements, paver patios & paving. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Lakewood NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Specialized general contracting and home expansions in Lakewood Township, Ocean County, NJ. Home additions, kitchens, finished basements, and driveways.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/lakewood-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Lakewood NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Licensed home builder and remodeling contractor serving Lakewood Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/lakewood-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction - Lakewood NJ Service Area",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/lakewood-nj",
          "telephone": "+17326731569",
          "email": "jhaycconstruction@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "735 Hulses Corner Rd",
            "addressLocality": "Howell Township",
            "addressRegion": "NJ",
            "postalCode": "07731",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Lakewood, NJ"
          },
          "description": "General contracting and home additions in Lakewood Township, NJ: multi-bedroom additions, custom kitchen remodels, finished basement living suites, paver patios, and multi-vehicle driveway paving."
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jhaysconstruction.com/" },
            { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://www.jhaysconstruction.com/areas-we-serve" },
            { "@type": "ListItem", "position": 3, "name": "Lakewood, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/lakewood-nj" }
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
              "name": "Do you design kitchens with dual sinks and separated prep areas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we routinely design and build custom kitchens in Lakewood featuring dual sinks, twin dishwashers, custom double pantries, and dedicated preparation zones."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle building permits with Lakewood Township Inspection Office?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we prepare and file all architectural plans, structural calculations, and building permits directly with the Lakewood Township Inspection Department on Third Street."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you start a home addition in Lakewood?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because our headquarters on Hulses Corner Road directly borders Lakewood along County Line Road, we can visit your home for a consultation immediately and begin work as soon as township permits are issued."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: LakewoodLocationPage,
});

const localServices = [
  {
    title: "Multi-Bedroom Home Additions",
    href: "/services/home-additions",
    img: heroImg,
    desc: "Second-story expansions, master suites, in-law apartments, and rear extensions designed to accommodate expanding families in Lakewood.",
  },
  {
    title: "Specialized Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "Dual sink workstations, double dishwashers, extensive custom solid wood cabinetry, quartz islands, and expansive walk-in pantries.",
  },
  {
    title: "Finished Basement Living Suites",
    href: "/services/basement-finishing",
    img: basementImg,
    desc: "Legal basement bedrooms with egress windows, playrooms, home study offices, full bathrooms, and soundproof ceilings.",
  },
  {
    title: "Multi-Vehicle Driveway Paving",
    href: "/services/driveway-paving",
    img: drivewayImg,
    desc: "Wide asphalt and concrete driveways engineered for multiple vehicle parking, complete with durable sub-base compaction and Belgian block curbing.",
  },
];

const faqs = [
  {
    q: "Do you design kitchens with dual sinks and separated prep areas?",
    a: "Yes! Dual sinks, two dishwashers, custom separated countertops, and oversized pantry storage are features we regularly engineer into our Lakewood kitchen remodeling designs.",
  },
  {
    q: "Do you handle building permits with Lakewood Township Inspection Office?",
    a: "Yes. All structural, mechanical, electrical, and plumbing permits are filed and inspected through the Lakewood Township Municipal Building on Third Street.",
  },
  {
    q: "How quickly can you start a home addition in Lakewood?",
    a: "Because our headquarters is right on Hulses Corner Road bordering Lakewood along County Line Road, we provide fast in-home consultations, measure clearances, and mobilize quickly once permits are secured.",
  },
  {
    q: "Can you finish our basement into extra living space?",
    a: "Yes. We install proper egress windows, code-compliant insulation, moisture vapor barriers, and bathroom plumbing to turn your basement into safe, functional living space.",
  },
];

function LakewoodLocationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-white">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/areas-we-serve" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Areas We Serve</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Lakewood, NJ</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-300 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Serving Lakewood Township, Ocean County, NJ (08701)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contractor in <span style={{ color: "#6ee65a" }}>Lakewood, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Specializing in multi-bedroom home additions, second-story expansions, dual-prep kitchen remodeling, finished basements, and heavy-duty driveway paving across Lakewood Township.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate in Lakewood <ArrowRight className="w-4 h-4" />
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

      {/* Local Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Bordering Lakewood Contractor</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Quality Construction for Lakewood's Growing Households
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lakewood Township has unique residential requirements—from expanding bedroom capacity through second-story additions to building custom kitchens designed for large family gatherings. Headquartered right on Hulses Corner Road just across County Line Road, Jhay's Construction is uniquely positioned to deliver responsive, high-capacity general contracting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We handle the complete permitting process with the Lakewood Township Inspection Department on Third Street, coordinating all architectural submissions, plumbing rough-ins, and electrical panel upgrades.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Lakewood Code &amp; Permits
                  </div>
                  <p className="text-xs text-gray-600">Full compliance with Third Street building inspection rules.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-green-600" /> Immediate Proximity
                  </div>
                  <p className="text-xs text-gray-600">Bordering location enables daily supervisor oversight.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" /> Lakewood Areas We Serve
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Providing remodeling and expansion services across Lakewood:
              </p>
              <div className="space-y-2">
                {[
                  "County Line Road & Ridge Avenue area",
                  "Clifton Avenue & Downtown vicinity",
                  "Westgate & Hillside developments",
                  "Cross Street & James Street neighborhoods",
                  "Squankum Road & Forest Avenue corridors",
                  "New Hampshire Avenue & Route 88 area",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-lg bg-white border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <a href="tel:7326731569" className="text-xs font-bold text-green-700 hover:underline">
                  Lakewood Estimate Hotline: (732) 673-1569
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Lakewood */}
      <section className="py-24 bg-[#fbfbfb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Expansions &amp; Remodeling</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Contracting Services in Lakewood, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Custom home additions, functional kitchens, and basement living suites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {localServices.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row">
                <div className="sm:w-2/5 relative h-48 sm:h-auto">
                  <img src={svc.img} alt={`${svc.title} by Jhay's Construction`} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  </div>
                  <a href={svc.href} className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-green-800 transition-colors">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 bg-white border border-gray-300 px-6 py-3 rounded-full hover:border-green-600 hover:text-green-700 transition-colors shadow-sm"
            >
              Explore All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Common Questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Lakewood NJ Contracting FAQs</h2>
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

      {/* CTA Strip */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Expand in Lakewood Township?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free on-site consultation and guaranteed pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate in Lakewood <ArrowRight className="w-4 h-4" />
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
