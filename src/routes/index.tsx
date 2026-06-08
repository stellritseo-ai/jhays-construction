import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin,
  ChefHat, Bath, Paintbrush, Construction, Home, Layers,
  Hammer, Award, Users, ShieldCheck, Sparkles, MessageCircle,
  ArrowRight, Star, Quote, CheckCircle2, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import welcomeImg from "@/assets/welcome.jpg";
import teamImg from "@/assets/team.jpg";
import p1 from "@/assets/project1.jpg";
import p2 from "@/assets/project2.jpg";
import p3 from "@/assets/project3.jpg";
import p4 from "@/assets/project4.jpg";
import p5 from "@/assets/project5.jpg";
import p6 from "@/assets/project6.jpg";
import p7 from "@/assets/project7.jpg";
import p8 from "@/assets/project8.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhay's Construction — Residential & Commercial General Contractor in NJ" },
      { name: "description", content: "Jhay's Construction is a trusted residential & commercial general contractor in Howell Township, NJ. Kitchen, bath, paving, additions and more." },
      { property: "og:title", content: "Jhay's Construction — NJ General Contractor" },
      { property: "og:description", content: "No job is too small or too big. Quality residential & commercial general contracting services." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: ChefHat, title: "Kitchen Fitting Service", desc: "Custom kitchens designed and built with premium materials for lasting beauty and function." },
  { icon: Bath, title: "Bathroom Fitting", desc: "From modern luxury baths to compact remodels, we deliver craftsmanship that lasts." },
  { icon: Paintbrush, title: "Patio Installation & Repair", desc: "Outdoor patios that extend your living space — built to weather every season." },
  { icon: Construction, title: "Driveway Paving Service", desc: "Durable driveways using premium asphalt and pavers, installed with precision." },
  { icon: Home, title: "Room Addition & Repair", desc: "Add space or restore beauty — additions seamlessly integrated with your home." },
  { icon: Layers, title: "Basement Finishing", desc: "Transform unused basements into vibrant, functional living areas." },
];

const stats = [
  { icon: Hammer, label: "Projects Completed", value: "5000+" },
  { icon: Users, label: "Happy Clients", value: "4900" },
  { icon: Award, label: "Expert Members", value: "10+" },
];

const values = [
  { icon: Award, title: "21+ Years of Experience", desc: "Over two decades serving New Jersey homeowners with proven craftsmanship." },
  { icon: ShieldCheck, title: "Owner-Led, Locally Operated", desc: "Direct accountability from owner to job site — no middlemen, no surprises." },
  { icon: CheckCircle2, title: "Quality That Lasts", desc: "Premium materials and meticulous workmanship on every project." },
  { icon: Sparkles, title: "Full Service Residential Experts", desc: "Whatever your home needs — we plan, build and finish it under one roof." },
  { icon: MessageCircle, title: "Clear Communication & Fair Pricing", desc: "Transparent quotes, honest timelines, no hidden fees." },
  { icon: Star, title: "Customer Satisfaction First", desc: "Our reputation is built on word of mouth — we treat every home like our own." },
];

const projects = [p1, p2, p3, p4, p5, p6, p7, p8];

const testimonials = [
  { name: "Sara H.", review: "Jhay's team was incredible from start to finish. Our kitchen remodel exceeded every expectation — on time, on budget, and beautifully done." },
  { name: "Mike S.", review: "Professional, communicative and skilled. They handled our bathroom and basement and the quality is unmatched. Highly recommend." },
  { name: "Carl R.", review: "Honest, hard-working contractors. They walked us through every step and the finished work speaks for itself. Will hire again." },
];

