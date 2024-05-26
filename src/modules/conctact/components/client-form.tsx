const ClientForm = () => {
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
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
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
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </>
  );
};

export default ClientForm;
