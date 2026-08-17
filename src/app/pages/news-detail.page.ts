import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-news-detail-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `
    <rtia-page-hero [eyebrow]="article().category + ' · ' + article().date" [title]="article().title" [description]="article().excerpt" />
    <section class="page-section"><div class="container"><article class="article-layout"><aside><span>On this page</span><a href="#update">Official update</a><a href="#next">What happens next</a><a routerLink="/news">← All news</a></aside><div><p class="article-lead" id="update">{{ article().excerpt }}</p><h2>Official update</h2><p>The Road Traffic Infringement Agency provides this update to help road users, issuing authorities and stakeholders understand the current implementation position.</p><p>This prototype article demonstrates how approved statements will be presented. Final long-form copy, supporting documents and media contacts will be managed through the RTIA content service.</p><blockquote>Road users should rely on official RTIA and AARTO channels for implementation dates, infringement services and guidance.</blockquote><h2 id="next">What happens next</h2><p>Future updates can be published, scheduled and archived by authorised content editors without a frontend release.</p><div class="article-note"><b>Prototype content</b><p>Communications should replace this shortened text with the approved full statement through the CMS/API.</p></div></div></article></div></section>
  `
})
export class NewsDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  readonly store = inject(ContentStore);
  readonly articleId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id') ?? 'phase-2')), { initialValue: 'phase-2' });
  readonly article = computed(() => this.store.content().news.find((item) => item.id === this.articleId()) ?? this.store.content().news[0]);
}
