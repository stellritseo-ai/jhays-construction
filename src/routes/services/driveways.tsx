import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import drivewayImg from "@/assets/driveway.jpeg";
import expectImg from "@/assets/driveway.jpeg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Layers,
  Truck,
  Sparkles,
  Thermometer,
} from "lucide-react";

export const Route = createFileRoute("/services/driveways")({
  component: DrivewaysPage,
});

const benefits = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Asphalt Paving",
    desc: "Hot-mix asphalt installed over a properly prepared base — smooth, durable, and sealed for NJ winters. Full driveways or patch repairs.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Concrete Driveways",
    desc: "4\" to 6\" reinforced concrete slab, finished in your choice of broom, exposed aggregate, or stamped patterns for a premium look.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Paver Driveways",
    desc: "Interlocking concrete or natural stone pavers with infinite design options. Elegant, long-lasting, and easy to repair.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Crack & Pothole Repair",
    desc: "Resurface cracked asphalt, fill potholes with hot-pour crack filler, and re-seal to extend the life of your existing driveway by years.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Sealcoating",
    desc: "Protect your investment with professional sealcoating — UV protection, oil resistance, and a fresh, deep-black finish every 2–4 years.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Proper Grading & Drainage",
    desc: "Every driveway is graded to prevent standing water, ice formation, and premature surface deterioration.",
  },
];

const steps = [
  { num: "01", title: "Free Site Assessment", desc: "We inspect your current driveway, evaluate the base condition, and recommend the best solution for your budget and goals." },
  { num: "02", title: "Material & Design Choice", desc: "Asphalt, concrete, or pavers? We explain the pros, cons, and costs of each so you can make an informed decision." },
  { num: "03", title: "Excavation & Base Prep", desc: "Old material is removed, the sub-base is graded and compacted to engineered specifications for a solid foundation." },
  { num: "04", title: "Installation", desc: "Your chosen material is installed by our experienced crew. Edges are formed, surfaces are graded, and everything is properly finished." },
  { num: "05", title: "Sealing & Final Inspection", desc: "We seal or protect the surface as required, do a thorough inspection, and walk you through your new driveway." },
];

const faqs = [
  {
    q: "How long will a new asphalt driveway last?",
    a: "A properly installed asphalt driveway with regular sealcoating every 3–5 years can last 20–30 years. Quality of installation — especially the base — is the #1 factor.",
  },
  {
    q: "When can I drive on my new driveway?",
    a: "New asphalt should cure for 24–48 hours before light vehicle traffic. Avoid heavy trucks for at least 72 hours. Concrete needs 7 days minimum.",
  },
  {
    q: "Is it better to repair or replace my driveway?",
    a: "If your driveway has widespread cracking, heaving, or a failed base, replacement is more cost-effective long-term. We'll give you an honest assessment during your free estimate.",
  },
  {
    q: "Do I need a permit for a new driveway?",
    a: "Most NJ municipalities require a curb cut permit if you're adding a new driveway entrance. Replacement driveways often don't require permits. We handle all the research.",
  },
];

function DrivewaysPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${drivewayImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.85) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">Services</span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Driveways</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Driveway Paving <span style={{ color: "#6ee65a" }}>Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            New installs, full replacements, or targeted repairs — our driveway paving team delivers smooth, durable results that boost your home's curb appeal and value. Serving Howell, NJ and all surrounding areas.
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
            { num: "120+", label: "Driveways Paved" },
            { num: "15+", label: "Years Experience" },
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Complete Driveway Paving Solutions</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Asphalt, concrete, or pavers — whatever your vision and budget, we have the expertise to deliver.
            </p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How We Pave Your Driveway</h2>
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

      {/* Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={expectImg}
                alt="New driveway installation"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  <div>
                    <div className="font-extrabold text-gray-900">Curb Appeal Guaranteed</div>
                    <div className="text-xs text-gray-500">Boosts home value immediately</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Why Choose Jhay's</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">The Right Foundation Makes All the Difference</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Many driveway failures happen due to improper base preparation. We never cut corners — proper excavation depth, compaction, and drainage engineering are standard on every project we take.
              </p>
              <ul className="space-y-4">
                {[
                  "Deep excavation and compacted aggregate base on all installs",
                  "Commercial-grade materials — not residential shortcuts",
                  "Proper edge work for clean, professional-looking borders",
                  "Graded for positive drainage away from your home",
                  "Full clean-up — we haul away all debris and old material",
                  "1-year warranty on all installation work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Driveway Paving Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready for a Brand New Driveway?</h2>
          <p className="text-green-200 text-lg mb-8">Free estimate, detailed quote, honest pricing — no surprises.</p>
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
