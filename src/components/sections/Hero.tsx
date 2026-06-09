import { Sparkles, ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";

const slides = [b1, b2, b3];

export function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">

      {/* Slider Images */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className="absolute inset-0 size-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          width={1920}
          height={1080}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.17_145/0.35),transparent_60%)]" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center text-white py-24">
        <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] mb-6 animate-fade-up">
          <Sparkles className="size-3.5" /> Trusted Since 2003
        </div>
        <h1
          className="font-display font-bold mb-4 animate-fade-up"
          style={{ fontSize: "35px", lineHeight: "55px", animationDelay: "0.1s" }}
        >
          "NO JOB IS TOO SMALL OR TOO BIG" <br />
          Residential &amp; Commercial General Contracting Services
        </h1>
        <p className="text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          From Driveways - Patios to Sidewalks and Remodeling, we work closely with you to bring your
          dream space to life—on time, on budget, and with minimal disruption.
        </p>
        <div className="flex flex-wrap gap-3 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a href="#services" className="gradient-primary px-7 py-3.5 rounded-full font-semibold text-sm shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2">
            Our Services <ChevronRight className="size-4" />
          </a>
          <a href="/estimate" className="glass px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center gap-2">
            Free Estimate
          </a>
        </div>
      </div>

      {/* Slider Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full size-11 grid place-items-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full size-11 grid place-items-center text-white hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="size-2.5 rounded-full transition-all duration-300"
            style={{ backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>

      {/* Floating glass stat */}
      <div className="absolute bottom-8 right-8 hidden md:block glass rounded-2xl p-4 text-white animate-float">
        <div className="text-3xl font-display font-bold">21+</div>
        <div className="text-xs uppercase tracking-widest text-white/80">Years Experience</div>
      </div>
    </section>
  );
}
