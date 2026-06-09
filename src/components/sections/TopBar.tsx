import { Mail, Phone, Facebook, Instagram } from "lucide-react";

export function TopBar() {
  return (
    <div className="text-white text-xs py-2 px-4" style={{ backgroundColor: "#1a5c1a" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-5">
          <a href="mailto:jhaycconstruction@gmail.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Mail className="size-3.5" />
            jhaycconstruction@gmail.com
          </a>
          <span className="text-white/40 hidden sm:block">|</span>
          <a href="tel:7326731569" className="hidden sm:flex items-center gap-1.5 hover:text-white/80 transition-colors">
            <Phone className="size-3.5" />
            (732) 673-1569
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-3 items-center">
          <span className="text-white/90">Follow Us On</span>
          <a href="#" aria-label="Facebook" className="size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors">
            <Facebook className="size-3.5" />
          </a>
          <a href="#" aria-label="Instagram" className="size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors">
            <Instagram className="size-3.5" />
          </a>
          {/* Globe / Website icon */}
          <a href="#" aria-label="Website" className="size-7 rounded-full border border-white/40 grid place-items-center hover:bg-white/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
