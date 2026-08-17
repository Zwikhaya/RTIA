import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home.page').then((m) => m.HomePageComponent), title: 'RTIA Public Services Portal' },
  { path: 'services', loadComponent: () => import('./pages/services.page').then((m) => m.ServicesPageComponent), title: 'AARTO Services | RTIA' },
  { path: 'understand-aarto', loadComponent: () => import('./pages/understand.page').then((m) => m.UnderstandPageComponent), title: 'Understand AARTO | RTIA' },
  { path: 'resources', loadComponent: () => import('./pages/resources.page').then((m) => m.ResourcesPageComponent), title: 'Resource Centre | RTIA' },
  { path: 'tenders', loadComponent: () => import('./pages/tenders.page').then((m) => m.TendersPageComponent), title: 'Tenders & Procurement | RTIA' },
  { path: 'careers', loadComponent: () => import('./pages/careers.page').then((m) => m.CareersPageComponent), title: 'Careers | RTIA' },
  { path: 'about', loadComponent: () => import('./pages/about.page').then((m) => m.AboutPageComponent), title: 'About RTIA' },
  { path: 'news', loadComponent: () => import('./pages/news.page').then((m) => m.NewsPageComponent), title: 'News & Updates | RTIA' },
  { path: 'news/:id', loadComponent: () => import('./pages/news-detail.page').then((m) => m.NewsDetailPageComponent), title: 'RTIA Update' },
  { path: 'contact', loadComponent: () => import('./pages/contact.page').then((m) => m.ContactPageComponent), title: 'Contact RTIA' },
  { path: 'search', loadComponent: () => import('./pages/search.page').then((m) => m.SearchPageComponent), title: 'Search | RTIA' },
  { path: 'sitemap', loadComponent: () => import('./pages/sitemap.page').then((m) => m.SitemapPageComponent), title: 'Site Map | RTIA' },
  { path: '**', loadComponent: () => import('./pages/not-found.page').then((m) => m.NotFoundPageComponent), title: 'Page Not Found | RTIA' }
];
