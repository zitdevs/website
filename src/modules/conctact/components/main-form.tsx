import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import ClientForm from "./client-form";
import ZitLancerForm from "./zitlancer-form";
import PrivacyPolicy from "./privacy-policy";
import { TrashIcon } from "lucide-react";
import { useContactStore } from "../store/contact.store";
import { useEffect } from "react";

const MainForm = () => {
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
    }
  }, [isSubmitting, allData, setSubmitting]);

  return (
    <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            First name <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              onChange={(e) => setData.first_name(e.target.value)}
              value={data.first_name}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Last name <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              onChange={(e) => setData.last_name(e.target.value)}
              value={data.last_name}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              onChange={(e) => setData.email(e.target.value)}
              value={data.email}
            />
          </div>
        </div>
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
      </div>
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
    </form>
  );
};

export default MainForm;
