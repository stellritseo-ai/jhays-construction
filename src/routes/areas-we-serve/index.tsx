import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import heroImg from "@/assets/hero.jpg";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  ChevronRight,
  Building,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/areas-we-serve/")({
  head: () => ({
    meta: [
      { title: "Areas We Serve in New Jersey | Jhay's Construction" },
      {
        name: "description",
        content:
          "Jhay's Construction proudly serves Howell Township, Freehold, Jackson, Brick, Lakewood, and surrounding Monmouth & Ocean County, NJ communities within a 25-mile radius.",
      },
      { property: "og:title", content: "Areas We Serve in New Jersey | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "General contracting and home remodeling services across Monmouth, Ocean, and Middlesex Counties in New Jersey. Free estimates by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Areas We Serve in New Jersey | Jhay's Construction" },
      { name: "twitter:description", content: "Explore our New Jersey service coverage across Monmouth, Ocean, and Middlesex counties." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jhaysconstruction.com/" },
            { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://www.jhaysconstruction.com/areas-we-serve" }
          ]
        }),
      }
    ],
  }),
  component: AreasWeServeIndexPage,
});

const featuredLocations = [
  {
    name: "Howell Township, NJ",
    slug: "/areas-we-serve/howell-nj",
    county: "Monmouth County",
    role: "Company Headquarters",
    desc: "Our home base. Serving Ramtown, Southard, Freewood Acres, Land O'Pines, and all Howell neighborhoods with full home remodeling and general contracting.",
    services: ["Kitchen & Bathroom Remodeling", "Home Additions", "Patio Hardscaping", "Driveway Paving", "Basement Finishing"],
  },
  {
    name: "Freehold, NJ",
    slug: "/areas-we-serve/freehold-nj",
    county: "Monmouth County",
    role: "Core Service Area",
    desc: "Transforming historic Freehold Borough homes and spacious Freehold Township colonial properties with custom additions and kitchen renovations.",
    services: ["Historic & Modern Remodeling", "Master Suites", "Custom Patios", "Driveways & Belgian Block"],
  },
  {
    name: "Jackson Township, NJ",
    slug: "/areas-we-serve/jackson-township-nj",
    county: "Ocean County",
    role: "Core Service Area",
    desc: "Large-lot custom home additions, in-law suites, pool patios, finished entertainment basements, and asphalt driveway paving throughout Jackson.",
    services: ["Large-Scale Additions", "Pool Surrounds & Patios", "Finished Basements", "Asphalt & Concrete Paving"],
  },
  {
    name: "Brick Township, NJ",
    slug: "/areas-we-serve/brick-township-nj",
    county: "Ocean County",
    role: "Core Service Area",
    desc: "Coastal and suburban home remodeling featuring moisture-resistant materials, composite outdoor decks, paver patios, and spa bathroom renovations.",
    services: ["Bathroom Remodeling", "Outdoor Living & Patios", "Composite Decks", "Basement Moisture Control"],
  },
  {
    name: "Lakewood, NJ",
    slug: "/areas-we-serve/lakewood-nj",
    county: "Ocean County",
    role: "Core Service Area",
    desc: "Specialized multi-generational living expansions, kosher kitchen remodels, extra bedroom additions, and finished lower levels.",
    services: ["Multi-Generational Additions", "Dual Sink Kitchens", "Second-Story Expansions", "Basement Living Suites"],
  },
];

const allCities = [
  { name: "Howell Township", county: "Monmouth", url: "/areas-we-serve/howell-nj" },
  { name: "Freehold", county: "Monmouth", url: "/areas-we-serve/freehold-nj" },
  { name: "Jackson Township", county: "Ocean", url: "/areas-we-serve/jackson-township-nj" },
  { name: "Brick Township", county: "Ocean", url: "/areas-we-serve/brick-township-nj" },
  { name: "Lakewood", county: "Ocean", url: "/areas-we-serve/lakewood-nj" },
  { name: "Toms River", county: "Ocean" },
  { name: "Old Bridge", county: "Middlesex" },
  { name: "Perth Amboy", county: "Middlesex" },
  { name: "Woodbridge", county: "Middlesex" },
  { name: "Allentown", county: "Monmouth" },
  { name: "Fords", county: "Middlesex" },
  { name: "Robertsville", county: "Monmouth" },
  { name: "Hillside Terrace", county: "Union" },
];

function AreasWeServeIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 text-white">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Areas We Serve</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            Areas We Serve Across <span style={{ color: "#6ee65a" }}>New Jersey</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Headquartered at 735 Hulses Corner Rd in Howell Township, NJ, Jhay's Construction provides trusted residential and commercial contracting across a 25-mile radius in Monmouth, Ocean, and Middlesex counties.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Request Free Estimate <ArrowRight className="w-4 h-4" />
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

      {/* Featured Location Pages */}
      <section className="py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Local Hubs</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Primary Communities We Serve
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Click on your town below to see local project details, township permitting information, and available remodeling services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLocations.map((loc) => (
              <div
                key={loc.name}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-green-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-green-50 text-green-800 border border-green-200">
                      {loc.county}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {loc.role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-3">
                    {loc.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {loc.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {loc.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{svc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={loc.slug}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                  >
                    Explore {loc.name} Services <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 25 Mile Radius Coverage Details */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">25-Mile Service Radius</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                All Towns &amp; Boroughs Within Our NJ Service Area
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                If your property is within 25 miles of Howell Township, our licensed general contracting crew can handle your project. We maintain established relationships with local building departments throughout Monmouth, Ocean, and Middlesex counties.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {allCities.map((c) => (
                  <div key={c.name} className="p-3 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-green-600 shrink-0" />
                    <div>
                      {c.url ? (
                        <a href={c.url} className="text-xs font-bold text-gray-800 hover:text-green-700 transition-colors block">
                          {c.name}
                        </a>
                      ) : (
                        <span className="text-xs font-semibold text-gray-800 block">{c.name}</span>
                      )}
                      <span className="text-[10px] text-gray-400 block">{c.county} Co.</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-[4/3]">
              <iframe
                title="Jhay's Construction NJ Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2330248625963!2d-74.24651572391215!3d40.159365171482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17fa1a4043499%3A0xcabd14ca3b996b62!2s735%20Hulses%20Corner%20Rd%2C%20Howell%20Township%2C%20NJ%2007731%2C%20USA!5e0!3m2!1sen!2snp!4v1781037763175!5m2!1sen!2snp"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Begin in Your Neighborhood?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free in-home estimate anywhere in our New Jersey service area.
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
