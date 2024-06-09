"use server";

import { Locale } from "@/i18n-config";
import { getLang } from "@/utils/get-lang";
import { pbBuilder } from "@/utils/pocketbase";

export const saveToWaitlist = async (data: {
  name: string;
  last_name: string;
  email: string;
  country: string;
  locale: Locale;
  main_skill?: string;
  other_skill?: string;
}) => {
  const { locale, ...rest } = data;
  const pb = await pbBuilder();
  const lang = await getLang(locale);

  if (!lang) {
    return { error: "Language not found. Refresh the page and try again" };
  }

  try {
    const record = await pb.collection("wait_list").create({
      ...rest,
      lang: lang.id,
    });

    return record;
  } catch (error) {
    const err = error as { response: { data: any } };
    console.error("error", err?.response?.data);

    if (err?.response?.data?.email?.code === "validation_not_unique") {
      return { error: "email_already_exists" };
    }

    return { error: "Something went wrong" };
  }
};
