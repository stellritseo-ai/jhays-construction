import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import roomAdditionImg from "@/assets/room-addition.jpeg";
import expectImg from "@/assets/room-addition.jpeg";
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Shield,
  Wrench,
  Home,
  Layers,
  Ruler,
  DoorOpen,
} from "lucide-react";

export const Route = createFileRoute("/services/room-additions")({
  component: RoomAdditionsPage,
});

const benefits = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Master Suite Additions",
    desc: "Add a luxurious master bedroom and en-suite bath — creating the private retreat you've always wanted without moving.",
  },
  {
    icon: <DoorOpen className="w-6 h-6" />,
    title: "Family Room Extensions",
    desc: "Bump out your living space with a seamlessly integrated family room addition — full foundations, framing, HVAC, and finishes.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Second Story Additions",
    desc: "Double your square footage by building up instead of out. We handle all structural engineering, permits, and full construction.",
  },
  {
    icon: <Ruler className="w-6 h-6" />,
    title: "Sunrooms & Four-Season Rooms",
    desc: "Bring the outdoors in with a light-filled sunroom — fully insulated for year-round use with heating and cooling.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Garage Conversions",
    desc: "Convert your attached garage into a home office, bedroom, gym, or accessory dwelling unit (ADU).",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Structural Engineering",
    desc: "All room additions are engineered for proper load-bearing integration with your existing structure — fully permitted.",
  },
];

const steps = [
  { num: "01", title: "Consultation & Vision", desc: "We tour your home, discuss your goals, and explore what's structurally possible within your budget." },
  { num: "02", title: "Design & Engineering", desc: "Architectural drawings and structural engineering plans are created and submitted for municipal permit approval." },
  { num: "03", title: "Foundation & Framing", desc: "The new foundation is poured, framing is erected, and the addition is weathered-in with sheathing, windows, and roofing." },
  { num: "04", title: "Rough-Ins & Insulation", desc: "Electrical, plumbing, and HVAC are roughed-in. Insulation is installed to code before drywall." },
  { num: "05", title: "Finishing & Handover", desc: "Drywall, flooring, trim, paint, and fixtures are completed. Final inspections are scheduled and passed." },
];

const faqs = [
  {
    q: "How long does a room addition take?",
    a: "Most room additions take 8–16 weeks from permit approval to completion. Second-story additions and larger projects may take 4–6 months. Permit timelines vary by municipality.",
  },
  {
    q: "Will a room addition increase my property taxes?",
    a: "Yes — adding square footage typically increases assessed value and property taxes. We recommend checking with your township's tax assessor for specific estimates.",
  },
  {
    q: "Do you handle all the permits?",
    a: "Absolutely. We prepare and submit all permit applications, coordinate with municipal inspectors at each phase, and obtain the final certificate of occupancy.",
  },
  {
    q: "Can you match the existing exterior of my home?",
    a: "Yes — matching siding, roofing, brick, and architectural details is something we take great pride in. A well-executed addition should look like it was always part of the house.",
  },
];

function RoomAdditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${roomAdditionImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.85) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">Services</span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Room Additions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Room Addition & <span style={{ color: "#6ee65a" }}>Repair Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            Love your neighborhood but need more space? We design and build seamless room additions — from master suites and family rooms to full second stories. Serving Howell, NJ and surrounding areas.
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
            { num: "80+", label: "Additions Completed" },
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

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Room Addition & Expansion Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Every addition is engineered, permitted, and built to seamlessly integrate with your existing home — inside and out.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How Your Addition Gets Built</h2>
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
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Why Choose Jhay's</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Stay in Your Home & Get the Space You Need
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Moving is expensive, stressful, and means leaving your neighborhood and community. A well-built room addition gives you the space you need while protecting the investment you've already made in your current home.
              </p>
              <ul className="space-y-4">
                {[
                  "We handle all permits, inspections, and municipal approvals",
                  "Work is coordinated to minimize disruption to your daily life",
                  "We match exterior materials to your existing home exactly",
                  "All mechanical (HVAC, electrical, plumbing) is extended properly",
                  "Dedicated project manager from day one to certificate of occupancy",
                  "Fixed-price contract — no surprise costs during construction",
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
                alt="Room addition construction"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="font-extrabold text-gray-900 text-sm mb-1">Fully Permitted Work</div>
                <div className="text-xs text-gray-500">Every project meets NJ building code</div>
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
            <h2 className="text-3xl font-extrabold text-gray-900">Room Addition Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Add the Space You Need?</h2>
          <p className="text-green-200 text-lg mb-8">Talk to our team about your addition vision — free estimate, no obligation.</p>
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
