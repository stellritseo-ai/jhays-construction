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

export const Route = createFileRoute("/areas-we-serve/jackson-township-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Jackson NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Licensed general contractor serving Jackson Township, NJ (08527). Specializing in home additions, paver patios, pool hardscapes, driveway paving & kitchen remodels. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Jackson NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Top-rated general contracting and remodeling in Jackson Township, Ocean County, NJ. Home additions, pool patios, driveways, kitchens, and basements.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/jackson-township-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Jackson NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Licensed builder serving Jackson Township, NJ with home additions, paver patios, and renovations." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/jackson-township-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction - Jackson Township NJ Service Area",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/jackson-township-nj",
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
            "name": "Jackson Township, NJ"
          },
          "description": "General contracting and home improvement services in Jackson Township, NJ: home additions, pool patio hardscaping, long driveway paving, finished basements, and kitchen renovations."
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
            { "@type": "ListItem", "position": 3, "name": "Jackson Township, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/jackson-township-nj" }
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
              "name": "How close is Jhay's Construction to Jackson Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our headquarters at 735 Hulses Corner Rd directly borders Jackson Township along County Line Road and Interstate 195, allowing immediate dispatch, daily project visits, and prompt estimate consultations."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle building permits with Jackson Township Code Enforcement?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we file all required zoning, building, plumbing, and electrical permits with the Jackson Township Building Department on Don Connor Boulevard."
              }
            },
            {
              "@type": "Question",
              "name": "Do you build pool surrounds and large paver patios in Jackson?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Jackson's generous lot sizes make it our top area for large custom paver pool surrounds, outdoor kitchen islands, natural stone fire pits, and long asphalt driveways."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: JacksonLocationPage,
});

const localServices = [
  {
    title: "Large-Scale Home Additions",
    href: "/services/home-additions",
    img: heroImg,
    desc: "First-floor master suites, in-law apartments, family room extensions, and multi-car garage additions tailored for Jackson's 1-to-3 acre properties.",
  },
  {
    title: "Pool Patios & Hardscaping",
    href: "/services/patio-installation",
    img: patiosImg,
    desc: "Slip-resistant concrete pavers, thermal bluestone pool decks, outdoor BBQ kitchens, and custom fire pit gathering areas.",
  },
  {
    title: "Driveway Paving & Curbing",
    href: "/services/driveway-paving",
    img: drivewayImg,
    desc: "Heavy-duty asphalt paving for long, winding Jackson driveways, complete with crushed stone base compaction and Belgian block curbing.",
  },
  {
    title: "Kitchen & Bath Renovations",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "Chef-inspired kitchen remodels with oversized center islands and luxury walk-in master bath renovations.",
  },
];

const faqs = [
  {
    q: "How close is Jhay's Construction to Jackson Township?",
    a: "Our headquarters at 735 Hulses Corner Rd is directly adjacent to Jackson Township along County Line Road. We consider Jackson our immediate backyard and are frequently working on properties throughout the township.",
  },
  {
    q: "Do you handle building permits with Jackson Township Code Enforcement?",
    a: "Yes. We manage all permit filings, architectural blueprint reviews, and milestone inspections with the Jackson Township Department of Community Development on Don Connor Boulevard.",
  },
  {
    q: "Do you build pool surrounds and large paver patios in Jackson?",
    a: "Yes! With Jackson's generous lot sizes, pool patio installations, outdoor kitchens, and retaining walls are among our most frequent projects. We engineer every hardscape with deep compacted aggregate bases to prevent settling.",
  },
  {
    q: "Can you pave long rural driveways in Jackson?",
    a: "Yes, we have commercial-grade tandem rollers, graders, and paving equipment capable of paving 200+ foot asphalt driveways with proper drainage crowning.",
  },
];

function JacksonLocationPage() {
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
            <span className="text-white/90 text-xs font-semibold">Jackson Township, NJ</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-300 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Serving Jackson Township, Ocean County, NJ (08527)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contractor in <span style={{ color: "#6ee65a" }}>Jackson, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Specializing in large-scale home additions, custom pool patios, long driveway paving, and luxury interior remodeling for Jackson Township homeowners. Licensed, insured, and locally based.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate in Jackson <ArrowRight className="w-4 h-4" />
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Bordering Contractor</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Tailored Construction for Jackson's Spacious Properties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Jackson Township's generous 1-to-3 acre residential lots offer immense opportunity for expansive home additions, in-law suites, multi-car garages, and resort-style backyard hardscapes. Because Jhay's Construction is located on Hulses Corner Road right next to Jackson, we can mobilize our heavy equipment, paving crews, and carpenters immediately.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We handle all Jackson Township zoning setbacks, wetland buffers, and building permits through the municipal offices on Don Connor Boulevard, guaranteeing code-certified construction from start to finish.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Jackson Municipal Code
                  </div>
                  <p className="text-xs text-gray-600">Full permit filing and zoning compliance on Don Connor Blvd.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-green-600" /> Heavy Equipment Ready
                  </div>
                  <p className="text-xs text-gray-600">Equipped for large grading, paving, and excavation jobs.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" /> Jackson Neighborhoods We Serve
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Active contracting and paving across Jackson Township communities:
              </p>
              <div className="space-y-2">
                {[
                  "County Line Road & Route 526 corridor",
                  "Whitesville & South Cooks Bridge areas",
                  "Bennetts Mills & Jackson Mills neighborhoods",
                  "Cassville & Leesville communities",
                  "Brookwood 1, 2, 3 & 4 developments",
                  "West Commodore Boulevard corridor",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-lg bg-white border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <a href="tel:7326731569" className="text-xs font-bold text-green-700 hover:underline">
                  Jackson Estimate Hotline: (732) 673-1569
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Jackson */}
      <section className="py-24 bg-[#fbfbfb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Core Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Home Remodeling Services in Jackson, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Custom-built expansions, outdoor living spaces, and luxury renovations.
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
            <h2 className="text-3xl font-extrabold text-gray-900">Jackson NJ Contracting FAQs</h2>
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
            Ready to Build on Your Jackson Property?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free on-site consultation and clear estimate in Jackson Township.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate in Jackson <ArrowRight className="w-4 h-4" />
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