const navLinks = ["Home", "About Us", "Services", "Our Work", "Reviews", "Contact"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Bar */}
      <div className="bg-primary-dark text-primary-foreground text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex gap-5">
            <span className="flex items-center gap-1.5"><Mail className="size-3.5" /> info@jhaysconstruction.com</span>
            <span className="hidden sm:flex items-center gap-1.5"><MapPin className="size-3.5" /> Howell Township, NJ</span>
          </div>
          <div className="flex gap-3 items-center">
            <span>Follow us:</span>
            <Facebook className="size-3.5 hover:text-white/70 cursor-pointer" />
            <Instagram className="size-3.5 hover:text-white/70 cursor-pointer" />
            <Twitter className="size-3.5 hover:text-white/70 cursor-pointer" />
            <Linkedin className="size-3.5 hover:text-white/70 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <div className="size-10 rounded-lg gradient-primary grid place-items-center shadow-glow">
              <Hammer className="size-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base">JHAY'S</div>
              <div className="text-[10px] tracking-[0.2em] text-white/70">CONSTRUCTION</div>
            </div>
          </a>
          <nav className="hidden lg:flex gap-7 text-sm font-medium text-white/90">
            {navLinks.map((l) => (
              <a key={l} href="#" className="hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all">
                {l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 gradient-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform">
            Get a Quote <ArrowRight className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Construction work" className="absolute inset-0 size-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.17_145/0.35),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4 text-center text-white py-24">
          <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] mb-6 animate-fade-up">
            <Sparkles className="size-3.5" /> Trusted Since 2003
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            "NO JOB IS TOO SMALL <br /> OR TOO BIG"
          </h1>
          <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Residential & Commercial General Contracting Services in New Jersey — delivered on time, on budget, with craftsmanship that lasts.
          </p>
          <div className="flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a href="#services" className="gradient-primary px-7 py-3.5 rounded-full font-semibold text-sm shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2">
              Our Services <ChevronRight className="size-4" />
            </a>
            <a href="#contact" className="glass px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center gap-2">
              Free Estimate
            </a>
          </div>
        </div>

        {/* floating glass stat */}
        <div className="absolute bottom-8 right-8 hidden md:block glass rounded-2xl p-4 text-white animate-float">
          <div className="text-3xl font-display font-bold">21+</div>
          <div className="text-xs uppercase tracking-widest text-white/80">Years Experience</div>
        </div>
      </section>

      {/* Welcome */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,oklch(0.93_0.05_145),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              <span className="size-1.5 rounded-full bg-primary" /> Welcome
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Jhay's <span className="text-primary">Construction</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-3">
              Best Home Improvement Contractor in Howell Township.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a multi-service general contractor in New Jersey, we have the experience and expertise to bring any vision to life. From custom kitchens and luxury bathrooms to room additions and full home renovations, our team works closely with every client to deliver projects on time, on budget, and beyond expectation.
            </p>
            <div className="glass-card rounded-xl p-5 mb-7 border-l-4 border-primary">
              <div className="font-display font-semibold mb-1.5">Our Mission</div>
              <p className="text-sm text-muted-foreground">
                To redefine quality residential construction — combining honest pricing, transparent communication and award-winning craftsmanship under one roof.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-3 rounded-full font-semibold text-sm shadow-glow hover:scale-105 transition-transform">
              Explore Our Company <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={welcomeImg} alt="Construction worker" loading="lazy" width={800} height={800} className="rounded-2xl shadow-card object-cover h-72 w-full" />
              <img src={teamImg} alt="Construction team" loading="lazy" width={800} height={900} className="rounded-2xl shadow-card object-cover h-72 w-full mt-10" />
            </div>
            <div className="absolute -bottom-6 -left-6 size-32 rounded-full gradient-primary text-white grid place-items-center text-center shadow-glow animate-float">
              <div>
                <div className="text-3xl font-display font-bold leading-none">20+</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">Years Of<br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-8 px-4 gradient-primary">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-white">
          <div className="font-display text-lg md:text-xl font-semibold">
            Looking for Residential & Commercial General Contractors?
          </div>
          <a href="tel:7324261499" className="glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors">
            <Phone className="size-4" /> (732) 426-1499
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Services
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              We Are The <span className="text-primary">Professional General</span> Contractor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={s.title} className="group relative glass-card rounded-2xl p-7 hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="size-14 rounded-xl gradient-primary grid place-items-center mb-5 group-hover:scale-110 transition-transform shadow-glow">
                  <s.icon className="size-7 text-white" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <a href="#contact" className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="size-3.5" />
                </a>
                <div className="absolute top-4 right-4 text-7xl font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                  0{i + 1}
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="inline-flex items-center gap-2 gradient-primary text-white px-7 py-3 rounded-full font-semibold text-sm shadow-glow hover:scale-105 transition-transform">
              View More Services <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 px-4 gradient-primary text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-white/80">Numbers Speak</div>
            <div className="font-display text-3xl font-bold mt-1">Everything</div>
          </div>
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="size-14 rounded-xl glass grid place-items-center">
                <s.icon className="size-7" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/85">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Our Values
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Why Choose <span className="text-primary">Jhay's Construction?</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Choose us for honest pricing, quality craftsmanship and a team that treats your home like our own.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-5">
              {values.slice(0, 3).map((v) => (
                <ValueItem key={v.title} v={v} align="right" />
              ))}
            </div>
            <div className="relative order-first lg:order-none">
              <img src={teamImg} alt="Our team" loading="lazy" width={800} height={900} className="rounded-2xl shadow-card object-cover w-full h-[480px]" />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/20" />
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass-card px-5 py-3 rounded-full font-display font-bold text-primary text-sm whitespace-nowrap shadow-glow">
                JHAY'S CONSTRUCTION
              </div>
            </div>
            <div className="space-y-5">
              {values.slice(3).map((v) => (
                <ValueItem key={v.title} v={v} align="left" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-4 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
            <div>
              <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                Gallery
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl">Latest <span className="text-primary">Projects</span></h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform">
              View More <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((src, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-card">
                <img src={src} alt={`Project ${i + 1}`} loading="lazy" width={640} height={512} className="size-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity grid place-items-end p-4">
                  <div className="glass text-white text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">View Project</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 px-4 overflow-hidden">
        <img src={heroImg} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="relative max-w-7xl mx-auto text-white">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Google Reviews
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              See What People <br /> Are Saying About Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-dark rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-full bg-white grid place-items-center text-xs font-bold text-primary">G</div>
                  <div className="text-sm">
                    <div className="font-semibold">Google Review</div>
                    <div className="flex gap-0.5 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <Quote className="size-6 text-primary/60 mb-2" />
                <p className="text-sm text-white/85 leading-relaxed mb-5">{t.review}</p>
                <div className="pt-4 border-t border-white/10 text-sm font-semibold">{t.name} <span className="text-white/60 font-normal">— Howell, NJ</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 gradient-primary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-flex items-center gap-2 glass text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4">
              Contact Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-3">
              Feel Free To Contact Us For Any Kind Of Query
            </h2>
            <p className="text-white/80 mb-8">We're here to answer your questions and provide a no-pressure estimate.</p>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "Phone Number", value: "(732) 426-1499" },
                { icon: MapPin, label: "Address", value: "123 Main St, Howell Township, NJ 07731" },
                { icon: Mail, label: "Email Address", value: "info@jhaysconstruction.com" },
                { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM | Sat - Sun: Closed" },
              ].map((c) => (
                <div key={c.label} className="glass rounded-xl p-4 flex items-start gap-4">
                  <div className="size-11 rounded-lg bg-white text-primary grid place-items-center shrink-0">
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/70 mb-0.5">{c.label}</div>
                    <div className="font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
              <div className="glass rounded-xl p-4 flex items-center gap-4">
                <ShieldCheck className="size-10 text-white" />
                <div className="text-sm">
                  <div className="font-bold">Licensed, Insured & Bonded</div>
                  <div className="text-white/75 text-xs">Your protection, our promise.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-dark rounded-3xl p-8">
            <h3 className="font-display font-bold text-2xl mb-6 text-white">Free Estimate</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60" />
                <input placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60" />
                <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/60">
                  <option className="text-foreground">Select Service</option>
                  {services.map((s) => <option key={s.title} className="text-foreground">{s.title}</option>)}
                </select>
              </div>
              <textarea rows={5} placeholder="Tell us about your project..." className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 resize-none" />
              <button className="w-full bg-white text-primary font-bold py-3.5 rounded-xl hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">
                Send Message <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Areas Covered */}
      <section className="py-20 px-4 bg-secondary/40 relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Service Area
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-3">Areas <span className="text-primary">Covered</span></h2>
          <p className="text-muted-foreground mb-10">24 km Radius Of New Jersey And Surrounding Areas</p>
          <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[16/8] glass-card grid place-items-center">
            <iframe
              title="Service area map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.35%2C40.10%2C-74.05%2C40.30&layer=mapnik&marker=40.20,-74.20"
              className="absolute inset-0 size-full"
              loading="lazy"
            />
            <div className="relative glass rounded-2xl px-8 py-5 backdrop-blur-xl">
              <MapPin className="size-8 text-primary mx-auto mb-2" />
              <div className="font-display font-bold text-lg">Howell Township, NJ</div>
              <div className="text-xs text-muted-foreground">& 24 km surrounding area</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-foreground text-white/80 pt-20 pb-6 px-4 overflow-hidden">
        <img src={heroImg} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-10" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="size-10 rounded-lg gradient-primary grid place-items-center shadow-glow">
                  <Hammer className="size-5 text-white" />
                </div>
                <div className="leading-tight text-white">
                  <div className="font-display font-bold">JHAY'S</div>
                  <div className="text-[10px] tracking-[0.2em] text-white/70">CONSTRUCTION</div>
                </div>
              </div>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Jhay's Construction has been serving New Jersey homeowners for over two decades with quality craftsmanship and honest pricing.
              </p>
              <div className="flex gap-3">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="size-9 rounded-full glass grid place-items-center hover:gradient-primary transition-all">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol title="Quick Links" items={["Home", "About Us", "Services", "Our Work", "Reviews", "Contact"]} />
            <FooterCol title="Our Services" items={services.map((s) => s.title)} />
            <FooterCol title="Areas We Serve" items={["Howell, NJ", "Freehold, NJ", "Toms River, NJ", "Brick, NJ", "Jackson, NJ", "Lakewood, NJ"]} />
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Jhay's Construction. All Rights Reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ValueItem({ v, align }: { v: { icon: typeof Award; title: string; desc: string }; align: "left" | "right" }) {
  const Icon = v.icon;
  return (
    <div className={`flex gap-4 ${align === "right" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <div className="size-12 shrink-0 rounded-xl gradient-primary text-white grid place-items-center shadow-glow">
        <Icon className="size-6" />
      </div>
      <div>
        <h4 className="font-display font-bold mb-1">{v.title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
      </div>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-white/70 hover:text-primary inline-flex items-center gap-1.5 transition-colors">
              <ChevronRight className="size-3" /> {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
