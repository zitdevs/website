"use client";
import { useEffect, useState } from "react";
import { ClientStoreState, useContactStore } from "../store/contact.store";
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

const ClientForm = () => {
  const schema = z.object({
    company: z.string().min(1, "Company is required"),
    message: z.string().min(1, "Message is required"),
  });

  type ValidationSchemaType = z.infer<typeof schema>;
  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });

  const setClientData = useContactStore((state) => state.setClientData);
  const isSubmitting = useContactStore((state) => state.isSubmitting);
  const setValid = useContactStore((state) => state.setValid);

  useEffect(() => {
    if (isSubmitting) form.handleSubmit(setClientData)();
  }, [form, isSubmitting, setClientData, setValid]);

  useEffect(() => {
    setValid(form.formState.isValid, "client");
  }, [form.formState.isValid, setValid]);

  return (
    <Form {...form}>
      <form className="col-span-2">
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Company <span className="text-red-500">*</span>
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
                  Message <span className="text-red-500">*</span>
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
  );
};

export default ClientForm;
