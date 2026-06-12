import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { T as TopBar } from "./TopBar-C2iiJgRU.mjs";
import { H as Header, h as heroImg, F as Footer } from "./Footer-D486PbCA.mjs";
import { f as Sparkles, b as ArrowRight, a as Check, e as MapPin, T as ThumbsUp, g as CircleCheck, h as Clock, U as User, P as Phone, M as Mail, B as Building, i as ChevronDown, j as Calendar, k as MessageSquare, l as Briefcase, m as ChevronUp, n as ShieldCheck } from "../_libs/lucide-react.mjs";
const faqs = [{
  q: "Is the estimate really free?",
  a: "Yes — 100% free. No hidden fees, no obligation to hire us."
}, {
  q: "Do I need to be home for the estimate?",
  a: "For in-home estimates, yes. For virtual estimates, you can show us the space via video call."
}, {
  q: "How accurate is the estimate?",
  a: "We provide line-item estimates based on current material prices and labor rates. Unless you change the scope of work, the price is locked in."
}, {
  q: "Can you handle permits?",
  a: "Yes. We'll identify what permits your project requires and can handle the filing process for you."
}, {
  q: "What if my project is outside your listed area?",
  a: "Call us anyway. We serve much of central and northern New Jersey."
}];
const steps = [{
  num: "1",
  title: "Tell Us About Your Project",
  desc: "Fill out the quick form below with your basic info and project type."
}, {
  num: "2",
  title: "Schedule A Consultation",
  desc: "We'll call you within 24 hours to discuss your vision and schedule an in-person or virtual walkthrough."
}, {
  num: "3",
  title: "Receive Your Detailed Estimate",
  desc: "Within 2-3 business days, you'll get a written estimate breaking down materials, labor, timeline, and permit requirements."
}, {
  num: "4",
  title: "Ask Questions, Then Decide",
  desc: "Review the estimate at your own pace. We're happy to clarify anything. No pressure, no rush."
}];
const features = [{
  title: "In-Home or Virtual",
  desc: "We can visit your property or review photos/videos remotely"
}, {
  title: "Detailed Line Items",
  desc: "See exactly where every dollar goes"
}, {
  title: "No Pressure",
  desc: "Take your time to decide — we never rush you"
}, {
  title: "Fixed Pricing",
  desc: "The price we quote is the price you pay"
}, {
  title: "Permit Assistance",
  desc: "We'll explain what permits your project needs"
}];
const serviceAreas = ["Howell Township (HQ)", "Perth Amboy", "Woodbridge", "Rahway", "Fords", "Carteret", "Linden", "Elizabeth", "Freehold", "Brick Township", "Toms River", "Wall Township", "Manalapan"];
function EstimatePage() {
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    projectType: "",
    contactMethod: "",
    prefDate: "",
    prefTime: "",
    description: "",
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.address || !formData.projectType) {
      alert("Please fill out all required fields marked with an asterisk (*).");
      return;
    }
    setSubmitted(true);
    const element = document.getElementById("estimate-form-container");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  const scrollToForm = () => {
    const element = document.getElementById("estimate-form-container");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-4 overflow-hidden text-center text-white", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Jhay's Construction estimation consulting", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        backgroundColor: "rgba(0,128,0,0.85)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto py-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 bg-white text-[#008000] px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3.5 fill-[#008000]" }),
          " Jhay's Free Estimate"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-4xl md:text-6xl mb-6 leading-tight", children: [
          "Your Project Deserves A",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Fair, Accurate Quote"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-8", children: "Tell us about your vision, and we'll provide a detailed, line-item estimate — completely free. No hidden fees, no surprises, no obligation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: scrollToForm, className: "inline-flex items-center gap-2 text-green-800 bg-white hover:bg-gray-150 px-8 py-4 rounded-full font-bold text-base shadow-lg transition-all hover:scale-[1.02] cursor-pointer", children: [
          "Request Your Free Estimate Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 text-[#008000]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-xs text-white/80 italic font-medium max-w-md mx-auto", children: '"Transparent pricing. Detailed estimates. Zero pressure. Just honest advice from local experts you can trust."' })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " Why Choose Us"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "Why Choose Jhay's For Your Estimate?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-xl mx-auto", children: "We deliver honest estimates with zero commitment required." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-5 gap-6", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-[#008000]/20 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-xl flex items-center justify-center text-white mb-4", style: {
          backgroundColor: "#008000"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-base mb-2", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: f.desc })
      ] }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " The Process"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "What Happens During Your Free Estimate?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base max-w-xl mx-auto", children: "Our simple 4-step process from consultation to project proposal" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-white rounded-2xl p-6 border border-gray-150 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 -left-4 size-10 rounded-full font-bold text-white flex items-center justify-center shadow-md font-display", style: {
          backgroundColor: "#008000"
        }, children: s.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-gray-900 text-base mt-2 mb-3 leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-600 leading-relaxed", children: s.desc })
      ] }, idx)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto bg-gray-50 border border-gray-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3.5 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-full flex items-center justify-center text-white shrink-0", style: {
          backgroundColor: "#008000"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-2xl text-gray-900", children: "Our Service Area For Free Estimates" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-[#008000] font-bold uppercase tracking-wider", children: "Serving Central & Northern New Jersey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mb-6 leading-relaxed", children: "We offer professional, free in-home estimates to homeowners in the following communities:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5 mb-8", children: serviceAreas.map((town) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 shadow-sm", children: town }, town)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#008000]/5 border border-[#008000]/10 rounded-xl p-4 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ThumbsUp, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-600 leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Outside these areas?" }),
          " Call us anyway — we cover a wide surrounding radius and may still be able to help!"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "estimate-form-container", className: "py-[60px] px-4 bg-gray-50 border-t border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-md text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-full bg-green-100 text-[#008000] flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-10" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-gray-900 mb-3", children: "Estimate Request Sent!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm max-w-md mx-auto mb-10 leading-relaxed", children: "Thank you for contacting Jhay's Construction. We have received your project details and will review them immediately." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left max-w-xl mx-auto bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-gray-900 text-base mb-5 border-b border-gray-200 pb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4.5 text-[#008000]" }),
          " After You Submit"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: ["You'll receive an automatic confirmation email", "A project coordinator will call within 24 business hours", "We'll schedule your in-home or virtual consultation", "Your detailed estimate will follow within 2-3 business days after consultation"].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-5 bg-[#008000]/10 text-[#008000] rounded-full flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
        ] }, idx)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSubmitted(false), className: "mt-10 text-xs font-bold uppercase tracking-wider text-[#008000] hover:text-[#008000]/80 transition-colors", children: "Fill out a new estimate request" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-12 shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: "Estimate Form" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl text-gray-900 mb-3", children: "Request Your Free Estimate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-xs md:text-sm max-w-lg mx-auto leading-relaxed", children: "Complete the form below and we'll respond within 24 hours. Fields marked with an asterisk (*) are required." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Full Name *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "fullName", required: true, value: formData.fullName, onChange: handleInputChange, placeholder: "John Doe", className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Phone Number *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", name: "phone", required: true, value: formData.phone, onChange: handleInputChange, placeholder: "(732) 673-1569", className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Email Address *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", name: "email", required: true, value: formData.email, onChange: handleInputChange, placeholder: "john@example.com", className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Street Address + City *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", name: "address", required: true, value: formData.address, onChange: handleInputChange, placeholder: "735 Hulses Corner Rd, Howell", className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Project Type *" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "projectType", required: true, value: formData.projectType, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select project type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Bathroom", children: "Bathroom" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Kitchen", children: "Kitchen" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Patio", children: "Patio" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Decking", children: "Decking" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Driveway", children: "Driveway" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Room Addition", children: "Room Addition" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Basement Finishing", children: "Basement Finishing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Multiple Projects", children: "Multiple Projects" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Preferred Contact Method" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "contactMethod", value: formData.contactMethod, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Preferred contact method" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Phone", children: "Phone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Email", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Text", children: "Text" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Preferred Date for Consultation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", name: "prefDate", value: formData.prefDate, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all cursor-pointer" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Preferred Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "prefTime", value: formData.prefTime, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Preferred consultation time" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Morning", children: "Morning" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Afternoon", children: "Afternoon" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Evening", children: "Evening" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Flexible", children: "Flexible" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "Brief Project Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3.5 left-3.5 flex items-start pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "description", rows: 4, value: formData.description, onChange: handleInputChange, placeholder: "Describe your vision, dimensions, or specific requests...", className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all resize-none" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2", children: "How Did You Hear About Us? (optional)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "referral", value: formData.referral, onChange: handleInputChange, className: "w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3.5 text-sm text-gray-900 focus:outline-none focus:border-[#008000] focus:ring-2 focus:ring-[#008000]/10 transition-all appearance-none cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Choose an option" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Google", children: "Google" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Facebook", children: "Facebook" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Referral", children: "Referral" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other", children: "Other" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "size-4.5" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full text-white font-bold py-4 rounded-xl hover:shadow-[0_8px_30px_rgba(0,128,0,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer", style: {
          backgroundColor: "#008000"
        }, children: [
          "Send My Free Estimate Request ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-[60px] px-4 bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[#008000] text-xs uppercase tracking-widest font-bold mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-[#008000]" }),
          " FAQ"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-3", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base", children: "Got questions about your estimate? We've got answers." })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 px-4 bg-gray-50 border-t border-gray-150", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-3xl md:text-4xl text-gray-900 mb-4", children: "Ready To Start?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm md:text-base mb-10 max-w-md mx-auto", children: "Get your free, no-obligation estimate today. Reach us via phone, email, or visit our office." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-6 mb-12 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:7326731569", className: "bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Call Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900 text-sm", children: "(732) 673-1569" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:jhaycconstruction@gmail.com", className: "bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Email Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-950 text-sm truncate", children: "info@jhaysconstruction.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-150 rounded-2xl p-5 flex items-start gap-3.5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-[#008000] shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5", children: "Visit Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900 text-xs leading-relaxed", children: "735 Hulses Corner Rd, Howell Township, NJ 07731" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-gray-500 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Hours:" }),
        " Mon-Fri: 8AM – 6PM | Sat: 9AM – 2PM | Sun: Closed"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gray-200 pt-8 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: ["Licensed & Insured", "4.9/5 Star Rating (47+ Reviews)", "Free Estimates Since 2006", "Local, Family-Owned Business"].map((badge, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-full flex items-center justify-center text-white mb-2 shadow-sm shrink-0", style: {
          backgroundColor: "#008000"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-gray-800 leading-snug max-w-[120px]", children: badge })
      ] }, idx)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  EstimatePage as component
};
