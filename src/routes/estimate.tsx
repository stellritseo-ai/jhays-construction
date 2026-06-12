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
  Calendar,
  User,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Building,
  Briefcase,
  ThumbsUp,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { title: "Free Estimate — Jhay's Construction | NJ Contractor" },
      {
        name: "description",
        content:
          "Get a free, no-obligation estimate from Jhay's Construction. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more. Bathroom, kitchen, patio, deck, driveway, room additions & basement finishing.",
      },
      { property: "og:title", content: "Free Estimate — Jhay's Construction" },
      {
        property: "og:description",
        content:
          "Get a free, no-obligation estimate from Jhay's Construction in Howell, NJ. Serving Perth Amboy, Woodbridge, Freehold, Brick, Toms River & more.",
      },
    ],
  }),
  component: EstimatePage,
});

const faqs = [
  {
    q: "Is the estimate really free?",
    a: "Yes — 100% free. No hidden fees, no obligation to hire us.",
  },
  {
    q: "Do I need to be home for the estimate?",
    a: "For in-home estimates, yes. For virtual estimates, you can show us the space via video call.",
  },
  {
    q: "How accurate is the estimate?",
    a: "We provide line-item estimates based on current material prices and labor rates. Unless you change the scope of work, the price is locked in.",
  },
  {
    q: "Can you handle permits?",
    a: "Yes. We'll identify what permits your project requires and can handle the filing process for you.",
  },
  {
    q: "What if my project is outside your listed area?",
    a: "Call us anyway. We serve much of central and northern New Jersey.",
  },
];

const steps = [
  {
    num: "1",
    title: "Tell Us About Your Project",
    desc: "Fill out the quick form below with your basic info and project type.",
  },
  {
    num: "2",
    title: "Schedule A Consultation",
    desc: "We'll call you within 24 hours to discuss your vision and schedule an in-person or virtual walkthrough.",
  },
  {
    num: "3",
    title: "Receive Your Detailed Estimate",
    desc: "Within 2-3 business days, you'll get a written estimate breaking down materials, labor, timeline, and permit requirements.",
  },
  {
    num: "4",
    title: "Ask Questions, Then Decide",
    desc: "Review the estimate at your own pace. We're happy to clarify anything. No pressure, no rush.",
  },
];

const features = [
  {
    title: "In-Home or Virtual",
    desc: "We can visit your property or review photos/videos remotely",
  },
  {
    title: "Detailed Line Items",
    desc: "See exactly where every dollar goes",
  },
  {
    title: "No Pressure",
    desc: "Take your time to decide — we never rush you",
  },
  {
    title: "Fixed Pricing",
    desc: "The price we quote is the price you pay",
  },
  {
    title: "Permit Assistance",
    desc: "We'll explain what permits your project needs",
  },
];

const serviceAreas = [
  "Perth Amboy",
  "Hillside Terrace",
  "Allentown",
  "Fords",
  "Woodbridge",
  "Freehold",
  "Old Bridge",
  "Robertsville",
  "Toms River",
  "Brick Township",
  "Lakewood",
  "Jackson Township",
];

function EstimatePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    contactMethod: "",
    prefDate: "",
    prefTime: "",
    description: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Validate required fields
    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.address ||
      !formData.projectType
    ) {
      alert("Please fill out all required fields marked with an asterisk (*).");
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/stellritinc@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Estimate Request from Jhay's Construction",
          Name: formData.fullName,
          Phone: formData.phone,
          Email: formData.email,
          Address: formData.address,
          ProjectType: formData.projectType,
          Timeline: formData.timeline || "Not specified",
          Budget: formData.budget || "Not specified",
          Description: formData.description || "Not specified",
          HowHeard: formData.howHeard || "Not specified",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Smooth scroll to success info
        const element = document.getElementById("estimate-form-container");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was a problem submitting your form");
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToForm = () => {
    const element = document.getElementById("estimate-form-container");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden text-center text-white">
        <img
          src={heroImg}
          alt="Jhay's Construction estimation consulting"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,128,0,0.85)" }} />

        <div className="relative max-w-4xl mx-auto py-12">
          <span className="inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6">
            <Sparkles className="size-3.5 fill-[#008000]" /> Jhay's Free Estimate
          </span>
          <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Your Project Deserves A<br />Fair, Accurate Quote
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Tell us about your vision, and we'll provide a detailed, line-item estimate — completely free. No hidden fees, no surprises, no obligation.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-green-800 bg-white hover:bg-gray-150 px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            Request Your Free Estimate Now <ArrowRight className="size-4 text-[#008000]" />
          </button>

          <p className="mt-8 text-xs text-white/80 italic font-medium max-w-md mx-auto">
            "Transparent pricing. Detailed estimates. Zero pressure. Just honest advice from local experts you can trust."
          </p>
        </div>
      </section>

      {/* Why Choose Jhay's For Your Estimate? */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> Why Choose Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Why Choose Jhay's For Your Estimate?
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              We deliver honest estimates with zero commitment required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#008000]/20 transition-all"
              >
                <div>
                  <div
                    className="size-10 rounded-xl flex items-center justify-center text-white mb-4"
                    style={{ backgroundColor: "#008000" }}
                  >
                    <Check className="size-5" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens During Your Free Estimate? */}
      <section className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> The Process
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              What Happens During Your Free Estimate?
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
              Our simple 4-step process from consultation to project proposal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div key={idx} className="relative bg-white rounded-2xl p-6 border border-gray-150 shadow-sm">
                <div
                  className="absolute -top-4 -left-4 size-10 rounded-full font-bold text-white flex items-center justify-center shadow-md font-display"
                  style={{ backgroundColor: "#008000" }}
                >
                  {s.num}
                </div>
                <h3 className="font-display font-bold text-gray-900 text-base mt-2 mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Grid */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
          <div className="flex items-center gap-3.5 mb-6">
            <div
              className="size-11 rounded-full flex items-center justify-center text-white shrink-0"
              style={{ backgroundColor: "#008000" }}
            >
              <MapPin className="size-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl text-gray-900">
                Our Service Area For Free Estimates
              </h2>
              <p className="text-[10px] text-[#008000] font-bold uppercase tracking-wider">
                Serving Central & Northern New Jersey
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            We offer professional, free in-home estimates to homeowners in the following communities:
          </p>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {serviceAreas.map((town) => (
              <span
                key={town}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm"
              >
                {town}
              </span>
            ))}
          </div>

          <div className="bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4 flex items-start gap-3">
            <ThumbsUp className="size-5 text-[#008000] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Outside these areas?</strong> Call us anyway — we cover a wide surrounding radius and may still be able to help!
            </p>
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section id="estimate-form-container" className="py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-md text-center">
              <div className="size-16 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="size-10" />
              </div>
              <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                Estimate Request Sent!
              </h2>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-10 leading-relaxed">
                Thank you for contacting Jhay's Construction. We have received your project details and will review them immediately.
              </p>

              <div className="text-left max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
                <h3 className="font-display font-bold text-gray-900 text-base mb-5 border-b border-gray-200 pb-3 flex items-center gap-2">
                  <Clock className="size-4.5 text-[#008000]" /> After You Submit
                </h3>
                <ul className="space-y-4">
                  {[
                    "You'll receive an automatic confirmation email",
                    "A project coordinator will call within 24 business hours",
                    "We'll schedule your in-home or virtual consultation",
                    "Your detailed estimate will follow within 2-3 business days after consultation",
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
                Fill out a new estimate request
              </button>
            </div>
          ) : (
            <div className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-md">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
                  Estimate Form
                </span>
                <h2 className="font-display font-bold text-3xl text-gray-900 mb-3">
                  Request Your Free Estimate
                </h2>
                <p className="text-gray-600 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                  Complete the form below and we'll respond within 24 hours. Fields marked with an asterisk (*) are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User className="size-4" />
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="size-4" />
                      </span>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(732) 673-1569"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail className="size-4" />
                      </span>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Street Address + City *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <MapPin className="size-4" />
                      </span>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="735 Hulses Corner Rd, Howell"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Project Type *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Building className="size-4" />
                      </span>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Select project type</option>
                        <option value="Bathroom">Bathroom</option>
                        <option value="Kitchen">Kitchen</option>
                        <option value="Patio">Patio</option>
                        <option value="Decking">Decking</option>
                        <option value="Driveway">Driveway</option>
                        <option value="Room Addition">Room Addition</option>
                        <option value="Basement Finishing">Basement Finishing</option>
                        <option value="Multiple Projects">Multiple Projects</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="size-4.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Phone className="size-4" />
                      </span>
                      <select
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Preferred contact method</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                        <option value="Text">Text</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="size-4.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Preferred Date for Consultation
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Calendar className="size-4" />
                      </span>
                      <input
                        type="date"
                        name="prefDate"
                        value={formData.prefDate}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                      Preferred Time
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Clock className="size-4" />
                      </span>
                      <select
                        name="prefTime"
                        value={formData.prefTime}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Preferred consultation time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <ChevronDown className="size-4.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Brief Project Description
                  </label>
                  <div className="relative">
                    <span className="absolute top-3.5 left-3.5 flex items-start pointer-events-none text-gray-400">
                      <MessageSquare className="size-4" />
                    </span>
                    <textarea
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your vision, dimensions, or specific requests..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    How Did You Hear About Us? (optional)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Briefcase className="size-4" />
                    </span>
                    <select
                      name="referral"
                      value={formData.referral}
                      onChange={handleInputChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Choose an option</option>
                      <option value="Google">Google</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <ChevronDown className="size-4.5" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                  style={{ backgroundColor: "#008000" }}
                >
                  Send My Free Estimate Request <ArrowRight className="size-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-[60px] px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4">
              <span className="size-1.5 rounded-full bg-[#008000]" /> FAQ
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Got questions about your estimate? We've got answers.
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

      {/* Ready To Start Section & Trust Badges */}
      <section className="py-20 px-4 bg-gray-50 border-t border-gray-150">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Ready To Start?
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-10 max-w-md mx-auto">
            Get your free, no-obligation estimate today. Reach us via phone, email, or visit our office.
          </p>

          {/* Contact Details Grid */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
            <a
              href="tel:7326731569"
              className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <Phone className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Call Us
                </div>
                <div className="font-semibold text-gray-900 text-sm">
                  (732) 673-1569
                </div>
              </div>
            </a>
            <a
              href="mailto:jhaycconstruction@gmail.com"
              className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Email Us
                </div>
                <div className="font-semibold text-gray-950 text-sm truncate">
                  info@jhaysconstruction.com
                </div>
              </div>
            </a>
            <div className="bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm">
              <MapPin className="size-5 text-[#008000] shrink-0 mt-0.5" />
              <div>
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                  Visit Us
                </div>
                <div className="font-semibold text-gray-900 text-xs leading-relaxed">
                  735 Hulses Corner Rd, Howell Township, NJ 07731
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500 mb-10">
            <strong>Hours:</strong> Mon-Fri: 8AM – 6PM | Sat: 9AM – 2PM | Sun: Closed
          </div>

          {/* Trust Badges */}
          <div className="border-t border-gray-200 pt-8 mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Licensed & Insured",
                "4.9/5 Star Rating (47+ Reviews)",
                "Free Estimates Since 2006",
                "Local, Family-Owned Business",
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <div
                    className="size-10 rounded-full flex items-center justify-center text-white mb-2 shadow-sm shrink-0"
                    style={{ backgroundColor: "#008000" }}
                  >
                    <ShieldCheck className="size-5" />
                  </div>
                  <span className="text-xs font-bold text-gray-800 leading-snug max-w-[120px]">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
