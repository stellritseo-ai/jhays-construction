import { useState, useEffect } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, MapPin } from "lucide-react";
import f1 from "@/assets/20260820_133324.jpg";
import f2 from "@/assets/20260820_133420.jpg";
import f3 from "@/assets/20260820_133304.jpg";
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

export const projects = [
  // First Row: Framing & Carpentry Projects (5 cards)
  {
    src: f1,
    title: "Two-Story Custom Framing",
    category: "Additions",
    location: "Howell Township, NJ",
  },
  {
    src: f2,
    title: "Structural Timber Framing",
    category: "Additions",
    location: "Howell Township, NJ",
  },
  {
    src: f3,
    title: "New Home Framing & Addition",
    category: "Additions",
    location: "Howell Township, NJ",
  },
  {
    src: p4,
    title: "Timber Deck Substructure",
    category: "Decks",
    location: "Toms River, NJ",
  },
  {
    src: p5,
    title: "Composite Deck & Railings",
    category: "Outdoor Living",
    location: "Perth Amboy, NJ",
  },

  // Second Row: Masonry, Patios & Concrete Projects (5 cards)
  {
    src: p1,
    title: "Custom Stone Retaining Wall",
    category: "Masonry",
    location: "Howell Township, NJ",
  },
  {
    src: p2,
    title: "Interlocking Paver Walkway",
    category: "Patios",
    location: "Freehold, NJ",
  },
  {
    src: p3,
    title: "Brick Entryway & Pillars",
    category: "Masonry",
    location: "Brick Township, NJ",
  },
  {
    src: p6,
    title: "Inground Pool Concrete Surround",
    category: "Pool Patios",
    location: "Wall Township, NJ",
  },
  {
    src: p7,
    title: "Finished Pool Deck & Spa Patio",
    category: "Pool Patios",
    location: "Manalapan, NJ",
  },

  // Third Row: Concrete, Driveways & Hardscaping (5 cards)
  {
    src: p8,
    title: "Decorative Stamped Concrete",
    category: "Concrete",
    location: "Woodbridge, NJ",
  },
  {
    src: p9,
    title: "Precision Concrete Pool Patio",
    category: "Concrete",
    location: "Rahway, NJ",
  },
  {
    src: b1,
    title: "Sunroom & Deck Extension",
    category: "Additions",
    location: "Howell Township, NJ",
  },
  {
    src: b2,
    title: "Asphalt Driveway Paving",
    category: "Driveways",
    location: "Freehold, NJ",
  },
  {
    src: b3,
    title: "Custom Stone Patio Installation",
    category: "Patios",
    location: "Brick Township, NJ",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(projects[prevIndex].src);
      }
      if (e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % projects.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(projects[nextIndex].src);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-[60px] px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              Gallery
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Latest <span className="text-primary">Projects</span>
            </h2>
          </div>
          <a
            href="/work"
            className="inline-flex items-center gap-2 gradient-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            View More <ArrowRight className="size-4" />
          </a>
        </div>

        {/* 5-Column Image Cards Grid (5 images per row) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-150/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              onClick={() => {
                setSelectedImage(p.src);
                setCurrentIndex(i);
              }}
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
                  <div className="size-9 rounded-full bg-white text-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
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

              {/* Card Footer Content */}
              <div className="p-3 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-gray-900 group-hover:text-primary transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-1 flex items-center gap-1 line-clamp-1">
                    <MapPin className="size-3 text-primary shrink-0" />
                    <span>{p.location}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300"
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
            aria-label="Close image lightbox"
          >
            <X className="size-6" />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
              setCurrentIndex(prevIndex);
              setSelectedImage(projects[prevIndex].src);
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="size-8" />
          </button>

          {/* Zoomed Image with project details */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt={projects[currentIndex]?.title || "Zoomed project view"}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              style={{ animation: "scaleUp 0.25s ease-out forwards" }}
            />
            {currentIndex >= 0 && projects[currentIndex] && (
              <div className="mt-3 text-center text-white">
                <span className="inline-block text-[11px] uppercase tracking-widest text-emerald-300 font-bold bg-white/10 px-3 py-0.5 rounded-full backdrop-blur-sm">
                  {projects[currentIndex].category}
                </span>
                <h4 className="font-display font-semibold text-lg mt-1 text-white">
                  {projects[currentIndex].title}
                </h4>
                <p className="text-xs text-white/70 flex items-center justify-center gap-1 mt-0.5">
                  <MapPin className="size-3 text-emerald-400" />
                  {projects[currentIndex].location}
                </p>
              </div>
            )}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = (currentIndex + 1) % projects.length;
              setCurrentIndex(nextIndex);
              setSelectedImage(projects[nextIndex].src);
            }}
            aria-label="Next image"
          >
            <ChevronRight className="size-8" />
          </button>

          {/* Image indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm z-50">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>
      )}
    </section>
  );
}
