import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { servicesList } from "@/components/sections/Services";
import heroImg from "@/assets/hero.jpg";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  Hammer,
  ChevronRight,
  Award,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "General Contractor Services Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Explore contracting services by Jhay's Construction in Howell, NJ. Kitchen remodeling, bathroom renovations, basement finishing, home additions, patio installation & driveway paving.",
      },
      { property: "og:title", content: "General Contractor Services Howell NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Complete residential and commercial contracting and remodeling services in Howell Township, NJ and Monmouth County. Quality craftsmanship and free estimates.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Services Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Explore residential & commercial general contracting services in Howell Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Jhay's Construction Services",
          "description": "General contracting and home remodeling services provided by Jhay's Construction in Howell Township, NJ.",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Kitchen Remodeling",
              "url": "https://www.jhaysconstruction.com/services/kitchen-remodeling"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Bathroom Remodeling",
              "url": "https://www.jhaysconstruction.com/services/bathroom-remodeling"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Patio Installation",
              "url": "https://www.jhaysconstruction.com/services/patio-installation"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Driveway Paving",
              "url": "https://www.jhaysconstruction.com/services/driveway-paving"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Home Additions",
              "url": "https://www.jhaysconstruction.com/services/home-additions"
            },
            {
              "@type": "ListItem",
              "position": 6,
              "name": "Basement Finishing",
              "url": "https://www.jhaysconstruction.com/services/basement-finishing"
            }
          ]
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.jhaysconstruction.com/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.jhaysconstruction.com/services" }
          ]
        }),
      }
    ],
  }),
  component: ServicesIndexPage,
});

const coreServices = [
  {
    title: "Kitchen Remodeling",
    url: "/services/kitchen-remodeling",
    desc: "Custom solid wood cabinetry, quartz and granite countertops, waterfall islands, tile backsplashes, and open-concept layout conversions.",
    features: ["Custom Cabinet Design", "Quartz & Granite Countertops", "Island & Wall Removals", "Licensed Plumbing & Electric"],
  },
  {
    title: "Bathroom Remodeling",
    url: "/services/bathroom-remodeling",
    desc: "Transform your master or guest bath into a spa retreat with frameless glass walk-in showers, designer vanities, and radiant heated floors.",
    features: ["Custom Tile Walk-In Showers", "Double Vanities & Stone Tops", "Heated Radiant Floors", "100% Waterproof Membrane"],
  },
  {
    title: "Patio Installation & Hardscaping",
    url: "/services/patio-installation",
    desc: "Interlocking paver patios, natural bluestone terraces, custom outdoor kitchens, seat walls, and stone fire pits built for NJ winters.",
    features: ["Interlocking Concrete Pavers", "Natural Bluestone & Flagstone", "Outdoor Kitchens & Fire Pits", "Engineered Gravel Base"],
  },
  {
    title: "Driveway Paving",
    url: "/services/driveway-paving",
    desc: "Heavy-duty hot-mix asphalt paving, fiber-reinforced concrete driveways, Belgian block borders, and commercial sealcoating.",
    features: ["Hot-Mix Asphalt Paving", "Reinforced Concrete Driveways", "Belgian Block Curbing", "Heavy Roller Compaction"],
  },
  {
    title: "Home Additions",
    url: "/services/home-additions",
    desc: "Expand your home with ground-floor room extensions, luxurious master bedroom suites, second-story additions, and four-season sunrooms.",
    features: ["Master Bedroom Suites", "Second-Story Expansions", "Family Room Bump-Outs", "Full Architectural & Permit Prep"],
  },
  {
    title: "Basement Finishing",
    url: "/services/basement-finishing",
    desc: "Convert raw square footage into vibrant living space: home theaters, home offices, guest suites with legal egress, and custom wet bars.",
    features: ["Home Theaters & Media Rooms", "Guest Suites (Egress Windows)", "Wet Bars & Kitchenettes", "Vapor Barrier Waterproofing"],
  },
];

function ServicesIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
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
            <span className="text-white/90 text-xs font-semibold">Services</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contracting &amp; <span style={{ color: "#6ee65a" }}>Remodeling Services</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Trusted craftsmanship for every corner of your home. From interior kitchen and bath transformations to structural home additions, paver patios, and driveway paving in Howell, NJ.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Request a Free Estimate <ArrowRight className="w-4 h-4" />
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

      {/* Services Grid */}
      <section className="py-24 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">What We Build</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Our Core Contracting Specialties
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Each service is executed with licensed trades, code-compliant permitting, and guaranteed craftsmanship. Explore our individual service details below.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl hover:border-green-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={svc.url}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                  >
                    View Service Details <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/estimate"
                    className="text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jhay's Construction */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-green-50 text-green-700 mx-auto flex items-center justify-center mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Licensed &amp; Insured</h3>
              <p className="text-gray-600 text-sm">
                Full New Jersey general contractor licensing and comprehensive liability insurance protecting your property at all times.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-green-50 text-green-700 mx-auto flex items-center justify-center mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Firm Timelines</h3>
              <p className="text-gray-600 text-sm">
                We provide clear milestone schedules and maintain daily communication from project start to final inspection sign-off.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 rounded-full bg-green-50 text-green-700 mx-auto flex items-center justify-center mb-4">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">1-Year Labor Warranty</h3>
              <p className="text-gray-600 text-sm">
                Every project is backed by our full craftsmanship guarantee. We don't consider a job complete until you are 100% satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Discuss Your Upcoming Project With Us
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction for a free in-home consultation, project feasibility assessment, and itemized proposal.
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
