import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-understand-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `
    <rtia-page-hero eyebrow="Plain-language guidance" title="Understand AARTO" description="Know what an infringement notice means, what happens next and which options may be available to you." />
    <section class="page-section">
      <div class="container">
        <section class="editorial-intro"><div><p class="eyebrow">The purpose</p><h2>A fair, efficient administrative process.</h2></div><div><p>AARTO provides an administrative process for road traffic infringements. It is intended to encourage compliance, support road safety and give alleged infringers clear options to respond.</p><p class="editorial-note"><b>Important:</b> Always use the dates and instructions on your official notice when deciding what to do next.</p></div></section>
        <section class="process-explorer" id="notice">
          <div class="process-explorer__header"><p class="eyebrow">Step by step</p><h2>The infringement journey</h2><p>Select a stage to reveal the practical guidance.</p></div>
          <div class="process-explorer__body">
            <div class="process-rail" role="tablist" aria-label="AARTO process stages">
              @for (step of store.content().journey; track step.id) {
                <button type="button" role="tab" [class.active]="selectedStep() === step.id" (click)="selectedStep.set(step.id)"><span>{{ step.number }}</span><div><b>{{ step.title }}</b><small>{{ step.summary }}</small></div><i>→</i></button>
              }
            </div>
            <article class="process-detail"><span>Stage guidance</span><h3>{{ activeStep().title }}</h3><p>{{ activeStep().guidance }}</p><div class="process-checklist"><b>Keep these items together</b><ul><li>Official notice and notice number</li><li>Identity or business details</li><li>Supporting documents and confirmations</li><li>Dates, references and communication received</li></ul></div><a [href]="activeStep().actionRoute">{{ activeStep().actionLabel }} ↗</a></article>
          </div>
        </section>
        <section class="demerit-section" id="demerit-points"><div class="demerit-section__graphic" aria-hidden="true"><strong>POINTS</strong><span>Clear information.<br>Responsible decisions.</span></div><div><p class="eyebrow">Demerit points</p><h2>Understand the framework before it affects you.</h2><p>This section is structured for approved explanations of how points are allocated, reduced and how licence or operator-card thresholds work.</p><p class="prototype-note">Final thresholds, dates and public wording must be validated against the latest regulations before production publication.</p><a routerLink="/resources">View AARTO legislation ↗</a></div></section>
        <section class="faq-preview" id="options"><div class="section-heading"><div><p class="eyebrow">Common questions</p><h2>Quick answers</h2></div><a routerLink="/resources" fragment="faq">View all FAQs ↗</a></div><div class="faq-grid">@for (faq of store.content().faqs; track faq.question) {<article><h3>{{ faq.question }}</h3><p>{{ faq.answer }}</p></article>}</div></section>
      </div>
    </section>
  `
})
export class UnderstandPageComponent {
  readonly store = inject(ContentStore);
  readonly selectedStep = signal('notice');
  readonly activeStep = () => this.store.content().journey.find((step) => step.id === this.selectedStep()) ?? this.store.content().journey[0];
}
