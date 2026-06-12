import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TopBar } from "./TopBar-C2iiJgRU.mjs";
import { H as Header, h as heroImg, F as Footer } from "./Footer-D486PbCA.mjs";
import { p as p1, a as p2, b as p3, c as p4, d as p5, e as p6, f as p7, g as p8, h as p9, i as b1, j as b2, k as b3 } from "./b3-Aa_7RIqE.mjs";
import { C as Camera, Z as ZoomIn, A as Award, a as Check, b as ArrowRight, X, c as ChevronLeft, d as ChevronRight } from "../_libs/lucide-react.mjs";
const projects = [{
  id: 1,
  src: p1,
  category: "Bathrooms",
  title: "Modern Spa Bathroom",
  location: "Howell Township, NJ",
  desc: "A complete overhaul featuring custom tile work, glass walk-in shower, and premium vanity.",
  ratio: 610 / 809
}, {
  id: 2,
  src: p2,
  category: "Kitchens",
  title: "Gourmet Kitchen Renovation",
  location: "Freehold, NJ",
  desc: "Custom cabinetry, stone countertops, and optimized layout for modern living.",
  ratio: 610 / 809
}, {
  id: 3,
  src: p3,
  category: "Outdoor Living",
  title: "Custom Paver Patio",
  location: "Brick Township, NJ",
  desc: "Multi-level paver patio designed for outdoor entertaining and summer BBQs.",
  ratio: 610 / 809
}, {
  id: 4,
  src: p4,
  category: "Outdoor Living",
  title: "Premium Composite Deck",
  location: "Toms River, NJ",
  desc: "Low-maintenance composite deck with custom railings and integrated step lighting.",
  ratio: 610 / 809
}, {
  id: 5,
  src: p5,
  category: "Driveways",
  title: "Flawless Asphalt Driveway",
  location: "Perth Amboy, NJ",
  desc: "Full excavation, regrading, and high-durability asphalt paving.",
  ratio: 1198 / 537
}, {
  id: 6,
  src: p6,
  category: "Additions",
  title: "Seamless Room Addition",
  location: "Wall Township, NJ",
  desc: "Architecturally matched second-story extension expanding the family living space.",
  ratio: 1198 / 537
}, {
  id: 7,
  src: p7,
  category: "Basements",
  title: "Cozy Finished Basement",
  location: "Manalapan, NJ",
  desc: "Transformed dark basement into a family room, guest bedroom, and full bath.",
  ratio: 1198 / 537
}, {
  id: 8,
  src: p8,
  category: "Bathrooms",
  title: "Classic Subway Tile Bath",
  location: "Woodbridge, NJ",
  desc: "Timeless design with subway tiling, walk-in tub, and high-efficiency fixtures.",
  ratio: 610 / 809
}, {
  id: 9,
  src: p9,
  category: "Outdoor Living",
  title: "Relaxing Backyard Patio",
  location: "Rahway, NJ",
  desc: "Elegant brick-paver design perfect for peaceful morning coffee and reading.",
  ratio: 1198 / 537
}];
const spotlights = [{
  img: b1,
  title: "Bathroom Transformation",
  location: "Howell Township, NJ",
  before: "Outdated 1980s layout, leaking fixtures, and worn vinyl flooring.",
  after: "Modern spa oasis with marble tiling, seamless glass door, dual rain-shower heads, and a custom double vanity."
}, {
  img: b2,
  title: "Kitchen Overhaul",
  location: "Freehold, NJ",
  before: "Cramped dark oak cabinets, cracked countertops, and outdated lighting.",
  after: "Open-concept culinary layout, custom shaker cabinets, quartz waterfall island, and built-in professional appliances."
}, {
  img: b3,
  title: "Outdoor Living Oasis",
  location: "Brick, NJ",
  before: "Uneven patchy lawn and old, rotting wooden steps.",
  after: "Premium multi-level paver patio, fire pit seating area, custom retaining wall, and integrated landscape lighting."
}];
const categories = ["All", "Bathrooms", "Kitchens", "Outdoor Living", "Additions & Basements", "Driveways"];
function OurWorkPage() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [currentIndex, setCurrentIndex] = reactExports.useState(-1);
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Additions & Basements") {
      return p.category === "Additions" || p.category === "Basements";
    }
    return p.category === activeFilter;
  });
  const handleImageClick = (src, globalIdx) => {
    setSelectedImage(src);
    setCurrentIndex(globalIdx);
  };
  const navigateLightbox = (direction) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 overflow-hidden text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Jhay's Construction completed deck project", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundColor: "rgba(0,128,0,0.85)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "size-3.5 fill-[#008000]" }),
          " Project Gallery"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl md:text-6xl mb-6 leading-tight", children: [
          "Crafting Spaces You'll",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Love to Live In"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed", children: "Explore our gallery of completed home remodeling projects across Howell Township and surrounding New Jersey areas. From dream kitchens and luxurious bathrooms to custom decks and finished basements." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " Transformations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "Before & After Spotlights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-xl mx-auto", children: "Real results for real homeowners. See the impact of our professional remodeling services." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: spotlights.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[250px] overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover hover:scale-102 transition-transform duration-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-[#008000] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider", children: "Completed Project" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-between items-start mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg leading-tight", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5", children: s.location })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-500 font-bold uppercase tracking-wider shrink-0 mt-0.5 text-[10px]", children: "Before:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 italic", children: s.before })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 pt-2 border-t border-gray-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#008000] font-bold uppercase tracking-wider shrink-0 mt-0.5 text-[10px]", children: "After:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 font-medium", children: s.after })
            ] })
          ] })
        ] })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " Finished Works"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6", children: "Our Completed Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveFilter(cat), className: `px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeFilter === cat ? "text-white shadow-md hover:scale-[1.01]" : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300"}`, style: {
          backgroundColor: activeFilter === cat ? "#008000" : void 0
        }, children: cat }, cat)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 min-h-[300px] transition-all duration-300", children: [
        filteredProjects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm h-[200px] sm:h-[240px] md:h-[280px]", style: {
          flexGrow: p.ratio,
          flexBasis: `${240 * p.ratio}px`
        }, onClick: () => handleImageClick(p.src, i), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.title, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "translate-y-4 group-hover:translate-y-0 transition-transform duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] bg-[#008000] text-white px-2.5 py-0.5 rounded uppercase tracking-wider font-bold", children: p.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base mt-2 mb-1", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-gray-300 font-semibold mb-2", children: [
              "📍 ",
              p.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-white/80 line-clamp-2 leading-relaxed font-normal", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 text-xs text-white font-bold mt-3 border-t border-white/20 pt-2 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "size-3.5 text-[#008000]" }),
              " Click to zoom"
            ] })
          ] }) })
        ] }, p.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow-[999] h-[200px] sm:h-[240px] md:h-[280px]", style: {
          flexBasis: "250px"
        } })
      ] }),
      filteredProjects.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-20 bg-white border border-gray-150 rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 font-medium text-sm", children: "No projects found in this category. We are constantly updating our portfolio." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 bg-[#008000]/10 text-[#008000] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "size-4" }),
        " Our Commitment To Quality"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6", children: "Standards Built to Last" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto", children: "We don't take shortcuts. Every home renovation, driveway pour, and deck construction is handled with the utmost care, utilizing premium materials and vetted local crews." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left", children: [{
        title: "Expert Craftsmanship",
        desc: "Meticulous carpentry, tiling, and paving by local professionals."
      }, {
        title: "Premium Materials",
        desc: "Durable fixtures, composite boards, and quality concrete brands."
      }, {
        title: "Transparent Pricing",
        desc: "No hidden fees, line-item estimates, and locked quotes."
      }, {
        title: "Licensed & Insured",
        desc: "NJ general contractor registration and full liability protection."
      }].map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-2xl p-5 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full text-white flex items-center justify-center mb-4 shrink-0", style: {
          backgroundColor: "#008000"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-gray-900 text-sm mb-1", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-gray-500 leading-normal", children: p.desc })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 text-center text-white", style: {
      backgroundColor: "#008000"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 bg-white text-[#008000] px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: "Let's Collaborate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-5xl mb-6", children: "Inspired By Our Work? Let's Build Yours." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/95 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed", children: "Get in touch with us today to discuss your ideas, schedule a consultation, and receive a free line-item estimate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/estimate", className: "inline-flex items-center gap-2 bg-white text-green-800 hover:bg-gray-150 px-8 py-4 rounded-full font-semibold text-base shadow-lg transition-all hover:scale-[1.01]", children: [
          "Get A Free Estimate ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 text-[#008000]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/contact", className: "inline-flex items-center gap-2 border border-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-[1.01]", children: "Contact Our Team" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    selectedImage !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300", onClick: () => setSelectedImage(null), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
            @keyframes scaleUp {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          ` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute top-6 right-6 text-white hover:text-gray-300 p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer", onClick: () => setSelectedImage(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer", onClick: (e) => {
        e.stopPropagation();
        navigateLightbox("prev");
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-full max-h-[80vh] flex flex-col items-center", onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedImage, alt: "Zoomed project view", className: "max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl", style: {
          animation: "scaleUp 0.25s ease-out forwards"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 bg-black/75 px-6 py-4 rounded-b-lg text-white text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-bold text-sm", children: filteredProjects[currentIndex]?.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-gray-300 font-semibold mt-0.5", children: [
            "📍 ",
            filteredProjects[currentIndex]?.location,
            " — ",
            filteredProjects[currentIndex]?.category
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50 cursor-pointer", onClick: (e) => {
        e.stopPropagation();
        navigateLightbox("next");
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-8" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm z-50", children: [
        currentIndex + 1,
        " / ",
        filteredProjects.length
      ] })
    ] })
  ] });
}
export {
  OurWorkPage as component
};
