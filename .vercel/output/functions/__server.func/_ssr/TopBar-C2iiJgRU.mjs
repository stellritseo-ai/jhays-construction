import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { M as Mail, P as Phone, F as Facebook, I as Instagram } from "../_libs/lucide-react.mjs";
function TopBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-white text-xs py-2 px-4", style: { backgroundColor: "#1a5c1a" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:jhaycconstruction@gmail.com", className: "flex items-center gap-1.5 hover:text-white/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3.5" }),
        "jhaycconstruction@gmail.com"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 hidden sm:block", children: "|" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:7326731569", className: "hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
        "(732) 673-1569"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90", children: "Follow Us On" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-3.5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Website", className: "size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "size-3.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
      ] }) })
    ] })
  ] }) });
}
export {
  TopBar as T
};
