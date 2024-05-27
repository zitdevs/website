"use client";
import { useEffect, useRef } from "react";
import { useContactStore } from "../store/contact.store";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { Dictionary } from "@/get-dictionary";
import Captcha from "react-google-recaptcha";
import { toast } from "sonner";

export type ClientFormProps = {
  tClientForm: Dictionary["home"]["contact"]["client_form"];
};

const ClientForm: React.FC<ClientFormProps> = ({ tClientForm }) => {
  const schema = z.object({
    company: z
      .string({
        required_error: tClientForm.placeholders.company,
      })
      .min(1, tClientForm.placeholders.company),
    message: z
      .string({
        required_error: tClientForm.placeholders.message,
      })
      .min(1, tClientForm.placeholders.message),
  });

  type ValidationSchemaType = z.infer<typeof schema>;
  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });
  const captchaRef = useRef<Captcha>(null);

  const setClientData = useContactStore((state) => state.setClientData);
  const isSubmitting = useContactStore((state) => state.isSubmitting);
  const setValid = useContactStore((state) => state.setValid);
  const setCaptcha = useContactStore((state) => state.setCaptcha);

  useEffect(() => {
    if (isSubmitting)
      form.handleSubmit(async (data) => {
        const captcha = await captchaRef.current?.executeAsync();
        if (!captcha) return toast("Captcha is required");

        setCaptcha(captcha);
        setClientData(data);
      })();
  }, [form, isSubmitting, setCaptcha, setClientData, setValid]);

  useEffect(() => {
    setValid(form.formState.isValid, "client");
  }, [form.formState.isValid, setValid]);

  return (
    <>
      <Form {...form}>
        <form className="col-span-2">
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {tClientForm.labels.company}{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {tClientForm.labels.message}{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <textarea
                      id="message"
                      autoComplete="off"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 min-h-10 max-h-28"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
      <Captcha
        ref={captchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!}
      />
    </>
  );
};

export default ClientForm;
