import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import bathroomImg from "@/assets/bathroom.jpeg";
import expectImg from "@/assets/bathroom.jpeg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Wrench,
  Droplets,
  Sparkles,
  Layers,
  MapPin,
  ChevronRight,
  Home,
} from "lucide-react";

export const Route = createFileRoute("/services/bathroom-remodeling")({
  head: () => ({
    meta: [
      { title: "Bathroom Remodeling Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Upgrade your bathroom with custom tile, walk-in frameless showers, luxury vanities, and radiant floors in Howell, NJ. Licensed general contractor. Free estimates.",
      },
      { property: "og:title", content: "Bathroom Remodeling in Howell, NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Full-service bathroom renovations in Howell Township, NJ. Custom tile showers, soaking tubs, heated floors, and vanities by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/bathroom-remodeling" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Bathroom Remodeling Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Expert bathroom renovation and shower remodel contractor in Howell Township, NJ." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/bathroom-remodeling" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/bathroom-remodeling#service",
          "name": "Bathroom Remodeling Services",
          "serviceType": "Bathroom Remodeling",
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
          "description": "Professional bathroom remodeling in Howell Township, NJ: custom tile walk-in showers, freestanding tubs, quartz double vanities, heated flooring, waterproofing membrane systems, and plumbing fixtures."
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
            { "@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.jhaysconstruction.com/services/bathroom-remodeling" }
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
              "name": "How long does a bathroom remodel take in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A standard hall bathroom renovation takes approximately 2 to 3 weeks. Full master bathroom gut renovations with custom tile walk-in showers, freestanding tubs, and heated floors typically take 3 to 5 weeks."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a bathroom remodel typically cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Bathroom remodeling in Howell Township generally ranges from $12,000 to $35,000+ depending on whether plumbing fixtures are moved, tile specifications, vanity selections, and glass shower enclosures."
              }
            },
            {
              "@type": "Question",
              "name": "Do you install waterproof membrane systems behind shower tile?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, absolutely. We install premium waterproof backing systems (such as Schluter-KERDI or GoBoard) behind all shower and tub surround tile to ensure 100% leak-proof performance."
              }
            },
            {
              "@type": "Question",
              "name": "Can you convert an old tub into a walk-in shower?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Tub-to-shower conversions are one of our most requested projects. We remove the old fiberglass or cast iron tub, reconfigure the drain, install waterproof backing, custom tile, and frameless glass."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: BathroomRemodelingPage,
});

const benefits = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Custom Walk-In Showers",
    desc: "Frameless heavy glass enclosures, custom porcelain or marble wall tile, built-in shampoo niches, bench seating, and rain shower heads.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Artisan Tile Installation",
    desc: "Hexagon floor patterns, subway wall tile, herringbone accents, and large-format porcelain set with precision leveling clips.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Vanity & Plumbing Upgrades",
    desc: "Single and double vanity installations, quartz countertops, undermount sinks, designer faucets, and freestanding soaking tubs.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Certified Waterproofing",
    desc: "Guaranteed moisture-barrier membranes behind every wet area. Licensed plumbers reroute supply and waste lines to current New Jersey plumbing code.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Radiant In-Floor Heating",
    desc: "Thermostatically controlled electric radiant floor heating under tile—bringing luxury warmth to chilly New Jersey mornings.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Complete Gut Renovations",
    desc: "Studs-out demolition, mold remediation if discovered, upgraded high-CFM quiet ventilation, GFCI electrical, and custom recessed lighting.",
  },
];

const steps = [
  { num: "01", title: "Free Design Consultation", desc: "We evaluate your existing bathroom layout in Howell, discuss fixture preferences, and measure for optimal clearances." },
  { num: "02", title: "Detailed Proposal", desc: "You receive a transparent, itemized quote detailing material allowances, plumbing fixtures, tile, and labor." },
  { num: "03", title: "Clean Demolition & Rough-In", desc: "We remove old fixtures, inspect framing and subfloors, install new plumbing, electrical, and commercial-grade waterproofing." },
  { num: "04", title: "Tile Setting & Finish Trim", desc: "Precision tile installation, grout sealing, vanity setting, frameless glass measurement, and fixture installation." },
  { num: "05", title: "Final Walkthrough & Sign-off", desc: "Thorough sanitization, fixture testing, Township plumbing and building code sign-offs, and final client approval." },
];

