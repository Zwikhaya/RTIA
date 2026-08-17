import { Observable } from 'rxjs';
import { SiteContent } from '../models/content.models';

export abstract class ContentRepository {
  abstract getSiteContent(): Observable<SiteContent>;
}
