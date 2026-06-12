import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Camera,
  Hammer,
  ShieldCheck,
  Check,
  Sparkles,
  Award
} from "lucide-react";
import p1 from "@/assets/g1.png";
import p2 from "@/assets/g2.png";
import p3 from "@/assets/g3.png";
import p4 from "@/assets/g4.png";
import p5 from "@/assets/g5.png";
import p6 from "@/assets/g6.png";
import p7 from "@/assets/g7.png";
import p8 from "@/assets/g8.png";
import p9 from "@/assets/g9.png";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Jhay's Construction | NJ Contractor" },
      {
        name: "description",
        content:
          "Explore the Jhay's Construction project gallery. Browse completed bathroom remodels, custom kitchens, decks, patios, basements, and home additions in New Jersey. Quality craftsmanship.",
      },
      { property: "og:title", content: "Our Work — Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Explore the Jhay's Construction project gallery. Browse completed bathroom remodels, custom kitchens, decks, patios, basements, and home additions.",
      },
    ],
  }),
  component: OurWorkPage,
});

const projects = [
  {
    id: 1,
    src: p1,
    category: "Bathrooms",
    title: "Modern Spa Bathroom",
    location: "Howell Township, NJ",
    desc: "A complete overhaul featuring custom tile work, glass walk-in shower, and premium vanity.",
    ratio: 610 / 809,
  },
  {
    id: 2,
    src: p2,
    category: "Kitchens",
    title: "Gourmet Kitchen Renovation",
    location: "Freehold, NJ",
    desc: "Custom cabinetry, stone countertops, and optimized layout for modern living.",
    ratio: 610 / 809,
  },
  {
    id: 3,
    src: p3,
    category: "Outdoor Living",
    title: "Custom Paver Patio",
    location: "Brick Township, NJ",
    desc: "Multi-level paver patio designed for outdoor entertaining and summer BBQs.",
    ratio: 610 / 809,
  },
  {
    id: 4,
    src: p4,
    category: "Outdoor Living",
    title: "Premium Composite Deck",
    location: "Toms River, NJ",
    desc: "Low-maintenance composite deck with custom railings and integrated step lighting.",
    ratio: 610 / 809,
  },
  {
    id: 5,
    src: p5,
    category: "Driveways",
    title: "Flawless Asphalt Driveway",
    location: "Perth Amboy, NJ",
    desc: "Full excavation, regrading, and high-durability asphalt paving.",
    ratio: 1198 / 537,
  },
  {
    id: 6,
    src: p6,
    category: "Additions",
    title: "Seamless Room Addition",
    location: "Wall Township, NJ",
    desc: "Architecturally matched second-story extension expanding the family living space.",
    ratio: 1198 / 537,
  },
  {
    id: 7,
    src: p7,
    category: "Basements",
    title: "Cozy Finished Basement",
    location: "Manalapan, NJ",
    desc: "Transformed dark basement into a family room, guest bedroom, and full bath.",
    ratio: 1198 / 537,
  },
  {
    id: 8,
    src: p8,
    category: "Bathrooms",
    title: "Classic Subway Tile Bath",
    location: "Woodbridge, NJ",
    desc: "Timeless design with subway tiling, walk-in tub, and high-efficiency fixtures.",
    ratio: 610 / 809,
  },
  {
    id: 9,
    src: p9,
    category: "Outdoor Living",
    title: "Relaxing Backyard Patio",
    location: "Rahway, NJ",
    desc: "Elegant brick-paver design perfect for peaceful morning coffee and reading.",
    ratio: 1198 / 537,
  },
];

const spotlights = [
  {
    img: b1,
    title: "Bathroom Transformation",
    location: "Howell Township, NJ",
    before: "Outdated 1980s layout, leaking fixtures, and worn vinyl flooring.",
    after: "Modern spa oasis with marble tiling, seamless glass door, dual rain-shower heads, and a custom double vanity.",
  },
  {
    img: b2,
    title: "Kitchen Overhaul",
    location: "Freehold, NJ",
    before: "Cramped dark oak cabinets, cracked countertops, and outdated lighting.",
    after: "Open-concept culinary layout, custom shaker cabinets, quartz waterfall island, and built-in professional appliances.",
  },
  {
    img: b3,
    title: "Outdoor Living Oasis",
    location: "Brick, NJ",
    before: "Uneven patchy lawn and old, rotting wooden steps.",
    after: "Premium multi-level paver patio, fire pit seating area, custom retaining wall, and integrated landscape lighting.",
  },
];

const categories = ["All", "Bathrooms", "Kitchens", "Outdoor Living", "Additions & Basements", "Driveways"];

function OurWorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Filter logic
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Additions & Basements") {
      return p.category === "Additions" || p.category === "Basements";
    }
    return p.category === activeFilter;
  });

  const handleImageClick = (src: string, globalIdx: number) => {
    setSelectedImage(src);
    setCurrentIndex(globalIdx);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (currentIndex === -1) return;
    let newIndex = currentIndex;
    if (direction === "prev") {
      newIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    } else {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex].src);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden text-center text-white">
        <img
          src={heroImg}
          alt="Jhay's Construction completed deck project"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,128,0,0.85)" }} />

        <div className="relative max-w-4xl mx-auto py-12">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            <Camera className="size-3.5 fill-[#008000]" /> Project Gallery
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Crafting Spaces You'll<br />Love to Live In
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our gallery of completed home remodeling projects across Howell Township and surrounding New Jersey areas. From dream kitchens and luxurious bathrooms to custom decks and finished basements.
          </p>
        </div>
      </section>

      {/* Before & After Transformations Spotlight */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Transformations
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Before & After Spotlights
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Real results for real homeowners. See the impact of our professional remodeling services.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {spotlights.map((s, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-150 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#008000] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Completed Project
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                        {s.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs md:text-sm">
                    <div className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold uppercase tracking-wider shrink-0 mt-0.5 text-[10px]">
                        Before:
                      </span>
                      <p className="text-gray-500 italic">{s.before}</p>
                    </div>
                    <div className="flex items-start gap-2.5 pt-2 border-t border-gray-200">
                      <span className="text-[#008000] font-bold uppercase tracking-wider shrink-0 mt-0.5 text-[10px]">
                        After:
                      </span>
                      <p className="text-gray-700 font-medium">{s.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Project Gallery Section */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Finished Works
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
              Our Completed Projects
            </h2>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeFilter === cat
                      ? "text-white shadow-md hover:scale-[1.01]"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"
                  }`}
                  style={{ backgroundColor: activeFilter === cat ? "#008000" : undefined }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Justified flexbox gallery layout with animations */}
          <div className="flex flex-wrap gap-4 min-h-[300px] transition-all duration-300">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm h-[200px] sm:h-[240px] md:h-[280px]"
                style={{
                  flexGrow: p.ratio,
                  flexBasis: `${240 * p.ratio}px`,
                }}
                onClick={() => handleImageClick(p.src, i)}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover Details overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] bg-[#008000] text-white px-2.5 py-0.5 rounded uppercase tracking-wider font-bold">
                      {p.category}
                    </span>
                    <h3 className="font-display font-bold text-base mt-2 mb-1">
                      {p.title}
                    </h3>
                    <p className="text-[10px] text-gray-300 font-semibold mb-2">
                      📍 {p.location}
                    </p>
                    <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-white font-bold mt-3 border-t border-white/20 pt-2 w-full">
                      <ZoomIn className="size-3.5 text-[#008000]" /> Click to zoom
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Spacer for proper final row layout alignment */}
            <div className="flex-grow-[999] h-[200px] sm:h-[240px] md:h-[280px]" style={{ flexBasis: "250px" }} />
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-white border border-gray-150 rounded-2xl">
              <p className="text-gray-500 font-medium text-sm">
                No projects found in this category. We are constantly updating our portfolio.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-[#008000]/10 text-[#008000] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            <Award className="size-4" /> Our Commitment To Quality
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
            Standards Built to Last
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            We don't take shortcuts. Every home renovation, driveway pour, and deck construction is handled with the utmost care, utilizing premium materials and vetted local crews.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              { title: "Expert Craftsmanship", desc: "Meticulous carpentry, tiling, and paving by local professionals." },
              { title: "Premium Materials", desc: "Durable fixtures, composite boards, and quality concrete brands." },
              { title: "Transparent Pricing", desc: "No hidden fees, line-item estimates, and locked quotes." },
              { title: "Licensed & Insured", desc: "NJ general contractor registration and full liability protection." },
            ].map((p, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-150 rounded-2xl p-5 shadow-sm">
                <div
                  className="size-8 rounded-full text-white flex items-center justify-center mb-4 shrink-0"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Check className="size-4.5" />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h4>
                <p className="text-[11px] text-gray-500 leading-normal">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 px-4 text-center text-white" style={{ backgroundColor: "#008000" }}>
        <div className="max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Let's Collaborate
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
            Inspired By Our Work? Let's Build Yours.
          </h2>
          <p className="text-white/95 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed">
            Get in touch with us today to discuss your ideas, schedule a consultation, and receive a free line-item estimate.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/estimate"
              className="inline-flex items-center gap-2 bg-white text-green-800 hover:bg-gray-150 px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all hover:scale-[1.01]"
            >
              Get A Free Estimate <ArrowRight className="size-4 text-[#008000]" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 border border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-[1.01]"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <style>{`
            @keyframes scaleUp {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <X className="size-6" />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("prev");
            }}
          >
            <ChevronLeft className="size-8" />
          </button>

          {/* Zoomed Image */}
          <div className="relative max-w-full max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Zoomed project view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              style={{ animation: "scaleUp 0.25s ease-out forwards" }}
            />
            {/* Overlay description below the image */}
            <div className="absolute bottom-0 inset-x-0 bg-black/75 px-6 py-4 rounded-b-lg text-white text-center">
              <h4 className="font-bold text-sm">
                {filteredProjects[currentIndex]?.title}
              </h4>
              <p className="text-[10px] text-gray-300 font-semibold mt-0.5">
                📍 {filteredProjects[currentIndex]?.location} — {filteredProjects[currentIndex]?.category}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox("next");
            }}
          >
            <ChevronRight className="size-8" />
          </button>

          {/* Image indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm z-50">
            {currentIndex + 1} / {filteredProjects.length}
          </div>
        </div>
      )}
    </div>
  );
}
