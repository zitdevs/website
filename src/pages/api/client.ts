"use server";

import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const verifyEndpoint = "https://www.google.com/recaptcha/api/siteverify";

import type { APIRoute } from "astro";

interface ClientFormProps {
  emailData: {
    email: string;
    firstName: string;
    lastName: string;
    message: string;
    company: string;
  };
  captcha: string;
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { emailData, captcha } = body;

  const _params = new URLSearchParams();
  _params.append("secret", import.meta.env.RECAPTCHA_SECRET || "");
  _params.append("response", captcha);

  const captchaResponse = await fetch(verifyEndpoint, {
    method: "POST",
    headers: { "Content-type": "application/x-www-form-urlencoded" },
    body: _params,
  }).then((res) => res.json());

  if (!captchaResponse.success)
    return { error: "Captcha validation failed", success: false };

  const { error } = await resend.emails.send({
    from: "ZitDevs Form <form@zitdevs.com>",
    to: ["contact@zitdevs.com"],
    subject: `New message from ${emailData.firstName} ${emailData.lastName}`,
    html: `
        <p>
            <strong>Name:</strong> ${emailData.firstName} ${emailData.lastName}
        </p>
        <p>
            <strong>Email:</strong> ${emailData.email}
        </p>
        <p>
            <strong>Company:</strong> ${emailData.company}
        </p>
        <p>
            <strong>Message:</strong> ${emailData.message}
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
