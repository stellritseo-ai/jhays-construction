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
} from "lucide-react";

export const Route = createFileRoute("/services/kitchen-fitting")({
  component: KitchenFittingPage,
});

const benefits = [
  {
    icon: <ChefHat className="w-6 h-6" />,
    title: "Custom Cabinet Design",
    desc: "Fully bespoke cabinetry built to maximize your kitchen's storage and style, using premium hardwoods and durable finishes.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Appliance Integration",
    desc: "Seamless built-in installation for all major brands — ovens, refrigerators, dishwashers, range hoods, and more.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Premium Countertops",
    desc: "Quartz, granite, marble, or butcher block — we supply and install countertops that match your lifestyle and budget.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Electrical & Plumbing",
    desc: "Licensed in-house electricians and plumbers handle all rough-in and finish work, so your project stays on schedule.",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Full Project Management",
    desc: "One point of contact from demolition to final clean-up. No juggling subcontractors — we handle everything.",
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "5-Star Finish Guarantee",
    desc: "We don't hand over keys until you're 100% satisfied. Our quality walk-through ensures zero punch-list items.",
  },
];

const steps = [
  { num: "01", title: "Free In-Home Consultation", desc: "We visit your home, take measurements, and discuss your goals, style, and budget — zero pressure." },
  { num: "02", title: "Design & Material Selection", desc: "Choose from hundreds of cabinet styles, countertop slabs, and hardware finishes with our design team." },
  { num: "03", title: "Permits & Scheduling", desc: "We pull all required permits, order materials, and lock in your project start date with a clear timeline." },
  { num: "04", title: "Expert Installation", desc: "Our crew arrives on time, protects your home, and completes the install with surgical precision." },
  { num: "05", title: "Final Reveal & Walk-Through", desc: "We clean up completely, do a thorough inspection with you, and don't leave until you love it." },
];

const faqs = [
  {
    q: "How long does a full kitchen remodel take?",
    a: "Most kitchen remodels take 3–6 weeks depending on scope. Custom cabinetry, countertop fabrication, and permit timelines are the main factors. We give you a firm schedule upfront.",
  },
  {
    q: "Do you handle design or do I need an architect?",
    a: "We provide in-house design assistance for layout, cabinet selection, and finishes. For structural changes (removing load-bearing walls), we coordinate with licensed engineers.",
  },
  {
    q: "What's included in your kitchen fitting service?",
    a: "Demolition, cabinetry, countertops, backsplash, appliance installation, plumbing, electrical, lighting, flooring, and paint — essentially everything from shell to finished kitchen.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes! We partner with local lenders to offer flexible financing options. Ask about our plans during your free estimate consultation.",
  },
];

function KitchenFittingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kitchenImg})` }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,40,10,0.85) 0%, rgba(26,124,26,0.75) 100%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block bg-white/20 text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/30">
              Services
            </span>
            <span className="text-white/60 text-xs">→</span>
            <span className="text-white/80 text-xs font-semibold">Kitchen Fitting</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">
            Expert Kitchen Fitting <span style={{ color: "#6ee65a" }}>Service</span>
          </h1>
          <p className="text-xl text-white/85 max-w-2xl mb-8 leading-relaxed">
            From custom cabinetry to countertop installation, we transform outdated kitchens into stunning, functional spaces that become the heart of your home. Serving Howell, Perth Amboy, Woodbridge & all of NJ.
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

      {/* Quick stats */}
      <section className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "200+", label: "Kitchens Completed" },
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
            <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              What's Included In Our Kitchen Fitting Service
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              We deliver a complete, turn-key kitchen remodel — every single trade, every single detail handled by our expert team.
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
              How Your Kitchen Renovation Works
            </h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
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

      {/* What to Expect */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-green-600 mb-3 block">What To Expect</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                A Stress-Free Kitchen Renovation From Start to Finish
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We know that renovations can feel overwhelming. That's why Jhay's Construction acts as your single point of contact — coordinating every subcontract, permit, delivery, and inspection so you don't have to.
              </p>
              <ul className="space-y-4">
                {[
                  "Dedicated project manager assigned to your home",
                  "Daily updates via text or call — no chasing us down",
                  "We protect your floors, furniture, and other rooms during work",
                  "Fixed-price contracts — no surprise invoices",
                  "All work is permitted and code compliant",
                  "1-year craftsmanship warranty on all labor",
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
                alt="Kitchen remodel transformation"
                className="rounded-2xl shadow-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl px-6 py-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#1a7c1a" }}>
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-gray-900 text-lg">On-Time Delivery</div>
                    <div className="text-xs text-gray-500">98% of projects finish on schedule</div>
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
            <h2 className="text-3xl font-extrabold text-gray-900">Common Kitchen Fitting Questions</h2>
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

      {/* CTA Banner */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0a280a 0%, #1a7c1a 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-green-200 text-lg mb-8">
            Get a free, no-obligation estimate from NJ's most trusted kitchen fitting team.
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
