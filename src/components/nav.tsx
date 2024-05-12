import { component$ } from '@builder.io/qwik';

export const Nav = component$(() => {
  return <nav class="flex gap-10 list-none px-14 py-5 rounded-2xl border border-white bg-white/60">
    <li><a href="#">Home</a></li>
    <li><a href="#">Abot</a></li>
    <li><a href="#">How it works</a></li>
    <li><a href="#">Services</a></li>
  </nav>
});