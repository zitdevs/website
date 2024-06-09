"use client";
import { DynamicIcon } from "@/components/icons/dynamic";
import { useAppStore } from "@/stores/app.store";

const PhoneInput = () => {
  const countryList = useAppStore((state) => state.countries);
  const countries = Object.keys(countryList ?? {});

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor="phone-number"
        className="block text-sm font-semibold leading-6 text-gray-900"
      >
        Phone number
      </label>
      <div className="relative mt-2.5">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <label htmlFor="country" className="sr-only">
            Country
          </label>
          <select
            id="country"
            name="country"
            className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm"
          >
            {countries.map((country) => (
              <option key={country} value={country} selected={country === "US"}>
                {country}
              </option>
            ))}
          </select>
          <DynamicIcon
            name="chevron-down"
            className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="tel"
          name="phone-number"
          id="phone-number"
          autoComplete="tel"
          className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default PhoneInput;
