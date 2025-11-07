import PocketBase from "pocketbase";

const pbBuilder = async () => {
  const [email, password, url] = [
    import.meta.env.POCKETBASE_EMAIL,
    import.meta.env.POCKETBASE_PASSWORD,
    import.meta.env.POCKETBASE_URL,
  ];

  if (!url) throw new Error("PocketBase URL is required");
  if (!email || !password)
    throw new Error("PocketBase email and password are required");

  const pb = new PocketBase(url);

  await pb.collection('_superusers').authWithPassword(email, password);

  return pb;
};

export { pbBuilder };
