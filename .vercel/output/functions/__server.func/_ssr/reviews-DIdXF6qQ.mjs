import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TopBar } from "./TopBar-C2iiJgRU.mjs";
import { H as Header, h as heroImg, F as Footer } from "./Footer-D486PbCA.mjs";
import { S as Star, Q as Quote, E as ExternalLink, P as Phone, M as Mail, e as MapPin } from "../_libs/lucide-react.mjs";
const featuredReviews = [{
  rating: 5,
  title: "Absolutely stunning bathroom remodel!",
  quote: "Jhay and his team transformed our outdated 1980s bathroom into a modern spa. The tile work is flawless, the walk-in shower is gorgeous, and they finished a full week ahead of schedule. Clean, professional, and fairly priced. We're already booking them for our kitchen!",
  author: "Jennifer M.",
  location: "Howell Township, NJ",
  project: "Bathroom Fitting"
}, {
  rating: 5,
  title: "Best kitchen renovation experience",
  quote: "From design to completion, Jhay's Construction exceeded every expectation. They helped us choose the perfect cabinets and quartz countertops within our budget. The crew was respectful, showed up on time daily, and kept the worksite clean. Our kitchen is now the heart of our home. Thank you!",
  author: "Michael & Lisa R.",
  location: "Freehold, NJ",
  project: "Kitchen Fitting"
}, {
  rating: 5,
  title: "Perfect patio for summer entertaining",
  quote: "We wanted a patio that could handle large family BBQs, and Jhay delivered. The pavers are perfectly leveled, the layout is spacious, and the attention to detail is obvious. He even recommended lighting options that made the space magical at night. Highly recommend!",
  author: "David K.",
  location: "Brick Township, NJ",
  project: "Patio Installation"
}, {
  rating: 5,
  title: "Basement finishing changed our home",
  quote: "Our basement was a dark, unused storage space. Now it's a beautiful family room with a guest bedroom and full bath. Jhay handled all the permits and inspections, so we had zero stress. Fair pricing and outstanding communication throughout.",
  author: "Patricia W.",
  location: "Toms River, NJ",
  project: "Basement Finishing"
}, {
  rating: 5,
  title: "Beautiful new deck for our backyard",
  quote: "Jhay's Construction built us a custom deck that completely transformed our outdoor space. The woodwork is solid, the stain is even, and the price was very competitive. They even cleaned up every single nail and wood scrap before leaving. Will definitely use them again.",
  author: "Robert S.",
  location: "Manalapan, NJ",
  project: "Decking"
}, {
  rating: 5,
  title: "Driveway looks brand new",
  quote: "Our old driveway was cracked and sinking. Jhay's team removed everything, regraded the base, and poured a beautiful new concrete driveway. It's only been a few months, but it still looks perfect. Great communication and fair pricing.",
  author: "Linda C.",
  location: "Perth Amboy, NJ",
  project: "Driveway Installation"
}, {
  rating: 5,
  title: "Seamless room addition",
  quote: "We needed an extra bedroom for our growing family. Jhay's Construction made the process smooth from start to finish. They matched the existing architecture perfectly, and you'd never know it wasn't original to the house. Couldn't be happier.",
  author: "Thomas B.",
  location: "Wall Township, NJ",
  project: "Room Addition"
}, {
  rating: 5,
  title: "Honest, reliable, and skilled",
  quote: "I've hired several contractors over the years, and Jhay is by far the most trustworthy. He gave us a detailed written estimate, stuck to it, and didn't try to upsell unnecessary work. The bathroom he remodeled for us is absolutely gorgeous. A rare find in this industry!",
  author: "Karen S.",
  location: "Woodbridge, NJ",
  project: "Bathroom Fitting"
}, {
  rating: 5,
  title: "Great job on our kitchen and patio combo",
  quote: "We hired Jhay for two projects at once — a kitchen remodel and a new patio. Both turned out amazing. He coordinated everything seamlessly, and we saved money by bundling the work. The kitchen cabinets are high quality, and the patio is perfect for morning coffee.",
  author: "Joseph & Maria D.",
  location: "Rahway, NJ",
  project: "Kitchen Fitting & Patio Installation"
}, {
  rating: 5,
  title: "Transformed our unfinished basement",
  quote: "We had a damp, dark basement that we never used. Jhay's team waterproofed, insulated, framed, and finished it into a beautiful entertainment room with a wet bar. The transformation is unbelievable. Worth every penny.",
  author: "Anthony P.",
  location: "Linden, NJ",
  project: "Basement Finishing"
}, {
  rating: 5,
  title: "Affordable and high-quality deck",
  quote: "We got three quotes for a new deck. Jhay's was the most affordable, but the quality is better than the expensive bids. The composite decking looks premium, the railings are sturdy, and the stairs are perfectly aligned. Highly recommend.",
  author: "Stephanie H.",
  location: "Carteret, NJ",
  project: "Decking"
}, {
  rating: 5,
  title: "Will never use anyone else",
  quote: "Jhay's Construction has earned a customer for life. They've done our bathroom, patio, and most recently our driveway. Every project was on time, on budget, and beautifully executed. If you're looking for an honest, skilled contractor in New Jersey, look no further.",
  author: "Brian T.",
  location: "Elizabeth, NJ",
  project: "Bathroom, Patio & Driveway"
}];
function ReviewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 overflow-hidden text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Jhay's Construction completed kitchen remodel", className: "absolute inset-0 size-full object-cover animate-fade-in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundColor: "rgba(0,128,0,0.85)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto py-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: "Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-4xl md:text-6xl mb-6 leading-tight", children: "What Our Customers Say" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed", children: "Don't just take our word for it. Here's what homeowners across Howell, Perth Amboy, Woodbridge, and surrounding New Jersey communities have to say about their experience with Jhay's Construction." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-[2rem] p-8 md:p-10 shadow-sm max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl font-extrabold text-gray-900 leading-none", children: "4.9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1.5 my-3 text-yellow-400", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-6 fill-current" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-gray-500 uppercase tracking-wider", children: "Overall Rating" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 mt-1", children: "Based on 47+ verified reviews" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7 space-y-3.5", children: [{
        stars: 5,
        pct: 94
      }, {
        stars: 4,
        pct: 4
      }, {
        stars: 3,
        pct: 2
      }, {
        stars: 2,
        pct: 0
      }, {
        stars: 1,
        pct: 0
      }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 shrink-0 w-12 text-sm font-bold text-gray-700", children: [
          row.stars,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 text-yellow-400 fill-current" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-3 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full transition-all duration-500", style: {
          backgroundColor: "#008000",
          width: `${row.pct}%`
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-8 text-right text-xs font-semibold text-gray-500", children: [
          row.pct,
          "%"
        ] })
      ] }, row.stars)) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " Customer Reviews"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900", children: "Featured Homeowner Stories" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredReviews.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-yellow-400 mb-4", children: Array.from({
            length: r.rating
          }).map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-base mb-3 leading-tight", children: [
            '"',
            r.title,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute -top-2 -left-2 size-8 text-gray-100 -z-0 opacity-80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm text-gray-600 leading-relaxed italic z-10 mb-6", children: r.quote })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t border-gray-100 mt-auto flex flex-col gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-gray-900", children: r.author }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-[#008000]/10 text-[#008000] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider", children: r.project.split("&")[0].trim() })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 font-medium", children: r.location })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
        " Share Your Story"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4", children: "Leave Us A Review" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base mb-10 max-w-md mx-auto", children: "Had a great experience with Jhay's Construction? We'd love to hear from you!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-3 gap-5 mb-12 max-w-2xl mx-auto", children: [{
        name: "Google My Business",
        color: "#4285F4",
        url: "#"
      }, {
        name: "Facebook",
        color: "#1877F2",
        url: "#"
      }, {
        name: "Yelp",
        color: "#E60023",
        url: "#"
      }].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: p.url, className: "flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all font-semibold text-sm text-gray-700 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4 text-gray-400" })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-2xl p-6 max-w-xl mx-auto text-left flex flex-col sm:flex-row justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Call Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 text-sm", children: "(732) 673-1569" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Email Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-950 text-sm truncate", children: "jhaycconstruction@gmail.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Visit Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 text-xs leading-normal", children: "735 Hulses Corner Rd, NJ" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ReviewsPage as component
};
