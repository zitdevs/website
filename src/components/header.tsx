import { component$ } from '@builder.io/qwik';
import { Nav } from './nav';

export const Header = component$(() => {
  return( 
    <header class="container justify-between flex items-center pt-2">
        <div> 
            <h1>TESTING</h1>
        </div>
      <Nav/>
      <div>
        <button>CTA</button>
      </div>
    </header>
    )
});