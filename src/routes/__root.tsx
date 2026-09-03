import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoImg from "@/assets/logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://www.jhaysconstruction.com/#business",
  "name": "Jhay's Construction",
  "url": "https://www.jhaysconstruction.com",
  "telephone": "+17326731569",
  "email": "jhaycconstruction@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "735 Hulses Corner Rd",
    "addressLocality": "Howell Township",
    "addressRegion": "NJ",
    "postalCode": "07731",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Howell Township, NJ" },
    { "@type": "City", "name": "Freehold, NJ" },
    { "@type": "City", "name": "Jackson Township, NJ" },
    { "@type": "City", "name": "Lakewood, NJ" },
    { "@type": "City", "name": "Brick Township, NJ" },
    { "@type": "City", "name": "Toms River, NJ" },
    { "@type": "City", "name": "Old Bridge, NJ" },
    { "@type": "City", "name": "Perth Amboy, NJ" },
    { "@type": "City", "name": "Woodbridge, NJ" }
  ],
  "description": "Jhay's Construction is a licensed and insured residential and commercial general contractor serving Howell Township, NJ and surrounding areas. Specializing in kitchen remodeling, bathroom renovation, basement finishing, home additions, patio installation, and driveway paving.",
  "hasMap": "https://www.google.com/maps?cid=14612765001879197538",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.jhaysconstruction.com"
  ]
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.jhaysconstruction.com/#organization",
  "name": "Jhay's Construction",
  "url": "https://www.jhaysconstruction.com",
  "telephone": "+17326731569",
  "email": "jhaycconstruction@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "735 Hulses Corner Rd",
    "addressLocality": "Howell Township",
    "addressRegion": "NJ",
    "postalCode": "07731",
    "addressCountry": "US"
  }
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.jhaysconstruction.com/#website",
  "url": "https://www.jhaysconstruction.com",
  "name": "Jhay's Construction",
  "description": "General contractor serving Howell Township, NJ — kitchen remodeling, bathroom renovation, basement finishing, home additions, patios, and driveway paving.",
  "publisher": {
    "@id": "https://www.jhaysconstruction.com/#organization"
  }
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "General Contractor in Howell, NJ | Jhay's Construction" },
      { name: "description", content: "Jhay's Construction is a trusted general contractor in Howell Township, NJ specializing in kitchen remodeling, bathroom renovation, basement finishing, home additions, patio installation, and driveway paving. Call (732) 673-1569." },
      { name: "author", content: "Jhay's Construction" },
      { name: "google-site-verification", content: "vRCCDOrVPJN5-ZxyiE9Z9TQLgv_GJCfR-Y47MlYiTNc" },
      { property: "og:site_name", content: "Jhay's Construction" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: "General Contractor in Howell, NJ | Jhay's Construction" },
      { property: "og:description", content: "Trusted residential and commercial general contractor serving Howell Township, NJ. Kitchen remodeling, bathroom renovation, basement finishing, home additions, patios, and driveway paving." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.jhaysconstruction.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "General Contractor in Howell, NJ | Jhay's Construction" },
      { name: "twitter:description", content: "Trusted general contractor in Howell Township, NJ. Kitchen remodeling, bathrooms, basements, home additions, patios, and driveways." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: logoImg },
      { rel: "canonical", href: "https://www.jhaysconstruction.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(webSiteSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
