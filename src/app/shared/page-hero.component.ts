import { Component, input } from '@angular/core';

@Component({
  selector: 'rtia-page-hero',
  standalone: true,
  template: `
    <section class="page-hero">
      <div class="page-hero__rings" aria-hidden="true"></div>
      <div class="container page-hero__content">
        <p class="eyebrow">{{ eyebrow() }}</p>
        <h1>{{ title() }}</h1>
        <p>{{ description() }}</p>
        <div class="breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><b>{{ title() }}</b></div>
      </div>
    </section>
  `
})
export class PageHeroComponent {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
