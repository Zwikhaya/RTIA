import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-search-page',
  standalone: true,
  imports: [FormsModule, PageHeroComponent],
  template: `
    <rtia-page-hero eyebrow="Site search" title="Find services and information" description="Search across AARTO services, guidance, publications, news, tenders and career opportunities." />
    <section class="page-section"><div class="container search-page">
      <form class="search-page__form" (ngSubmit)="submit()"><label for="page-search">What are you looking for?</label><div><input id="page-search" name="q" [(ngModel)]="query" placeholder="Search RTIA"><button type="submit">Search →</button></div></form>
      <div class="search-results__heading"><p>{{ results().length }} results {{ activeQuery() ? 'for “' + activeQuery() + '”' : '' }}</p><span>Services, documents, tenders, careers and news</span></div>
      <div class="search-results">@for (result of results(); track result.type + result.title) {<a [href]="result.route"><span>{{ result.type }}</span><div><h2>{{ result.title }}</h2><p>{{ result.description }}</p></div><b>→</b></a>} @empty {<div class="empty-state"><strong>No results found</strong><p>Try a shorter phrase such as “pay”, “tender”, “vacancy” or “annual report”.</p></div>}</div>
    </div></section>
  `
})
export class SearchPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly store = inject(ContentStore);
  readonly activeQuery = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('q')?.trim() ?? '')), { initialValue: '' });
  query = this.activeQuery();
  readonly results = computed(() => {
    const query = this.activeQuery().toLowerCase();
    if (!query) return this.store.searchIndex().slice(0, 8);
    return this.store.searchIndex().filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(query));
  });

  submit(): void {
    void this.router.navigate(['/search'], { queryParams: this.query.trim() ? { q: this.query.trim() } : {} });
  }
}
