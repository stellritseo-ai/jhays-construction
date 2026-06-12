import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { TopBar } from "@/components/sections/TopBar";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  Check,
  Facebook,
  Instagram,
  ChevronDown,
  ChevronUp,
  Building2,
  Send,
  CheckCircle2,
  Compass,
  ArrowRight,
  Info,
  Users,
  Search,
  CheckCircle
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Jhay's Construction | NJ Contractor" },
      {
        name: "description",
        content:
          "Contact Jhay's Construction in New Jersey for bathroom remodeling, kitchen fitting, patios, decks, driveways, room additions, and basement finishing. Call, email, or visit our showroom. Free estimates.",
      },
      { property: "og:title", content: "Contact Us — Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Contact Jhay's Construction in Howell, NJ. Call, email, or visit our showroom. Free estimates. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more.",
      },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  {
    q: "How quickly do you respond to messages?",
    a: "We respond to all calls, texts, emails, and form submissions within 24 business hours. Most inquiries receive a response within 2-4 hours.",
  },
  {
    q: "Do you offer emergency services?",
    a: "For true home emergencies (major leaks, structural issues), call our main line and follow the prompts for emergency assistance.",
  },
  {
    q: "Can I get a quote without a home visit?",
    a: "Yes. We can provide preliminary estimates based on photos and video calls. For final, accurate quotes, we recommend an in-home visit.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. We are fully licensed in New Jersey and carry liability insurance. Proof available upon request.",
  },
  {
    q: "Do you serve commercial clients?",
    a: "While we specialize in residential construction, we're happy to discuss commercial projects. Contact us with details.",
  },
];

const serviceCounties = [
  {
    county: "Monmouth County",
    cities: ["Freehold", "Allentown", "Robertsville"],
  },
  {
    county: "Ocean County",
    cities: ["Toms River", "Brick Township", "Lakewood", "Jackson Township"],
  },
  {
    county: "Middlesex County",
    cities: ["Perth Amboy", "Fords", "Woodbridge", "Old Bridge"],
  },
  {
    county: "Union County",
    cities: ["Hillside Terrace"],
  },
];

const landmarks = [
  "Near Howell Town Hall",
  "Close to Route 9 and I-195",
  "Approximately 5 minutes from Freehold Raceway Mall",
];

const directions = [
  {
    from: "Freehold",
    steps: "Take Route 9 South to Hulses Corner Rd. Turn right. Destination is 0.3 miles on left.",
  },
  {
    from: "Brick Township",
    steps: "Take I-195 West to Exit 31B toward Howell. Follow signs.",
  },
  {
    from: "Perth Amboy",
    steps: "Take Route 440 South to I-287 South to Route 9 South.",
  },
];

