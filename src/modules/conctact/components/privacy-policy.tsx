"use client";
import { Field, Label, Switch } from "@headlessui/react";
import { useContactStore } from "../store/contact.store";
import { Dictionary } from "@/get-dictionary";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export type PrivacyPolicyProps = {
  tPricyPolicy: Dictionary["home"]["contact"]["privacy_policy"];
};

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ tPricyPolicy }) => {
  const setPrivacyPolicy = useContactStore((state) => state.setPrivacyPolicy);
  const privacyPolicy = useContactStore((state) => state.privacyPolicy);

  return (
    <Field as="div" className="flex gap-x-4 sm:col-span-2">
      <div className="flex h-6 items-center">
        <Switch
          checked={privacyPolicy}
          onChange={setPrivacyPolicy}
          className={classNames(
            privacyPolicy ? "bg-indigo-600" : "bg-gray-200",
            "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          )}
        >
          <span className="sr-only">{tPricyPolicy.sr_only}</span>
          <span
            aria-hidden="true"
            className={classNames(
              privacyPolicy ? "translate-x-3.5" : "translate-x-0",
              "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
      </div>
      <Label className="text-sm leading-6 text-gray-600">
        {tPricyPolicy.label}{" "}
        <a href="#" className="font-semibold text-indigo-600">
          {tPricyPolicy.link_text}
        </a>
        .
      </Label>
    </Field>
  );
};

export default PrivacyPolicy;
