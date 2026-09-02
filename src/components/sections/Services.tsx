import { ChefHat, Bath, Paintbrush, Construction, Home, Layers, ChevronRight } from "lucide-react";
import welcomeImg from "@/assets/kitchen.webp";
import p1 from "@/assets/bathroom.jpeg";
import p2 from "@/assets/patios.jpg";
import p3 from "@/assets/driveway.jpeg";
import p4 from "@/assets/room-addition.jpeg";
import p5 from "@/assets/basement.jpg";

export const servicesList = [
  {
    icon: ChefHat,
    title: "Kitchen Remodeling",
    desc: "Transform your kitchen with custom cabinetry, premium countertops, and full installations. We handle everything from design to the final reveal — serving Howell, NJ and surrounding areas.",
    img: welcomeImg,
    imgAlt: "Kitchen remodeling project in Howell Township NJ by Jhay's Construction",
    featured: true,
    href: "/services/kitchen-fitting",
  },
  {
    icon: Bath,
    title: "Bathroom Remodeling",
    desc: "Is your bathroom in need of a makeover? From walk-in showers to full gut renovations, our team delivers stunning bathrooms with zero shortcuts.",
    img: p1,
    imgAlt: "Bathroom remodeling service in Howell NJ — Jhay's Construction",
    href: "/services/bathroom-fitting",
  },
  {
    icon: Paintbrush,
    title: "Patio Installation",
    desc: "Custom paver patios, natural stone, pergolas, and outdoor kitchens — we create outdoor living spaces built for New Jersey's climate.",
    img: p2,
    imgAlt: "Patio installation and hardscaping in Howell NJ by Jhay's Construction",
    href: "/services/patios",
  },
  {
    icon: Construction,
    title: "Driveway Paving",
    desc: "New asphalt, concrete, or paver driveways — plus crack repair and sealcoating. Properly engineered foundations, clean edges, and lasting results.",
    img: p3,
    imgAlt: "Driveway paving and repair service in Howell NJ by Jhay's Construction",
    href: "/services/driveways",
  },
  {
    icon: Home,
    title: "Home Additions",
    desc: "Need more space? We design and build seamless room additions — master suites, family rooms, second stories, and sunrooms — fully permitted.",
    img: p4,
    imgAlt: "Home addition and room extension in Howell NJ by Jhay's Construction",
    href: "/services/room-additions",
  },
  {
    icon: Layers,
    title: "Basement Finishing",
    desc: "Unlock your basement's potential. We transform raw, unfinished basements into beautiful living spaces — home theaters, offices, guest suites, and more.",
    img: p5,
    imgAlt: "Basement finishing and remodeling in Howell NJ by Jhay's Construction",
    href: "/services/basement-finishing",
  },
];

export function Services() {
  return (
    <section id="services" className="py-[60px] px-4" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center px-6 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-5"
            style={{ backgroundColor: "#1a7c1a" }}
          >
            SERVICES
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900">
            We Are The{" "}
            <span style={{ color: "#1a7c1a" }}>Professional General</span>{" "}
            Contractor
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesList.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md"
              style={{ minHeight: "320px" }}
            >
              {/* Background image — always visible */}
              <img
                src={s.img}
                alt={s.imgAlt || s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Dark overlay — always visible */}
              <div
                className="absolute inset-0 transition-opacity duration-400 group-hover:bg-black/70 bg-black/60"
              />

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full" style={{ minHeight: "320px" }}>
                {/* Pushes content to the bottom */}
                <div className="mt-auto">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="size-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: "#1a7c1a" }}
                    >
                      <s.icon className="size-7 text-white" />
                    </div>
                    <h3 className="font-bold text-lg leading-tight text-white transition-colors duration-300">
                      {s.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] leading-relaxed text-white/90 transition-all duration-300 group-hover:mb-4">
                    {s.desc}
                  </p>

                  {/* Read More button (hidden until hover) */}
                  <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[48px] group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110"
                      style={{ backgroundColor: "#1a7c1a" }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <a
            href="/estimate"
            className="inline-flex items-center gap-1 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#1a7c1a" }}
          >
            Get a Custom Estimate <ChevronRight className="size-4" /><ChevronRight className="size-4 -ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
