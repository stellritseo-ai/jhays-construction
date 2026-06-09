import { MapPin } from "lucide-react";

export function AreasCovered() {
  return (
    <section className="py-[60px] px-4 bg-[#fcfcfc] border-t border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 text-white px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-4"
            style={{ backgroundColor: "#008000" }}
          >
            Service Area
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 mb-3">
            Areas <span style={{ color: "#008000" }}>Covered</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            24 - 40 Miles Radius Of New Jersey And Surrounding Areas
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Map */}
          <div className="lg:col-span-7 order-first">
            <div className="relative rounded-[2rem] overflow-hidden shadow-lg border border-gray-200 aspect-[4/3] w-full">
              <iframe
                title="Jhay's Construction Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2330248625963!2d-74.24651572391215!3d40.159365171482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17fa1a4043499%3A0xcabd14ca3b996b62!2s735%20Hulses%20Corner%20Rd%2C%20Howell%20Township%2C%20NJ%2007731%2C%20USA!5e0!3m2!1sen!2snp!4v1781037763175!5m2!1sen!2snp"
                className="absolute inset-0 size-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Cities */}
          <div className="lg:col-span-5 bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="size-10 rounded-full flex items-center justify-center text-white shrink-0"
                style={{ backgroundColor: "#008000" }}
              >
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-gray-900">Serving New Jersey</h3>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                  Middlesex, Union & Surrounding Counties
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              We proudly offer residential & commercial contracting services to homeowners and businesses throughout the following locations:
            </p>

            {/* City Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                "Perth Amboy",
                "Fords",
                "Rahway",
                "Woodbridge",
                "Carteret",
                "Linden",
                "Elizabeth",
                "Howell (HQ)",
              ].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#008000]/30 hover:bg-[#008000]/5 transition-all group"
                >
                  <MapPin className="size-4 text-gray-400 group-hover:text-[#008000] transition-colors shrink-0" />
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {city}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-start gap-3">
              <div
                className="size-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5"
                style={{ backgroundColor: "rgba(0,128,0,0.1)", color: "#008000" }}
              >
                i
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Don't see your town? We cover a wide <strong className="text-gray-700">24 - 40 miles radius</strong> around Howell Township, NJ. Feel free to contact us to confirm service availability for your project!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