const hoursTable = [
  { day: "Monday", hours: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
  { day: "Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 2:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceInterested: "",
    contactMethod: "",
    bestTime: "",
    message: "",
    referral: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill out all required fields marked with an asterisk (*).");
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/jhaycconstruction@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Request from Jhay's Construction Website",
          _captcha: "false",
          Name: formData.fullName,
          Phone: formData.phone,
          Email: formData.email,
          Message: formData.message,
          Service: formData.service || "Not specified",
        }),
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
        // Scroll to success card container
        const element = document.getElementById("contact-form-card");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const text = await response.text();
        alert(`Oops! There was a problem submitting your form. Server says: ${text}`);
      }
    } catch (error: any) {
      console.error(error);
      alert(`Oops! There was a problem submitting your form: ${error.message}`);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      await fetch("https://formsubmit.co/ajax/jhaycconstruction@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Newsletter Subscriber",
          Email: newsletterEmail,
        }),
      });
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden text-center text-white">
        <img
          src={heroImg}
          alt="Jhay's Construction project site"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,128,0,0.85)" }} />

        <div className="relative max-w-4xl mx-auto py-12">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            Get In Touch
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Let's Talk About Your<br />Home Project
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Whether you're ready to start or just exploring ideas, our team is here to help. Call, email, or visit us — we make getting in touch easy.
          </p>
          <div className="max-w-xl mx-auto border-l-4 pl-4 italic text-sm text-white/80 leading-relaxed" style={{ borderColor: "#ffffff" }}>
            "Have a question about your upcoming project? Ready to schedule your free estimate? Need a quick quote? Reach out — we respond within 24 hours."
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div
                  className="size-11 rounded-2xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Phone className="size-5" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">📞 Phone</h3>
                <div className="space-y-3.5 mb-6">
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Main Line</div>
                    <a href="tel:7326731569" className="font-bold text-[#008000] hover:text-[#008000]/80 transition-colors text-sm">
                      (732) 673-1569
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Text Messages</div>
                    <a href="sms:7326731569" className="font-bold text-[#008000] hover:text-[#008000]/80 transition-colors text-sm">
                      (732) 673-1569
                    </a>
                    <div className="text-[10px] text-gray-500 mt-0.5">We respond within 2 hours during business hours</div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed">
                Calls after hours? Leave a voicemail and we'll return your call the next business day.
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div
                  className="size-11 rounded-2xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Mail className="size-5" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">📧 Email</h3>
                <div className="space-y-3.5">
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">General Inquiries</div>
                    <a href="mailto:jhaycconstruction@gmail.com" className="font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block">
                      jhaycconstruction@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Estimates</div>
                    <a href="mailto:jhaycconstruction@gmail.com" className="font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block">
                      jhaycconstruction@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Customer Support</div>
                    <a href="mailto:jhaycconstruction@gmail.com" className="font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block">
                      jhaycconstruction@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed mt-6">
                We respond to all emails within 24 business hours.
              </div>
            </div>

            {/* Visit Us Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div
                  className="size-11 rounded-2xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: "#008000" }}
                >
                  <MapPin className="size-5" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">📍 Visit Us</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Showroom & Office</div>
                    <p className="font-bold text-gray-900 text-xs leading-relaxed">
                      735 Hulses Corner Rd<br />Howell Township, New Jersey 07731
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Visiting Hours</div>
                    <p className="font-bold text-gray-900 text-xs">
                      Monday – Friday: 9:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed">
                Please call ahead to ensure someone is available to meet with you.
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div
                  className="size-11 rounded-2xl flex items-center justify-center text-white mb-6"
                  style={{ backgroundColor: "#008000" }}
                >
                  <Users className="size-5" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-4">🌐 Social Media</h3>
                <div className="space-y-3.5">
                  <a href="#" className="flex items-center justify-between hover:text-[#008000] transition-colors group">
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Facebook</div>
                      <div className="font-bold text-gray-900 group-hover:text-[#008000] text-sm">@JhaysConstructionNJ</div>
                    </div>
                    <Facebook className="size-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between hover:text-[#008000] transition-colors group">
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Instagram</div>
                      <div className="font-bold text-gray-900 group-hover:text-[#008000] text-sm">@JhaysConstruction</div>
                    </div>
                    <Instagram className="size-4 text-gray-400" />
                  </a>
                  <a href="#" className="flex items-center justify-between hover:text-[#008000] transition-colors group">
                    <div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Google My Business</div>
                      <div className="font-bold text-gray-900 group-hover:text-[#008000] text-xs leading-normal">
                        Jhay's Construction – Howell, NJ
                      </div>
                    </div>
                    <Star className="size-4 text-yellow-400 fill-current" />
                  </a>
                </div>
              </div>
              <div className="text-xs text-[#008000] bg-white border border-[#008000]/10 rounded-xl p-3 leading-relaxed font-bold">
                Follow us for project photos, special offers, and home improvement tips.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form and Hours Section */}
      <section id="contact-form-card" className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <div className="lg:col-span-8 bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-6">
                <div className="size-16 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="size-10" />
                </div>
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-gray-700 text-sm max-w-lg mx-auto mb-10 leading-relaxed">
                  Thank you for reaching out to Jhay's Construction! We've received your message and will respond within 24 hours. In the meantime, feel free to browse our project gallery or check out our reviews.
                </p>

                <div className="text-left max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
                  <h3 className="font-display font-bold text-gray-900 text-base mb-5 border-b border-gray-200 pb-3 flex items-center gap-2">
                    <Info className="size-4.5 text-[#008000]" /> After You Submit
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "You'll receive an automatic confirmation email",
                      "A team member will respond within 24 hours",
                      "For urgent matters, please call us directly",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <div className="size-5 bg-[#008000]/10 text-[#008000] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-xs font-bold uppercase tracking-wider text-[#008000] hover:text-[#008000]/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2">
                    Quick Contact Form
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    Prefer to send a message online? Fill out the form below and we'll get back to you within 24 hours. Fields marked with (*) are required.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(732) 673-1569"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Street Address (optional)
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="735 Hulses Corner Rd, Howell"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          name="serviceInterested"
                          value={formData.serviceInterested}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Select service type</option>
                          <option value="Bathroom">Bathroom</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Patio">Patio</option>
                          <option value="Decking">Decking</option>
                          <option value="Driveway">Driveway</option>
                          <option value="Room Addition">Room Addition</option>
                          <option value="Basement Finishing">Basement Finishing</option>
                          <option value="Other">Other</option>
                          <option value="Not Sure Yet">Not Sure Yet</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="size-4.5" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Best Time To Reach You
                      </label>
                      <div className="relative">
                        <select
                          name="bestTime"
                          value={formData.bestTime}
                          onChange={handleInputChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Choose best time</option>
                          <option value="Morning">Morning</option>
                          <option value="Afternoon">Afternoon</option>
                          <option value="Evening">Evening</option>
                          <option value="Anytime">Anytime</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <ChevronDown className="size-4.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-6 mt-1.5">
                      {["Phone", "Email", "Text"].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-700 select-none">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleInputChange}
                            className="size-4 text-[#008000] focus:ring-[#008000]/10 border-gray-300"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Message / Questions *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message or questions here..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      How Did You Hear About Us? (optional)
                    </label>
                    <div className="relative">
                      <select
                        name="referral"
                        value={formData.referral}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Choose referral channel</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Referral">Referral</option>
                        <option value="Flyer">Flyer</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="size-4.5" />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 italic bg-gray-50 border border-gray-200 rounded-xl p-3.5">
                    <strong>Note:</strong> By submitting this form, you agree to be contacted regarding your project. We never share your information with third parties.
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                    style={{ backgroundColor: "#008000" }}
                  >
                    Send Message <Send className="size-4" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column: Business Hours & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            {/* Business Hours Table */}
            <div className="bg-white border border-gray-150 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-4 flex items-center gap-2.5">
                <Clock className="size-5 text-[#008000]" /> Business Hours At A Glance
              </h3>
              <div className="overflow-hidden border border-gray-200 rounded-xl">
                <table className="min-w-full divide-y divide-gray-200 text-xs md:text-sm">
                  <thead className="bg-gray-50 font-bold text-gray-500 uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3 text-left">Day</th>
                      <th className="px-4 py-3 text-left">Hours</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100 font-medium text-gray-700">
                    {hoursTable.map((h, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-900">{h.day}</td>
                        <td className="px-4 py-3">{h.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3.5 leading-relaxed italic">
                *Holiday hours may vary. Please call ahead for major holidays.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-white border border-gray-150 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-2">Connect With Us</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-4">
                Get home improvement tips, seasonal specials, and project inspiration delivered directly to your inbox.
              </p>

              {newsletterSubscribed ? (
                <div className="bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4 text-center">
                  <div className="size-8 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-2">
                    <Check className="size-4.5" />
                  </div>
                  <span className="text-xs font-bold text-gray-800">
                    Subscribed successfully!
                  </span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4.5 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#008000] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-3 text-xs rounded-xl hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{ backgroundColor: "#008000" }}
                  >
                    Subscribe <ArrowRight className="size-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Served Communities
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Our Active Service Area
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              We proudly serve homeowners throughout central and northern New Jersey counties
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {serviceCounties.map((c, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-150 rounded-2xl p-6 shadow-sm">
                <h3 className="font-display font-bold text-gray-900 text-base mb-4 border-b border-gray-200 pb-2">
                  {c.county}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {c.cities.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded-md text-[11px] font-semibold text-gray-700 shadow-sm"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-md mx-auto text-center bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Don't see your town?</strong> Call us — we cover a wide surrounding radius and may still serve your area!
            </p>
          </div>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Find quick answers to common inquiries below.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="border border-gray-150 rounded-2xl overflow-hidden transition-all bg-white hover:border-[#008000]/20"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-gray-900 text-sm md:text-base focus:outline-none transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#008000] shrink-0 ml-4">
                      {isOpen ? (
                        <ChevronUp className="size-5" />
                      ) : (
                        <ChevronDown className="size-5" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Map Frame (Left Column) */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-100 rounded-[2.5rem] overflow-hidden min-h-[350px] md:min-h-[450px] shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2330248625963!2d-74.24651572391215!3d40.159365171482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17fa1a4043499%3A0xcabd14ca3b996b62!2s735%20Hulses%20Corner%20Rd%2C%20Howell%20Township%2C%20NJ%2007731%2C%20USA!5e0!3m2!1sen!2snp!4v1781037763175!5m2!1sen!2snp"
              className="absolute inset-0 size-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Directions & Landmarks (Right Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="bg-gray-50 border border-gray-150 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-display font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <Compass className="size-4.5 text-[#008000]" /> Landmarks Nearby
              </h3>
              <ul className="space-y-2.5">
                {landmarks.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-700">
                    <span className="size-5 bg-[#008000]/10 text-[#008000] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3" />
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-150 rounded-[2rem] p-6 shadow-sm flex-1">
              <h3 className="font-display font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <Compass className="size-4.5 text-[#008000]" /> Step-by-Step Directions
              </h3>
              <div className="space-y-4">
                {directions.map((d, idx) => (
                  <div key={idx} className="text-xs md:text-sm">
                    <div className="font-bold text-gray-950 mb-0.5">From {d.from}:</div>
                    <p className="text-gray-600 leading-relaxed font-medium">{d.steps}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-12 border-t border-gray-200 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Licensed & Insured",
              "4.9/5 Stars (47+ Reviews)",
              "Free Estimates",
              "Family-Owned & Operated",
            ].map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div
                  className="size-10 rounded-full flex items-center justify-center text-white mb-2 shadow-sm shrink-0"
                  style={{ backgroundColor: "#008000" }}
                >
                  <ShieldCheck className="size-5" />
                </div>
                <span className="text-xs font-bold text-gray-800 leading-snug">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
