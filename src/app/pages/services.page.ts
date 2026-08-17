import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../shared/page-hero.component';
import { ContentStore } from '../services/content.store';

@Component({
  selector: 'rtia-services-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `
    <rtia-page-hero eyebrow="Citizen services" title="AARTO services" description="Complete common infringement actions, understand the requirements and access the secure AARTO platform." />
    <section class="page-section">
      <div class="container">
        <div class="readiness-card"><div class="readiness-card__icon">ID</div><div><b>Have these details ready</b><p>Your South African ID or business registration details and the relevant infringement notice number.</p></div><a href="https://online.aarto.gov.za/" target="_blank" rel="noopener">Open secure portal ↗</a></div>
        <div class="section-heading"><div><p class="eyebrow">Choose a service</p><h2>What would you like to do?</h2></div><p class="section-heading__copy">Each service explains the purpose, what you need and where to complete the action.</p></div>
        <div class="full-service-grid">
          @for (service of store.content().services; track service.id) {
            <article class="full-service-card" [id]="service.id">
              <div class="full-service-card__number">{{ service.number }}</div>
              <div><span>{{ service.external ? 'Secure online service' : 'Guidance and support' }}</span><h3>{{ service.title }}</h3><p>{{ service.description }}</p></div>
              <a [href]="service.route" [target]="service.external ? '_blank' : null" [rel]="service.external ? 'noopener' : null">{{ service.action }} <b>↗</b></a>
            </article>
          }
        </div>
        <section class="assistance-panel"><div><p class="eyebrow">Not sure which service applies?</p><h2>Start with the AARTO journey guide.</h2><p>Use plain-language guidance to identify your notice stage, available options and recommended next action.</p></div><a class="button button--gold" routerLink="/understand-aarto">Understand my notice →</a></section>
      </div>
    </section>
  `
})
export class ServicesPageComponent {
  readonly store = inject(ContentStore);
}
