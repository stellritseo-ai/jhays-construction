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
    title: "Kitchen Fitting Service",
    desc: "We spend so much of our lives in our kitchens, whether we eat, talk, cook, or clean there. They're a key part of any home and that's why it is essential to know...",
    img: welcomeImg,
    featured: true,
    href: "/services/kitchen-fitting",
  },
  {
    icon: Bath,
    title: "Bathroom Fitting Service",
    desc: "Is your bathroom in need of a makeover? Then this bathroom renovation service will ensure that no leaks or mould appear to guarantee your bathroom looks clean...",
    img: p1,
    href: "/services/bathroom-fitting",
  },
  {
    icon: Paintbrush,
    title: "Patios Installation & Repair",
    desc: "Looking to spruce up your patio or driveway? Go with a block or brick pavement and make your property stand out from the rest. An expert brick paver...",
    img: p2,
    href: "/services/patios",
  },
  {
    icon: Construction,
    title: "Driveway Paving Service",
    desc: "Driveways take quite the battering over time with cars and people coming in and out, but they can also collect other debris such as leaf matter and rubbish...",
    img: p3,
    href: "/services/driveways",
  },
  {
    icon: Home,
    title: "Room Addition And Repair",
    desc: "Thinking of extending your kitchen into a bigger, more liveable space? A local professional extensions & conversions service supplier can advise you on the...",
    img: p4,
    href: "/services/room-additions",
  },
  {
    icon: Layers,
    title: "Basement Finishing Service",
    desc: "If you're dreaming of turning your basement into an extra reception room or maybe even a games room then you'll need someone to convert it for you...",
    img: p5,
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
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: "320px" }}
            >
              {/* Background image — always present, fades in on hover for non-featured */}
              <img
                src={s.img}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ opacity: s.featured ? 1 : 0, transition: "opacity 0.4s ease, transform 0.5s ease" }}
              />
              {/* For non-featured: reveal image on hover via CSS trick */}
              {!s.featured && (
                <img
                  src={s.img}
                  alt=""
                  aria-hidden
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100"
                  style={{ transition: "opacity 0.4s ease, transform 0.5s ease" }}
                />
              )}

              {/* White background for non-featured cards (hides on hover) */}
              {!s.featured && (
                <div
                  className="absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-400"
                  style={{ border: "1px solid #e8e8e8", borderRadius: "1rem" }}
                />
              )}

              {/* Dark overlay — only visible when image is shown */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  backgroundColor: "rgba(0,0,0,0.58)",
                  opacity: s.featured ? 1 : 0,
                  borderRadius: "1rem",
                }}
              // Tailwind can't do this conditionally so we use the group trick below
              />
              {!s.featured && (
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                  style={{ backgroundColor: "rgba(0,0,0,0.58)" }}
                />
              )}

              {/* Content */}
              <div className="relative p-6 flex flex-col" style={{ minHeight: "320px" }}>
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="size-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#1a7c1a" }}
                  >
                    <s.icon className="size-7 text-white" />
                  </div>
                  <h3
                    className="font-bold text-lg leading-tight transition-colors duration-300"
                    style={{ color: s.featured ? "white" : undefined }}
                  // non-featured: dark by default, white on hover
                  >
                    <span className={s.featured ? "text-white" : "text-gray-900 group-hover:text-white transition-colors duration-300"}>
                      {s.title}
                    </span>
                  </h3>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mt-[53px] mb-5 flex-1 transition-colors duration-300 ${s.featured ? "text-white/85" : "text-gray-500 group-hover:text-white/85"
                    }`}
                >
                  {s.desc}
                </p>

                {/* Read More button */}
                <div>
                  {s.featured ? (
                    <a
                      href={s.href}
                      className="inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: "#1a7c1a" }}
                    >
                      Read More
                    </a>
                  ) : (
                    <>
                      {/* Default state: outlined green */}
                      <a
                        href={s.href}
                        className="inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold group-hover:hidden transition-all"
                        style={{ border: "1px solid #1a7c1a", color: "#1a7c1a" }}
                      >
                        Read More
                      </a>
                      {/* Hover state: white filled */}
                      <a
                        href={s.href}
                        className="hidden group-hover:inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: "#1a7c1a", color: "white" }}
                      >
                        Read More
                      </a>
                    </>
                  )}
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
