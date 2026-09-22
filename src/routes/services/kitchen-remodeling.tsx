import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import kitchenImg from "@/assets/kitchen.webp";
import expectImg from "@/assets/kitchen.webp";
import {
  ChefHat,
  CheckCircle2,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Wrench,
  Home,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/services/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling Howell NJ | Jhay's Construction" },
      {
        name: "description",
        content:
          "Transform your kitchen with custom cabinetry, quartz countertops, modern islands, and full renovations in Howell, NJ. Licensed NJ general contractor. Call (732) 673-1569.",
      },
      { property: "og:title", content: "Kitchen Remodeling in Howell, NJ | Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Custom kitchen remodeling in Howell Township, NJ. Custom cabinets, islands, countertops, appliances, and full kitchen design by Jhay's Construction.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/services/kitchen-remodeling" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kitchen Remodeling Howell NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Custom kitchen remodeling and renovations in Howell Township, NJ. Free estimates from licensed contractors." },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/services/kitchen-remodeling" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://www.jhaysconstruction.com/services/kitchen-remodeling#service",
          "name": "Kitchen Remodeling Services",
          "serviceType": "Kitchen Remodeling",
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
          "description": "Comprehensive kitchen remodeling in Howell Township, NJ: custom cabinetry, quartz and granite countertops, kitchen islands, backsplash installation, recessed lighting, and plumbing fixtures."
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
            { "@type": "ListItem", "position": 3, "name": "Kitchen Remodeling", "item": "https://www.jhaysconstruction.com/services/kitchen-remodeling" }
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
              "name": "How much does a kitchen remodel cost in Howell, NJ?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Kitchen remodeling costs in Howell, NJ typically range from $25,000 to $65,000+ depending on kitchen size, custom cabinetry choices, countertop materials, and layout alterations. We provide detailed, itemized estimates before work begins."
              }
            },
            {
              "@type": "Question",
              "name": "How long does a kitchen remodel take from start to finish?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most complete kitchen remodels take between 3 to 6 weeks of active on-site construction once materials are delivered and permits are issued."
              }
            },
            {
              "@type": "Question",
              "name": "Do I need a building permit for kitchen remodeling in Howell Township?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Howell Township requires permits for electrical alterations, plumbing rough-ins, and any structural wall modifications. Jhay's Construction handles all permit submissions and code inspections."
              }
            },
            {
              "@type": "Question",
              "name": "Can you open up a wall between our kitchen and living room?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. As licensed general contractors, we routinely evaluate load-bearing walls, engineer LVL beam supports, and create beautiful open-concept living spaces."
              }
            }
          ]
        }),
      }
    ],
  }),
  component: KitchenRemodelingPage,
});

const benefits = [
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: "Custom Cabinet Design",
    desc: "Bespoke solid wood cabinetry, soft-close hardware, custom pantry pull-outs, and dovetail drawers tailored to maximize storage.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Quartz & Granite Countertops",
    desc: "Durable, non-porous quartz, elegant natural granite, and waterfall island edges measured with digital templating.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Plumbing & Appliance Hookups",
    desc: "New sink layouts, pot fillers, garbage disposals, gas cooktop lines, and integrated smart appliance installations.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Licensed Electrical & Lighting",
    desc: "Under-cabinet LED task lighting, pendant fixtures over islands, dedicated circuits, and recessed ambient lighting.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Open-Concept Layouts",
    desc: "Structural wall removals, load-bearing header beams, and flow-enhancing floor plan reconfigurations.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Guaranteed Craftsmanship",
    desc: "Turnkey project management from design to final inspection. We guarantee our work and respect your schedule.",
  },
];

const steps = [
  { num: "01", title: "Free In-Home Consultation", desc: "We visit your Howell or Monmouth County home, measure the space, and discuss your lifestyle, layout desires, and budget." },
  { num: "02", title: "3D Design & Material Selection", desc: "Select custom cabinet finishes, countertop slabs, backsplash tiles, and hardware with our design specialists." },
  { num: "03", title: "Permits & Material Procurement", desc: "We pull all required Howell Township building permits and order verified materials before starting demolition." },
  { num: "04", title: "Precision Demolition & Build", desc: "Our skilled carpenters, plumbers, and electricians work efficiently while maintaining clean, protected work zones." },
  { num: "05", title: "Final Inspection & Reveal", desc: "Complete cleanup, code sign-offs, and a thorough final walkthrough ensuring 100% customer satisfaction." },
];

