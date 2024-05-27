import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import ClientForm from "./client-form";
import ZitLancerForm from "./zitlancer-form";
import PrivacyPolicy from "./privacy-policy";
import { TrashIcon } from "lucide-react";
import { useContactStore } from "../store/contact.store";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form/Form";

const MainForm = () => {
  const schema = z.object({
    email: z.string().email("Invalid email address"),
    first_name: z.string().nonempty("First name is required"),
    last_name: z.string().nonempty("Last name is required"),
  });

  type ValidationSchemaType = z.infer<typeof schema>;

  const form = useForm<ValidationSchemaType>({ resolver: zodResolver(schema) });

  const userType = useContactStore((state) => state.user_type);
  const setUserType = useContactStore((state) => state.setUserType);
  const [data, setData] = useContactStore((state) => [
    {
      email: state.email,
      first_name: state.firstName,
      last_name: state.lastName,
    },
    {
      email: state.setEmail,
      first_name: state.setFirstName,
      last_name: state.setLastName,
    },
  ]);

  const isSubmitting = useContactStore((state) => state.isSubmitting);
  const setSubmitting = useContactStore((state) => state.setSubmitting);
  const allData = useContactStore((state) => state.data);

  useEffect(() => {
    if (isSubmitting) {
      setSubmitting(false);
      form.handleSubmit(console.log)();
    }
  }, [isSubmitting, allData, setSubmitting, form]);

  return (
    <>
      <Form {...form}>
        <form className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
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
            </div>
            <div>
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
            </div>
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
      <div className="mx-auto max-w-xl mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div className="sm:col-span-2">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {userType === null ? (
                "Who are you?"
              ) : (
                <div className="flex items-center gap-2 font-semibold">
                  <span>I&apos;m want to be</span>
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-secondary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      setUserType(null);
                    }}
                  >
                    <span>(</span>
                    <span>Remove Selection</span>
                    <TrashIcon
                      aria-label="Remove selection"
                      className="text-red-500 size-4"
                    />
                    <span>)</span>
                  </div>
                </div>
              )}
            </label>
            <div
              className={cn("mt-2.5", {
                "grid grid-cols-2": userType === null,
              })}
            >
              <Button
                className={cn("w-full block", {
                  selected: userType === "client",
                  hidden: userType !== "client" && userType !== null,
                  "rounded-r-none": userType === null,
                })}
                variant="secondary"
                disabled={userType === "client"}
                onClick={(e) => {
                  e.preventDefault();
                  setUserType("client");
                }}
              >
                Client
              </Button>
              <Button
                className={cn("w-full block", {
                  selected: userType === "zitlancer",
                  hidden: userType !== "zitlancer" && userType !== null,
                  "rounded-l-none": userType === null,
                })}
                disabled={userType === "zitlancer"}
                onClick={(e) => {
                  e.preventDefault();
                  setUserType("zitlancer");
                }}
              >
                Zitlancer
              </Button>
            </div>
          </div>
          {userType === "client" && <ClientForm />}
          {userType === "zitlancer" && <ZitLancerForm />}
          {userType !== null && <PrivacyPolicy />}
          <div className="mt-10">
            {userType !== null && (
              <Button
                variant={userType === "client" ? "secondary" : "default"}
                className="w-full"
                disabled={isSubmitting}
                onClick={(e) => {
                  e.preventDefault();
                  setSubmitting(true);
                }}
              >
                {userType === "client" ? "Let's talk" : "Join To Waitlist"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
