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

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { locale, ...rest } = body as ZitLancerFormProps;
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

    if (err?.response?.data?.email?.code === "validation_not_unique") {
      return new Response(
        JSON.stringify({
          error: "This email is already registered",
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
