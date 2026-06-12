import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ShieldCheck,
  Hammer,
  Heart,
  MapPin,
  Check,
  Phone,
  Mail,
  ArrowRight,
  Bath,
  ChefHat,
  Paintbrush,
  Layers,
  Construction,
  Home,
  Star
} from "lucide-react";
import teamImg from "@/assets/team.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Jhay's Construction | Top Rated NJ Contractor" },
      {
        name: "description",
        content: "Jhay's Construction is a trusted local contractor in New Jersey, specializing in bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. Licensed & insured. Free estimates.",
      },
      { property: "og:title", content: "About Us — Jhay's Construction" },
      {
        property: "og:description",
        content: "Jhay's Construction is a trusted local contractor in Howell, NJ, specializing in bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />

      {/* About Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden text-center text-white">
        <img
          src={heroImg}
          alt="Jhay's Construction building project"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,128,0,0.85)" }} />
        
        <div className="relative max-w-4xl mx-auto py-12">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            About Jhay's Construction
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Quality Craftsmanship.<br />Local Trust. Lasting Results.
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Jhay's Construction brings expert home remodeling and construction services to homeowners across Howell, Perth Amboy, Woodbridge, and surrounding New Jersey communities.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Our Story
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              Building Dreams, One Home at a Time
            </h2>
            <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Jhay's Construction was founded with a simple mission: to deliver exceptional home renovations with honesty, transparency, and old-fashioned work ethic. Based in Howell Township, we've become a trusted name for homeowners who refuse to settle for anything less than quality.
              </p>
              <p>
                From complete bathroom overhauls to custom patios, finished basements, and room additions, we approach every project as if it were our own home. We listen first, plan carefully, and execute with precision — no shortcuts, no surprises.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={teamImg}
              alt="Jhay's Construction team"
              loading="lazy"
              className="rounded-[2rem] shadow-xl object-cover w-full h-[400px] border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Core Values
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              What We Stand For
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              How we work and what it means for you and your home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Integrity",
                desc: "We give honest quotes, communicate clearly, and stand behind our work.",
              },
              {
                icon: Hammer,
                title: "Craftsmanship",
                desc: "Every tile, cabinet, and deck board is installed with care and skill.",
              },
              {
                icon: Heart,
                title: "Respect",
                desc: "We treat your home like ours — clean worksites, punctual teams, and zero disruptions.",
              },
              {
                icon: MapPin,
                title: "Local Commitment",
                desc: "We're proud to serve Howell, Freehold, Brick, Toms River, and the wider NJ area.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="size-12 rounded-xl text-white flex items-center justify-center mb-5"
                  style={{ backgroundColor: "#008000" }}
                >
                  <v.icon className="size-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services at a Glance Section */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Our Services at a Glance
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Professional solutions for all of your home improvement needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Bath,
                title: "Bathroom Fitting",
                desc: "Spa-inspired designs, modern fixtures, custom tiling",
              },
              {
                icon: ChefHat,
                title: "Kitchen Fitting",
                desc: "Custom cabinetry, stone countertops, functional layouts",
              },
              {
                icon: Paintbrush,
                title: "Patio Installation",
                desc: "Durable, beautiful outdoor living spaces",
              },
              {
                icon: Layers,
                title: "Decking",
                desc: "Pressure-treated, composite, and custom deck designs",
              },
              {
                icon: Construction,
                title: "Driveway Installation",
                desc: "Asphalt, pavers, and stamped concrete",
              },
              {
                icon: Home,
                title: "Room Addition",
                desc: "Seamlessly expand your living space",
              },
              {
                icon: Layers,
                title: "Basement Finishing",
                desc: "Transform unused space into cozy family rooms or guest suites",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4 hover:border-[#008000]/30 hover:bg-[#008000]/5 transition-all group"
              >
                <div
                  className="size-10 rounded-full text-white flex items-center justify-center shrink-0 mt-0.5"
                  style={{ backgroundColor: "#008000" }}
                >
                  <s.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-gray-900 group-hover:text-gray-950 transition-colors mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Why Homeowners Trust Jhay's
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Licensed & Insured",
                desc: "Full protection for you and your property",
              },
              {
                title: "Free In-Home Consultations",
                desc: "No obligation, just honest advice",
              },
              {
                title: "Transparent Pricing",
                desc: "Detailed estimates, no hidden fees",
              },
              {
                title: "Local Expertise",
                desc: "We know NJ building codes and permit processes",
              },
              {
                title: "Customer-First Approach",
                desc: "Your satisfaction is our bottom line",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center gap-4 shadow-sm"
              >
                <div
                  className="size-8 rounded-full text-white flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Check className="size-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-tight">
                    {item.title} — <span className="text-gray-600 font-normal">{item.desc}</span>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area & Meet Jhay Section */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-stretch">
          {/* Service Area Card */}
          <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="size-10 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: "#008000" }}
                >
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900">Our Service Area</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Howell Base & Beyond
                  </p>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                We proudly serve homeowners and businesses throughout the following New Jersey communities:
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  "Perth Amboy",
                  "Hillside Terrace",
                  "Allentown",
                  "Fords",
                  "Woodbridge",
                  "Freehold",
                  "Old Bridge",
                  "Robertsville",
                  "Toms River",
                  "Brick Township",
                  "Lakewood",
                  "Jackson Township",
                ].map((town) => (
                  <span
                    key={town}
                    className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
                  >
                    {town}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4">
              Can't find your town? Give us a call — we cover a wide 25 miles radius and likely serve your area too.
            </p>
          </div>

          {/* Jhay Founder Card */}
          <div className="bg-white border border-gray-150 rounded-[2rem] p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="size-10 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Star className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-gray-900">Meet Jhay</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Founder & Lead Contractor
                  </p>
                </div>
              </div>

              <blockquote className="border-l-4 pl-4 italic text-gray-700 text-sm md:text-base leading-relaxed mb-6" style={{ borderLeftColor: "#008000" }}>
                "I started this company because I believe homeowners deserve better — better quality, better communication, and better value. Every project is personal to me."
              </blockquote>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Our crew consists of skilled carpenters, tile setters, plumbers, and finishers who share one goal: making your home better than we found it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise (Large Quote Display) */}
      <section className="py-[60px] px-4 text-center text-white" style={{ backgroundColor: "#008000" }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Our Promise To You
          </span>
          <h2 className="font-display font-bold text-2xl md:text-4xl max-w-3xl mx-auto leading-relaxed">
            "We won't leave until you love every detail. From the first handshake to the final walkthrough, Jhay's Construction is committed to your complete satisfaction."
          </h2>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Ready to transform your home? Let's talk.
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-10 max-w-md mx-auto">
            Get in touch today to discuss your project and schedule your free estimate.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-10 text-left">
            <a href="tel:7326731569" className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
              <Phone className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call Us</div>
                <div className="font-semibold text-gray-900 text-sm">(732) 673-1569</div>
              </div>
            </a>
            <a href="mailto:jhaycconstruction@gmail.com" className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow">
              <Mail className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email Us</div>
                <div className="font-semibold text-gray-950 text-sm truncate">jhaycconstruction@gmail.com</div>
              </div>
            </a>
            <div className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm">
              <MapPin className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Us</div>
                <div className="font-semibold text-gray-900 text-xs leading-relaxed">
                  735 Hulses Corner Rd, Howell Township, NJ 07731
                </div>
              </div>
            </div>
          </div>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-semibold text-base shadow-md hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
            style={{ backgroundColor: "#008000" }}
          >
            Get Your Free Estimate Today <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
