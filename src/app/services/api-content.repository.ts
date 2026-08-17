import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RTIA_RUNTIME_CONFIG } from '../config/runtime-config';
import { SiteContent } from '../models/content.models';
import { ContentRepository } from './content.repository';

@Injectable()
export class ApiContentRepository extends ContentRepository {
  private readonly http = inject(HttpClient);
  private readonly config = inject(RTIA_RUNTIME_CONFIG);

  override getSiteContent(): Observable<SiteContent> {
    return this.http.get<SiteContent>(`${this.config.apiBaseUrl}/public-content/site`);
  }
}
