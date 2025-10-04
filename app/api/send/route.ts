import { Resend } from "resend";

import NewUser from "@/emails/NewUser";
import WelcomeEmail from "@/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const json = await request.json();

  try {
    const { userName, userEmail, userPhone, userMessage } = json;

    const { data, error } = await resend.batch.send([
      {
        from: "Mama Quilla <info@email.mamaquillatx.com>",
        to: [userEmail],
        subject: "Mama Quilla. Will be in touch as soon as possible.",
        react: WelcomeEmail({ userName }),
      },

      {
        from: "Mama Quilla Website <info@email.mamaquillatx.com>",
        to: ["mamaquillatx@gmail.com"],
        subject: "New client has sent you an email from the website",
        react: NewUser({ userName, userEmail, userPhone, userMessage }),
      },
    ]);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
