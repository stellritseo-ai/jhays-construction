import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as ChevronDown, P as Phone, X, _ as Menu, F as Facebook, I as Instagram, $ as Twitter, a0 as Linkedin, u as ChefHat, t as Bath, v as Paintbrush, w as Construction, x as House, L as Layers, d as ChevronRight } from "../_libs/lucide-react.mjs";
const logoImg = "/assets/logo-I6fgEckf.png";
const serviceLinks = [
  { label: "Kitchen Fitting Service", href: "/services/kitchen-fitting" },
  { label: "Bathroom Fitting Service", href: "/services/bathroom-fitting" },
  { label: "Patios Installation & Repair", href: "/services/patios" },
  { label: "Driveway Paving Service", href: "/services/driveways" },
  { label: "Room Addition And Repair", href: "/services/room-additions" },
  { label: "Basement Finishing Service", href: "/services/basement-finishing" }
];
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR WORKS", href: "/work" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "FREE ESTIMATE", href: "/estimate" },
  { label: "CONTACT US", href: "/contact" }
];
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 flex items-center justify-between", style: { minHeight: "80px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center shrink-0 py-[5px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logoImg,
          alt: "Jhay's Construction",
          className: "h-24 w-auto object-contain"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/",
              className: "text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap",
              children: "HOME"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/about",
              className: "text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap",
              children: "ABOUT US"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "/#services",
                className: "flex items-center gap-1 text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap",
                children: [
                  "SERVICES",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full", style: { background: "linear-gradient(90deg, #1a7c1a, #22c55e)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-2", children: serviceLinks.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: service.href,
                  className: "flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors group/item",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" }),
                    service.label
                  ]
                },
                service.href
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-100 px-4 py-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "/#services",
                  className: "text-xs font-bold text-green-700 hover:text-green-800 tracking-wider uppercase transition-colors",
                  children: "View All Services →"
                }
              ) })
            ] })
          ] }),
          navLinks.slice(2).map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: link.href,
              className: "text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap",
              children: link.label
            },
            link.label
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:7326731569",
            className: "hidden md:flex flex-col items-center justify-center gap-0.5 text-white text-xs font-bold px-4 py-3 rounded-md shrink-0",
            style: { backgroundColor: "#1a7c1a", minWidth: "80px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-7 rounded-full bg-white/20 grid place-items-center mb-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }) }),
              "Call Now"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors",
            onClick: () => setMobileOpen(!mobileOpen),
            "aria-label": "Toggle menu",
            children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-6 h-6" })
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden border-t border-gray-100 bg-white shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors", children: "HOME" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/about", className: "px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors", children: "ABOUT US" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "px-6 py-3 flex items-center justify-between text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors w-full text-left",
          onClick: () => setMobileServicesOpen(!mobileServicesOpen),
          children: [
            "SERVICES",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}` })
          ]
        }
      ),
      mobileServicesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 border-y border-gray-100", children: serviceLinks.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: service.href,
          className: "flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" }),
            service.label
          ]
        },
        service.href
      )) }),
      navLinks.slice(2).map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: link.href,
          className: "px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors",
          children: link.label
        },
        link.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "tel:7326731569",
          className: "flex items-center gap-2 justify-center text-white text-sm font-bold px-4 py-3 rounded-md w-full",
          style: { backgroundColor: "#1a7c1a" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            "Call Now: (732) 673-1569"
          ]
        }
      ) })
    ] }) })
  ] });
}
const heroImg = "/assets/hero-Dh7m3yoe.jpg";
const expectImg$5 = "/assets/kitchen-BRWuxC_O.webp";
const expectImg$4 = "/assets/bathroom-CRAbhz3i.jpeg";
const expectImg$3 = "/assets/patios-C0cVdcZ2.jpg";
const expectImg$2 = "/assets/driveway-CeyY-Qru.jpeg";
const expectImg$1 = "/assets/room-addition-CsppJgqq.jpeg";
const expectImg = "/assets/basement-CWBVmuDo.jpg";
const servicesList = [
  {
    icon: ChefHat,
    title: "Kitchen Fitting Service",
    desc: "We spend so much of our lives in our kitchens, whether we eat, talk, cook, or clean there. They're a key part of any home and that's why it is essential to know...",
    img: expectImg$5,
    featured: true,
    href: "/services/kitchen-fitting"
  },
  {
    icon: Bath,
    title: "Bathroom Fitting Service",
    desc: "Is your bathroom in need of a makeover? Then this bathroom renovation service will ensure that no leaks or mould appear to guarantee your bathroom looks clean...",
    img: expectImg$4,
    href: "/services/bathroom-fitting"
  },
  {
    icon: Paintbrush,
    title: "Patios Installation & Repair",
    desc: "Looking to spruce up your patio or driveway? Go with a block or brick pavement and make your property stand out from the rest. An expert brick paver...",
    img: expectImg$3,
    href: "/services/patios"
  },
  {
    icon: Construction,
    title: "Driveway Paving Service",
    desc: "Driveways take quite the battering over time with cars and people coming in and out, but they can also collect other debris such as leaf matter and rubbish...",
    img: expectImg$2,
    href: "/services/driveways"
  },
  {
    icon: House,
    title: "Room Addition And Repair",
    desc: "Thinking of extending your kitchen into a bigger, more liveable space? A local professional extensions & conversions service supplier can advise you on the...",
    img: expectImg$1,
    href: "/services/room-additions"
  },
  {
    icon: Layers,
    title: "Basement Finishing Service",
    desc: "If you're dreaming of turning your basement into an extra reception room or maybe even a games room then you'll need someone to convert it for you...",
    img: expectImg,
    href: "/services/basement-finishing"
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "py-[60px] px-4", style: { backgroundColor: "#f4f4f4" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-flex items-center px-6 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest mb-5",
          style: { backgroundColor: "#1a7c1a" },
          children: "SERVICES"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl md:text-5xl text-gray-900", children: [
        "We Are The",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1a7c1a" }, children: "Professional General" }),
        " ",
        "Contractor"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: servicesList.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative rounded-2xl overflow-hidden cursor-pointer",
        style: { minHeight: "320px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: s.img,
              alt: s.title,
              className: "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
              style: { opacity: s.featured ? 1 : 0, transition: "opacity 0.4s ease, transform 0.5s ease" }
            }
          ),
          !s.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: s.img,
              alt: "",
              "aria-hidden": true,
              className: "absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500 opacity-0 group-hover:opacity-100",
              style: { transition: "opacity 0.4s ease, transform 0.5s ease" }
            }
          ),
          !s.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-white group-hover:opacity-0 transition-opacity duration-400",
              style: { border: "1px solid #e8e8e8", borderRadius: "1rem" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 transition-opacity duration-400",
              style: {
                backgroundColor: "rgba(0,0,0,0.58)",
                opacity: s.featured ? 1 : 0,
                borderRadius: "1rem"
              }
            }
          ),
          !s.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl",
              style: { backgroundColor: "rgba(0,0,0,0.58)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-6 flex flex-col", style: { minHeight: "320px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "size-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110",
                  style: { backgroundColor: "#1a7c1a" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-7 text-white" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h3",
                {
                  className: "font-bold text-lg leading-tight transition-colors duration-300",
                  style: { color: s.featured ? "white" : void 0 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: s.featured ? "text-white" : "text-gray-900 group-hover:text-white transition-colors duration-300", children: s.title })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: `text-sm leading-relaxed mt-[53px] mb-5 flex-1 transition-colors duration-300 ${s.featured ? "text-white/85" : "text-gray-500 group-hover:text-white/85"}`,
                children: s.desc
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: s.featured ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: s.href,
                className: "inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold text-white",
                style: { backgroundColor: "#1a7c1a" },
                children: "Read More"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: s.href,
                  className: "inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold group-hover:hidden transition-all",
                  style: { border: "1px solid #1a7c1a", color: "#1a7c1a" },
                  children: "Read More"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: s.href,
                  className: "hidden group-hover:inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold",
                  style: { backgroundColor: "#1a7c1a", color: "white" },
                  children: "Read More"
                }
              )
            ] }) })
          ] })
        ]
      },
      s.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "/estimate",
        className: "inline-flex items-center gap-1 text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity",
        style: { backgroundColor: "#1a7c1a" },
        children: [
          "Get a Custom Estimate ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 -ml-3" })
        ]
      }
    ) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative bg-foreground text-white/80 pt-20 pb-6 px-4 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "", "aria-hidden": true, className: "absolute inset-0 size-full object-cover opacity-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoImg,
              alt: "Jhay's Construction Logo",
              className: "h-16 w-auto object-contain brightness-0 invert"
            }
          ) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-white/70 leading-relaxed mb-4", children: "Jhay's Construction has been serving New Jersey homeowners for over two decades with quality craftsmanship and honest pricing." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: [Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "size-9 rounded-full glass grid place-items-center hover:bg-[#008000] transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" })
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterCol,
          {
            title: "Quick Links",
            items: [
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/#services" },
              { label: "Our Work", href: "/work" },
              { label: "Reviews", href: "/reviews" },
              { label: "Free Estimate", href: "/estimate" },
              { label: "Contact", href: "/contact" }
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterCol,
          {
            title: "Our Services",
            items: servicesList.map((s) => ({ label: s.title, href: s.href || "/#services" }))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          FooterCol,
          {
            title: "Areas We Serve",
            items: [
              { label: "Howell, NJ", href: "/#contact" },
              { label: "Freehold, NJ", href: "/#contact" },
              { label: "Toms River, NJ", href: "/#contact" },
              { label: "Brick, NJ", href: "/#contact" },
              { label: "Jackson, NJ", href: "/#contact" },
              { label: "Lakewood, NJ", href: "/#contact" }
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10 mt-12 pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-white text-center max-w-5xl mx-auto leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Bathroom remodeling Howell NJ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Kitchen renovation contractors near me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Patio installation Monmouth County" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Deck builders Brick NJ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Best basement finishing Freehold NJ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Affordable room additions Howell Township" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Licensed driveway contractors NJ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:inline", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reliable home addition contractors Toms River" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-white/10 mt-6 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-white/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Jhay's Construction. All Rights Reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Privacy Policy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Terms of Service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-white", children: "Sitemap" })
        ] })
      ] })
    ] })
  ] });
}
function FooterCol({ title, items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-white mb-4", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: i.href, className: "text-white/70 hover:text-white hover:pl-1 inline-flex items-center gap-1.5 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3 text-[#008000]" }),
      " ",
      i.label
    ] }) }, i.label)) })
  ] });
}
export {
  Footer as F,
  Header as H,
  Services as S,
  expectImg$3 as a,
  expectImg$5 as b,
  expectImg$2 as c,
  expectImg$4 as d,
  expectImg$1 as e,
  expectImg as f,
  heroImg as h,
  servicesList as s
};
