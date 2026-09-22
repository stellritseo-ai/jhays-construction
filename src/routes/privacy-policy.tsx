import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Jhay's Construction — Howell, NJ" },
      {
        name: "description",
        content:
          "Privacy Policy for Jhay's Construction (Howell Township, NJ). Learn how we collect, use, and protect your information when requesting estimates or contacting us.",
      },
      { property: "og:title", content: "Privacy Policy | Jhay's Construction" },
      { property: "og:url", content: "https://www.jhaysconstruction.com/privacy-policy" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.jhaysconstruction.com/privacy-policy" },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Last Updated: September 2026
        </p>

        <div className="space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">
          <p>
            At <strong>Jhay's Construction</strong> ("we", "our", or "us"), we value your privacy and are committed to protecting any personal information you share with us. This Privacy Policy describes how we collect, use, and safeguard your data when you visit our website at <a href="https://www.jhaysconstruction.com" className="text-green-700 underline">jhaysconstruction.com</a>, request an estimate, or contact our team.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">1. Information We Collect</h2>
          <p>We only collect personal information that you voluntarily provide to us when submitting an estimate request, contact form, or direct communication. This includes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your name</li>
            <li>Phone number and email address</li>
            <li>Project street address or town</li>
            <li>Details and photos regarding your desired remodeling or construction project</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 pt-4">2. How We Use Your Information</h2>
          <p>The information we collect is strictly used to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Review and respond to your construction and remodeling inquiries</li>
            <li>Schedule in-person or virtual project consultations</li>
            <li>Prepare itemized estimates, proposals, and contracts</li>
            <li>Communicate project updates and milestone progress during active jobs</li>
          </ul>
          <p><strong>We will never sell, rent, or trade your personal information to third parties or marketing lists.</strong></p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">3. Data Security &amp; Retention</h2>
          <p>
            We implement administrative and technical security measures to maintain the confidentiality of your personal information. We retain your contact details only as long as necessary to complete your project, provide customer support, and fulfill legal or tax obligations.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">4. Third-Party Services &amp; Analytics</h2>
          <p>
            Our website may use standard analytics tools or form processing providers (such as FormSubmit) to deliver form notifications to our team. These services only process data necessary to facilitate communication between you and Jhay's Construction.
          </p>

          <h2 className="text-xl font-bold text-gray-900 pt-4">5. Contact Us Regarding Privacy</h2>
          <p>If you have any questions about this Privacy Policy or wish to update or remove your contact information, please contact us at:</p>
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
