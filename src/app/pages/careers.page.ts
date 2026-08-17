import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-careers-page',
  standalone: true,
  imports: [FormsModule, RouterLink, PageHeroComponent],
  template: `
    <rtia-page-hero eyebrow="Build public value" title="Careers at RTIA" description="Explore professional opportunities, graduate pathways and a workplace committed to fair public service and road-user impact." />

    <section class="page-section careers-page">
      <div class="container">
        <aside class="content-readiness-banner" aria-label="Prototype content notice">
          <span>HR content prototype</span>
          <div><b>Demonstration vacancy records</b><p>The opportunities below show the intended applicant experience. HR-approved vacancies and application documents will later be published through the content API.</p></div>
          <a routerLink="/contact">Contact Human Resources →</a>
        </aside>

        <section class="career-promise">
          <div><p class="eyebrow">Why RTIA</p><h2>Purpose-led work.<br><span>National impact.</span></h2><p>RTIA brings together policy, adjudication, technology, education and public administration to improve how road users experience the AARTO system.</p></div>
          <div class="culture-grid">@for (value of store.content().cultureValues; track value.number) {<article><span>{{ value.number }}</span><h3>{{ value.title }}</h3><p>{{ value.description }}</p></article>}</div>
        </section>

        <section class="opportunity-finder career-finder" aria-labelledby="career-finder-title">
          <div><p class="eyebrow">Current opportunities</p><h2 id="career-finder-title">Find your next role.</h2><p>Search roles, departments and reference numbers, or filter by publication status.</p></div>
          <label><span class="visually-hidden">Search vacancies</span><input [ngModel]="searchTerm()" (ngModelChange)="searchTerm.set($event)" placeholder="Search roles, departments or references"><i aria-hidden="true">⌕</i></label>
          <div class="opportunity-filters" aria-label="Vacancy status filters">@for (status of statuses; track status) {<button type="button" [class.active]="selectedStatus() === status" (click)="selectedStatus.set(status)">{{ status }}</button>}</div>
          <div class="opportunity-summary"><span><b>{{ openCount() }}</b> prototype vacancies open</span><span><b>{{ upcomingCount() }}</b> upcoming opportunities</span></div>
        </section>

        <div class="opportunity-results-heading"><span>{{ filteredCareers().length }} career opportunities</span><small>Applications open only when approved by HR</small></div>
        <div class="career-grid">
          @for (career of filteredCareers(); track career.id) {
            <article class="career-card" [id]="career.id">
              <header><span class="status-pill" [attr.data-status]="career.status.toLowerCase()">{{ career.status }}</span><b>{{ career.reference }}</b></header>
              <div class="career-card__title"><p>{{ career.department }}</p><h2>{{ career.title }}</h2><span>{{ career.summary }}</span></div>
              <dl class="career-card__facts"><div><dt>Location</dt><dd>{{ career.location }}</dd></div><div><dt>Type</dt><dd>{{ career.employmentType }}</dd></div><div><dt>Closing</dt><dd>{{ career.closingDate }}</dd></div></dl>
              <div class="career-requirements"><b>Profile indicators</b><ul>@for (requirement of career.requirements; track requirement) {<li>{{ requirement }}</li>}</ul></div>
              <footer><span>Application route managed by HR content</span><b aria-hidden="true">→</b></footer>
            </article>
          } @empty {<div class="empty-state"><strong>No matching opportunities</strong><p>Try another status or a shorter role description.</p></div>}
        </div>

        <section class="career-process" id="application-process">
          <div><p class="eyebrow">Application journey</p><h2>A clearer route from interest to selection.</h2><p>The workflow content is stored separately so HR can revise instructions, verification steps and applicant guidance centrally.</p></div>
          <div class="career-process__steps">@for (step of store.content().careerSteps; track step.number) {<article><span>{{ step.number }}</span><div><h3>{{ step.title }}</h3><p>{{ step.description }}</p></div></article>}</div>
        </section>

        <section class="graduate-panel" id="graduate-programme"><div><span>Emerging talent</span><strong>Graduate Internship<br>Programme</strong><p>Build practical public-sector experience across technology, finance, legal services, communications and administration.</p></div><a href="#graduate-programme">Register interest when applications open <b>↗</b></a></section>

        <section class="integrity-panel"><div><p class="eyebrow">Recruitment safety</p><h2>RTIA will never charge you to apply for a vacancy.</h2><p>Use only the official application channel shown on an approved vacancy notice and verify suspicious recruitment messages.</p></div><a routerLink="/contact">Verify recruitment communication →</a></section>
      </div>
    </section>
  `
})
export class CareersPageComponent {
  readonly store = inject(ContentStore);
  readonly searchTerm = signal('');
  readonly selectedStatus = signal('All');
  readonly statuses = ['All', 'Open', 'Upcoming', 'Closed'];
  readonly openCount = computed(() => this.store.content().careers.filter((career) => career.status === 'Open').length);
  readonly upcomingCount = computed(() => this.store.content().careers.filter((career) => career.status === 'Upcoming').length);
  readonly filteredCareers = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    return this.store.content().careers.filter((career) => {
      const matchesStatus = this.selectedStatus() === 'All' || career.status === this.selectedStatus();
      const searchable = `${career.reference} ${career.title} ${career.department} ${career.location} ${career.summary}`.toLowerCase();
      return matchesStatus && (!query || searchable.includes(query));
    });
  });
}
