"use client";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select/Select";
import { Dictionary } from "@/get-dictionary";
import { useAppStore } from "@/stores/app.store";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { ListResult } from "pocketbase";
import React from "react";
import { useForm } from "react-hook-form";
import ReactSelect from "react-tailwindcss-select";

export type ZitLancerFormProps = {
  tZitLancerForm: Dictionary["home"]["contact"]["zitlancer_form"];
  form: ReturnType<typeof useForm>;
  skills: ListResult<{
    lang: string;
    name: string;
    id: string;
  }>;
};

const ZitLancerForm: React.FC<ZitLancerFormProps> = ({
  tZitLancerForm,
  form,
  skills,
}) => {
  const countries = useAppStore((state) => state.countries);

  return (
    <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="sm:col-span-2">
        {countries && (
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {tZitLancerForm.labels.country}{" "}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <ReactSelect
                  options={Object.keys(countries).map((key) => ({
                    value: key,
                    label: `${getUnicodeFlagIcon(key)} ${countries[key as keyof typeof countries]}`,
                  }))}
                  primaryColor="text-primary"
                  classNames={{}}
                  {...field}
                  value={field.value}
                  isSearchable
                  isClearable
                  searchInputPlaceholder={
                    tZitLancerForm.placeholders.country_search
                  }
                  placeholder={tZitLancerForm.placeholders.country_select}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
      <div className="sm:col-span-2">
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
                onValueChange={(value) => {
                  form.setValue("mainSkill", value);
                  form.setValue("otherSkill", "");
                }}
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
                  {skills.items.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                      {item.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="other">
                    {tZitLancerForm.skills.other}
                  </SelectItem>
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
                  {tZitLancerForm.labels.other_skill}{" "}
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
    </div>
  );
};

export default ZitLancerForm;
