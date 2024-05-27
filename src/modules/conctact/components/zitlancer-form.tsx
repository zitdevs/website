"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select/Select";
import React, { useEffect } from "react";
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
import { Dictionary } from "@/get-dictionary";

export type ZitLancerFormProps = {
  tZitLancerForm: Dictionary["home"]["contact"]["zitlancer_form"];
};

const ZitLancerForm: React.FC<ZitLancerFormProps> = ({ tZitLancerForm }) => {
  const schema = z.object({
    mainSkill: z
      .string({
        required_error: tZitLancerForm.validation_messages.main_skill_required,
      })
      .min(0, tZitLancerForm.validation_messages.main_skill_required),
    otherSkill: z.string().optional(),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });

  const setZitLancerData = useContactStore((state) => state.setZitLancerData);
  const isSubmitting = useContactStore((state) => state.isSubmitting);
  const setValid = useContactStore((state) => state.setValid);

  useEffect(() => {
    if (isSubmitting) {
      form.handleSubmit((data) => {
        if (data.mainSkill === "other" && !data.otherSkill) {
          form.setError("otherSkill", {
            type: "manual",
            message: tZitLancerForm.validation_messages.other_skill_required,
          });
          return;
        }

        setZitLancerData({
          mainSkill: data.mainSkill,
          otherSkill: data.otherSkill || "",
          country: "",
        });
      })();
    }
  }, [
    form,
    isSubmitting,
    setValid,
    setZitLancerData,
    tZitLancerForm.validation_messages.other_skill_required,
  ]);

  useEffect(() => {
    setValid(form.formState.isValid, "zitlancer");
  }, [form.formState.isValid, setValid]);

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
                  {tZitLancerForm.labels.main_skill}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={tZitLancerForm.placeholders.main_skill}
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(tZitLancerForm.skills).map(
                      ([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value}
                        </SelectItem>
                      )
                    )}
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
                    {tZitLancerForm.labels.main_skill}{" "}
                    <span className="text-red-500">*</span>
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
                    {tZitLancerForm.placeholders.other_skill}
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
