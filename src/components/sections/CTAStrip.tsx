import { Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function CTAStrip() {
  return (
    <section className="relative py-[60px] px-4 overflow-hidden">
      {/* Background image - sticky/parallax effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark green overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(20, 80, 20, 0.82)" }} />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-white">
        <div
          className="font-display font-bold leading-snug"
          style={{ fontSize: "28px" }}
        >
          Looking for Residential &amp; Commercial General Contractors?
        </div>
        <a
          href="tel:7324261499"
          className="inline-flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-colors shadow-lg whitespace-nowrap"
        >
          <Phone className="size-4" /> (732) 426-1499
        </a>
      </div>
    </section>
  );
}
