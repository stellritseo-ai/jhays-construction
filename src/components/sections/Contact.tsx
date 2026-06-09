import { Phone, MapPin, Mail, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { servicesList } from "./Services";

export function Contact() {
  return (
    <section id="contact" className="py-[60px] px-4 text-white" style={{ backgroundColor: "#008000" }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Contact Info */}
        <div className="lg:col-span-6">
          <span
            className="inline-flex items-center px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 bg-white text-[#008000]"
          >
            CONTACT US
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight">
            Feel Free To Contact Us For Any Kind Of Query
          </h2>
          <p className="text-white/80 text-base mb-8 leading-relaxed">
            We're here to answer your questions, discuss your vision, and provide a detailed, no-pressure estimate.
          </p>

          <div className="space-y-4">
            {[
              { icon: Phone, label: "Phone Number", value: "(732) 673-1569", href: "tel:7326731569" },
              { icon: MapPin, label: "Address", value: "735 Hulses Corner Rd,Howell Township, New Jersey, 07731" },
              { icon: Mail, label: "Email Address", value: "jhaycconstruction@gmail.com", href: "mailto:jhaycconstruction@gmail.com" },
              { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM | Sat - Sun: Closed" },
            ].map((c) => (
              <div key={c.label} className="bg-white/10 border border-white/10 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:bg-white/15 transition-colors">
                <div
                  className="size-11 rounded-full flex items-center justify-center shrink-0 bg-white text-[#008000]"
                >
                  <c.icon className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-0.5">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-white hover:text-white/80 transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-white">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <ShieldCheck className="size-10 text-white" />
              <div className="text-sm">
                <div className="font-bold text-white">Licensed, Insured & Bonded</div>
                <div className="text-white/70 text-xs">Your protection, our promise.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Modern Form Card (Sticky on desktop) */}
        <div className="lg:col-span-6 lg:sticky lg:top-28 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100">
          <h3 className="font-display font-bold text-2xl mb-6 text-gray-900">Get a Free Estimate</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="(732) 673-1569"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Select Service</label>
                <div className="relative">
                  <select
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Service</option>
                    {servicesList.map((s) => (
                      <option key={s.title} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Project Details</label>
              <textarea
                rows={4}
                placeholder="Tell us about your project (e.g. size, timeline, specific requests)..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              style={{ backgroundColor: "#008000" }}
            >
              Send Message <ArrowRight className="size-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
