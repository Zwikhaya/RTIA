import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-sitemap-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `<rtia-page-hero eyebrow="Navigation" title="Site map" description="Browse the main sections of the RTIA public services website." /><section class="page-section"><div class="container sitemap-page">@for (item of store.content().navigation; track item.route) {<a [routerLink]="item.route"><span>{{ $index + 1 < 10 ? '0' + ($index + 1) : $index + 1 }}</span><h2>{{ item.label }}</h2><b>Explore section →</b></a>}</div></section>`
})
export class SitemapPageComponent { readonly store = inject(ContentStore); }
