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
import { Dictionary } from "@/get-dictionary";
import { clientContactAction } from "../actions/client.action";

export type MainFormProps = {
  tContact: Dictionary["home"]["contact"];
};

const MainForm: React.FC<MainFormProps> = ({ tContact }) => {
  const { main_form: tMainForm } = tContact;

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
    clearData,
    captcha,
  } = useContactStore();

  useEffect(() => {
    if (!isSubmitting) return;
    const validValues = Object.keys(isValid).filter(
      (key) => isValid[key as keyof typeof isValid]
    );

    if (validValues.length < 2) return setSubmitting(false);

    if (!privacyPolicy) {
      toast.error(tMainForm.privacy_policy_error);
      setValid(false, "privacy");
    } else {
      setValid(true, "privacy");
    }
  }, [
    isSubmitting,
    isValid,
    privacyPolicy,
    setSubmitting,
    setValid,
    tMainForm.privacy_policy_error,
  ]);

  useEffect(() => {
    if (!isValid.main || !isValid.privacy) return setSubmitting(false);
    if (userType === "client" && !isValid.client) return setSubmitting(false);
    if (userType === "zitlancer" && !isValid.zitlancer)
      return setSubmitting(false);

    if (userType == "client") {
      (async () => {
        const res = await clientContactAction(
          {
            email,
            firstName,
            lastName,
            message: data.message,
            company: data.company,
          },
          captcha
        );

        if (res.error) {
          toast.error(res.error);
          return setSubmitting(false);
        }

        toast.success(tMainForm.submit_messages.success);
        clearData();
        return setSubmitting(false);
      })();
    }

    console.log("Simulating submit", {
      ...data,
      email,
      firstName,
      lastName,
    });
  }, [
    captcha,
    clearData,
    data,
    email,
    firstName,
    isValid,
    lastName,
    setSubmitting,
    tMainForm.submit_messages.success,
    userType,
  ]);

  return (
    <>
      <TempForm tTempForm={tContact.temp_form} />
      <div className="mx-auto max-w-xl mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
          <div className="col-span-2">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              {userType === null ? (
                tMainForm.label.default
              ) : (
                <div className="flex items-center gap-2 font-semibold">
                  <span>{tMainForm.label.selected.prefix}</span>
                  <div
                    className="flex items-center gap-1 cursor-pointer hover:text-secondary transition-all"
                    onClick={(e) => {
                      e.preventDefault();
                      setUserType(null);
                    }}
                  >
                    <span>(</span>
                    <span>{tMainForm.label.selected.remove}</span>
                    <TrashIcon
                      className="text-red-500 size-4"
                      aria-hidden="true"
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
                {tMainForm.buttons.client}
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
                {tMainForm.buttons.zitlancer}
              </Button>
            </div>
          </div>
          {userType === "client" && (
            <ClientForm tClientForm={tContact.client_form} />
          )}
          {userType === "zitlancer" && (
            <ZitLancerForm tZitLancerForm={tContact.zitlancer_form} />
          )}
          {userType !== null && (
            <PrivacyPolicy tPricyPolicy={tContact.privacy_policy} />
          )}
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
                {userType === "client"
                  ? tMainForm.submit_messages.client
                  : tMainForm.submit_messages.zitlancer}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
