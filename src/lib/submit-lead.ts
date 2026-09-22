export interface LeadData {
  formType: "Estimate Request" | "Contact Message" | "Newsletter Subscription";
  fullName?: string;
  name?: string;
  email: string;
  phone?: string;
  address?: string;
  service?: string;
  projectType?: string;
  preferredDate?: string;
  preferredTime?: string;
  details?: string;
  message?: string;
  referral?: string;
}

export async function submitLeadForm(lead: LeadData): Promise<{ success: boolean; message?: string }> {
  const normalizedName = lead.fullName || lead.name || "";
  const normalizedService = lead.service || lead.projectType || "";
  const normalizedDetails = lead.details || lead.message || "";

  // 1. Primary: Submit to our Zoho SMTP endpoint (/api/send-email)
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        formType: lead.formType,
        name: normalizedName,
        email: lead.email,
        phone: lead.phone,
        address: lead.address,
        service: normalizedService,
        projectType: normalizedService,
        preferredDate: lead.preferredDate,
        preferredTime: lead.preferredTime,
        details: normalizedDetails,
        message: normalizedDetails,
        referral: lead.referral,
      }),
    });

    if (res.ok) {
      const data = await res.json().catch(() => ({}));
      if (data.success !== false) {
        return { success: true };
      }
    }
    console.warn("Direct /api/send-email returned non-ok, falling back to FormSubmit to eva@stellrit.com...");
  } catch (directErr) {
    console.warn("Direct /api/send-email error, falling back to FormSubmit to eva@stellrit.com:", directErr);
  }

  // 2. Secondary Fallback: FormSubmit directed to eva@stellrit.com
  try {
    const fallbackRes = await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New ${lead.formType} from Jhay's Construction Website`,
        _captcha: "false",
        FormType: lead.formType,
        Name: normalizedName,
        Email: lead.email,
        Phone: lead.phone || "Not specified",
        Address: lead.address || "Not specified",
        Service: normalizedService || "Not specified",
        PreferredDate: lead.preferredDate || "Not specified",
        PreferredTime: lead.preferredTime || "Not specified",
        Details: normalizedDetails || "Not specified",
        Referral: lead.referral || "Not specified",
      }),
    });

    if (fallbackRes.ok || fallbackRes.status === 200) {
      return { success: true };
    }
    const text = await fallbackRes.text();
    throw new Error(text || "Submission failed");
  } catch (fallbackErr: any) {
    console.error("All delivery methods failed:", fallbackErr);
    throw new Error(fallbackErr.message || "Failed to deliver submission");
  }
}
