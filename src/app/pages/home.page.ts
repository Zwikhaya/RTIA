import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentStore } from '../services/content.store';

@Component({
  selector: 'rtia-home-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.page.html'
})
export class HomePageComponent {
  readonly store = inject(ContentStore);
  readonly activeJourneyId = signal('notice');
  readonly featuredServices = computed(() => this.store.content().services.slice(0, 6));
  readonly featuredTenders = computed(() => this.store.content().tenders.filter((tender) => tender.status === 'Open').slice(0, 2));
  readonly featuredCareers = computed(() => this.store.content().careers.filter((career) => career.status === 'Open').slice(0, 2));
  readonly activeJourney = computed(() => this.store.content().journey.find((step) => step.id === this.activeJourneyId()) ?? this.store.content().journey[0]);

  selectJourney(id: string): void {
    this.activeJourneyId.set(id);
  }
}
