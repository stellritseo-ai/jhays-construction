import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import heroImg from "@/assets/hero.jpg";
import kitchenImg from "@/assets/kitchen.webp";
import bathroomImg from "@/assets/bathroom.jpeg";
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

export const Route = createFileRoute("/areas-we-serve/brick-township-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Brick NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Licensed general contractor serving Brick Township, NJ (08723, 08724). Bathroom renovations, composite decks, paver patios, kitchen remodeling & home additions. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Brick NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Coastal and suburban home remodeling contractor serving Brick Township, NJ. Custom bathrooms, composite decks, paver patios, and home additions.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/brick-township-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Brick NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Remodeling and general contracting specialist in Brick Township, Ocean County, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/brick-township-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction - Brick Township NJ Service Area",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/brick-township-nj",
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
            "name": "Brick Township, NJ"
          },
          "description": "General contractor serving Brick Township, NJ: custom bathroom renovations, composite decks, paver patios, kitchen remodeling, moisture-resistant finished basements, and home additions."
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
            { "@type": "ListItem", "position": 3, "name": "Brick Township, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/brick-township-nj" }
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
              "name": "Do you use moisture-resistant materials for Brick Township remodeling?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Brick's coastal proximity and sandy soil demand specialized building practices. We use closed-cell insulation, mold-resistant drywall, continuous waterproofing membranes, and composite rot-free materials for decks and exteriors."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle building permits with Brick Township Code Enforcement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we file all required construction, plumbing, and electrical permits with the Brick Township Building Department on Chambers Bridge Road and schedule all municipal inspections."
              }
            },
            {
              "@type": "Question",
              "name": "Do you build composite decks in Brick, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we design and build low-maintenance composite decks (Trex, TimberTech) with vinyl or aluminum railing systems that withstand Jersey Shore sun and humidity without warping or splintering."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: BrickLocationPage,
});

const localServices = [
  {
    title: "Bathroom Remodeling in Brick",
    href: "/services/bathroom-remodeling",
    img: bathroomImg,
    desc: "Luxury walk-in spa showers, dual vanities, moisture-sealed tile installations, and tub-to-shower conversions with lifetime waterproofing backing.",
  },
  {
    title: "Composite Decks & Patio Installation",
    href: "/services/patio-installation",
    img: patiosImg,
    desc: "Low-maintenance composite decks, interlocking paver patios, retaining walls, and outdoor living spaces built for coastal weather.",
  },
  {
    title: "Kitchen Remodeling in Brick",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "Bright, coastal-inspired kitchen renovations with quartz countertops, custom shaker cabinets, open islands, and durable waterproof flooring.",
  },
  {
    title: "Home Additions & Bump-Outs",
    href: "/services/home-additions",
    img: heroImg,
    desc: "First-floor master bedrooms, sunroom extensions, second-story builds, and extra living space designed for Brick Township lot sizes.",
  },
];

const faqs = [
  {
    q: "Do you use moisture-resistant materials for Brick Township remodeling?",
    a: "Yes. Due to high coastal humidity and seasonal temperature shifts, we prioritize continuous waterproofing membranes (Schluter-KERDI) in bathrooms, closed-cell spray foam insulation, and marine-grade stainless hardware for exterior composite deck framing.",
  },
  {
    q: "Do you handle building permits with Brick Township Code Enforcement?",
    a: "Yes. All structural, mechanical, plumbing, and electrical permits are prepared and filed directly with the Brick Township Building Department on Chambers Bridge Road.",
  },
  {
    q: "Do you build composite decks in Brick, NJ?",
    a: "Yes! Low-maintenance composite decks (Trex, TimberTech) with vinyl or aluminum railing systems are our specialty. They resist salt air, sun fading, and splintering, eliminating annual staining.",
  },
  {
    q: "How far is Jhay's Construction from Brick Township?",
    a: "Our headquarters on Hulses Corner Road in Howell is directly connected to Brick via Route 88, Route 70, and Burnt Tavern Road—making project management and daily site visits quick and efficient.",
  },
];

function BrickLocationPage() {
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
            <span className="text-white/90 text-xs font-semibold">Brick Township, NJ</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-300 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Serving Brick Township, Ocean County, NJ (08723, 08724)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contractor in <span style={{ color: "#6ee65a" }}>Brick, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Delivering coastal-tough home remodeling, custom bathroom transformations, composite decks, paver patios, and home additions across Brick Township. Licensed, insured, and locally based.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate in Brick <ArrowRight className="w-4 h-4" />
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Ocean County Remodeling Specialists</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Built to Withstand Coastal Weather in Brick Township
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Remodeling in Brick Township requires practical knowledge of the local environment. Proximity to Barnegat Bay and coastal breezes brings elevated humidity and salt air that can quickly degrade cheap building materials. At Jhay's Construction, we use rot-proof composite decking, stainless fasteners, and commercial-grade waterproof membranes on every home renovation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Howell headquarters is just down Burnt Tavern Road and Route 88. We coordinate all construction, plumbing, and electrical permits directly with the Brick Township Building Department on Chambers Bridge Road.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Moisture-Resistant Building
                  </div>
                  <p className="text-xs text-gray-600">Guaranteed waterproofing systems on wet areas and subfloors.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-green-600" /> Chambers Bridge Rd Compliance
                  </div>
                  <p className="text-xs text-gray-600">Turnkey municipal permit handling and inspection passing.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" /> Brick Communities We Serve
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Providing remodeling and outdoor living services throughout Brick:
              </p>
              <div className="space-y-2">
                {[
                  "Midstreams & Beaver Dam Road areas",
                  "Herbertsville & Burnt Tavern Road",
                  "Cedar Bridge & Mantoloking Road vicinity",
                  "Osbornsville & Cherry Quay neighborhoods",
                  "Baywood & Waterfront canal properties",
                  "Van Zile Road & Route 70 Corridor",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-lg bg-white border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <a href="tel:7326731569" className="text-xs font-bold text-green-700 hover:underline">
                  Brick Township Estimate Line: (732) 673-1569
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Brick */}
      <section className="py-24 bg-[#fbfbfb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Interior &amp; Exterior</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Home Remodeling Services in Brick, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Built for coastal endurance, daily functionality, and lasting home equity.
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
            <h2 className="text-3xl font-extrabold text-gray-900">Brick NJ Contracting FAQs</h2>
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
            Ready to Renovate in Brick Township?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free in-home consultation and detailed itemized estimate.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate in Brick <ArrowRight className="w-4 h-4" />
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
