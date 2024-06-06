"use server";

import { Locale } from "@/i18n-config";
import { getLang } from "@/utils/get-lang";
import { pbBuilder } from "@/utils/pocketbase";

export type SkillParams = {
  locale: Locale;
};

export const getSkillsByLocale = async ({ locale }: SkillParams) => {
  const pb = await pbBuilder();

  const lang = await getLang(locale);

  if (!lang) {
    throw new Error("Language not found");
  }

  const record = await pb.collection("skills").getList(1, 100, {
    filter: `lang = "${lang?.id}"`,
  });

  return record;
};
