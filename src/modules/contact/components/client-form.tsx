"use client";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";
import { Dictionary } from "@/get-dictionary";
import { useForm } from "react-hook-form";

export type ClientFormProps = {
  tClientForm: Dictionary["home"]["contact"]["client_form"];
  form: ReturnType<typeof useForm>;
};

const ClientForm: React.FC<ClientFormProps> = ({ tClientForm, form }) => {
  return (
    <>
      <div className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="col-span-2">
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
        <div className="col-span-2">
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
      </div>
    </>
  );
};

export default ClientForm;
