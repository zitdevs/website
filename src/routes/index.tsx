import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="container">
      <h1 class="sr-only">ZitDevs</h1>

      <section class="w-full justify-center flex mt-24">
        <h2 class="font-bold text-5xl max-w-2xl text-center">
          We are passionate about building software
        </h2>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "ZitDevs: Passionate about building software",
  meta: [
    {
      name: "description",
      content: "At Zitdevs LLC, we are dedicated to crafting innovative technology solutions and digital products that redefine how businesses operate in the digital realm. As a dynamic development company, we offer a diverse portfolio of services designed to empower our clients and enhance their digital experience.",
    },
  ],
};
