"use server";

import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

import type { APIRoute } from "astro";

interface ClientFormProps {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  company: string;
}

export const POST: APIRoute = async ({
  params,
  request,
}): Promise<Response> => {
  const body = await request.json();
  const { email, firstName, lastName, message, company } =
    body as ClientFormProps;

  const { error } = await resend.emails.send({
    from: "ZitDevs Form <form@zitdevs.com>",
    to: ["contact@zitdevs.com"],
    subject: `New message from ${firstName} ${lastName}`,
    html: `
        <p>
            <strong>Name:</strong> ${firstName} ${lastName}
        </p>
        <p>
            <strong>Email:</strong> ${email}
        </p>
        <p>
            <strong>Company:</strong> ${company}
        </p>
        <p>
            <strong>Message:</strong> ${message}
        </p>
    `,
  });

  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message,
        success: false,
      }),
    );
  }

  return new Response(
    JSON.stringify({
      success: true,
    }),
  );
};
