"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select/Select";
import { useState } from "react";

const ZitLancerForm = () => {
  const [mainSkill, setMainSkill] = useState<string>("");

  return (
    <>
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
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="main-skill"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Main Skill <span className="text-red-500">*</span>
        </label>
        <div className="mt-2.5">
          <Select onValueChange={(value) => setMainSkill(value)}>
            <SelectTrigger className="w-full" id="main-skill">
              <SelectValue placeholder="Select your main skill" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="software-dev">Software Development</SelectItem>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="mobile-dev">Mobile Development</SelectItem>
              <SelectItem value="design">Design</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {mainSkill === "other" && (
        <div className="sm:col-span-2">
          <label
            htmlFor="other-skill"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Other Skill <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="other-skill"
              id="other-skill"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            />
            <span className="text-xs text-gray-400">
              Please specify your main skill
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ZitLancerForm;
