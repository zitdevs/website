"use client";
import { Form } from "@/components/form/Form";
import { Dictionary } from "@/get-dictionary";
import { useAppStore } from "@/stores/app.store";
import useIntersectionObserver from "@/utils/useIntersectionObserver";
import { zodResolver } from "@hookform/resolvers/zod";
import { ListResult } from "pocketbase";
import { useRef, useState } from "react";
import Captcha from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { clientContactAction } from "../actions/client.action";
import { saveToWaitlist } from "../actions/zitlanser.action";
import { mainFormSchema } from "../schema/main-form";
import BaseForm from "./base-form";
import ClientForm from "./client-form";
import PrivacyPolicy from "./privacy-policy";
import SelectFormType from "./select-form-type";
import SubmitButton from "./submit-button";
import ZitLancerForm from "./zitlancer-form";

export type MainFormProps = {
  tContact: Dictionary["home"]["contact"];
  skills: ListResult<{
    lang: string;
    name: string;
    id: string;
  }>;
};

const MainForm: React.FC<MainFormProps> = ({ tContact, skills }) => {
  const { main_form: tMainForm } = tContact;
  const schema = mainFormSchema({ tContact });
  type ValidationSchemaTypeDefualt = z.infer<typeof schema>;
  const form = useForm<ValidationSchemaTypeDefualt>({
    resolver: zodResolver(schema),
  });

  const locale = useAppStore((state) => state.locale);
  const [userType, setUserType] = useState<string | null>(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formRef, isFormVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const captchaRef = useRef<Captcha>(null);

  const onSubmit = (data: ValidationSchemaTypeDefualt) => {
    setSubmitting(true);

    if (!privacyPolicy) {
      toast.error(tMainForm.privacy_policy_error);
      return setSubmitting(false);
    }

    (async () => {
      if (data.type == "client") {
        const captcha = (await captchaRef.current?.executeAsync()) || "";
        const res = await clientContactAction(
          {
            email: data.email,
            firstName: data.first_name,
            lastName: data.last_name,
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
        form.reset({
          email: "",
          first_name: "",
          last_name: "",
          message: "",
          company: "",
        });
        setUserType(null);
        return setSubmitting(false);
      }

      if (data.type == "zitlancer") {
        const res = await saveToWaitlist({
          name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          country: data.country.value,
          main_skill: data.mainSkill !== "other" ? data.mainSkill : undefined,
          other_skill: data.otherSkill,
          locale,
        });

        if (res.error) {
          if (res.error === "email_already_exists")
            toast.error(tMainForm.submit_messages.existing_email);
          else toast.error(res.error);

          return setSubmitting(false);
        }

        toast.success(tMainForm.submit_messages.zitlancer_success);
        form.reset({
          email: "",
          first_name: "",
          last_name: "",
          message: "",
          company: "",
        });
        setUserType(null);
        return setSubmitting(false);
      }
    })();
  };

  return (
    <>
      <Form {...form}>
        <form
          className="mx-auto mt-16 max-w-xl sm:mt-20"
          onSubmit={form.handleSubmit(onSubmit)}
          ref={formRef}
        >
          <BaseForm tBaseForm={tContact.base_form} form={form as any} />
          <SelectFormType
            tMainForm={tMainForm}
            userType={userType}
            setUserType={setUserType}
            form={form as any}
          />
          {userType !== null && (
            <div className="mx-auto max-w-xl mt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                {userType === "client" && (
                  <ClientForm
                    tClientForm={tContact.client_form}
                    form={form as any}
                  />
                )}
                {userType === "zitlancer" && (
                  <ZitLancerForm
                    tZitLancerForm={tContact.zitlancer_form}
                    form={form as any}
                    skills={skills}
                  />
                )}
                {userType !== null && (
                  <PrivacyPolicy
                    tPricyPolicy={tContact.privacy_policy}
                    privacyPolicy={privacyPolicy}
                    setPrivacyPolicy={setPrivacyPolicy}
                  />
                )}
                {userType !== null && (
                  <SubmitButton
                    userType={userType}
                    submitting={submitting}
                    setSubmitting={setSubmitting}
                    tSubmit={tMainForm.submit_messages}
                  />
                )}
              </div>
            </div>
          )}
        </form>
        {isFormVisible && (
          <>
            <Captcha
              ref={captchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA!}
            />
          </>
        )}
      </Form>
    </>
  );
};

export default MainForm;
