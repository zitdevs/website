import type { APIRoute } from "astro";
import { pbBuilder } from "../../utils/pocketbase";
import { getLang } from "../../utils/get-lang";

interface ZitLancerFormProps {
  name: string;
  last_name: string;
  email: string;
  country: string;
  locale: "en" | "es";
  main_skill?: string;
  other_skill?: string;
}

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { locale, ...rest } = body as ZitLancerFormProps;
  console.log(body);
  console.log("locale", locale);

  const pb = await pbBuilder();
  const lang = await getLang(locale);

  if (!lang) {
    return new Response(
      JSON.stringify({
        error: "Language not found. Refresh the page and try again",
      }),
    );
  }

  try {
    const record = await pb.collection("wait_list").create({
      ...rest,
      lang: lang.id,
    });

    return new Response(
      JSON.stringify({
        record,
      }),
    );
  } catch (error) {
    const err = error as { response: { data: any } };

    console.log({ error });

    if (err?.response?.data?.email?.code === "validation_not_unique") {
      return new Response(
        JSON.stringify({
          error: "email_already_exists",
        }),
      );
    }

    return new Response(
      JSON.stringify({
        error: "Something went wrong",
      }),
    );
  }
};
