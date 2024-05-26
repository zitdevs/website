"use client";

import { Button } from "@/components/button/Button";
import { DynamicIcon } from "@/components/icons/dynamic";
import { cn } from "@/lib/utils";
import { useState } from "react";
import ClientForm from "./components/client-form";
import ZitLancerForm from "./components/zitlancer-form";
import { Field, Label, Switch } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Contact() {
  const [selectedType, setSelectedType] = useState<
    "client" | "zitlanzer" | null
  >(null);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate from-[#F5F8FF] to-[#dbe5ff] bg-gradient-to-br px-6 py-24 sm:py-32 lg:px-8 mt-14 min-h-screen">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Ready to start a project? Drop us a line.
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <DynamicIcon
                      name="trash"
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
                  selected: selectedType === "zitlanzer",
                  hidden: selectedType !== "zitlanzer" && selectedType !== null,
                  "rounded-l-none": selectedType === null,
                })}
                disabled={selectedType === "zitlanzer"}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedType("zitlanzer");
                }}
              >
                Zitlanzer
              </Button>
            </div>
          </div>
          {selectedType === "client" && <ClientForm />}
          {selectedType === "zitlanzer" && <ZitLancerForm />}
          {selectedType !== null && (
            <Field as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-indigo-600" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          )}
        </div>
        <div className="mt-10">
          {selectedType !== null && (
            <Button variant="secondary" className="w-full">
              Let&apos;s talk
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
