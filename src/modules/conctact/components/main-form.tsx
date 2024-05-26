import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import ClientForm from "./client-form";
import ZitLancerForm from "./zitlancer-form";
import PrivacyPolicy from "./privacy-policy";
import { useState } from "react";
import { TrashIcon } from "lucide-react";

const MainForm = () => {
  const [selectedType, setSelectedType] = useState<
    "client" | "zitlancer" | null
  >(null);

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
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {selectedType === null ? (
              "Who are you?"
            ) : (
              <div className="flex items-center gap-2 font-semibold">
                <span>I&apos;m want to be</span>
                <div
                  className="flex items-center gap-1 cursor-pointer hover:text-secondary transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedType(null);
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
              "grid grid-cols-2": selectedType === null,
            })}
          >
            <Button
              className={cn("w-full block", {
                selected: selectedType === "client",
                hidden: selectedType !== "client" && selectedType !== null,
                "rounded-r-none": selectedType === null,
              })}
              variant="secondary"
              disabled={selectedType === "client"}
              onClick={(e) => {
                e.preventDefault();
                setSelectedType("client");
              }}
            >
              Client
            </Button>
            <Button
              className={cn("w-full block", {
                selected: selectedType === "zitlancer",
                hidden: selectedType !== "zitlancer" && selectedType !== null,
                "rounded-l-none": selectedType === null,
              })}
              disabled={selectedType === "zitlancer"}
              onClick={(e) => {
                e.preventDefault();
                setSelectedType("zitlancer");
              }}
            >
              Zitlancer
            </Button>
          </div>
        </div>
        {selectedType === "client" && <ClientForm />}
        {selectedType === "zitlancer" && <ZitLancerForm />}
        {selectedType !== null && <PrivacyPolicy />}
      </div>
      <div className="mt-10">
        {selectedType !== null && (
          <Button variant="secondary" className="w-full">
            {selectedType === "client" ? "Let's talk" : "Join To Waitlist"}
          </Button>
        )}
      </div>
    </form>
  );
};

export default MainForm;
