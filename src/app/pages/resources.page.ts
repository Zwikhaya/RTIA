import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-resources-page',
  standalone: true,
  imports: [FormsModule, PageHeroComponent],
  template: `
    <rtia-page-hero eyebrow="Official information" title="Resource centre" description="Search legislation, forms, guides, reports and frequently asked questions from one place." />
    <section class="page-section resource-page">
      <div class="container">
        <div class="resource-finder">
          <div><p class="eyebrow">Find a document</p><h2>What are you looking for?</h2></div>
          <label><span class="visually-hidden">Search the resource centre</span><input [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)" placeholder="Search by title, category or keyword"><i aria-hidden="true">⌕</i></label>
          <div class="resource-filters">@for (category of categories; track category) {<button type="button" [class.active]="selectedCategory() === category" (click)="selectedCategory.set(category)">{{ category }}</button>}</div>
        </div>
        <div class="document-count"><span>{{ filteredPublications().length }} documents</span><small>Static demonstration content · CMS/API ready</small></div>
        <div class="publication-grid">
          @for (document of filteredPublications(); track document.id) {
            <article class="publication-card"><div class="publication-card__format">{{ document.format }}</div><div><span>{{ document.category }} · {{ document.date }}</span><h3>{{ document.title }}</h3><p>{{ document.description }}</p></div><button type="button">Open document <b>↗</b></button></article>
          } @empty { <div class="empty-state"><strong>No matching documents</strong><p>Try a broader search or select “All”.</p></div> }
        </div>
        <section class="faq-section" id="faq"><div><p class="eyebrow">Frequently asked questions</p><h2>Answers without the legal jargon.</h2><p>These responses are stored as structured content and can later be maintained by authorised RTIA editors.</p></div><div class="faq-accordion">@for (faq of store.content().faqs; track faq.question) {<details><summary>{{ faq.question }} <span>+</span></summary><p>{{ faq.answer }}</p></details>}</div></section>
      </div>
    </section>
  `
})
export class ResourcesPageComponent {
  readonly store = inject(ContentStore);
  readonly searchTerm = signal('');
  readonly selectedCategory = signal('All');
  readonly categories = ['All', 'Legislation', 'Guide', 'Annual report', 'Strategy', 'PAIA'];
  readonly filteredPublications = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    const category = this.selectedCategory();
    return this.store.content().publications.filter((document) => {
      const matchesCategory = category === 'All' || document.category === category;
      const matchesQuery = !query || `${document.title} ${document.category} ${document.description}`.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  });
}
