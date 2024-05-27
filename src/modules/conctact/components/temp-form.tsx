"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useContactStore } from "../store/contact.store";

const TempForm = () => {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    first_name: z.string().nonempty("First name is required"),
    last_name: z.string().nonempty("Last name is required"),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });

  const [setValid, setMainData, isSubmitting] = useContactStore((state) => [
    state.setValid,
    state.setMainData,
    state.isSubmitting,
  ]);

  useEffect(() => {
    if (isSubmitting)
      form.handleSubmit((e) => {
        setMainData({
          email: e.email,
          firstName: e.first_name,
          lastName: e.last_name,
        });

        /**
         * Sometimes form.formState.isValid is not updated after doing and update
         * on another form, or changing user type, so we need to manually set it
         */
        setValid(true, "main");
      })();
  }, [form, isSubmitting, setMainData, setValid]);

  useEffect(() => {
    setValid(form.formState.isValid, "main");
  }, [form.formState.isValid, setValid]);

  return (
    <Form {...form}>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <input
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TempForm;
