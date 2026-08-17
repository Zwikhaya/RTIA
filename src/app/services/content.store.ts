import { computed, inject, Injectable, signal } from '@angular/core';
import { STATIC_SITE_CONTENT } from '../data/static-content';
import { SearchResult, SiteContent } from '../models/content.models';
import { ContentRepository } from './content.repository';

@Injectable({ providedIn: 'root' })
export class ContentStore {
  private readonly repository = inject(ContentRepository);
  private readonly contentState = signal<SiteContent>(STATIC_SITE_CONTENT);
  readonly content = this.contentState.asReadonly();
  readonly isReady = signal(false);

  readonly searchIndex = computed<SearchResult[]>(() => {
    const content = this.contentState();
    return [
      ...content.services.map((item) => ({ type: 'Service' as const, title: item.title, description: item.description, route: item.route })),
      ...content.publications.map((item) => ({ type: 'Publication' as const, title: item.title, description: item.description, route: '/resources' })),
      ...content.news.map((item) => ({ type: 'News' as const, title: item.title, description: item.excerpt, route: `/news/${item.id}` })),
      ...content.tenders.map((item) => ({ type: 'Tender' as const, title: item.title, description: `${item.reference} · ${item.category} · ${item.status}. ${item.description}`, route: `/tenders#${item.id}` })),
      ...content.careers.map((item) => ({ type: 'Career' as const, title: item.title, description: `${item.reference} · ${item.department} · ${item.status}. ${item.summary}`, route: `/careers#${item.id}` })),
      { type: 'Guide' as const, title: 'Understand the AARTO process', description: 'Notices, options, timeframes and outcomes explained in plain language.', route: '/understand-aarto' }
    ];
  });

  constructor() {
    this.repository.getSiteContent().subscribe({
      next: (content) => {
        this.contentState.set(content);
        this.isReady.set(true);
      },
      error: () => this.isReady.set(true)
    });
  }
}
