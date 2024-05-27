"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const clientContactAction = async (emailData: {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  company: string;
}) => {
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
    return {
      error: error.message,
      success: false,
    };
  }

  return {
    success: true,
  };
};
