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
} from "lucide-react";

export const Route = createFileRoute("/services/bathroom-fitting")({
  component: BathroomFittingPage,
});

const benefits = [
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "Custom Walk-In Showers",
    desc: "Frameless glass, custom tile work, rainfall heads, built-in niches — we design walk-in showers that feel like a luxury spa.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Premium Tile Installation",
    desc: "Large-format porcelain, natural stone, or mosaic — our tile setters are craftsmen who ensure every line is perfect.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Vanity & Fixture Upgrade",
    desc: "Custom floating vanities, vessel sinks, freestanding tubs, and designer fixtures from top brands like Kohler and Moen.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Waterproofing & Plumbing",
    desc: "Proper waterproofing membrane systems behind every tile. Licensed plumbers reroute supply and drain lines as needed.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Radiant Floor Heating",
    desc: "Step onto a warm floor every morning. We install electric radiant heating systems under tile for ultimate comfort.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Complete Gut Renovations",
    desc: "From studs-out demolition to finished product. We handle everything — including exhaust fans, lighting, and mirrors.",
  },
];

const steps = [
  { num: "01", title: "Design Consultation", desc: "We visit, measure, and help you envision your new bathroom with material samples and layout options." },
  { num: "02", title: "Custom Quote", desc: "Receive a detailed, line-item estimate with no hidden fees within 48 hours of your consultation." },
  { num: "03", title: "Demolition & Prep", desc: "Old fixtures, tile, and drywall come out cleanly. Waterproofing is installed before any new material goes in." },
  { num: "04", title: "Tile, Fixtures & Finishing", desc: "Tile is set, vanities installed, plumbing connected, and electrical finished by licensed professionals." },
  { num: "05", title: "Final Reveal", desc: "Full cleanup, grouting seal, mirror hang — we don't leave until it looks magazine-worthy." },
];

const reviews = [
  {
    name: "Jennifer M.",
    location: "Howell Township, NJ",
    stars: 5,
    text: "Jhay and his team transformed our outdated 1980s bathroom into a modern spa. The tile work is flawless, the walk-in shower is gorgeous, and they finished a full week ahead of schedule.",
  },
  {
    name: "Maria S.",
    location: "Perth Amboy, NJ",
    stars: 5,
    text: "The craftsmanship on our master bathroom is incredible. The heated floors, custom vanity, and tile work exceeded every expectation. Worth every penny!",
  },
];

const faqs = [
  {
    q: "How long does a bathroom remodel take?",
    a: "A standard bathroom remodel takes 2–4 weeks. Master bathroom gut renovations with custom tile and structural changes may take 4–6 weeks. We provide a firm timeline at estimate.",
  },
  {
    q: "Can you work around an existing layout to save cost?",
    a: "Absolutely. Keeping plumbing in the same location significantly reduces cost. We'll advise you on the most budget-friendly path to your dream bathroom.",
  },
  {
    q: "Do you install heated floors?",
    a: "Yes! We install electric radiant heat systems under porcelain and tile. It's a relatively affordable upgrade that adds tremendous daily comfort.",
  },
  {
    q: "Are all your tradespeople licensed?",
    a: "Yes. All electricians and plumbers on our team hold NJ state licenses. All work is permit-pulled and inspected.",
  },
];

function BathroomFittingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bathroomImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.85) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">
              Services
            </span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Bathroom Fitting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Luxury Bathroom Fitting <span style={{ color: "#6ee65a" }}>Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            From full gut renovations to targeted upgrades, we craft bathrooms that combine beauty, functionality, and spa-level comfort. Serving Howell, Perth Amboy, Woodbridge & all of NJ.
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

      {/* Stats */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "300+", label: "Bathrooms Renovated" },
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Complete Bathroom Renovation Services
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Every project is handled start-to-finish by our expert team — tile, plumbing, electrical, vanities, and everything in between.
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Your Bathroom Renovation Journey
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
            <div>
              <img
                src={expectImg}
                alt="Bathroom renovation before and after"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What You Get</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                No Shortcuts. No Hidden Costs. Just Results.
              </h2>
              <ul className="space-y-4">
                {[
                  "Fully licensed plumbers and electricians on every project",
                  "Proper waterproofing behind all wet areas",
                  "Fixed-price contract — your quote is your final price",
                  "All work inspected and code-compliant",
                  "Professional clean-up after every work day",
                  "1-year craftsmanship warranty on all labor",
                  "Dedicated project manager — one call for everything",
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

      {/* Reviews snippet */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Testimonials</span>
            <h2 className="text-3xl font-extrabold text-gray-900">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-5 leading-relaxed">"{r.text}"</p>
                <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                <div className="text-gray-500 text-xs">{r.location}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/reviews" className="text-green-700 font-bold text-sm hover:text-green-800 transition-colors">
              Read All Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">FAQ</span>
            <h2 className="text-3xl font-extrabold text-gray-900">Bathroom Fitting Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
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
            Ready for Your Dream Bathroom?
          </h2>
          <p className="text-green-200 text-lg mb-8">
            Get a free, detailed estimate — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-800 font-bold px-10 py-4 rounded-lg text-sm tracking-wide shadow-xl hover:bg-gray-50 transition-all hover:scale-105"
            >
              Get My Free Estimate <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:7326731569"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-10 py-4 rounded-lg text-sm tracking-wide hover:bg-white/10 transition-all"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
