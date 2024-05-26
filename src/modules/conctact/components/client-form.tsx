"use client";
import { useEffect, useState } from "react";
import { ClientStoreState, useContactStore } from "../store/contact.store";

const ClientForm = () => {
  const setClientData = useContactStore((state) => state.setClientData);
  const isSubmitting = useContactStore((state) => state.isSubmitting);

  const [data, setData] = useState<ClientStoreState>({
    company: "",
    message: "",
  });

  useEffect(() => {
    if (isSubmitting) setClientData(data);
  }, [data, isSubmitting, setClientData]);

  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor="company"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Company <span className="text-red-500">*</span>
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            name="company"
            id="company"
            autoComplete="organization"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
            onChange={(e) => setData({ ...data, company: e.target.value })}
            value={data.company}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <div className="mt-2.5">
          <textarea
            name="message"
            id="message"
            onChange={(e) => setData({ ...data, message: e.target.value })}
            value={data.message}
            autoComplete="off"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 min-h-10 max-h-28"
          />
        </div>
      </div>
    </>
  );
};

export default ClientForm;
