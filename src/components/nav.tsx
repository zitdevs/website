import { component$ } from '@builder.io/qwik';

export const Nav = component$(() => {
  return <nav class="flex gap-10 list-none px-14 py-5 rounded-2xl border border-white bg-white/60">
    <li><a href="#" class="font-semibold">Home</a></li>
    <li><a href="#" class="font-semibold">About</a></li>
    <li><a href="#" class="font-semibold">How it works</a></li>
    <li><a href="#" class="font-semibold">Services</a></li>
  </nav>
});