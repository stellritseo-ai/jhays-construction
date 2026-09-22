import nodemailer from "nodemailer";

export interface EmailPayload {
  formType: "Estimate Request" | "Contact Message" | "Newsletter Subscription";
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

export async function sendEmailWithZoho(payload: EmailPayload) {
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  const recipient = process.env.NOTIFICATION_RECIPIENT_EMAIL || "eva@stellrit.com";
  const primaryHost = process.env.ZOHO_SMTP_HOST || "smtppro.zoho.com";

  if (!user || !pass) {
    throw new Error("Zoho SMTP credentials are not configured in environment variables (ZOHO_SMTP_USER / ZOHO_SMTP_PASS).");
  }

  // Build clean HTML email content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
          .header { background: #008000; color: #ffffff; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
          .content { padding: 24px; color: #374151; font-size: 14px; line-height: 1.6; }
          .badge { display: inline-block; background: #ecfdf5; color: #008000; font-weight: 700; padding: 4px 12px; border-radius: 9999px; font-size: 12px; margin-bottom: 16px; border: 1px solid #a7f3d0; }
          table { width: 100%; border-collapse: collapse; margin-top: 12px; margin-bottom: 20px; }
          th, td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #f3f4f6; }
          th { font-size: 12px; text-transform: uppercase; color: #6b7280; width: 35%; }
          td { font-size: 14px; color: #111827; font-weight: 500; }
          .message-box { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 14px; margin-top: 8px; color: #1f2937; }
          .footer { background: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Jhay's Construction</h1>
          </div>
          <div class="content">
            <span class="badge">${payload.formType}</span>
            <p>You have received a new submission from the Jhay's Construction website.</p>
            
            <table>
              ${payload.name ? `<tr><th>Full Name</th><td>${payload.name}</td></tr>` : ""}
              ${payload.email ? `<tr><th>Email Address</th><td><a href="mailto:${payload.email}">${payload.email}</a></td></tr>` : ""}
              ${payload.phone ? `<tr><th>Phone Number</th><td><a href="tel:${payload.phone}">${payload.phone}</a></td></tr>` : ""}
              ${payload.address ? `<tr><th>Service Address</th><td>${payload.address}</td></tr>` : ""}
              ${payload.service || payload.projectType ? `<tr><th>Service / Project</th><td>${payload.service || payload.projectType}</td></tr>` : ""}
              ${payload.preferredDate ? `<tr><th>Preferred Date</th><td>${payload.preferredDate}</td></tr>` : ""}
              ${payload.preferredTime ? `<tr><th>Preferred Time</th><td>${payload.preferredTime}</td></tr>` : ""}
              ${payload.referral ? `<tr><th>Referral Source</th><td>${payload.referral}</td></tr>` : ""}
            </table>

            ${
              payload.message || payload.details
                ? `<div>
                    <strong style="font-size: 13px; text-transform: uppercase; color: #6b7280;">Project Details / Message:</strong>
                    <div class="message-box">${(payload.message || payload.details || "").replace(/\n/g, "<br>")}</div>
                  </div>`
                : ""
            }
          </div>
          <div class="footer">
            Delivered directly to ${recipient} via Jhay's Construction Website Integration.
          </div>
        </div>
      </body>
    </html>
  `;

  const subject = `[New Website Lead] ${payload.formType} - ${payload.name || payload.email}`;

  // Attempt connection with fallback hosts and ports
  const configs = [
    { host: primaryHost, port: 465, secure: true },
    { host: primaryHost, port: 587, secure: false },
    { host: "smtp.zoho.com", port: 465, secure: true },
    { host: "smtp.zoho.com", port: 587, secure: false },
  ];

  let lastError: any = null;

  for (const config of configs) {
    try {
      console.log(`[Email] Attempting Zoho SMTP send via ${config.host}:${config.port}...`);
      const transporter = nodemailer.createTransport({
        host: config.host,
        port: config.port,
        secure: config.secure,
        auth: {
          user,
          pass,
        },
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 10000,
      });

      const info = await transporter.sendMail({
        from: `"Jhay's Construction Leads" <${user}>`,
        replyTo: payload.email,
        to: recipient,
        subject,
        html: htmlContent,
      });

      console.log(`[Email] Success sending via ${config.host}! MessageId: ${info.messageId}`);
      return { success: true, messageId: info.messageId };
    } catch (err: any) {
      console.warn(`[Email] Failed via ${config.host}:${config.port} - ${err.message}`);
      lastError = err;
    }
  }

  throw new Error(lastError?.message || "Failed to send email via Zoho SMTP");
}
