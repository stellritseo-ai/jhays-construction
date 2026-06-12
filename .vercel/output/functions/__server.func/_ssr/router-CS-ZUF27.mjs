import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-4pwV6nbO.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$b = () => import("./work-UqY6brLr.mjs");
const Route$b = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Our Work — Jhay's Construction | Howell, NJ"
    }, {
      name: "description",
      content: "Explore the Jhay's Construction project gallery. Browse completed bathroom remodels, custom kitchens, decks, patios, basements, and home additions in Howell, NJ. Quality craftsmanship."
    }, {
      property: "og:title",
      content: "Our Work — Jhay's Construction"
    }, {
      property: "og:description",
      content: "Explore the Jhay's Construction project gallery. Browse completed bathroom remodels, custom kitchens, decks, patios, basements, and home additions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./reviews-DIdXF6qQ.mjs");
const Route$a = createFileRoute("/reviews")({
  head: () => ({
    meta: [{
      title: "Customer Reviews — Jhay's Construction | NJ Contractor"
    }, {
      name: "description",
      content: "Read real customer reviews for Jhay's Construction in Howell, NJ. See why homeowners trust us for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. 4.9/5 rating."
    }, {
      property: "og:title",
      content: "Customer Reviews — Jhay's Construction"
    }, {
      property: "og:description",
      content: "Read real customer reviews for Jhay's Construction in Howell, NJ. See why homeowners trust us for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./estimate-BdZET-Fw.mjs");
const Route$9 = createFileRoute("/estimate")({
  head: () => ({
    meta: [{
      title: "Free Estimate — Jhay's Construction | Howell, NJ"
    }, {
      name: "description",
      content: "Get a free, no-obligation estimate from Jhay's Construction in Howell, NJ. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more. Bathroom, kitchen, patio, deck, driveway, room additions & basement finishing. Call or fill out our form today."
    }, {
      property: "og:title",
      content: "Free Estimate — Jhay's Construction"
    }, {
      property: "og:description",
      content: "Get a free, no-obligation estimate from Jhay's Construction in Howell, NJ. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-1xEm8dOC.mjs");
const Route$8 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Us — Jhay's Construction | Howell, NJ"
    }, {
      name: "description",
      content: "Contact Jhay's Construction in Howell, NJ for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. Call, email, or visit our showroom. Free estimates."
    }, {
      property: "og:title",
      content: "Contact Us — Jhay's Construction"
    }, {
      property: "og:description",
      content: "Contact Jhay's Construction in Howell, NJ. Call, email, or visit our showroom. Free estimates. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./about-pe0ev-9P.mjs");
const Route$7 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Jhay's Construction | Howell, NJ"
    }, {
      name: "description",
      content: "Jhay's Construction is a trusted local contractor in Howell, NJ, specializing in bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. Licensed & insured. Free estimates."
    }, {
      property: "og:title",
      content: "About Us — Jhay's Construction"
    }, {
      property: "og:description",
      content: "Jhay's Construction is a trusted local contractor in Howell, NJ, specializing in bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-Dgv1F-YE.mjs");
const Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Jhay's Construction — Residential & Commercial General Contractor in NJ"
    }, {
      name: "description",
      content: "Jhay's Construction is a trusted residential & commercial general contractor in Howell Township, NJ. Kitchen, bath, paving, additions and more."
    }, {
      property: "og:title",
      content: "Jhay's Construction — NJ General Contractor"
    }, {
      property: "og:description",
      content: "No job is too small or too big. Quality residential & commercial general contracting services."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./room-additions-DM1q4s4A.mjs");
const Route$5 = createFileRoute("/services/room-additions")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./patios-ARnLMmd8.mjs");
const Route$4 = createFileRoute("/services/patios")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./kitchen-fitting-ggOXVU_1.mjs");
const Route$3 = createFileRoute("/services/kitchen-fitting")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./driveways-GYQfywxY.mjs");
const Route$2 = createFileRoute("/services/driveways")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./bathroom-fitting-CstT6E7-.mjs");
const Route$1 = createFileRoute("/services/bathroom-fitting")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./basement-finishing-t3Llw06O.mjs");
const Route = createFileRoute("/services/basement-finishing")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$b.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$c
});
const ReviewsRoute = Route$a.update({
  id: "/reviews",
  path: "/reviews",
  getParentRoute: () => Route$c
});
const EstimateRoute = Route$9.update({
  id: "/estimate",
  path: "/estimate",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$7.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const ServicesRoomAdditionsRoute = Route$5.update({
  id: "/services/room-additions",
  path: "/services/room-additions",
  getParentRoute: () => Route$c
});
const ServicesPatiosRoute = Route$4.update({
  id: "/services/patios",
  path: "/services/patios",
  getParentRoute: () => Route$c
});
const ServicesKitchenFittingRoute = Route$3.update({
  id: "/services/kitchen-fitting",
  path: "/services/kitchen-fitting",
  getParentRoute: () => Route$c
});
const ServicesDrivewaysRoute = Route$2.update({
  id: "/services/driveways",
  path: "/services/driveways",
  getParentRoute: () => Route$c
});
const ServicesBathroomFittingRoute = Route$1.update({
  id: "/services/bathroom-fitting",
  path: "/services/bathroom-fitting",
  getParentRoute: () => Route$c
});
const ServicesBasementFinishingRoute = Route.update({
  id: "/services/basement-finishing",
  path: "/services/basement-finishing",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  EstimateRoute,
  ReviewsRoute,
  WorkRoute,
  ServicesBasementFinishingRoute,
  ServicesBathroomFittingRoute,
  ServicesDrivewaysRoute,
  ServicesKitchenFittingRoute,
  ServicesPatiosRoute,
  ServicesRoomAdditionsRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
