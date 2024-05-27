"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select/Select";
import { useEffect } from "react";
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
  FormDescription,
} from "@/components/form/Form";

const ZitLancerForm = () => {
  const schema = z.object({
    mainSkill: z.string().min(0, "Main skill is required"),
    otherSkill: z.string().optional(),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });
  const isSubmitting = useContactStore((state) => state.isSubmitting);

  useEffect(() => {
    if (isSubmitting) {
      form.handleSubmit((e) => {
        if (e.mainSkill === "other" && !e.otherSkill) {
          form.setError("otherSkill", {
            type: "manual",
            message: "Other skill is required",
          });
          return;
        }

        console.log(e);
      })();
    }
  }, [form, isSubmitting]);

  return (
    <Form {...form}>
      <form className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <div className="mt-2.5"></div>
          <FormField
            control={form.control}
            name="mainSkill"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Main Skill <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your main skill" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="software-dev">
                      Software Development
                    </SelectItem>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="mobile-dev">
                      Mobile Development
                    </SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {form.watch("mainSkill") === "other" && (
          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="otherSkill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Other Skill <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      autoComplete="off"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Please specify your main skill
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </form>
    </Form>
  );
};

export default ZitLancerForm;
