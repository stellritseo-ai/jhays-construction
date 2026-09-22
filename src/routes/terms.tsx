import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Jhay's Construction — Howell, NJ" },
      {
        name: "description",
        content:
          "Terms of Service for Jhay's Construction website and contracting services in Howell Township and New Jersey.",
      },
      { property: "og:title", content: "Terms of Service | Jhay's Construction" },
      { property: "og:url", content: "https://www.jhaysconstruction.com/terms" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/terms" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: September 2026
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            Welcome to the website of <strong>Jhay's Construction</strong> ("we", "our", or "us"). By accessing or using our website at <a href="https://www.jhaysconstruction.com" className="text-green-700 underline">jhaysconstruction.com</a> or submitting inquiries through our online forms, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">1. Estimates &amp; Proposals</h2>
          <p>
            Information, preliminary estimates, or project calculators provided on this website are for general informational purposes only. Official contracts, final pricing, and scope of work are established solely through written, signed agreements following a thorough in-person or verified site evaluation.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">2. Licensing &amp; Compliance</h2>
          <p>
            Jhay's Construction is a licensed and fully insured home improvement contractor in the State of New Jersey. All construction work performed is conducted in accordance with the New Jersey Uniform Construction Code (UCC) and local municipal building ordinances.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">3. Intellectual Property</h2>
          <p>
            All content on this website—including text, photographs of completed projects, design elements, graphics, and logos—is the property of Jhay's Construction or used with permission. Unauthorized duplication, reproduction, or redistribution is strictly prohibited without prior written consent.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">4. Limitation of Liability</h2>
          <p>
            While we strive to keep website information current and accurate, we make no express warranties regarding site availability or completeness. In no event shall Jhay's Construction be liable for any indirect, incidental, or consequential damages resulting from the use of this website.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">5. Contact Information</h2>
          <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
            <p className="font-bold text-gray-900">Jhay's Construction</p>
            <p className="text-sm">735 Hulses Corner Rd, Howell Township, NJ 07731</p>
            <p className="text-sm">Phone: <a href="tel:7326731569" className="text-green-700 font-semibold">(732) 673-1569</a></p>
            <p className="text-sm">Email: <a href="mailto:jhaycconstruction@gmail.com" className="text-green-700 font-semibold">jhaycconstruction@gmail.com</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
