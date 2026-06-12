import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TopBar } from "./TopBar-C2iiJgRU.mjs";
import { H as Header, h as heroImg, F as Footer } from "./Footer-D486PbCA.mjs";
import { P as Phone, M as Mail, e as MapPin, o as Users, F as Facebook, I as Instagram, S as Star, g as CircleCheck, p as Info, a as Check, i as ChevronDown, q as Send, h as Clock, b as ArrowRight, m as ChevronUp, r as Compass, n as ShieldCheck } from "../_libs/lucide-react.mjs";
const faqs = [{
  q: "How quickly do you respond to messages?",
  a: "We respond to all calls, texts, emails, and form submissions within 24 business hours. Most inquiries receive a response within 2-4 hours."
}, {
  q: "Do you offer emergency services?",
  a: "For true home emergencies (major leaks, structural issues), call our main line and follow the prompts for emergency assistance."
}, {
  q: "Can I get a quote without a home visit?",
  a: "Yes. We can provide preliminary estimates based on photos and video calls. For final, accurate quotes, we recommend an in-home visit."
}, {
  q: "Are you licensed and insured?",
  a: "Absolutely. We are fully licensed in New Jersey and carry liability insurance. Proof available upon request."
}, {
  q: "Do you serve commercial clients?",
  a: "While we specialize in residential construction, we're happy to discuss commercial projects. Contact us with details."
}];
const serviceCounties = [{
  county: "Monmouth County",
  cities: ["Howell", "Freehold", "Wall Township", "Manalapan", "Colts Neck", "Farmingdale"]
}, {
  county: "Ocean County",
  cities: ["Brick Township", "Toms River", "Lakewood", "Jackson"]
}, {
  county: "Middlesex County",
  cities: ["Perth Amboy", "Woodbridge", "Rahway", "Fords", "Carteret", "Old Bridge", "Edison"]
}, {
  county: "Union County",
  cities: ["Linden", "Elizabeth", "Rahway (partial)"]
}];
const landmarks = ["Near Howell Town Hall", "Close to Route 9 and I-195", "Approximately 5 minutes from Freehold Raceway Mall"];
const directions = [{
  from: "Freehold",
  steps: "Take Route 9 South to Hulses Corner Rd. Turn right. Destination is 0.3 miles on left."
}, {
  from: "Brick Township",
  steps: "Take I-195 West to Exit 31B toward Howell. Follow signs."
}, {
  from: "Perth Amboy",
  steps: "Take Route 440 South to I-287 South to Route 9 South."
}];
const hoursTable = [{
  day: "Monday",
  hours: "8:00 AM – 6:00 PM"
}, {
  day: "Tuesday",
  hours: "8:00 AM – 6:00 PM"
}, {
  day: "Wednesday",
  hours: "8:00 AM – 6:00 PM"
}, {
  day: "Thursday",
  hours: "8:00 AM – 6:00 PM"
}, {
  day: "Friday",
  hours: "8:00 AM – 6:00 PM"
}, {
  day: "Saturday",
  hours: "9:00 AM – 2:00 PM"
}, {
  day: "Sunday",
  hours: "Closed"
}];
function ContactPage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [newsletterEmail, setNewsletterEmail] = reactExports.useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    serviceInterested: "",
    contactMethod: "",
    bestTime: "",
    message: "",
    referral: ""
  });
  const handleInputChange = (e) => {
    const {
      name,
      value
    } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill out all required fields marked with an asterisk (*).");
      return;
    }
    setSubmitted(true);
    const element = document.getElementById("contact-form-card");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  };
  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 overflow-hidden text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Jhay's Construction project site", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundColor: "rgba(0,128,0,0.85)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: "Get In Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl md:text-6xl mb-6 leading-tight", children: [
          "Let's Talk About Your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Home Project"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-6", children: "Whether you're ready to start or just exploring ideas, our team is here to help. Call, email, or visit us — we make getting in touch easy." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl mx-auto border-l-4 pl-4 italic text-sm text-white/80 leading-relaxed", style: {
          borderColor: "#ffffff"
        }, children: '"Have a question about your upcoming project? Ready to schedule your free estimate? Need a quick quote? Reach out — we respond within 24 hours."' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-2xl flex items-center justify-center text-white mb-6", style: {
            backgroundColor: "#008000"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg mb-4", children: "📞 Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Main Line" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:7326731569", className: "font-bold text-[#008000] hover:text-[#008000]/80 transition-colors text-sm", children: "(732) 673-1569" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Text Messages" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "sms:7326731569", className: "font-bold text-[#008000] hover:text-[#008000]/80 transition-colors text-sm", children: "(732) 673-1569" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-500 mt-0.5", children: "We respond within 2 hours during business hours" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed", children: "Calls after hours? Leave a voicemail and we'll return your call the next business day." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-2xl flex items-center justify-center text-white mb-6", style: {
            backgroundColor: "#008000"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg mb-4", children: "📧 Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "General Inquiries" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:jhaycconstruction@gmail.com", className: "font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block", children: "jhaycconstruction@gmail.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Estimates" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:jhaycconstruction@gmail.com", className: "font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block", children: "jhaycconstruction@gmail.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Customer Support" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:jhaycconstruction@gmail.com", className: "font-bold text-gray-900 hover:text-[#008000] transition-colors text-sm truncate block", children: "jhaycconstruction@gmail.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed mt-6", children: "We respond to all emails within 24 business hours." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-2xl flex items-center justify-center text-white mb-6", style: {
            backgroundColor: "#008000"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg mb-4", children: "📍 Visit Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Showroom & Office" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-bold text-gray-900 text-xs leading-relaxed", children: [
                "735 Hulses Corner Rd",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Howell Township, New Jersey 07731"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Visiting Hours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-gray-900 text-xs", children: "Monday – Friday: 9:00 AM – 4:00 PM" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 leading-relaxed", children: "Please call ahead to ensure someone is available to meet with you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-2xl flex items-center justify-center text-white mb-6", style: {
            backgroundColor: "#008000"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg mb-4", children: "🌐 Social Media" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center justify-between hover:text-[#008000] transition-colors group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Facebook" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 group-hover:text-[#008000] text-sm", children: "@JhaysConstructionNJ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-4 text-gray-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center justify-between hover:text-[#008000] transition-colors group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Instagram" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 group-hover:text-[#008000] text-sm", children: "@JhaysConstruction" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-4 text-gray-400" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "flex items-center justify-between hover:text-[#008000] transition-colors group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider", children: "Google My Business" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-gray-900 group-hover:text-[#008000] text-xs leading-normal", children: "Jhay's Construction – Howell, NJ" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 text-yellow-400 fill-current" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-[#008000] bg-white border border-[#008000]/10 rounded-xl p-3 leading-relaxed font-bold", children: "Follow us for project photos, special offers, and home improvement tips." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact-form-card", className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-sm", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-10" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-gray-900 mb-4", children: "Message Sent Successfully!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-700 text-sm max-w-lg mx-auto mb-10 leading-relaxed", children: "Thank you for reaching out to Jhay's Construction! We've received your message and will respond within 24 hours. In the meantime, feel free to browse our project gallery or check out our reviews." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-base mb-5 border-b border-gray-200 pb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "size-4.5 text-[#008000]" }),
            " After You Submit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: ["You'll receive an automatic confirmation email", "A team member will respond within 24 hours", "For urgent matters, please call us directly"].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 bg-[#008000]/10 text-[#008000] rounded-full flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmitted(false), className: "mt-10 text-xs font-bold uppercase tracking-wider text-[#008000] hover:text-[#008000]/80 transition-colors", children: "Send another message" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl md:text-3xl text-gray-900 mb-2", children: "Quick Contact Form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs md:text-sm leading-relaxed", children: "Prefer to send a message online? Fill out the form below and we'll get back to you within 24 hours. Fields marked with (*) are required." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleFormSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Full Name *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "fullName", required: true, value: formData.fullName, onChange: handleInputChange, placeholder: "John Doe", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Phone Number *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", name: "phone", required: true, value: formData.phone, onChange: handleInputChange, placeholder: "(732) 673-1569", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Email Address *" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", required: true, value: formData.email, onChange: handleInputChange, placeholder: "john@example.com", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Street Address (optional)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "address", value: formData.address, onChange: handleInputChange, placeholder: "735 Hulses Corner Rd, Howell", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Service Interested In" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "serviceInterested", value: formData.serviceInterested, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select service type" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Bathroom", children: "Bathroom" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Kitchen", children: "Kitchen" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patio", children: "Patio" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Decking", children: "Decking" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Driveway", children: "Driveway" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Room Addition", children: "Room Addition" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Basement Finishing", children: "Basement Finishing" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Not Sure Yet", children: "Not Sure Yet" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Best Time To Reach You" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "bestTime", value: formData.bestTime, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose best time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Morning", children: "Morning" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Afternoon", children: "Afternoon" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Evening", children: "Evening" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Anytime", children: "Anytime" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Preferred Contact Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-6 mt-1.5", children: ["Phone", "Email", "Text"].map((method) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-sm font-semibold text-gray-700 select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "contactMethod", value: method, checked: formData.contactMethod === method, onChange: handleInputChange, className: "size-4 text-[#008000] focus:ring-[#008000]/10 border-gray-300" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: method })
            ] }, method)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Message / Questions *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", rows: 5, required: true, value: formData.message, onChange: handleInputChange, placeholder: "Enter your message or questions here...", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "How Did You Hear About Us? (optional)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "referral", value: formData.referral, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose referral channel" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Google Search", children: "Google Search" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Facebook", children: "Facebook" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Referral", children: "Referral" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Flyer", children: "Flyer" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 italic bg-gray-50 border border-gray-200 rounded-xl p-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Note:" }),
            " By submitting this form, you agree to be contacted regarding your project. We never share your information with third parties."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer", style: {
            backgroundColor: "#008000"
          }, children: [
            "Send Message ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-[2rem] p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-lg mb-4 flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-5 text-[#008000]" }),
            " Business Hours At A Glance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border border-gray-200 rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full divide-y divide-gray-200 text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50 font-bold text-gray-500 uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Day" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-3 text-left", children: "Hours" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "bg-white divide-y divide-gray-100 font-medium text-gray-700", children: hoursTable.map((h, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-semibold text-gray-900", children: h.day }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: h.hours })
            ] }, idx)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-500 mt-3.5 leading-relaxed italic", children: "*Holiday hours may vary. Please call ahead for major holidays." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-[2rem] p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-lg mb-2", children: "Connect With Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 leading-relaxed mb-4", children: "Get home improvement tips, seasonal specials, and project inspiration delivered directly to your inbox." }),
          newsletterSubscribed ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-8 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-gray-800", children: "Subscribed successfully!" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleNewsletterSubmit, className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: newsletterEmail, onChange: (e) => setNewsletterEmail(e.target.value), placeholder: "john@example.com", className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4.5 py-3 text-xs text-gray-900 focus:outline-none focus:border-[#008000] transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full text-white font-bold py-3 text-xs rounded-xl hover:shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer", style: {
              backgroundColor: "#008000"
            }, children: [
              "Subscribe ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " Served Communities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "Our Active Service Area" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-xl mx-auto", children: "We proudly serve homeowners throughout central and northern New Jersey counties" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: serviceCounties.map((c, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-2xl p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-base mb-4 border-b border-gray-200 pb-2", children: c.county }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: c.cities.map((city) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-1 bg-white border border-gray-200 rounded-md text-[11px] font-semibold text-gray-700 shadow-sm", children: city }, city)) })
      ] }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-md mx-auto text-center bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Don't see your town?" }),
        " Call us — we cover a wide surrounding radius and may still serve your area!"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " FAQ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base", children: "Find quick answers to common inquiries below." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: faqs.map((faq, i) => {
        const isOpen = openFaq === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-150 rounded-2xl overflow-hidden transition-all bg-white hover:border-[#008000]/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggleFaq(i), className: "w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-gray-900 text-sm md:text-base focus:outline-none transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: faq.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#008000] shrink-0 ml-4", children: isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-5" }) })
          ] }),
          isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 md:px-6 pb-6 text-xs md:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4 bg-gray-50", children: faq.a })
        ] }, i);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 bg-gray-50 border border-gray-100 rounded-[2.5rem] overflow-hidden min-h-[350px] md:min-h-[450px] shadow-sm relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.2330248625963!2d-74.24651572391215!3d40.159365171482165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17fa1a4043499%3A0xcabd14ca3b996b62!2s735%20Hulses%20Corner%20Rd%2C%20Howell%20Township%2C%20NJ%2007731%2C%20USA!5e0!3m2!1sen!2snp!4v1781037763175!5m2!1sen!2snp", className: "absolute inset-0 size-full border-0", allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 flex flex-col justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-[2rem] p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-base mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "size-4.5 text-[#008000]" }),
            " Landmarks Nearby"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: landmarks.map((l, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs md:text-sm text-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-5 bg-[#008000]/10 text-[#008000] rounded-full flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l })
          ] }, idx)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 border border-gray-150 rounded-[2rem] p-6 shadow-sm flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-base mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "size-4.5 text-[#008000]" }),
            " Step-by-Step Directions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: directions.map((d, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs md:text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-gray-950 mb-0.5", children: [
              "From ",
              d.from,
              ":"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed font-medium", children: d.steps })
          ] }, idx)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 border-t border-gray-200 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: ["Licensed & Insured", "4.9/5 Stars (47+ Reviews)", "Free Estimates", "Family-Owned & Operated"].map((badge, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full flex items-center justify-center text-white mb-2 shadow-sm shrink-0", style: {
        backgroundColor: "#008000"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-gray-800 leading-snug", children: badge })
    ] }, idx)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ContactPage as component
};
