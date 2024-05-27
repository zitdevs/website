"use client";
import { Button } from "@/components/button/Button";
import { cn } from "@/lib/utils";
import ClientForm from "./client-form";
import ZitLancerForm from "./zitlancer-form";
import PrivacyPolicy from "./privacy-policy";
import { TrashIcon } from "lucide-react";
import { useContactStore } from "../store/contact.store";
import { useEffect } from "react";
import TempForm from "./temp-form";
import { toast } from "sonner";

const MainForm = () => {
  const {
    data,
    isSubmitting,
    setSubmitting,
    user_type: userType,
    setUserType,
    isValid,
    email,
    firstName,
    lastName,
    privacyPolicy,
    setValid,
  } = useContactStore();

  useEffect(() => {
    if (!isSubmitting) return;
    const validValues = Object.keys(isValid).filter(
      (key) => isValid[key as keyof typeof isValid]
    );

    if (validValues.length < 2) return setSubmitting(false);

    if (!privacyPolicy) {
      toast.error("You need to accept the privacy policy");
      setValid(false, "privacy");
    } else {
      setValid(true, "privacy");
    }
  }, [
    isSubmitting,
    isValid,
    isValid.main,
    privacyPolicy,
    setSubmitting,
    setValid,
  ]);

  useEffect(() => {
    if (!isValid.main || !isValid.privacy) return setSubmitting(false);
    if (userType === "client" && !isValid.client) return setSubmitting(false);
    if (userType === "zitlancer" && !isValid.zitlancer)
      return setSubmitting(false);

    console.log("Simulating submit", {
      ...data,
      email,
      firstName,
      lastName,
    });
  }, [data, email, firstName, isValid, lastName, setSubmitting, userType]);

  return (
    <>
      <TempForm />
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
          <div className="mt-10 col-span-2">
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
