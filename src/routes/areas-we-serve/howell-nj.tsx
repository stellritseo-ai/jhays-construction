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
  Clock,
  Phone,
  ChevronRight,
  Hammer,
  Home,
  Award,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/areas-we-serve/howell-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Looking for a licensed general contractor in Howell, NJ? Jhay's Construction is headquartered at 735 Hulses Corner Rd. Kitchens, baths, additions, patios & paving. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Howell NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Howell Township's hometown general contractor and home remodeling specialist. Based in Howell, NJ. Kitchen remodeling, bathrooms, additions, basements, and patios.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/howell-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Hometown general contractor serving Ramtown, Southard, Freewood Acres, and all of Howell Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/howell-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/howell-nj",
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
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 40.1658,
            "longitude": -74.2255
          },
          "areaServed": {
            "@type": "City",
            "name": "Howell Township, NJ"
          },
          "description": "Hometown general contractor based at 735 Hulses Corner Rd, Howell Township, NJ 07731. Specializing in kitchen remodeling, bathroom renovation, home additions, patio installation, driveway paving, and finished basements."
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
            { "@type": "ListItem", "position": 3, "name": "Howell Township, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/howell-nj" }
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
              "name": "Where is Jhay's Construction located in Howell Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our headquarters is located at 735 Hulses Corner Rd, Howell Township, NJ 07731. We are locally owned and operated right here in Howell."
              }
            },
            {
              "@type": "Question",
              "name": "Does Jhay's Construction handle Howell Township building permits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we handle all construction permits directly with the Howell Township Department of Community Development on Preventorium Road, including building, plumbing, electrical, and fire subcode applications."
              }
            },
            {
              "@type": "Question",
              "name": "Which neighborhoods in Howell do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all Howell Township communities including Ramtown, Southard, Freewood Acres, Land O'Pines, Adelphia, Ardena, Winston Park, Candlewood, and surrounding areas."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer free remodeling estimates in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We provide free in-home consultations and detailed, itemized estimates with zero pressure for all Howell Township homeowners."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: HowellLocationPage,
});

const localServices = [
  {
    title: "Kitchen Remodeling in Howell",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "Custom kitchen renovations featuring custom solid-wood cabinets, quartz waterfall islands, tile backsplashes, and open layouts tailored for Howell homes.",
  },
  {
    title: "Bathroom Remodeling in Howell",
    href: "/services/bathroom-remodeling",
    img: bathroomImg,
    desc: "From spa-inspired walk-in showers with frameless glass to double vanity master baths and radiant heated tile floors.",
  },
  {
    title: "Patio Installation & Hardscaping",
    href: "/services/patio-installation",
    img: patiosImg,
    desc: "Durable paver patios, natural stone pool decks, custom fire pits, and stone seat walls built on compacted aggregate foundations.",
  },
  {
    title: "Driveway Paving in Howell",
    href: "/services/driveway-paving",
    img: drivewayImg,
    desc: "Hot-mix asphalt paving, heavy-duty roller compaction, Belgian block granite curbing, and reinforced concrete driveways.",
  },
];

const howellNeighborhoods = [
  "Ramtown",
  "Southard",
  "Freewood Acres",
  "Land O'Pines",
  "Adelphia",
  "Ardena",
  "Winston Park",
  "Candlewood",
  "Yellowbrook",
  "Matthews",
  "Maxim",
  "West Farms",
];

const faqs = [
  {
    q: "Where is Jhay's Construction located in Howell Township?",
    a: "Our shop and headquarters is located at 735 Hulses Corner Rd, Howell Township, NJ 07731. We live and work right here in the community, providing responsive, accountable service.",
  },
  {
    q: "Does Jhay's Construction handle Howell Township building permits?",
    a: "Yes. Every permitted project—including home additions, finished basements, structural wall removals, electrical updates, and plumbing modifications—is handled directly through the Howell Township Department of Community Development on Preventorium Road.",
  },
  {
    q: "Which neighborhoods in Howell do you serve?",
    a: "We work across all Howell Township neighborhoods including Ramtown, Southard, Freewood Acres, Land O'Pines, Adelphia, Ardena, Winston Park, Candlewood, and surrounding roads off Route 9 and Route 33.",
  },
  {
    q: "Do you offer free remodeling estimates in Howell, NJ?",
    a: "Yes! As your Howell neighbor, we come to your home, assess the project, take measurements, and deliver a detailed, itemized quote with zero obligation.",
  },
];

function HowellLocationPage() {
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
            <span className="text-white/90 text-xs font-semibold">Howell Township, NJ</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-300 mb-4">
            <MapPin className="w-3.5 h-3.5" /> 735 Hulses Corner Rd, Howell Township, NJ 07731
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contractor in <span style={{ color: "#6ee65a" }}>Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Your hometown construction and home remodeling partner. Headquartered on Hulses Corner Road, Jhay's Construction delivers licensed, high-end renovations with honest pricing across Howell Township.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate in Howell <ArrowRight className="w-4 h-4" />
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

      {/* Local Authority & Permitting Context */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Hometown Construction Experts</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Deep Roots &amp; Trusted Craftsmanship in Howell Township, NJ
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you hire Jhay's Construction, you're not dealing with an out-of-town contractor who disappears after the job. We are based right here in Howell at <strong>735 Hulses Corner Rd</strong>. Our reputation in the township is built on 23 years of delivering exactly what we promise.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From obtaining permits through the Howell Township Department of Community Development to coordinating local inspections for structural, plumbing, and electrical codes, our experienced team ensures your project is 100% compliant, secure, and stress-free.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Howell Township Permitting
                  </div>
                  <p className="text-xs text-gray-600">Full filing with the municipal code office on Preventorium Road.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-green-600" /> 1-Year Labor Guarantee
                  </div>
                  <p className="text-xs text-gray-600">Complete warranty backing all residential craftsmanship.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" /> Howell Neighborhoods We Serve
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                We provide fast turnaround on estimates and daily supervision across all areas of Howell:
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {howellNeighborhoods.map((n) => (
                  <div key={n} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-lg bg-white border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <span>{n}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <a href="tel:7326731569" className="text-xs font-bold text-green-700 hover:underline">
                  Live near Route 9 or Aldrich Rd? Call (732) 673-1569
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Howell */}
      <section className="py-24 bg-[#fbfbfb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Local Contracting Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Home Improvement Services in Howell, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Tailored remodeling solutions designed for Howell's architectural styles and lot sizes.
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
              View All 6 Core Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Local Questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Contracting FAQs</h2>
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
            Transform Your Howell Home Today
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Schedule your free in-home consultation with Jhay's Construction right here in Howell Township.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate in Howell <ArrowRight className="w-4 h-4" />
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
