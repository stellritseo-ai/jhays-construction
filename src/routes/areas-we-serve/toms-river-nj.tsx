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

export const Route = createFileRoute("/areas-we-serve/toms-river-nj")({
  head: () => ({
    meta: [
      { title: "General Contractor Toms River NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Licensed general contractor serving Toms River, NJ (08753, 08755, 08757). Kitchen remodeling, bathroom renovations, home additions, paver patios & driveway paving. Call (732) 673-1569.",
      },
      { property: "og:title", content: "General Contractor Toms River NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Trusted remodeling and general contracting in Toms River, Ocean County, NJ. Custom additions, kitchens, baths, paver patios, and asphalt paving by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/areas-we-serve/toms-river-nj" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor Toms River NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Ocean County licensed remodeling contractor serving Silverton, North Dover, East Dover & downtown Toms River." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/areas-we-serve/toms-river-nj" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          "@id": "https://www.jhaysconstruction.com/#business",
          "name": "Jhay's Construction - Toms River NJ Service Area",
          "url": "https://www.jhaysconstruction.com/areas-we-serve/toms-river-nj",
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
            "name": "Toms River, NJ"
          },
          "description": "Licensed general contractor serving Toms River, NJ and Ocean County: home additions, custom kitchen remodeling, luxury bathroom renovations, interlocking paver patios, asphalt driveway paving, and finished basements."
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
            { "@type": "ListItem", "position": 3, "name": "Toms River, NJ", "item": "https://www.jhaysconstruction.com/areas-we-serve/toms-river-nj" }
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
              "name": "Do you handle building permits with the Toms River Township Building Department?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Jhay's Construction prepares architectural drawings, structural plans, and submits all required permit applications directly to the Toms River Township Division of Code Enforcement located on Church Street. We manage all required inspections from footing to final certificate of occupancy."
              }
            },
            {
              "@type": "Question",
              "name": "What special considerations are needed for construction near Barnegat Bay and coastal Toms River?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Coastal neighborhoods like Silverton, East Dover, and Green Island require specialized moisture management, salt-air-resistant exterior finishes, stainless-steel structural fasteners, and adherence to Ocean County base flood elevations. We specialize in hurricane-rated framing and moisture-barrier construction."
              }
            },
            {
              "@type": "Question",
              "name": "How quickly can you start a remodeling or addition project in Toms River?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Following an initial in-home consultation and estimate approval, design review and permit processing in Toms River typically take 2 to 4 weeks. Construction commences immediately upon permit issuance."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: TomsRiverNJPage,
});

const servicesInLocation = [
  {
    title: "Kitchen Remodeling",
    href: "/services/kitchen-remodeling",
    img: kitchenImg,
    desc: "Custom solid-wood cabinets, quartz countertops, modern kitchen islands, and open-concept structural conversions built to high standards in Toms River homes.",
  },
  {
    title: "Bathroom Renovation",
    href: "/services/bathroom-remodeling",
    img: bathroomImg,
    desc: "Walk-in curbless showers, custom porcelain and ceramic tile, double vanities, heated flooring, and moisture-sealed fixtures engineered for lasting durability.",
  },
  {
    title: "Home Additions & In-Law Suites",
    href: "/services/home-additions",
    img: heroImg,
    desc: "Spacious master suites, multi-generational ground-floor in-law quarters, second-story expansions, and family room extensions engineered to New Jersey UCC standards.",
  },
  {
    title: "Paver Patios & Outdoor Living",
    href: "/services/patio-installation",
    img: patiosImg,
    desc: "Interlocking Cambridge and Techo-Bloc paver patios, custom outdoor kitchens, fire pits, retaining walls, and slip-resistant swimming pool surrounds.",
  },
  {
    title: "Driveway Paving & Concrete",
    href: "/services/driveway-paving",
    img: drivewayImg,
    desc: "Heavy-duty hot-mix asphalt driveway installations, reinforced concrete aprons, and elegant Belgian block curbing built with deep aggregate stone bases.",
  },
  {
    title: "Basement Finishing",
    href: "/services/basement-finishing",
    img: heroImg,
    desc: "Sub-grade moisture sealing, mold-resistant drywall, home theaters, gym spaces, and full legal bathrooms designed for Ocean County homes.",
  },
];

const neighborhoods = [
  "Silverton",
  "North Dover",
  "East Dover",
  "Downtown Toms River",
  "Pleasant Plains",
  "Green Island",
  "Shelter Cove",
  "Holiday City",
  "Silver Ridge",
  "Gilford Park",
];

const faqs = [
  {
    q: "Do you handle building permits with the Toms River Township Building Department?",
    a: "Yes. Jhay's Construction prepares architectural drawings, structural plans, and submits all required permit applications directly to the Toms River Township Division of Code Enforcement located on Church Street. We manage all required inspections from footing to final certificate of occupancy.",
  },
  {
    q: "What special considerations are needed for construction near Barnegat Bay and coastal Toms River?",
    a: "Coastal neighborhoods like Silverton, East Dover, and Green Island require specialized moisture management, salt-air-resistant exterior finishes, stainless-steel structural fasteners, and adherence to Ocean County base flood elevations. We specialize in hurricane-rated framing and moisture-barrier construction.",
  },
  {
    q: "How quickly can you start a remodeling or addition project in Toms River?",
    a: "Following an initial in-home consultation and estimate approval, design review and permit processing in Toms River typically take 2 to 4 weeks. Construction commences immediately upon permit issuance.",
  },
];

function TomsRiverNJPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gray-900 text-white overflow-hidden">
        <img
          src={heroImg}
          alt="General Contractor serving Toms River NJ — Jhay's Construction"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#008000]/20 border border-[#008000]/40 text-green-300 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5" /> Ocean County, New Jersey
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            General Contractor in Toms River, NJ
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Headquartered just north in Howell Township, Jhay's Construction delivers licensed general contracting, home additions, custom kitchen &amp; bathroom renovations, paver patios, and driveway paving across Toms River and Ocean County.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-lg text-sm tracking-wide shadow-lg hover:brightness-110 transition-all"
              style={{ backgroundColor: "#008000" }}
            >
              Get a Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:7326731569"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-8 py-3.5 rounded-lg text-sm tracking-wide transition-all"
            >
              <Phone className="w-4 h-4" /> (732) 673-1569
            </a>
          </div>
        </div>
      </section>

      {/* Breadcrumb Bar */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-2 text-xs text-gray-500">
          <a href="/" className="hover:text-[#008000]">Home</a>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <a href="/areas-we-serve" className="hover:text-[#008000]">Areas We Serve</a>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold">Toms River, NJ</span>
        </div>
      </div>

      {/* Local Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold tracking-widest uppercase text-[#008000] mb-3 block">
              Ocean County Remodeling Specialists
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Quality Craftsmanship Built for Toms River Homes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              As Ocean County’s bustling commercial and residential hub, Toms River features an extraordinary variety of home styles—from mid-century ranches in Silverton to expansive modern colonials in North Dover and waterfront properties bordering Barnegat Bay and the Toms River.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              With our operational base located right along Route 9 in Howell Township, our project managers and construction crews are just minutes away. We understand the specific municipal zoning rules, coastal environmental considerations, and building codes enforced by the Toms River Township Division of Code Enforcement.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#008000] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">NJ Licensed &amp; Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#008000] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Toms River Permits Handled</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#008000] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">Clear Schedules &amp; Milestones</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[#008000] shrink-0" />
                <span className="text-sm font-semibold text-gray-800">23 Years of Regional Experience</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#008000]" /> Toms River Neighborhoods Served
            </h3>
            <p className="text-xs text-gray-600 mb-5 leading-relaxed">
              We provide full residential and commercial general contracting across all Toms River zip codes (08753, 08755, 08757):
            </p>
            <div className="grid grid-cols-2 gap-2.5">
              {neighborhoods.map((n) => (
                <div key={n} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-white p-2.5 rounded-lg border border-gray-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#008000] shrink-0" />
                  {n}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-xs text-gray-500 mb-1">Local Consultation Phone:</div>
              <a href="tel:7326731569" className="text-lg font-bold text-[#008000] hover:underline flex items-center gap-2">
                <Phone className="w-4 h-4" /> (732) 673-1569
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Toms River */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#008000] mb-3 block">
              Core Specialties
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Contracting Services Offered in Toms River, NJ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesInLocation.map((srv) => (
              <div key={srv.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex flex-col group hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={srv.img}
                    alt={`${srv.title} in Toms River NJ`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {srv.title}
                  </h3>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                  <a
                    href={srv.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#008000] hover:text-green-800 transition-colors"
                  >
                    Explore Service Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Building Considerations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#008000] mb-3 block">
              Local Building Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Toms River Homeowners Choose Jhay's Construction
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Every municipality in New Jersey has distinct building requirements. Here is how we ensure seamless project execution in Toms River:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: "#008000" }}>
                <Hammer className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Toms River Building Code Compliance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the complete subcode technical paperwork for building, electrical, plumbing, and fire protection through Toms River Code Enforcement on Church Rd.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: "#008000" }}>
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Coastal Weather Durability</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Toms River’s coastal air causes faster wear on low-grade building materials. We use marine-grade hardware, fiber-cement or composite trim, and salt-tolerant paver sealants.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: "#008000" }}>
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Turnkey Project Management</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                From initial 3D plans to final touch-ups, our owner-led crew supervises each stage. You work with one accountable contractor who respects your time and home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#008000] mb-3 block">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Toms River General Contracting FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-[#008000] font-extrabold">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links: Other Service Areas */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-bold text-gray-900">
              Explore Other Nearby Service Areas in New Jersey
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Howell Township, NJ", href: "/areas-we-serve/howell-nj" },
              { name: "Freehold, NJ", href: "/areas-we-serve/freehold-nj" },
              { name: "Jackson Township, NJ", href: "/areas-we-serve/jackson-township-nj" },
              { name: "Brick Township, NJ", href: "/areas-we-serve/brick-township-nj" },
              { name: "Lakewood, NJ", href: "/areas-we-serve/lakewood-nj" },
              { name: "All Service Areas (25-Mile Radius)", href: "/areas-we-serve" },
            ].map((loc) => (
              <a
                key={loc.name}
                href={loc.href}
                className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700 hover:border-[#008000] hover:text-[#008000] transition-colors"
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Plan Your Toms River Renovation Today
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Contact Jhay's Construction for a free in-home consultation and itemized estimate on your kitchen, bathroom, addition, patio, or paving project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-950 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Request Free Estimate <ArrowRight className="w-4 h-4" />
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
