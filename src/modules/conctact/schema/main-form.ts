import { Dictionary } from "@/get-dictionary";
import { z } from "zod";

export interface MainFormProps {
  tContact: Dictionary["home"]["contact"];
}

export type FormType = "client" | "zitlancer";

export type BaseSchemaType = {
  email: string;
  first_name: string;
  last_name: string;
};

export type ClientSchemaType = BaseSchemaType & {
  type: "client";
  company: string;
  message: string;
};

export type ZitlancerSchemaType = BaseSchemaType & {
  type: "zitlancer";
  mainSkill: string;
  otherSkill?: string;
  country: {
    value: string;
    label: string;
  };
};

export const mainFormSchema = ({ tContact }: MainFormProps) => {
  const formType = z.enum(["client", "zitlancer"]);

  const baseFormProps = {
    email: z
      .string({
        required_error: tContact.base_form.validation_messages.email_required,
      })
      .email({ message: tContact.base_form.validation_messages.email_invalid }),
    first_name: z
      .string({
        required_error:
          tContact.base_form.validation_messages.first_name_required,
      })
      .min(1, tContact.base_form.validation_messages.first_name_required),
    last_name: z
      .string({
        required_error:
          tContact.base_form.validation_messages.last_name_required,
      })
      .min(1, tContact.base_form.validation_messages.last_name_required),
  };

  const clientSchema = z.object({
    ...baseFormProps,
    type: z.literal(formType.enum.client),
    company: z
      .string({
        required_error: tContact.client_form.placeholders.company,
      })
      .min(1, tContact.client_form.placeholders.company),
    message: z
      .string({
        required_error: tContact.client_form.placeholders.message,
      })
      .min(1, tContact.client_form.placeholders.message),
  });

  const zitlancerSchema = z.object({
    ...baseFormProps,
    type: z.literal(formType.enum.zitlancer),
    mainSkill: z
      .string({
        required_error:
          tContact.zitlancer_form.validation_messages.main_skill_required,
      })
      .min(0, tContact.zitlancer_form.validation_messages.main_skill_required),
    otherSkill: z.string().optional(),
    country: z.object(
      {
        value: z.string().min(0),
        label: z.string(),
      },
      {
        required_error:
          tContact.zitlancer_form.validation_messages.country_required,
      }
    ),
  });

  return z.discriminatedUnion("type", [clientSchema, zitlancerSchema]).refine(
    (data) => {
      if (data.type === "zitlancer" && data.mainSkill === "other") {
        return z
          .object({
            otherSkill: z
              .string({
                required_error:
                  tContact.zitlancer_form.validation_messages
                    .other_skill_required,
              })
              .min(
                1,
                tContact.zitlancer_form.validation_messages.other_skill_required
              ),
          })
          .safeParse(data).success;
      }
      return true;
    },
    {
      message: tContact.zitlancer_form.validation_messages.other_skill_required,
      path: ["otherSkill"],
    }
  );
};
