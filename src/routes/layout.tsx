import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Header } from "~/components/header";
import { BGICon } from "~/components/icons/bg-icon";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="relative">
      <div class="relative z-10 ">
        <Header />
        <main>
          <Slot />
        </main>
      </div>
      <div class="absolute inset-0 overflow-hidden w-full h-[90vh]">
      <div class="h-[600px] mt-12 blur-lg -rotate-12 overflow-hidden">
        <BGICon class="blur-md" />
      </div>
      </div>
    </div>
  );
});
