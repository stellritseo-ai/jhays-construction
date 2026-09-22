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

export const Route = createFileRoute("/areas-we-serve/freehold-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Freehold NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Licensed general contractor serving Freehold, NJ (07728). Expert kitchen remodeling, bathroom renovations, home additions, patios & driveway paving. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Freehold NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Trusted remodeling and general contracting in Freehold Borough and Freehold Township, NJ. Kitchens, baths, additions, patios, and paving by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/freehold-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Freehold NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Premier remodeling contractor serving Freehold Township & Freehold Borough, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/freehold-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction - Freehold NJ Service Area",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/freehold-nj",
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
          "areaServed": [
            { "@type": "City", "name": "Freehold, NJ" },
            { "@type": "City", "name": "Freehold Township, NJ" },
            { "@type": "City", "name": "Freehold Borough, NJ" }
          ],
          "description": "General contractor and remodeling services serving Freehold, NJ: custom kitchens, bathroom renovations, home additions, finished basements, patio hardscaping, and driveway paving."
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
            { "@type": "ListItem", "position": 3, "name": "Freehold, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/freehold-nj" }
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
              "name": "Do you serve both Freehold Borough and Freehold Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we regularly complete residential remodeling and paving projects across both Freehold Borough and Freehold Township, accommodating both historic building guidelines and modern suburban developments."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you start a remodeling project in Freehold?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because our headquarters in Howell is only minutes away via Route 9 or Kozloski Road, we can visit your Freehold home for an estimate within 24 to 48 hours and coordinate permit filings promptly."
              }
            },
            {
              "@type": "Question",
              "name": "Do you handle Freehold Township building permits?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we file all required construction, electrical, and plumbing permits with the Freehold Township Building Department on Schanck Road, ensuring every step is code-inspected."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: FreeholdLocationPage,
});

const localServices = [
  {
    title: "Kitchen Remodeling in Freehold",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "From historic Freehold Borough kitchen restorations with custom cabinetry to open-concept chef's kitchens in Freehold Township.",
  },
  {
    title: "Bathroom Renovations in Freehold",
    href: "/services/bathroom-remodeling",
    img: bathroomImg,
    desc: "Spa-style master bathroom suites, frameless glass showers, soaking tubs, and custom double vanities with waterproof warranty.",
  },
  {
    title: "Patio Installation & Hardscaping",
    href: "/services/patio-installation",
    img: patiosImg,
    desc: "Multi-level paver patios, natural stone pool decks, fire pits, and stone retaining walls built on deeply compacted gravel.",
  },
  {
    title: "Driveway Paving in Freehold",
    href: "/services/driveway-paving",
    img: drivewayImg,
    desc: "Long residential asphalt driveways, Belgian block borders, and reinforced concrete surfaces engineered for Monmouth County weather.",
  },
];

const faqs = [
  {
    q: "Do you serve both Freehold Borough and Freehold Township?",
    a: "Yes! We work throughout all of Freehold, NJ—including historic homes in the Borough along Main Street and East Main, as well as newer colonial subdivisions in Freehold Township near Elton-Adelphia Road and Kozloski Road.",
  },
  {
    q: "How quickly can you start a remodeling project in Freehold?",
    a: "Our Howell headquarters is just 10 minutes south of Freehold via Route 9. We schedule in-home consultations within 24–48 hours and begin procurement as soon as plans are finalized.",
  },
  {
    q: "Do you handle Freehold Township building permits?",
    a: "Yes. All structural, mechanical, plumbing, and electrical permits are prepared and filed directly with the Freehold Township Code Enforcement Office on Schanck Road or the Freehold Borough Building Department on West Main Street.",
  },
  {
    q: "What types of home additions do you build in Freehold?",
    a: "We build second-story additions for split-level homes, first-floor master bedroom suites, family room bump-outs, and four-season sunrooms with complete architectural integration.",
  },
];

function FreeholdLocationPage() {
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
            <span className="text-white/90 text-xs font-semibold">Freehold, NJ</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-green-300 mb-4">
            <MapPin className="w-3.5 h-3.5" /> Serving Freehold Borough &amp; Freehold Township, NJ (07728)
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-5 max-w-3xl">
            General Contractor in <span style={{ color: "#6ee65a" }}>Freehold, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            From historic renovations in Freehold Borough to custom additions, paver patios, and luxury kitchen remodels across Freehold Township. Licensed general contracting by Jhay's Construction.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Free Estimate in Freehold <ArrowRight className="w-4 h-4" />
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Neighboring Contractor</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                High-End Craftsmanship for Freehold Homeowners
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Located just minutes south of Freehold on Hulses Corner Road, Jhay's Construction has spent more than two decades working on properties throughout the Freehold area. Whether you live in a classic Victorian home in the Borough or a spacious two-story colonial in the Township, our team understands the local architectural character.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                We handle the entire process from architectural drafting and Freehold Township permit filings through final code inspections, delivering peace of mind, clean worksites, and guaranteed timelines.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-green-600" /> Freehold Municipal Code Knowledge
                  </div>
                  <p className="text-xs text-gray-600">Full permit compliance with Schanck Rd &amp; Borough offices.</p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-150">
                  <div className="font-bold text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-green-600" /> 10-Minute Response Time
                  </div>
                  <p className="text-xs text-gray-600">Proximity allows rapid consultations and daily site supervision.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <h3 className="font-display font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-700" /> Freehold Communities We Serve
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                Providing remodeling and paving services across Freehold neighborhoods:
              </p>
              <div className="space-y-2">
                {[
                  "Freehold Borough Historic District",
                  "Stonehurst & Applewood neighborhoods",
                  "Wemrock Road & Route 537 Corridor",
                  "Schanck Road & Park Avenue areas",
                  "Elton-Adelphia Road Subdivisions",
                  "Georgia Road & Monmouth Battlefield Vicinity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-gray-700 p-2 rounded-lg bg-white border border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <a href="tel:7326731569" className="text-xs font-bold text-green-700 hover:underline">
                  Freehold Estimate Hotline: (732) 673-1569
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Freehold */}
      <section className="py-24 bg-[#fbfbfb] border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Remodeling &amp; Construction</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Popular Home Remodeling Services in Freehold, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              High-value renovations customized for Freehold properties.
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
            <h2 className="text-3xl font-extrabold text-gray-900">Freehold NJ Contracting FAQs</h2>
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
            Ready to Renovate Your Freehold Home?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Contact Jhay's Construction today for a free in-home estimate in Freehold Borough or Township.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get Free Estimate in Freehold <ArrowRight className="w-4 h-4" />
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
