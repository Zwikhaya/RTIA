import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-tenders-page',
  standalone: true,
  imports: [FormsModule, RouterLink, PageHeroComponent],
  template: `
    <rtia-page-hero eyebrow="Doing business with RTIA" title="Tenders & procurement" description="Find procurement opportunities, supplier guidance, bid information and transparent status updates in one place." />

    <section class="page-section opportunity-page">
      <div class="container">
        <aside class="content-readiness-banner" aria-label="Prototype content notice">
          <span>CMS-ready prototype</span>
          <div><b>Demonstration procurement records</b><p>References, dates and documents below are test content for design approval. Authorised SCM content will replace them through the future .NET content service.</p></div>
          <a routerLink="/contact">Contact SCM →</a>
        </aside>

        <div class="opportunity-stat-grid" aria-label="Procurement overview">
          <article><strong>{{ openCount() }}</strong><div><b>Open opportunities</b><span>Prototype tenders accepting submissions</span></div></article>
          <article><strong>{{ upcomingCount() }}</strong><div><b>Upcoming notices</b><span>Procurements being prepared for publication</span></div></article>
          <article><strong>{{ categories().length - 1 }}</strong><div><b>Procurement categories</b><span>Searchable, structured and API-ready</span></div></article>
        </div>

        <section class="opportunity-finder" aria-labelledby="tender-finder-title">
          <div><p class="eyebrow">Opportunity finder</p><h2 id="tender-finder-title">Find a tender.</h2><p>Search by reference, service category or description, then filter by lifecycle status.</p></div>
          <label><span class="visually-hidden">Search tenders</span><input [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)" placeholder="Search tenders or reference numbers"><i aria-hidden="true">⌕</i></label>
          <div class="opportunity-filters" aria-label="Tender status filters">
            @for (status of statuses; track status) {<button type="button" [class.active]="selectedStatus() === status" (click)="selectedStatus.set(status)">{{ status }}</button>}
          </div>
          <div class="opportunity-categories" aria-label="Tender category filters">
            @for (category of categories(); track category) {<button type="button" [class.active]="selectedCategory() === category" (click)="selectedCategory.set(category)">{{ category }}</button>}
          </div>
        </section>

        <div class="opportunity-results-heading"><span>{{ filteredTenders().length }} procurement records</span><small>Content source: StaticContentRepository</small></div>
        <div class="tender-grid">
          @for (tender of filteredTenders(); track tender.id) {
            <article class="tender-card" [id]="tender.id">
              <div class="tender-card__top"><span class="status-pill" [attr.data-status]="tender.status.toLowerCase()">{{ tender.status }}</span><b>{{ tender.reference }}</b></div>
              <div class="tender-card__body"><p>{{ tender.category }}</p><h2>{{ tender.title }}</h2><span>{{ tender.description }}</span></div>
              <dl class="opportunity-metadata"><div><dt>Published</dt><dd>{{ tender.publishedDate }}</dd></div><div><dt>Closing</dt><dd>{{ tender.closingDate }}</dd></div><div><dt>Briefing</dt><dd>{{ tender.briefing }}</dd></div></dl>
              <div class="managed-document-list"><span>Bid pack structure</span><div>@for (document of tender.documents; track document) {<small>{{ document }}</small>}</div></div>
              <footer><span>Documents will be supplied by the CMS</span><b aria-hidden="true">↗</b></footer>
            </article>
          } @empty {<div class="empty-state"><strong>No matching tenders</strong><p>Try another status, category or a shorter search phrase.</p></div>}
        </div>

        <section class="supplier-guide" id="supplier-guide">
          <div class="supplier-guide__intro"><p class="eyebrow">Supplier readiness</p><h2>Prepare once.<br><span>Submit with confidence.</span></h2><p>This guidance is structured separately from tender records so SCM editors can update the process without changing any page code.</p></div>
          <div class="supplier-step-grid">@for (step of store.content().supplierSteps; track step.number) {<article><span>{{ step.number }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p></article>}</div>
        </section>

        <section class="integrity-panel"><div><p class="eyebrow">Fair and transparent procurement</p><h2>Only trust opportunities published through official RTIA channels.</h2><p>RTIA does not charge suppliers to access tender documents. Report suspicious requests, altered banking details or unofficial instructions.</p></div><a routerLink="/contact">Verify procurement communication →</a></section>
      </div>
    </section>
  `
})
export class TendersPageComponent {
  readonly store = inject(ContentStore);
  readonly searchTerm = signal('');
  readonly selectedStatus = signal('All');
  readonly selectedCategory = signal('All');
  readonly statuses = ['All', 'Open', 'Upcoming', 'Closed', 'Awarded'];
  readonly categories = computed(() => ['All', ...new Set(this.store.content().tenders.map((tender) => tender.category))]);
  readonly openCount = computed(() => this.store.content().tenders.filter((tender) => tender.status === 'Open').length);
  readonly upcomingCount = computed(() => this.store.content().tenders.filter((tender) => tender.status === 'Upcoming').length);
  readonly filteredTenders = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    return this.store.content().tenders.filter((tender) => {
      const matchesStatus = this.selectedStatus() === 'All' || tender.status === this.selectedStatus();
      const matchesCategory = this.selectedCategory() === 'All' || tender.category === this.selectedCategory();
      const searchable = `${tender.reference} ${tender.title} ${tender.category} ${tender.description}`.toLowerCase();
      return matchesStatus && matchesCategory && (!query || searchable.includes(query));
    });
  });
}
