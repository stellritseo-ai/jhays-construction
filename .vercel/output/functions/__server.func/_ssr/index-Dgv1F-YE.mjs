import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as TopBar } from "./TopBar-C2iiJgRU.mjs";
import { H as Header, S as Services, F as Footer, h as heroImg, s as servicesList } from "./Footer-D486PbCA.mjs";
import { i as b1, j as b2, k as b3, p as p1, a as p2, b as p3, c as p4, d as p5, e as p6, f as p7, g as p8, h as p9 } from "./b3-Aa_7RIqE.mjs";
import { f as Sparkles, d as ChevronRight, c as ChevronLeft, y as ChevronsRight, P as Phone, H as Hammer, o as Users, A as Award, b as ArrowRight, Z as ZoomIn, X, S as Star, Q as Quote, e as MapPin, M as Mail, h as Clock, n as ShieldCheck } from "../_libs/lucide-react.mjs";
const slides = [b1, b2, b3];
function Hero() {
  const [current, setCurrent] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev2) => (prev2 + 1) % slides.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[88vh] flex items-center overflow-hidden", children: [
    slides.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src,
        alt: `Slide ${i + 1}`,
        className: "absolute inset-0 size-full object-cover transition-opacity duration-1000",
        style: { opacity: i === current ? 1 : 0 },
        width: 1920,
        height: 1080
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "var(--gradient-overlay)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.55_0.17_145/0.35),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto px-4 text-center text-white py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.25em] mb-6 animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5" }),
        " Trusted Since 2003"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h1",
        {
          className: "font-display font-bold mb-4 animate-fade-up",
          style: { fontSize: "35px", lineHeight: "55px", animationDelay: "0.1s" },
          children: [
            '"NO JOB IS TOO SMALL OR TOO BIG" ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Residential & Commercial General Contracting Services"
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base md:text-lg text-white/85 max-w-2xl mx-auto mb-8 animate-fade-up", style: { animationDelay: "0.2s" }, children: "From Driveways - Patios to Sidewalks and Remodeling, we work closely with you to bring your dream space to life—on time, on budget, and with minimal disruption." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center animate-fade-up", style: { animationDelay: "0.3s" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#services", className: "gradient-primary px-7 py-3.5 rounded-full font-semibold text-sm shadow-glow hover:scale-105 transition-transform inline-flex items-center gap-2", children: [
          "Our Services ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/estimate", className: "glass px-7 py-3.5 rounded-full font-semibold text-sm hover:bg-white/20 transition-colors inline-flex items-center gap-2", children: "Free Estimate" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: prev,
        "aria-label": "Previous slide",
        className: "absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full size-11 grid place-items-center text-white hover:bg-white/20 transition-colors z-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: next,
        "aria-label": "Next slide",
        className: "absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full size-11 grid place-items-center text-white hover:bg-white/20 transition-colors z-10",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => setCurrent(i),
        "aria-label": `Go to slide ${i + 1}`,
        className: "size-2.5 rounded-full transition-all duration-300",
        style: { backgroundColor: i === current ? "white" : "rgba(255,255,255,0.4)" }
      },
      i
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 right-8 hidden md:block glass rounded-2xl p-4 text-white animate-float", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-display font-bold", children: "21+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/80", children: "Years Experience" })
    ] })
  ] });
}
const welcomePng = "/assets/welcome-CnAkpHfM.png";
function Welcome() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-[60px] px-4 bg-white relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-5 h-4 shrink-0", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 4L1 18H13L7 4Z", fill: "#f97316" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 8L9 22H21L15 8Z", fill: "#008000" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#008000] text-xs uppercase tracking-widest font-bold", children: "WELCOME TO" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight", children: "Jhay's Construction" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg md:text-xl text-gray-900 mb-6", children: "Best Home Improvement Contractor in Howell Township" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-800 text-sm md:text-base mb-8 leading-relaxed", children: "Are you in need of a general contractor in Howell Township? Worry no more as Jhay’s Construction offers some of the best general contractors in the area. At Jhays Construction we address all your home improvement needs. From patios, driveway paving, walls, renovation, room additions, bathroom fitting, kitchen fitting, basements, and so much more. Also, once you hire us, our general contractors will always communicate with all involved parties throughout the process. You can reach us out at (732) 673 1569 if you have any questions." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#fcfcfc] border border-gray-200 rounded-[1.25rem] p-6 mb-8 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-gray-900 text-lg mb-2", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: "Our mission at Jhay’s Construction is to deliver high-quality residential construction services that enhance the beauty, comfort, and value of your home." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/about",
          className: "inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer",
          style: { backgroundColor: "#008000" },
          children: [
            "Explore Our Company ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsRight, { className: "size-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: welcomePng,
        alt: "Jhay's Construction Experience",
        loading: "lazy",
        className: "w-full max-w-[510px] h-auto object-contain"
      }
    ) })
  ] }) });
}
function CTAStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-[60px] px-4 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0",
        style: {
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { backgroundColor: "rgba(20, 80, 20, 0.82)" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "font-display font-bold leading-snug",
          style: { fontSize: "28px" },
          children: "Looking for Residential & Commercial General Contractors?"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:7324261499",
          className: "inline-flex items-center gap-2 bg-white text-green-800 px-6 py-3 rounded-full font-bold text-sm hover:bg-white/90 transition-colors shadow-lg whitespace-nowrap",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }),
            " (732) 426-1499"
          ]
        }
      )
    ] })
  ] });
}
const stats = [
  { icon: Hammer, label: "Projects Completed", value: "5000+" },
  { icon: Users, label: "Happy Clients", value: "4900" },
  { icon: Award, label: "Expert Members", value: "10+" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 gradient-primary text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-white/80", children: "Numbers Speak" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold mt-1", children: "Everything" })
    ] }),
    stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-xl glass grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/85", children: s.label })
      ] })
    ] }, s.label))
  ] }) });
}
const teamImg = "/assets/why-BNcF6_1K.png";
const leftValues = [
  {
    title: "25+ Years of Experience",
    desc: "With over two decades in the residential & Commercial construction industry, we bring unmatched expertise and proven craftsmanship to every project we touch."
  },
  {
    title: "Owner-Led, Locally Operated",
    desc: "Led by Leon Holley, our company is proudly based in Township, New Jersey. We're committed to serving our community with integrity, honesty, and personal attention on every job."
  },
  {
    title: "Quality That Lasts",
    desc: "From Patios Installation to Driveway Paving, we use high-grade materials and precise techniques to ensure long-lasting, quality results that you can rely on."
  }
];
const rightValues = [
  {
    title: "Full-Service Residential Experts",
    desc: "We handle everything from driveways and decks to remodeling and additions. No need to juggle multiple contractors—we've got all your residential & commercial needs covered under one roof."
  },
  {
    title: "Clear Communication & Fair Pricing",
    desc: "We believe great service starts with clear communication. You'll always know what to expect, with no hidden costs or surprises—just honest work at competitive prices."
  },
  {
    title: "Customer Satisfaction First",
    desc: "Your home is your biggest investment—and we treat it with the respect it deserves. Our goal is to exceed your expectations and build a result you'll be proud of."
  }
];
function WhyChoose() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center px-6 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-5",
          style: { backgroundColor: "#008000" },
          children: "OUR VALUES"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4", children: "Why Choose Jhay's Construction?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-900 text-sm md:text-base max-w-4xl mx-auto leading-relaxed", children: "Choosing the right contractor for your home is a big decision—and at Jhay's Construction, we make it easy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_380px_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: leftValues.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(ValueItem, { v }, v.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative order-first lg:order-none flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: teamImg,
          alt: "Jhay's Construction team",
          loading: "lazy",
          className: "rounded-[1rem] shadow-md object-cover w-full max-w-[380px] h-[520px]"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: rightValues.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsx(ValueItem, { v }, v.title)) })
    ] })
  ] }) });
}
function ValueItem({ v }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "size-7 rounded-full text-white flex items-center justify-center shrink-0 mt-1",
        style: { backgroundColor: "#008000" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronsRight, { className: "size-4" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-gray-900 text-lg mb-1.5", children: v.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-800 leading-relaxed", children: v.desc })
    ] })
  ] });
}
const projects = [
  { src: p1, ratio: 610 / 809 },
  { src: p2, ratio: 610 / 809 },
  { src: p3, ratio: 610 / 809 },
  { src: p4, ratio: 610 / 809 },
  { src: p5, ratio: 1198 / 537 },
  { src: p6, ratio: 1198 / 537 },
  { src: p7, ratio: 1198 / 537 },
  { src: p8, ratio: 610 / 809 },
  { src: p9, ratio: 1198 / 537 }
];
function Gallery() {
  const [selectedImage, setSelectedImage] = reactExports.useState(null);
  const [currentIndex, setCurrentIndex] = reactExports.useState(-1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-[60px] px-4 bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between items-end mb-10 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-3", children: "Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl", children: [
            "Latest ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Projects" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/work",
            className: "inline-flex items-center gap-2 gradient-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-glow hover:scale-105 transition-transform",
            children: [
              "View More ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4", children: [
        projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "group relative overflow-hidden rounded-2xl cursor-pointer shadow-card h-[200px] sm:h-[240px] md:h-[280px]",
            style: {
              flexGrow: p.ratio,
              flexBasis: `${240 * p.ratio}px`
            },
            onClick: () => {
              setSelectedImage(p.src);
              setCurrentIndex(i);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.src,
                  alt: `Project ${i + 1}`,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-1.5 hover:scale-105 transition-transform", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { className: "size-4" }),
                " View Image"
              ] }) })
            ]
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow-[999] h-[200px] sm:h-[240px] md:h-[280px]", style: { flexBasis: "250px" } })
      ] })
    ] }),
    selectedImage !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300",
        onClick: () => setSelectedImage(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
            @keyframes scaleUp {
              from { transform: scale(0.9); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          ` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute top-6 right-6 text-white hover:text-gray-300 p-2.5 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50",
              onClick: () => setSelectedImage(null),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-6" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50",
              onClick: (e) => {
                e.stopPropagation();
                const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                setCurrentIndex(prevIndex);
                setSelectedImage(projects[prevIndex].src);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-8" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: selectedImage,
              alt: "Zoomed project view",
              className: "max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl",
              style: { animation: "scaleUp 0.25s ease-out forwards" },
              onClick: (e) => e.stopPropagation()
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors z-50",
              onClick: (e) => {
                e.stopPropagation();
                const nextIndex = (currentIndex + 1) % projects.length;
                setCurrentIndex(nextIndex);
                setSelectedImage(projects[nextIndex].src);
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-8" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm z-50", children: [
            currentIndex + 1,
            " / ",
            projects.length
          ] })
        ]
      }
    )
  ] });
}
const testimonials = [
  { name: "Sara H.", review: "Jhay's team was incredible from start to finish. Our kitchen remodel exceeded every expectation — on time, on budget, and beautifully done." },
  { name: "Mike S.", review: "Professional, communicative and skilled. They handled our bathroom and basement and the quality is unmatched. Highly recommend." },
  { name: "Carl R.", review: "Honest, hard-working contractors. They walked us through every step and the finished work speaks for itself. Will hire again." }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "reviews", className: "relative py-[60px] px-4 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", "aria-hidden": true, className: "absolute inset-0 size-full object-cover opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-foreground/85" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 gradient-primary text-white px-4 py-1 rounded-full text-xs uppercase tracking-[0.25em] font-semibold mb-4", children: "Google Reviews" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl", children: [
          "See What People ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Are Saying About Us"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-7 hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full bg-white grid place-items-center text-xs font-bold text-primary", children: "G" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Google Review" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-yellow-400", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3 fill-current" }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-6 text-primary/60 mb-2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/85 leading-relaxed mb-5", children: t.review }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-white/10 text-sm font-semibold", children: [
          t.name,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/60 font-normal", children: "— Howell, NJ" })
        ] })
      ] }, t.name)) })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "py-[60px] px-4 text-white", style: { backgroundColor: "#008000" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 bg-white text-[#008000]",
          children: "CONTACT US"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-4xl md:text-5xl text-white mb-4 leading-tight", children: "Feel Free To Contact Us For Any Kind Of Query" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/80 text-base mb-8 leading-relaxed", children: "We're here to answer your questions, discuss your vision, and provide a detailed, no-pressure estimate." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [
          { icon: Phone, label: "Phone Number", value: "(732) 673-1569", href: "tel:7326731569" },
          { icon: MapPin, label: "Address", value: "735 Hulses Corner Rd,Howell Township, New Jersey, 07731" },
          { icon: Mail, label: "Email Address", value: "jhaycconstruction@gmail.com", href: "mailto:jhaycconstruction@gmail.com" },
          { icon: Clock, label: "Working Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM | Sat - Sun: Closed" }
        ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 border border-white/10 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:bg-white/15 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "size-11 rounded-full flex items-center justify-center shrink-0 bg-white text-[#008000]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-white/60 font-bold mb-0.5", children: c.label }),
            c.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: c.href, className: "font-semibold text-white hover:text-white/80 transition-colors", children: c.value }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white", children: c.value })
          ] })
        ] }, c.label)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/10 border border-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-10 text-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-white", children: "Licensed, Insured & Bonded" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white/70 text-xs", children: "Your protection, our promise." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 lg:sticky lg:top-28 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl mb-6 text-gray-900", children: "Get a Free Estimate" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-5", onSubmit: (e) => e.preventDefault(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "John Doe",
                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "email",
                placeholder: "john@example.com",
                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Phone Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "tel",
                placeholder: "(732) 673-1569",
                className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Select Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "select",
                {
                  className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select Service" }),
                    servicesList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s.title, children: s.title }, s.title))
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "fill-current h-4 w-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" }) }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Project Details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              rows: 4,
              placeholder: "Tell us about your project (e.g. size, timeline, specific requests)...",
              className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "submit",
            className: "w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer",
            style: { backgroundColor: "#008000" },
            children: [
              "Send Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function AreasCovered() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-[#fcfcfc] border-t border-b border-gray-100 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center gap-2 text-white px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-4",
          style: { backgroundColor: "#008000" },
          children: "Service Area"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl text-gray-900 mb-3", children: [
        "Areas ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#008000" }, children: "Covered" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-2xl mx-auto", children: "24 - 40 Miles Radius Of New Jersey And Surrounding Areas" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 order-first", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 aspect-[4/3] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "Jhay's Construction Service Area Map",
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2330248625963!2d-74.24651572391215!3d40.159365171482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17fa1a4043499%3A0xcabd14ca3b996b62!2s735%20Hulses%20Corner%20Rd%2C%20Howell%20Township%2C%20NJ%2007731%2C%20USA!5e0!3m2!1sen!2snp!4v1781037763175!5m2!1sen!2snp",
          className: "absolute inset-0 size-full border-0",
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "size-10 rounded-full flex items-center justify-center text-white shrink-0",
              style: { backgroundColor: "#008000" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-xl text-gray-900", children: "Serving New Jersey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Middlesex, Union & Surrounding Counties" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm leading-relaxed mb-6", children: "We proudly offer residential & commercial contracting services to homeowners and businesses throughout the following locations:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: [
          "Perth Amboy",
          "Fords",
          "Rahway",
          "Woodbridge",
          "Carteret",
          "Linden",
          "Elizabeth",
          "Howell (HQ)"
        ].map((city) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#008000]/30 hover:bg-[#008000]/5 transition-all group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-gray-400 group-hover:text-[#008000] transition-colors shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors", children: city })
            ]
          },
          city
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-gray-100 flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "size-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5",
              style: { backgroundColor: "rgba(0,128,0,0.1)", color: "#008000" },
              children: "i"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 leading-relaxed", children: [
            "Don't see your town? We cover a wide ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-gray-700", children: "24 - 40 miles radius" }),
            " around Howell Township, NJ. Feel free to contact us to confirm service availability for your project!"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Welcome, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTAStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChoose, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AreasCovered, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
