import { pbBuilder } from "./pocketbase";

export const getLang = async (locale: "en" | "es") => {
  const pb = await pbBuilder();

  const record = await pb.collection("languages").getList(1, 50, {
    filter: `language = "${locale}"`,
  });

  if (record.items.length === 0) {
    return null;
  }

  return record.items[0];
};
