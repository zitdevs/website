"use server";
import PocketBase from "pocketbase";

const pbBuilder = async () => {
  const [email, password, url] = [
    process.env.POCKETBASE_EMAIL,
    process.env.POCKETBASE_PASSWORD,
    process.env.POCKETBASE_URL,
  ];

  if (!url) throw new Error("PocketBase URL is required");
  if (!email || !password)
    throw new Error("PocketBase email and password are required");

  const pb = new PocketBase(url);

  await pb.admins.authWithPassword(email, password);

  return pb;
};

export { pbBuilder };
