import { ChevronRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.png";
import { servicesList } from "./Services";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-white/80 pt-20 pb-6 px-4 overflow-hidden">
      <img src={heroImg} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-10" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4 flex items-center">
              <a href="/">
                <img
                  src={logoImg}
                  alt="Jhay's Construction Logo"
                  className="h-16 w-auto object-contain brightness-0 invert"
                />
              </a>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              Jhay's Construction has been serving New Jersey homeowners for over two decades with quality craftsmanship and honest pricing.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="size-9 rounded-full glass grid place-items-center hover:bg-[#008000] transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterCol
            title="Quick Links"
            items={[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Areas We Serve", href: "/areas-we-serve" },
              { label: "Our Work", href: "/work" },
              { label: "Reviews", href: "/reviews" },
              { label: "Free Estimate", href: "/estimate" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterCol
            title="Our Services"
            items={servicesList.map((s) => ({ label: s.title, href: s.href || "/services" }))}
          />
          <FooterCol
            title="Areas We Serve"
            items={[
              { label: "Howell Township, NJ", href: "/areas-we-serve/howell-nj" },
              { label: "Freehold, NJ", href: "/areas-we-serve/freehold-nj" },
              { label: "Jackson Township, NJ", href: "/areas-we-serve/jackson-township-nj" },
              { label: "Brick Township, NJ", href: "/areas-we-serve/brick-township-nj" },
              { label: "Lakewood, NJ", href: "/areas-we-serve/lakewood-nj" },
              { label: "View All 25-Mile Radius", href: "/areas-we-serve" },
            ]}
          />
        </div>

        {/* NAP — Business Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <address className="not-italic flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/70 text-center">
            <span className="font-semibold text-white">Jhay's Construction</span>
            <a
              href="https://www.google.com/maps/place/735+Hulses+Corner+Rd,+Howell+Township,+NJ+07731"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              735 Hulses Corner Rd, Howell Township, NJ 07731
            </a>
            <a href="tel:7326731569" className="hover:text-white transition-colors">(732) 673-1569</a>
            <a href="mailto:jhaycconstruction@gmail.com" className="hover:text-white transition-colors">jhaycconstruction@gmail.com</a>
          </address>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Jhay's Construction. All Rights Reserved. Design By <a href="https://stellrit.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">StellR IT LLC</a></div>
          <div className="flex gap-5">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterItem {
  label: string;
  href: string;
}

function FooterCol({ title, items }: { title: string; items: FooterItem[] }) {
  return (
    <div>
      <h4 className="font-display font-bold text-white mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-white/70 hover:text-white hover:pl-1 inline-flex items-center gap-1.5 transition-all">
              <ChevronRight className="size-3 text-[#008000]" /> {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
