import { Button } from "@/components/button/Button";
import { Dictionary } from "@/get-dictionary";
import { cn } from "@/lib/utils";
import { TrashIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

export type MainFormProps = {
  tMainForm: Dictionary["home"]["contact"]["main_form"];
  form: ReturnType<typeof useForm>;
  userType: string | null;
  setUserType: React.Dispatch<React.SetStateAction<string | null>>;
};

const SelectFormType: React.FC<MainFormProps> = ({
  tMainForm,
  form,
  userType,
  setUserType,
}) => {
  return (
    <>
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
                  form.setValue("type", "client");
                }}
                id="client-button"
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
                  form.setValue("type", "zitlancer");
                }}
                id="zitlancer-button"
              >
                {tMainForm.buttons.zitlancer}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectFormType;
