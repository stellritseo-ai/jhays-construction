import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Star, Quote, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews — Jhay's Construction | NJ Contractor" },
      {
        name: "description",
        content: "Read real customer reviews for Jhay's Construction in Howell, NJ. See why homeowners trust us for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. 4.9/5 rating.",
      },
      { property: "og:title", content: "Customer Reviews — Jhay's Construction" },
      {
        property: "og:description",
        content: "Read real customer reviews for Jhay's Construction in Howell, NJ. See why homeowners trust us for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing.",
      },
    ],
  }),
  component: ReviewsPage,
});

const featuredReviews = [
  {
    rating: 5,
    title: "Absolutely stunning bathroom remodel!",
    quote: "Jhay and his team transformed our outdated 1980s bathroom into a modern spa. The tile work is flawless, the walk-in shower is gorgeous, and they finished a full week ahead of schedule. Clean, professional, and fairly priced. We're already booking them for our kitchen!",
    author: "Jennifer M.",
    location: "Howell Township, NJ",
    project: "Bathroom Fitting",
  },
  {
    rating: 5,
    title: "Best kitchen renovation experience",
    quote: "From design to completion, Jhay's Construction exceeded every expectation. They helped us choose the perfect cabinets and quartz countertops within our budget. The crew was respectful, showed up on time daily, and kept the worksite clean. Our kitchen is now the heart of our home. Thank you!",
    author: "Michael & Lisa R.",
    location: "Freehold, NJ",
    project: "Kitchen Fitting",
  },
  {
    rating: 5,
    title: "Perfect patio for summer entertaining",
    quote: "We wanted a patio that could handle large family BBQs, and Jhay delivered. The pavers are perfectly leveled, the layout is spacious, and the attention to detail is obvious. He even recommended lighting options that made the space magical at night. Highly recommend!",
    author: "David K.",
    location: "Brick Township, NJ",
    project: "Patio Installation",
  },
  {
    rating: 5,
    title: "Basement finishing changed our home",
    quote: "Our basement was a dark, unused storage space. Now it's a beautiful family room with a guest bedroom and full bath. Jhay handled all the permits and inspections, so we had zero stress. Fair pricing and outstanding communication throughout.",
    author: "Patricia W.",
    location: "Toms River, NJ",
    project: "Basement Finishing",
  },
  {
    rating: 5,
    title: "Beautiful new deck for our backyard",
    quote: "Jhay's Construction built us a custom deck that completely transformed our outdoor space. The woodwork is solid, the stain is even, and the price was very competitive. They even cleaned up every single nail and wood scrap before leaving. Will definitely use them again.",
    author: "Robert S.",
    location: "Manalapan, NJ",
    project: "Decking",
  },
  {
    rating: 5,
    title: "Driveway looks brand new",
    quote: "Our old driveway was cracked and sinking. Jhay's team removed everything, regraded the base, and poured a beautiful new concrete driveway. It's only been a few months, but it still looks perfect. Great communication and fair pricing.",
    author: "Linda C.",
    location: "Perth Amboy, NJ",
    project: "Driveway Installation",
  },
  {
    rating: 5,
    title: "Seamless room addition",
    quote: "We needed an extra bedroom for our growing family. Jhay's Construction made the process smooth from start to finish. They matched the existing architecture perfectly, and you'd never know it wasn't original to the house. Couldn't be happier.",
    author: "Thomas B.",
    location: "Wall Township, NJ",
    project: "Room Addition",
  },
  {
    rating: 5,
    title: "Honest, reliable, and skilled",
    quote: "I've hired several contractors over the years, and Jhay is by far the most trustworthy. He gave us a detailed written estimate, stuck to it, and didn't try to upsell unnecessary work. The bathroom he remodeled for us is absolutely gorgeous. A rare find in this industry!",
    author: "Karen S.",
    location: "Woodbridge, NJ",
    project: "Bathroom Fitting",
  },
  {
    rating: 5,
    title: "Great job on our kitchen and patio combo",
    quote: "We hired Jhay for two projects at once — a kitchen remodel and a new patio. Both turned out amazing. He coordinated everything seamlessly, and we saved money by bundling the work. The kitchen cabinets are high quality, and the patio is perfect for morning coffee.",
    author: "Joseph & Maria D.",
    location: "Rahway, NJ",
    project: "Kitchen Fitting & Patio Installation",
  },
  {
    rating: 5,
    title: "Transformed our unfinished basement",
    quote: "We had a damp, dark basement that we never used. Jhay's team waterproofed, insulated, framed, and finished it into a beautiful entertainment room with a wet bar. The transformation is unbelievable. Worth every penny.",
    author: "Anthony P.",
    location: "Linden, NJ",
    project: "Basement Finishing",
  },
  {
    rating: 5,
    title: "Affordable and high-quality deck",
    quote: "We got three quotes for a new deck. Jhay's was the most affordable, but the quality is better than the expensive bids. The composite decking looks premium, the railings are sturdy, and the stairs are perfectly aligned. Highly recommend.",
    author: "Stephanie H.",
    location: "Carteret, NJ",
    project: "Decking",
  },
  {
    rating: 5,
    title: "Will never use anyone else",
    quote: "Jhay's Construction has earned a customer for life. They've done our bathroom, patio, and most recently our driveway. Every project was on time, on budget, and beautifully executed. If you're looking for an honest, skilled contractor in New Jersey, look no further.",
    author: "Brian T.",
    location: "Elizabeth, NJ",
    project: "Bathroom, Patio & Driveway",
  },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden text-center text-white">
        <img
          src={heroImg}
          alt="Jhay's Construction completed kitchen remodel"
          className="absolute inset-0 size-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,128,0,0.85)" }} />

        <div className="relative max-w-4xl mx-auto py-8">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Testimonials
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            What Our Customers Say
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners across Howell, Perth Amboy, Woodbridge, and surrounding New Jersey communities have to say about their experience with Jhay's Construction.
          </p>
        </div>
      </section>

      {/* Ratings Dashboard & Summary */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 border border-gray-150 rounded-[2rem] p-8 md:p-10 shadow-sm max-w-4xl mx-auto grid md:grid-cols-12 gap-8 items-center">
            {/* Score box */}
            <div className="md:col-span-5 text-center border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0 md:pr-8">
              <div className="font-display text-7xl font-extrabold text-gray-900 leading-none">
                4.9
              </div>
              <div className="flex justify-center gap-1.5 my-3 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-6 fill-current" />
                ))}
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Overall Rating
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Based on 47+ verified reviews
              </div>
            </div>

            {/* Progress bars */}
            <div className="md:col-span-7 space-y-3.5">
              {[
                { stars: 5, pct: 94 },
                { stars: 4, pct: 4 },
                { stars: 3, pct: 2 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 shrink-0 w-12 text-sm font-bold text-gray-700">
                    {row.stars} <Star className="size-3.5 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        backgroundColor: "#008000",
                        width: `${row.pct}%`,
                      }}
                    />
                  </div>
                  <div className="w-8 text-right text-xs font-semibold text-gray-500">
                    {row.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reviews Grid */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Customer Reviews
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900">
              Featured Homeowner Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((r, i) => (
              <div
                key={i}
                className="bg-white border border-gray-150 rounded-[1.5rem] p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current" />
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-gray-900 text-base mb-3 leading-tight">
                    "{r.title}"
                  </h3>

                  {/* Quote Body */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 size-8 text-gray-100 -z-0 opacity-80" />
                    <p className="relative text-sm text-gray-600 leading-relaxed italic z-10 mb-6">
                      {r.quote}
                    </p>
                  </div>
                </div>

                {/* Footer / Author Card */}
                <div className="pt-4 border-t border-gray-100 mt-auto flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">{r.author}</span>
                    <span className="text-[10px] bg-[#008000]/10 text-[#008000] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {r.project.split("&")[0].trim()}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Us A Review Section */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
            <span className="size-1.5 rounded-full bg-[#008000]" /> Share Your Story
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Leave Us A Review
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-10 max-w-md mx-auto">
            Had a great experience with Jhay's Construction? We'd love to hear from you!
          </p>

          {/* Social Platforms Grid */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12 max-w-2xl mx-auto">
            {[
              { name: "Google My Business", color: "#4285F4", url: "#" },
              { name: "Facebook", color: "#1877F2", url: "#" },
              { name: "Yelp", color: "#E60023", url: "#" },
            ].map((p) => (
              <a
                key={p.name}
                href={p.url}
                className="flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all font-semibold text-sm text-gray-700 shadow-sm"
              >
                <span>{p.name}</span>
                <ExternalLink className="size-4 text-gray-400" />
              </a>
            ))}
          </div>

          {/* Contact Details Card */}
          <div className="bg-gray-50 border border-gray-150 rounded-2xl p-6 max-w-xl mx-auto text-left flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex items-start gap-3">
              <Phone className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Call Us</div>
                <div className="font-bold text-gray-900 text-sm">(732) 673-1569</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Email Us</div>
                <div className="font-bold text-gray-950 text-sm truncate">jhaycconstruction@gmail.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Visit Us</div>
                <div className="font-bold text-gray-900 text-xs leading-normal">
                  735 Hulses Corner Rd, NJ
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
