import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rtia-not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `<section class="not-found"><div class="container"><span>404</span><p class="eyebrow">Page not found</p><h1>We could not find that information.</h1><p>Return home or use the site search to find the service, document or update you need.</p><div><a class="button button--gold" routerLink="/">Return home</a><a class="button button--outline" routerLink="/search">Search RTIA</a></div></div></section>`
})
export class NotFoundPageComponent {}