const faqs = [
  {
    q: "How long does a bathroom remodel take in Howell, NJ?",
    a: "A standard guest or hall bathroom remodel takes roughly 2–3 weeks. Master bathroom gut renovations with custom tile showers, radiant floor heating, and double vanities take 3–5 weeks. We establish a clear project schedule before demolition begins.",
  },
  {
    q: "How much does a bathroom remodel typically cost?",
    a: "Bathroom remodeling in Howell Township and Monmouth County typically ranges from $12,000 to $35,000+ based on scope, fixture selections, tile choices, and whether plumbing lines are moved. We provide upfront, transparent pricing.",
  },
  {
    q: "Do you install waterproof membrane systems behind shower tile?",
    a: "Yes. Water damage prevention is our highest priority. We use proven continuous waterproofing systems (like Schluter-KERDI) behind all tile walls, shower floors, and curbs before setting a single tile.",
  },
  {
    q: "Can you convert an old tub into a walk-in shower?",
    a: "Yes! Tub-to-shower conversions are one of our most popular services. We remove the existing tub, re-plumb the drain, build a curbed or low-threshold shower pan, and install custom tile with a frameless glass door.",
  },
];

function BathroomRemodelingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bathroomImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Bathroom Remodeling</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Bathroom Remodeling <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            From modern spa retreats with custom frameless showers to space-efficient guest bathroom updates. Delivering licensed plumbing, artisan tile work, and honest pricing across Monmouth and Ocean County.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105"
              style={{ background: "#1a7c1a" }}
            >
              Get Your Free Estimate <ArrowRight className="w-4 h-4" />
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
            <div className="text-lg font-bold text-white">Howell, Freehold, Jackson &amp; Brick, NJ</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Licensing &amp; Plumbing</div>
            <div className="text-lg font-bold text-white">Licensed NJ Contractor • Code Compliant</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Free Consultations</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Expert Craftsmanship</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Complete Bathroom Renovation Solutions
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We handle every detail of your remodel from subfloor preparation and plumbing rough-ins to tile setting, electrical, and glass installation.
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">The Remodeling Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How Your Bathroom Renovation Unfolds
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Stress-Free Renovations</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Clean, Courteous &amp; On-Time Execution
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We understand that having contractors in your home requires trust. Our crew arrives on time, seals off work areas to contain dust, protects flooring runners, and cleans up daily.
              </p>
              <ul className="space-y-4">
                {[
                  "Licensed plumbers & electricians for all rough-in and fixture work",
                  "100% waterproof membrane system backing on all shower enclosures",
                  "Permits pulled and inspections scheduled with Howell Township",
                  "Daily communication and project milestone check-ins",
                  "Full 1-year warranty on all workmanship and installation",
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
                alt="Bathroom remodel project in Howell Township NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">Fast Turnarounds</div>
                    <div className="text-xs text-gray-500">Most standard bathrooms finish in 2–3 weeks</div>
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
                  <a href="/services/kitchen-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Kitchen Remodeling in Howell, NJ
                  </a>
                </li>
                <li>
                  <a href="/services/basement-finishing" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Basement Remodeling &amp; Bathroom Additions
                  </a>
                </li>
                <li>
                  <a href="/services/home-additions" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Master Suite &amp; Bathroom Extensions
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Bathroom Before &amp; After Projects
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Bathroom Remodeling Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ (07731)
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Bathroom Renovations
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Bath Remodels
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/brick-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Brick Township, NJ Bathroom Services
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
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Bathroom Remodeling FAQs</h2>
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
            Ready to Redesign Your Bathroom?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Schedule your free estimate with Howell's premier bathroom renovation specialists today.
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
