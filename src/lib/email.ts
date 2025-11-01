interface EmailData {
  name: string;
  email: string;
  company?: string;
  employees?: string;
  message: string;
}

export async function sendInquiryEmail(data: EmailData) {
  const ownerEmail = process.env.OWNER_EMAIL;

  if (!ownerEmail) {
    throw new Error("OWNER_EMAIL environment variable is not set");
  }

  // Format the email content
  const emailContent = `
New Inquiry Received

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || "Not provided"}
Number of Employees: ${data.employees || "Not provided"}

Message:
${data.message}

---
This inquiry was submitted through the website contact form.
  `.trim();

  // For now, we'll log the email content in development only
  // In production, you would integrate with an email service like:
  // - Resend
  // - SendGrid
  // - AWS SES
  // - Nodemailer with SMTP

  if (process.env.NODE_ENV === "development") {
    /* eslint-disable no-console */
    console.log("=== EMAIL TO SEND ===");
    console.log("To:", ownerEmail);
    console.log("Subject: New Inquiry from", data.name);
    console.log("Content:");
    console.log(emailContent);
    console.log("=== END EMAIL ===");
    /* eslint-enable no-console */
  }

  // NOTE: Replace this with actual email sending logic before production use
  //
  // Example with Resend (npm install resend):
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'noreply@yourdomain.com',
  //   to: ownerEmail,
  //   subject: `New Inquiry from ${data.name}`,
  //   text: emailContent,
  // });
  //
  // Example with SendGrid (npm install @sendgrid/mail):
  // import sgMail from '@sendgrid/mail';
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: ownerEmail,
  //   from: 'noreply@yourdomain.com',
  //   subject: `New Inquiry from ${data.name}`,
  //   text: emailContent,
  // });

  return { success: true };
}
