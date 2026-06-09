import { useState } from "react";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import p1 from "@/assets/g1.png";
import p2 from "@/assets/g2.png";
import p3 from "@/assets/g3.png";
import p4 from "@/assets/g4.png";
import p5 from "@/assets/g5.png";
import p6 from "@/assets/g6.png";
import p7 from "@/assets/g7.png";
import p8 from "@/assets/g8.png";
import p9 from "@/assets/g9.png";

// Projects list with calculated natural aspect ratios from sips output:
// Vertical: 610/809 (~0.754)
// Horizontal: 1198/537 (~2.23)
const projects = [
  { src: p1, ratio: 610 / 809 },
  { src: p2, ratio: 610 / 809 },
  { src: p3, ratio: 610 / 809 },
  { src: p4, ratio: 610 / 809 },
  { src: p5, ratio: 1198 / 537 },
  { src: p6, ratio: 1198 / 537 },
  { src: p7, ratio: 1198 / 537 },
  { src: p8, ratio: 610 / 809 },
  { src: p9, ratio: 1198 / 537 },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  return (
    <section className="py-[60px] px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
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

        {/* Justified flexbox-based gallery layout */}
        <div className="flex flex-wrap gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-card h-[200px] sm:h-[240px] md:h-[280px]"
              style={{
                flexGrow: p.ratio,
                flexBasis: `${240 * p.ratio}px`,
              }}
              onClick={() => {
                setSelectedImage(p.src);
                setCurrentIndex(i);
              }}
            >
              <img
                src={p.src}
                alt={`Project ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                <div className="glass text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:scale-105 transition-transform">
                  <ZoomIn className="size-4" /> View Image
                </div>
              </div>
            </div>
          ))}
          {/* Spacer element at the end to prevent the last row from stretching excessively */}
          <div className="flex-grow-[999] h-[200px] sm:h-[240px] md:h-[280px]" style={{ flexBasis: "250px" }} />
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
            className="absolute top-6 right-6 text-white hover:text-gray-300 p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X className="size-6" />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
              setCurrentIndex(prevIndex);
              setSelectedImage(projects[prevIndex].src);
            }}
          >
            <ChevronLeft className="size-8" />
          </button>

          {/* Zoomed Image */}
          <img
            src={selectedImage}
            alt="Zoomed project view"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            style={{ animation: "scaleUp 0.25s ease-out forwards" }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              const nextIndex = (currentIndex + 1) % projects.length;
              setCurrentIndex(nextIndex);
              setSelectedImage(projects[nextIndex].src);
            }}
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
