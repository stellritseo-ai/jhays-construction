import { useState } from "react";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.png";

const serviceLinks = [
  { label: "Kitchen Fitting Service", href: "/services/kitchen-fitting" },
  { label: "Bathroom Fitting Service", href: "/services/bathroom-fitting" },
  { label: "Patios Installation & Repair", href: "/services/patios" },
  { label: "Driveway Paving Service", href: "/services/driveways" },
  { label: "Room Addition And Repair", href: "/services/room-additions" },
  { label: "Basement Finishing Service", href: "/services/basement-finishing" },
];

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR WORKS", href: "/work" },
  { label: "REVIEWS", href: "/reviews" },
  { label: "FREE ESTIMATE", href: "/estimate" },
  { label: "CONTACT US", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between" style={{ minHeight: "80px" }}>
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0 py-[5px]">
          <img
            src={logoImg}
            alt="Jhay's Construction"
            className="h-24 w-auto object-contain"
          />
        </a>

        {/* Right side: Nav + Call Now */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* HOME */}
            <a
              href="/"
              className="text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap"
            >
              HOME
            </a>

            {/* ABOUT US */}
            <a
              href="/about"
              className="text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap"
            >
              ABOUT US
            </a>

            {/* SERVICES Dropdown */}
            <div className="relative group">
              <a
                href="/#services"
                className="flex items-center gap-1 text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap"
              >
                SERVICES
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </a>

              {/* Dropdown Panel */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {/* Green top accent */}
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1a7c1a, #22c55e)" }} />
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      {service.label}
                    </a>
                  ))}
                </div>
                {/* View All link */}
                <div className="border-t border-gray-100 px-4 py-2.5">
                  <a
                    href="/#services"
                    className="text-xs font-bold text-green-700 hover:text-green-800 tracking-wider uppercase transition-colors"
                  >
                    View All Services →
                  </a>
                </div>
              </div>
            </div>

            {/* Remaining links */}
            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 text-sm font-semibold tracking-wide hover:text-green-700 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Call Now Button */}
          <a
            href="tel:7326731569"
            className="hidden md:flex flex-col items-center justify-center gap-0.5 text-white text-xs font-bold px-4 py-3 rounded-md shrink-0"
            style={{ backgroundColor: "#1a7c1a", minWidth: "80px" }}
          >
            <div className="size-7 rounded-full bg-white/20 grid place-items-center mb-0.5">
              <Phone className="size-4" />
            </div>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col py-2">
            <a href="/" className="px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">HOME</a>
            <a href="/about" className="px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">ABOUT US</a>

            {/* Mobile Services Accordion */}
            <button
              className="px-6 py-3 flex items-center justify-between text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors w-full text-left"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              SERVICES
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="bg-gray-50 border-y border-gray-100">
                {serviceLinks.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    {service.label}
                  </a>
                ))}
              </div>
            )}

            {navLinks.slice(2).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="px-6 py-3">
              <a
                href="tel:7326731569"
                className="flex items-center gap-2 justify-center text-white text-sm font-bold px-4 py-3 rounded-md w-full"
                style={{ backgroundColor: "#1a7c1a" }}
              >
                <Phone className="w-4 h-4" />
                Call Now: (732) 673-1569
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
