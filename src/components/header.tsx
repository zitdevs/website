import { component$ } from '@builder.io/qwik';
import { Nav } from './nav';
import { Icon } from './icons/icon';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {
  return (
    <header class="container justify-between flex items-center pt-2">
      <Link class="w-32" href='/' title='ZitDevs'>
        <Icon aria-hidden />
      </Link>
      <Nav />
      <div>
        <button>Contact Us</button>
      </div>
    </header>
  )
});