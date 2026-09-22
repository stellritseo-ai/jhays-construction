import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ChevronRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      { title: "HTML Sitemap | Jhay's Construction — Howell, NJ" },
      {
        name: "description",
        content:
          "Complete HTML sitemap for Jhay's Construction. Browse all service pages, local service areas, project galleries, and contact information.",
      },
      { property: "og:title", content: "HTML Sitemap | Jhay's Construction" },
      { property: "og:url", content: "https://www.jhaysconstruction.com/sitemap" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/sitemap" },
    ],
  }),
  component: SitemapPage,
});

const sitemapStructure = [
  {
    category: "Main Pages",
    links: [
      { title: "Homepage", url: "/", desc: "General contractor serving Howell, NJ and Monmouth County" },
      { title: "About Us", url: "/about", desc: "Our history, 23 years of experience, and craftsmanship values" },
      { title: "Services Directory", url: "/services", desc: "Overview of all 6 core general contracting specialties" },
      { title: "Project Gallery (Our Work)", url: "/work", desc: "Browse completed framing, patios, kitchens, baths, and driveways" },
      { title: "Customer Reviews", url: "/reviews", desc: "Verified testimonials from New Jersey homeowners" },
      { title: "Free Estimate Request", url: "/estimate", desc: "Interactive estimate calculator and consultation booking" },
      { title: "Contact Us", url: "/contact", desc: "Office location, hours, phone numbers, and direct contact form" },
    ],
  },
  {
    category: "Contracting & Remodeling Services",
    links: [
      { title: "Kitchen Remodeling", url: "/services/kitchen-remodeling", desc: "Custom cabinets, quartz countertops, islands & full renovations" },
      { title: "Bathroom Remodeling", url: "/services/bathroom-remodeling", desc: "Walk-in showers, custom tile, vanities & heated floors" },
      { title: "Patio Installation", url: "/services/patio-installation", desc: "Interlocking pavers, natural stone, fire pits & outdoor kitchens" },
      { title: "Driveway Paving", url: "/services/driveway-paving", desc: "Hot-mix asphalt, reinforced concrete & Belgian block curbing" },
      { title: "Home Additions", url: "/services/home-additions", desc: "Master suites, second-story expansions & family room bump-outs" },
      { title: "Basement Finishing", url: "/services/basement-finishing", desc: "Home theaters, guest suites, wet bars & vapor barrier moisture control" },
    ],
  },
  {
    category: "Areas We Serve in New Jersey",
    links: [
      { title: "Service Areas Overview", url: "/areas-we-serve", desc: "25-mile radius coverage across Monmouth, Ocean & Middlesex counties" },
      { title: "Howell Township, NJ", url: "/areas-we-serve/howell-nj", desc: "Company headquarters at 735 Hulses Corner Rd" },
      { title: "Freehold, NJ", url: "/areas-we-serve/freehold-nj", desc: "Historic Borough and Township home remodeling" },
      { title: "Jackson Township, NJ", url: "/areas-we-serve/jackson-township-nj", desc: "Large-lot additions, pool surrounds, and asphalt driveways" },
      { title: "Brick Township, NJ", url: "/areas-we-serve/brick-township-nj", desc: "Coastal renovations, composite decks, and spa bathrooms" },
      { title: "Lakewood, NJ", url: "/areas-we-serve/lakewood-nj", desc: "Multi-bedroom additions, specialized kitchens & finished basements" },
    ],
  },
  {
    category: "Legal & Technical",
    links: [
      { title: "Privacy Policy", url: "/privacy-policy", desc: "How we collect, protect, and use your information" },
      { title: "Terms of Service", url: "/terms", desc: "General contractor website terms and service conditions" },
      { title: "XML Sitemap", url: "/sitemap.xml", desc: "Direct XML feed for Google Search Console and crawlers", external: true },
    ],
  },
];

function SitemapPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Website Sitemap
        </h1>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Quickly navigate all sections, remodeling services, and local New Jersey service areas of Jhay's Construction.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {sitemapStructure.map((group) => (
            <div key={group.category} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-5 pb-3 border-b border-gray-200">
                {group.category}
              </h2>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.url} className="group">
                    <a
                      href={link.url}
                      className="font-bold text-gray-900 group-hover:text-green-700 flex items-center gap-1.5 transition-colors text-sm sm:text-base"
                    >
                      <ChevronRight className="w-4 h-4 text-green-600 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.title}</span>
                      {link.external && <ExternalLink className="w-3.5 h-3.5 text-gray-400" />}
                    </a>
                    <p className="text-xs text-gray-500 pl-5.5 mt-0.5 leading-relaxed">
                      {link.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
