import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import patiosImg from "@/assets/patios.jpg";
import expectImg from "@/assets/patios.jpg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  TreePine,
  Shield,
  Wrench,
  Layers,
  Sun,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/services/patios")({
  component: PatiosPage,
});

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Custom Patio Design",
    desc: "From simple flagstone to elaborate multi-level designs with built-in seating, fire pits, and pergolas — we build outdoor living spaces that wow.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Repair & Restoration",
    desc: "Cracked, sunken, or heaving patios? We lift, re-level, and restore existing pavers and concrete, saving you the cost of full replacement.",
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Natural Stone & Pavers",
    desc: "Travertine, bluestone, Belgian block, Unilock pavers — we source and install premium materials built for New Jersey's freeze-thaw climate.",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Pergolas & Shade Structures",
    desc: "Extend your outdoor season with a custom pergola, lattice cover, or louvered roof system. We handle design, permits, and full installation.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Outdoor Kitchens & Fire Pits",
    desc: "Transform your patio into an outdoor entertainment hub with built-in grills, bar counters, and natural gas or wood-burning fire pits.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Proper Base & Drainage",
    desc: "Every patio starts with a correctly graded, compacted base. We engineer proper drainage so your patio stays beautiful for decades.",
  },
];

const steps = [
  { num: "01", title: "Site Assessment", desc: "We evaluate your yard, soil, drainage, and sun exposure to design the ideal outdoor space for your property." },
  { num: "02", title: "Design & Materials", desc: "Choose from hundreds of paver styles, natural stones, and layout patterns. We can create a 2D design plan for you." },
  { num: "03", title: "Excavation & Base", desc: "Proper grading, excavation to correct depth, geotextile fabric, and a compacted aggregate base — the right foundation." },
  { num: "04", title: "Installation", desc: "Pavers or stone are set, cut, and sand-locked by experienced craftsmen. Edging restraints are installed to prevent shifting." },
  { num: "05", title: "Sealing & Cleanup", desc: "We apply polymeric sand, seal the surface, and leave your yard pristine. Your patio is ready to use the same week." },
];

const faqs = [
  {
    q: "How long does a patio installation take?",
    a: "Most patio installs take 3–7 days depending on size and complexity. Larger projects with pergolas or outdoor kitchens may take 2–3 weeks.",
  },
  {
    q: "What's the best patio material for New Jersey winters?",
    a: "Concrete pavers and natural bluestone are excellent for NJ's climate. They handle freeze-thaw cycles better than poured concrete slabs, which tend to crack.",
  },
  {
    q: "Do I need a permit for a patio?",
    a: "Most patios below a certain size don't require a permit in NJ municipalities. Covered structures like pergolas typically do. We handle all permit research and applications.",
  },
  {
    q: "Can you repair just a section of my existing patio?",
    a: "Absolutely. We can lift and re-level sunken areas, replace cracked pavers, and re-sand joints — often at a fraction of replacement cost.",
  },
];

function PatiosPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${patiosImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.85) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">Services</span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Patios</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Patio Installation & <span style={{ color: "#6ee65a" }}>Repair Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            Create the outdoor living space you've always dreamed of. From custom paver patios to pergolas, fire pits, and outdoor kitchens — we turn your backyard into a destination. Serving Howell, NJ and surrounding communities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/estimate" className="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide shadow-xl transition-all hover:scale-105" style={{ background: "#1a7c1a" }}>
              Get Your Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:7326731569" className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-lg text-sm tracking-wide bg-white text-gray-800 shadow-xl hover:bg-gray-50 transition-all">
              Call (732) 673-1569
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "150+", label: "Patios Installed" },
            { num: "23", label: "Years Experience" },
            { num: "4.9★", label: "Average Rating" },
            { num: "100%", label: "Licensed & Insured" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold" style={{ color: "#6ee65a" }}>{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Patio & Outdoor Living Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">We build outdoor spaces that add real value — and years of enjoyment — to your home.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="group p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 bg-white hover:bg-green-50/30">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-white group-hover:scale-110 transition-transform" style={{ background: "#1a7c1a" }}>
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How We Build Your Patio</h2>
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
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Our Guarantee</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Built to Last in NJ's Climate</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                New Jersey's freeze-thaw cycle is brutal on outdoor surfaces. We engineer every patio with proper depth, drainage, and materials that won't heave, crack, or wash out after one winter.
              </p>
              <ul className="space-y-4">
                {[
                  "Minimum 6\" compacted aggregate base on all installations",
                  "Polymeric sand jointing to prevent weed growth and ant infiltration",
                  "Proper slope for water runoff — no pooling",
                  "Edge restraints to prevent long-term paver migration",
                  "All materials sourced from premium NJ-approved suppliers",
                  "1-year structural warranty on all new installations",
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
                alt="Beautiful patio installation"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <div>
                    <div className="font-extrabold text-gray-900">4.9 / 5 Stars</div>
                    <div className="text-xs text-gray-500">47+ verified reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Patio Installation Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-start gap-2">
                  <span className="text-green-600 font-extrabold shrink-0">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Build Your Outdoor Oasis?</h2>
          <p className="text-green-200 text-lg mb-8">Free estimate, no pressure, honest advice — that's the Jhay's way.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/estimate" className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105">
              Get My Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:7326731569" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-lg text-sm tracking-wide hover:bg-white/10 transition-all">
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