const faqs = [
  {
    q: "How much does a kitchen remodel cost in Howell, NJ?",
    a: "Kitchen remodeling costs in Howell, NJ typically range from $25,000 to $65,000+ depending on the kitchen's square footage, cabinet construction, countertop materials, and layout alterations. We provide clear, itemized quotes with zero hidden fees.",
  },
  {
    q: "How long does a kitchen remodel take from start to finish?",
    a: "Most kitchen renovations take 3–6 weeks of active work once materials have arrived and permits are approved. We create a firm project schedule and keep you updated daily.",
  },
  {
    q: "Do I need a building permit for kitchen remodeling in Howell Township?",
    a: "Yes. Howell Township and surrounding Monmouth County municipalities require building, plumbing, and electrical permits for kitchen remodels that involve new wiring, plumbing moves, or wall alterations. Jhay's Construction handles all permit filings and code inspections directly.",
  },
  {
    q: "Can you open up a wall between our kitchen and living room?",
    a: "Yes! As licensed general contractors, we frequently remove dividing walls to create open-concept kitchen and living areas. When dealing with load-bearing walls, we engineer and install proper steel or LVL support headers.",
  },
];

function KitchenRemodelingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kitchenImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.78) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-5">
            <a href="/" className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30 hover:bg-white/30 transition-colors">Home</a>
            <span className="text-white/60 text-xs">›</span>
            <a href="/services" className="text-white/80 text-xs font-semibold hover:text-white transition-colors">Services</a>
            <span className="text-white/60 text-xs">›</span>
            <span className="text-white/90 text-xs font-semibold">Kitchen Remodeling</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Kitchen Remodeling <span style={{ color: "#6ee65a" }}>in Howell, NJ</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            From custom cabinetry to luxury quartz countertops, we turn dated kitchens into functional, modern showpieces. Proudly serving Howell Township, Freehold, Jackson, and Monmouth County homeowners.
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
            <div className="text-sm text-gray-400">Primary Service Area</div>
            <div className="text-lg font-bold text-white">Howell Township &amp; Monmouth County, NJ</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Licensing &amp; Credentials</div>
            <div className="text-lg font-bold text-white">Licensed &amp; Fully Insured NJ Contractor</div>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/20" />
          <div>
            <div className="text-sm text-gray-400">Direct Inquiries</div>
            <a href="tel:7326731569" className="text-lg font-bold" style={{ color: "#6ee65a" }}>(732) 673-1569</a>
          </div>
        </div>
      </section>

      {/* Benefits / Services Included */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Full-Service Kitchen Renovation</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Complete Kitchen Remodeling Services in Howell, NJ
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We manage every aspect of your kitchen transformation—from layout design and framing to custom cabinetry, countertops, tile, plumbing, and electrical.
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Step-by-Step Workflow</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              How We Execute Your Kitchen Remodel
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
              <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">The Jhay's Difference</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Organized, Clean &amp; Professional Remodeling
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Remodeling a kitchen shouldn't disrupt your entire life. Jhay's Construction assigns a dedicated lead contractor to your home to ensure clear daily communication, dust containment, and on-time milestone completions.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated project supervisor on-site every construction day",
                  "Floor and adjoining room dust-barrier protection",
                  "Clear, itemized pricing with zero surprise charges",
                  "Howell Township permit acquisition and inspection coordination",
                  "Rigorous post-installation cleaning and quality punch-list check",
                  "Full 1-year warranty on all remodeling labor",
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
                alt="Finished kitchen remodel in Howell Township NJ by Jhay's Construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-150">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">On-Time Completion</div>
                    <div className="text-xs text-gray-500">Committed project timelines &amp; milestones</div>
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
                <Home className="w-5 h-5 text-[#008000]" /> Related Remodeling Services
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/services/bathroom-remodeling" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Bathroom Remodeling in Howell, NJ
                  </a>
                </li>
                <li>
                  <a href="/services/home-additions" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Home Additions &amp; Kitchen Extensions
                  </a>
                </li>
                <li>
                  <a href="/services/basement-finishing" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Finished Basements &amp; Wet Bars
                  </a>
                </li>
                <li>
                  <a href="/work" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> View Kitchen Before &amp; After Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#008000]" /> Kitchen Remodeling Service Areas
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="/areas-we-serve/howell-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Howell Township, NJ (07731)
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/freehold-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Freehold, NJ Kitchen Remodeling
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/jackson-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Jackson Township, NJ Kitchen Remodeling
                  </a>
                </li>
                <li>
                  <a href="/areas-we-serve/brick-township-nj" className="text-gray-700 hover:text-[#008000] inline-flex items-center gap-1.5 transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-[#008000]" /> Brick Township, NJ Home Remodeling
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-700 mb-3 block">Frequently Asked Questions</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Howell NJ Kitchen Remodeling FAQs</h2>
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
            Ready to Build Your Dream Kitchen?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Request a free in-home consultation and itemized estimate from Howell's trusted remodeling contractor.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-900 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get My Free Estimate <ArrowRight className="w-4 h-4" />
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
