# RTIA Premium Angular Portal

This is the clean client-facing RTIA portal implemented with **Angular 22 only**.

There is no React, Next.js or Vinext code in this project.

## Run locally

```powershell
npm.cmd install
npm.cmd start
```

Open `http://localhost:4200` if the browser does not open automatically.

## Production build

```powershell
npm.cmd run build
```

The deployable static website is generated under `dist/rtia-angular-portal`.

## Architecture

```text
Angular pages and standalone components
                  ↓
             ContentStore
                  ↓
         ContentRepository contract
             ↙              ↘
Static test content       ASP.NET Core API
```

The current prototype uses `StaticContentRepository`. The API implementation is already available in `ApiContentRepository`.

## Switch to the future .NET API

Update `public/rtia-config.js`:

```js
window.__RTIA_CONFIG__ = {
  contentSource: 'api',
  apiBaseUrl: 'https://your-api.gov.za/api/v1'
};
```

The expected endpoint is:

```text
GET {apiBaseUrl}/public-content/site
```

Its response must match `SiteContent` in `src/app/models/content.models.ts`. No Angular page rewrite is required when the .NET backend is introduced.

## Important folders

- `src/app/pages` — public website pages
- `src/app/data/static-content.ts` — editable test content
- `src/app/services` — static and API content providers
- `src/app/models` — typed frontend contracts
- `src/styles.css` — premium RTIA design system and animations
- `public` — RTIA logo, favicon and runtime configuration

## CMS-ready opportunity content

Tenders, vacancies, supplier guidance, recruitment steps and workplace values are typed fields within `SiteContent`. Update the arrays in `src/app/data/static-content.ts` during the prototype phase. When the .NET API is enabled, the same content can come from a CMS without changing the Tenders, Careers, Home or Search components.
