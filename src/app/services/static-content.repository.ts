import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { STATIC_SITE_CONTENT } from '../data/static-content';
import { SiteContent } from '../models/content.models';
import { ContentRepository } from './content.repository';

@Injectable()
export class StaticContentRepository extends ContentRepository {
  override getSiteContent(): Observable<SiteContent> {
    return of(STATIC_SITE_CONTENT).pipe(delay(80));
  }
}
