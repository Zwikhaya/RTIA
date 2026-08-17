import { InjectionToken } from '@angular/core';

export type ContentSource = 'static' | 'api';

export interface RtiaRuntimeConfig {
  contentSource: ContentSource;
  apiBaseUrl: string;
}

declare global {
  interface Window {
    __RTIA_CONFIG__?: Partial<RtiaRuntimeConfig>;
  }
}

const DEFAULT_CONFIG: RtiaRuntimeConfig = {
  contentSource: 'static',
  apiBaseUrl: '/api/v1'
};

export const RTIA_RUNTIME_CONFIG = new InjectionToken<RtiaRuntimeConfig>('RTIA_RUNTIME_CONFIG', {
  providedIn: 'root',
  factory: () => ({ ...DEFAULT_CONFIG, ...(window.__RTIA_CONFIG__ ?? {}) })
});
