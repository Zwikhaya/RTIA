import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { RTIA_RUNTIME_CONFIG, RtiaRuntimeConfig } from './config/runtime-config';
import { ApiContentRepository } from './services/api-content.repository';
import { ContentRepository } from './services/content.repository';
import { StaticContentRepository } from './services/static-content.repository';

export function contentRepositoryFactory(
  config: RtiaRuntimeConfig,
  staticRepository: StaticContentRepository,
  apiRepository: ApiContentRepository
): ContentRepository {
  return config.contentSource === 'api' ? apiRepository : staticRepository;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'top' })
    ),
    StaticContentRepository,
    ApiContentRepository,
    {
      provide: ContentRepository,
      useFactory: contentRepositoryFactory,
      deps: [RTIA_RUNTIME_CONFIG, StaticContentRepository, ApiContentRepository]
    }
  ]
};
