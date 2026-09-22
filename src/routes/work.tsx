import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
  Award,
  MapPin,
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
import f1 from "@/assets/20260820_133324.jpg";
import f2 from "@/assets/20260820_133420.jpg";
import f3 from "@/assets/20260820_133304.jpg";
import b1 from "@/assets/b1.png";
import b2 from "@/assets/b2.png";
import b3 from "@/assets/b3.png";
import kitchenImg from "@/assets/kitchen.webp";
import bathroomImg from "@/assets/bathroom.jpeg";
import basementImg from "@/assets/basement.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Remodeling & Construction Project Gallery | Jhay's Construction NJ" },
      {
        name: "description",
        content:
          "Browse completed projects by Jhay's Construction in Howell, NJ. Kitchen remodels, bathroom renovations, basement finishing, patio installations, driveways, and home additions in Monmouth County, NJ.",
      },
      { property: "og:title", content: "Remodeling & Construction Project Gallery | Jhay's Construction NJ" },
      {
        property: "og:description",
        content:
          "Explore completed construction and remodeling projects by Jhay's Construction serving Howell Township and Monmouth County, NJ.",
      },
      { property: "og:url", content: "https://www.jhaysconstruction.com/work" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.jhaysconstruction.com/og-image.jpg" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/work" },
    ],
  }),
  component: OurWorkPage,
});

const projects = [
  // First Row: Framing & Carpentry (5 cards)
  {
    id: 1,
    src: f1,
    category: "Additions",
    title: "Two-Story Custom Framing",
    location: "Howell Township, NJ",
    desc: "Complete structural wood framing and engineered roof trusses for an expansive two-story home addition.",
  },
  {
    id: 2,
    src: f2,
    category: "Additions",
    title: "Structural Timber Framing",
    location: "Howell Township, NJ",
    desc: "Precision wall framing, load-bearing headers, and subfloor construction built to New Jersey code.",
  },
  {
    id: 3,
    src: f3,
    category: "Additions",
    title: "New Home Framing & Addition",
    location: "Howell Township, NJ",
    desc: "Full framing execution from foundation sill plates to second-story floor joists.",
  },
  {
    id: 4,
    src: p4,
    category: "Outdoor Living",
    title: "Timber Deck Substructure",
    location: "Toms River, NJ",
    desc: "Low-maintenance composite deck with custom railings and integrated step lighting.",
  },
  {
    id: 5,
    src: p5,
    category: "Outdoor Living",
    title: "Composite Deck & Railings",
    location: "Perth Amboy, NJ",
    desc: "Elevated outdoor living composite deck featuring low-maintenance vinyl railings.",
  },

  // Second Row: Masonry & Pool Patios (5 cards)
  {
    id: 6,
    src: p1,
    category: "Outdoor Living",
    title: "Custom Stone Retaining Wall",
    location: "Howell Township, NJ",
    desc: "Structural stone retaining wall with integrated seating ledge and natural stone capstones.",
  },
  {
    id: 7,
    src: p2,
    category: "Outdoor Living",
    title: "Interlocking Paver Walkway",
    location: "Freehold, NJ",
    desc: "Curved front entryway paver walkway with decorative border and stone garden beds.",
  },
  {
    id: 8,
    src: p3,
    category: "Outdoor Living",
    title: "Brick Entryway & Pillars",
    location: "Brick Township, NJ",
    desc: "Curved brick masonry accent wall and illuminated pillar lanterns for front driveway entrance.",
  },
  {
    id: 9,
    src: p6,
    category: "Outdoor Living",
    title: "Inground Pool Concrete Surround",
    location: "Wall Township, NJ",
    desc: "Expansive brushed concrete pool patio deck engineered for slip-resistance and proper drainage.",
  },
  {
    id: 10,
    src: p7,
    category: "Outdoor Living",
    title: "Finished Pool Deck & Spa Patio",
    location: "Manalapan, NJ",
    desc: "Full poolside lounge concrete patio and spa surround with clean coping edges.",
  },

  // Third Row: Concrete, Driveways & Transformations (5 cards)
  {
    id: 11,
    src: p8,
    category: "Outdoor Living",
    title: "Decorative Stamped Concrete",
    location: "Woodbridge, NJ",
    desc: "Textured slate pattern stamped concrete patio with custom tinted sealant.",
  },
  {
    id: 12,
    src: p9,
    category: "Outdoor Living",
    title: "Precision Concrete Pool Patio",
    location: "Rahway, NJ",
    desc: "Smooth finish concrete apron along in-ground swimming pool perimeter.",
  },
  {
    id: 13,
    src: b1,
    category: "Additions",
    title: "Sunroom & Deck Extension",
    location: "Howell Township, NJ",
    desc: "Seamless exterior room extension with wall-to-wall glass sliders and connected deck.",
  },
  {
    id: 14,
    src: b2,
    category: "Driveways",
    title: "Asphalt Driveway Paving",
    location: "Freehold, NJ",
    desc: "Full excavation, laser regrading, and heavy-duty asphalt paving with stone paver borders.",
  },
  {
    id: 15,
    src: b3,
    category: "Outdoor Living",
    title: "Custom Stone Patio Installation",
    location: "Brick Township, NJ",
    desc: "In-progress large-format architectural stone paver installation with gravel base compaction.",
  },

  // Remodeling & Interiors
  {
    id: 16,
    src: kitchenImg,
    category: "Kitchens",
    title: "Gourmet Kitchen Renovation",
    location: "Howell Township, NJ",
    desc: "Custom shaker cabinetry, quartz countertops, tile backsplash, and recessed lighting.",
  },
  {
    id: 17,
    src: bathroomImg,
    category: "Bathrooms",
    title: "Luxury Walk-In Spa Bathroom",
    location: "Howell Township, NJ",
    desc: "Frameless glass walk-in shower, porcelain wall tile, and contemporary double vanity.",
  },
  {
    id: 18,
    src: basementImg,
    category: "Basements",
    title: "Finished Family Basement Suite",
    location: "Manalapan, NJ",
    desc: "Complete dry basement transformation with entertainment lounge, recessed LED lighting, and luxury vinyl plank flooring.",
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

const categories = ["All", "Additions & Basements", "Outdoor Living", "Driveways", "Kitchens", "Bathrooms"];

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

  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex, filteredProjects]);

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
                    alt={`${s.title} completed remodeling project in ${s.location} by Jhay's Construction`}
                    loading="lazy"
                    width={500}
                    height={250}
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

          {/* 5-Column Image Cards Grid (5 images per row) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 min-h-[300px] transition-all duration-300">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => handleImageClick(p.src, i)}
              >
                {/* Image Frame with Aspect Ratio */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={p.src}
                    alt={`${p.title} - ${p.location} by Jhay's Construction`}
                    loading="lazy"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                  />

                  {/* Dark Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="size-9 rounded-full bg-white text-[#008000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ZoomIn className="size-4.5" />
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="inline-block bg-black/65 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border border-white/10 shadow-sm">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Card Content Footer */}
                <div className="p-3.5 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-[#008000] transition-colors line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-1 flex items-center gap-1 line-clamp-1">
                      <MapPin className="size-3 text-[#008000] shrink-0" />
                      <span>{p.location}</span>
                    </p>
                    {p.desc && (
                      <p className="text-[11px] text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                        {p.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
