import { ChevronsRight } from "lucide-react";
import welcomePng from "@/assets/welcome.png";

export function Welcome() {
  return (
    <section id="about" className="py-[60px] px-4 bg-white relative">
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <div className="lg:col-span-7">
          {/* Welcome Badge with Logo Icon */}
          <div className="flex items-center gap-2 mb-4">
            {/* Minimal orange/green double triangle logo */}
            <svg className="w-5 h-4 shrink-0" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 4L1 18H13L7 4Z" fill="#f97316" />
              <path d="M15 8L9 22H21L15 8Z" fill="#008000" />
            </svg>
            <span className="text-[#008000] text-xs uppercase tracking-widest font-bold">
              WELCOME TO
            </span>
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-4 leading-tight">
            Jhay's Construction
          </h2>

          <h3 className="font-display font-bold text-lg md:text-xl text-gray-900 mb-6">
            Best Home Improvement Contractor in Howell Township
          </h3>

          <p className="text-gray-800 text-sm md:text-base mb-8 leading-relaxed">
            Are you in need of a general contractor in Howell Township? Worry no more as Jhay’s Construction offers some of the best general contractors in the area. At Jhays Construction we address all your home improvement needs. From patios, driveway paving, walls, renovation, room additions, bathroom fitting, kitchen fitting, basements, and so much more. Also, once you hire us, our general contractors will always communicate with all involved parties throughout the process. You can reach us out at (732) 673 1569 if you have any questions.
          </p>

          {/* Our Mission Card */}
          <div className="bg-[#fcfcfc] border border-gray-200 rounded-[1.25rem] p-6 mb-8 shadow-sm">
            <h4 className="font-display font-bold text-gray-900 text-lg mb-2">
              Our Mission
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our mission at Jhay’s Construction is to deliver high-quality residential construction services that enhance the beauty, comfort, and value of your home.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer"
            style={{ backgroundColor: "#008000" }}
          >
            Explore Our Company <ChevronsRight className="size-4" />
          </a>
        </div>

        {/* Right Column: Composited Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <img
            src={welcomePng}
            alt="Jhay's Construction Experience"
            loading="lazy"
            className="w-full max-w-[510px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
