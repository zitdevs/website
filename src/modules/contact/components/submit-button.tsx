import { Button } from "@/components/button/Button";
import { Dictionary } from "@/get-dictionary";
import React from "react";

export type SubmitButtonProps = {
  userType: string | null;
  tSubmit: Dictionary["home"]["contact"]["main_form"]["submit_messages"];
  submitting: boolean;
  setSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({
  tSubmit,
  userType,
  submitting,
}) => {
  return (
    <>
      <div className="mt-10 col-span-2">
        <Button
          variant={userType === "client" ? "secondary" : "default"}
          className="w-full"
          disabled={submitting}
          type="submit"
        >
          {userType === "client" ? tSubmit.client : tSubmit.zitlancer}
        </Button>
      </div>
    </>
  );
};

export default SubmitButton;
