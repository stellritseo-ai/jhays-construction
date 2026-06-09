import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import basementImg from "@/assets/basement.jpg";
import expectImg from "@/assets/basement.jpg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Layers,
  Lightbulb,
  Thermometer,
  Film,
} from "lucide-react";

export const Route = createFileRoute("/services/basement-finishing")({
  component: BasementFinishingPage,
});

const benefits = [
  {
    icon: <Film className="w-6 h-6" />,
    title: "Home Theater & Entertainment",
    desc: "Create the ultimate media room with acoustic framing, soundproofing, recessed lighting, and built-in projector or TV walls.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Home Office & Guest Suites",
    desc: "Egress windows, closet builds, and proper ceiling heights transform your basement into a fully legal, livable bedroom or office.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Waterproofing & Moisture Control",
    desc: "We install vapor barriers, interior drains, sump pump systems, and closed-cell spray foam insulation before any finishes go in.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Full HVAC Extension",
    desc: "Your finished basement gets properly sized supply and return vents extended from your existing system — comfortable year-round.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Wet Bars & Mini-Kitchens",
    desc: "Add a wet bar, wine fridge, mini-sink, and custom cabinetry to make your basement the perfect entertainment space.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Full Electrical & Code Compliance",
    desc: "Dedicated sub-panel circuits, recessed and pendant lighting, USB outlets, and all work fully permitted and inspected.",
  },
];

const steps = [
  { num: "01", title: "Moisture Assessment", desc: "We inspect your basement walls, floor, and drainage before a single stud goes up — no hidden moisture surprises later." },
  { num: "02", title: "Design & Layout", desc: "We plan the space to maximize usable square footage, egress compliance, and ceiling height utilization." },
  { num: "03", title: "Framing & Waterproofing", desc: "Steel or wood stud walls are framed. Moisture barriers, spray foam insulation, and any drainage systems are installed." },
  { num: "04", title: "Mechanicals & Drywall", desc: "Electrical, plumbing, and HVAC rough-ins are completed and inspected. Then drywall, mud, and tape." },
  { num: "05", title: "Flooring, Trim & Finish", desc: "LVP, carpet, or tile flooring, painted walls, LED lighting, and all finishes are installed to a polished standard." },
];

const ideas = [
  "Home Theater / Media Room",
  "Home Office or Study",
  "Guest Bedroom (with egress)",
  "Kids' Playroom",
  "Home Gym",
  "Wet Bar & Entertainment Area",
  "Wine Cellar",
  "In-Law or Au Pair Suite",
  "Storage & Utility Upgrade",
];

const faqs = [
  {
    q: "How much does basement finishing cost in NJ?",
    a: "Costs vary widely based on scope, but most basement finishing projects range from $40–$80 per square foot fully finished. We provide detailed, line-item estimates at no charge.",
  },
  {
    q: "Do I need to waterproof before finishing?",
    a: "If your basement has any history of moisture, seepage, or leakage — yes, absolutely. We assess every basement before starting. Finishing over a wet basement creates serious mold and structural problems.",
  },
  {
    q: "Can a basement bedroom be legal in NJ?",
    a: "Yes, with a proper egress window (minimum 5.7 sq ft opening, 24\" high, 20\" wide) and a closet. We handle egress window cutting and well installation as part of the project.",
  },
  {
    q: "How long does basement finishing take?",
    a: "Most basement finishing projects take 4–8 weeks from permit approval. Larger or more complex projects with wet bars, bathrooms, or home theaters can take 8–12 weeks.",
  },
];

function BasementFinishingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${basementImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.88) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">Services</span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Basement Finishing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Basement Finishing <span style={{ color: "#6ee65a" }}>Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            Unlock the hidden potential of your home's largest unused room. We transform raw, unfinished basements into beautiful, fully livable spaces — home theaters, offices, gyms, guest suites, and more. Serving all of Monmouth County, NJ.
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
            { num: "100+", label: "Basements Finished" },
            { num: "15+", label: "Years Experience" },
            { num: "4.9★", label: "Average Rating" },
            { num: "100%", label: "Fully Permitted" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold" style={{ color: "#6ee65a" }}>{s.num}</div>
              <div className="text-sm text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Possibilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Ideas & Possibilities</span>
            <h2 className="text-3xl font-extrabold text-gray-900">What Can Your Basement Become?</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {ideas.map((idea) => (
              <span
                key={idea}
                className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 border-green-200 text-green-800 bg-green-50 hover:bg-green-100 transition-colors"
              >
                {idea}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What We Include</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Complete Basement Finishing Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Every element of your basement transformation — from waterproofing to final paint — handled by our expert team.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How We Finish Your Basement</h2>
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

      {/* Why Jhay's */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={expectImg}
                alt="Finished basement transformation"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  <div>
                    <div className="font-extrabold text-gray-900">ROI of 70–75%</div>
                    <div className="text-xs text-gray-500">Average return on basement finishing</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">The Jhay's Difference</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                We Start With Moisture. Then We Finish Right.
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Too many basement finishing contractors skip the moisture assessment step. We never do. Every basement gets a full evaluation before framing begins — because a beautiful basement built over a moisture problem is a disaster waiting to happen.
              </p>
              <ul className="space-y-4">
                {[
                  "Moisture inspection before any framing or materials are ordered",
                  "Waterproofing solutions available (interior, exterior, or both)",
                  "Closed-cell spray foam insulation for maximum energy efficiency",
                  "Egress window installation for legal bedroom compliance",
                  "All permits pulled, all inspections coordinated",
                  "1-year labor warranty on all completed work",
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
            <h2 className="text-3xl font-extrabold text-gray-900">Basement Finishing Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Unlock Your Basement's Potential?
          </h2>
          <p className="text-green-200 text-lg mb-8">
            Free consultation, detailed estimate, zero pressure — let's plan your dream basement.
          </p>
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
