import { Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const testimonials = [
  { name: "Sara H.", review: "Jhay's team was incredible from start to finish. Our kitchen remodel exceeded every expectation — on time, on budget, and beautifully done." },
  { name: "Mike S.", review: "Professional, communicative and skilled. They handled our bathroom and basement and the quality is unmatched. Highly recommend." },
  { name: "Carl R.", review: "Honest, hard-working contractors. They walked us through every step and the finished work speaks for itself. Will hire again." },
];

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-[60px] px-4 overflow-hidden">
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
  );
}
