"use server";
import { actionClient } from "./safe-action";

import { sendInquiryEmail } from "@/lib/email";
import { formSchema } from "@/lib/form-schema";

export const serverAction = actionClient
  .inputSchema(formSchema)
  .action(async ({ parsedInput }) => {
    try {
      // Send the inquiry email
      await sendInquiryEmail({
        name: parsedInput.name,
        email: parsedInput.email,
        company: parsedInput.company,
        employees: parsedInput.employees,
        message: parsedInput.message,
      });

      return {
        success: true,
        message: "Form submitted successfully",
      };
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.error("Error sending inquiry email:", error);
      }
      return {
        success: false,
        message: "Failed to submit form. Please try again.",
      };
    }
  });
