"use server";

import { parseWithZod } from "@conform-to/zod";
import { contactSchema } from "./lib/zodSchemas";
import { redirect } from "next/navigation";

export async function SubmitContact(prevState: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: contactSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  try {
    const baseUrl =
      process.env.DEV_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3000";
    const apiUrl = `${baseUrl}/api/send`;

    console.log("Sending request to:", apiUrl);

    const dataToSend = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: submission.value.name,
        userEmail: submission.value.email,
        userPhone: submission.value.phone,
        userMessage: submission.value.message,
      }),
    });

    if (!dataToSend.ok) {
      const errorText = await dataToSend.text();
      throw new Error(
        `Failed to send email: ${dataToSend.status} - ${errorText}`
      );
    }

    const responseData = await dataToSend.json();
    console.log("Success response:", responseData);
  } catch (err) {
    console.error("Error in SubmitContact:", err);

    return submission.reply({
      formErrors: [`${err}, something went wrong. Please try again`],
    });
  }

  return redirect("/thank-you");
}
