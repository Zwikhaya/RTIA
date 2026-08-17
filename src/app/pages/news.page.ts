import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-news-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `
    <rtia-page-hero eyebrow="Updates and notices" title="News from RTIA" description="Read implementation updates, public notices, media statements and road-safety information." />
    <section class="page-section"><div class="container">
      <div class="news-filter"><span>Filter updates:</span>@for (category of categories; track category) {<button type="button" [class.active]="selectedCategory() === category" (click)="selectedCategory.set(category)">{{ category }}</button>}</div>
      <div class="news-page-grid">@for (article of filteredNews(); track article.id; let first = $first) {<article [class.news-page-card--featured]="first && selectedCategory() === 'All'" class="news-page-card"><div class="news-page-card__visual"><span>{{ article.category }}</span><strong>{{ article.date.split(' ')[0] }}</strong><small>{{ article.date }}</small></div><div><p>{{ article.category }} · {{ article.date }}</p><h2>{{ article.title }}</h2><span>{{ article.excerpt }}</span><a [routerLink]="['/news', article.id]">Read full update ↗</a></div></article>}</div>
      <div class="subscribe-panel"><div><p class="eyebrow">Stay informed</p><h2>Official updates, without the noise.</h2><p>A future subscription service can connect here through the .NET notification API.</p></div><div class="prototype-pill">API-ready subscription area</div></div>
    </div></section>
  `
})
export class NewsPageComponent {
  readonly store = inject(ContentStore);
  readonly selectedCategory = signal('All');
  readonly categories = ['All', 'Media statement', 'Public notice', 'Public education', 'Programme update'];
  readonly filteredNews = computed(() => this.selectedCategory() === 'All' ? this.store.content().news : this.store.content().news.filter((item) => item.category === this.selectedCategory()));
}
