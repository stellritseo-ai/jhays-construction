import { ChevronsRight } from "lucide-react";
import teamImg from "@/assets/why.png";

const leftValues = [
  {
    title: "23 Years of Experience",
    desc: "With over two decades in the residential & Commercial construction industry, we bring unmatched expertise and proven craftsmanship to every project we touch.",
  },
  {
    title: "Owner-Led, Locally Operated",
    desc: "Led by Leon Holley, our company is proudly based in Township, New Jersey. We're committed to serving our community with integrity, honesty, and personal attention on every job.",
  },
  {
    title: "Quality That Lasts",
    desc: "From Patios Installation to Driveway Paving, we use high-grade materials and precise techniques to ensure long-lasting, quality results that you can rely on.",
  },
];

const rightValues = [
  {
    title: "Full-Service Residential Experts",
    desc: "We handle everything from driveways and decks to remodeling and additions. No need to juggle multiple contractors—we've got all your residential & commercial needs covered under one roof.",
  },
  {
    title: "Clear Communication & Fair Pricing",
    desc: "We believe great service starts with clear communication. You'll always know what to expect, with no hidden costs or surprises—just honest work at competitive prices.",
  },
  {
    title: "Customer Satisfaction First",
    desc: "Your home is your biggest investment—and we treat it with the respect it deserves. Our goal is to exceed your expectations and build a result you'll be proud of.",
  },
];

export function WhyChoose() {
  return (
    <section className="py-[60px] px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center px-6 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "#008000" }}
          >
            OUR VALUES
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            Why Choose Jhay's Construction?
          </h2>
          <p className="text-gray-900 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Choosing the right contractor for your home is a big decision—and at Jhay's Construction, we make it easy.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-[1fr_380px_1fr] gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            {leftValues.map((v) => (
              <ValueItem key={v.title} v={v} />
            ))}
          </div>

          {/* Middle Image */}
          <div className="relative order-first lg:order-none flex justify-center">
            <img
              src={teamImg}
              alt="Jhay's Construction team"
              loading="lazy"
              className="rounded-[1rem] shadow-md object-cover w-full max-w-[380px] h-[520px]"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {rightValues.map((v) => (
              <ValueItem key={v.title} v={v} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueItem({ v }: { v: { title: string; desc: string } }) {
  return (
    <div className="flex gap-4 items-start">
      <div
        className="size-7 rounded-full text-white flex items-center justify-center shrink-0 mt-1"
        style={{ backgroundColor: "#008000" }}
      >
        <ChevronsRight className="size-4" />
      </div>
      <div>
        <h4 className="font-display font-bold text-gray-900 text-lg mb-1.5">
          {v.title}
        </h4>
        <p className="text-sm text-gray-800 leading-relaxed">
          {v.desc}
        </p>
      </div>
    </div>
  );
}
