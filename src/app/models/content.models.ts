export interface NavigationItem {
  label: string;
  route: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  action: string;
  route: string;
  external?: boolean;
  featured?: boolean;
}

export interface JourneyStep {
  id: string;
  number: string;
  title: string;
  summary: string;
  guidance: string;
  actionLabel: string;
  actionRoute: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  detail: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  category: string;
  format: string;
  date: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OutletItem {
  id: string;
  name: string;
  province: string;
  address: string;
  phone: string;
  hours: string;
  services: string[];
}

export type TenderStatus = 'Open' | 'Upcoming' | 'Closed' | 'Awarded';

export interface TenderItem {
  id: string;
  reference: string;
  title: string;
  category: string;
  status: TenderStatus;
  publishedDate: string;
  closingDate: string;
  briefing: string;
  description: string;
  documents: string[];
}

export type CareerStatus = 'Open' | 'Upcoming' | 'Closed';

export interface CareerItem {
  id: string;
  reference: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  status: CareerStatus;
  closingDate: string;
  summary: string;
  requirements: string[];
}

export interface ContentStep {
  number: string;
  title: string;
  description: string;
}

export interface CultureValue {
  number: string;
  title: string;
  description: string;
}

export interface SiteContent {
  navigation: NavigationItem[];
  hero: HeroContent;
  services: ServiceItem[];
  journey: JourneyStep[];
  impactStats: ImpactStat[];
  publications: PublicationItem[];
  news: NewsArticle[];
  faqs: FaqItem[];
  outlets: OutletItem[];
  tenders: TenderItem[];
  careers: CareerItem[];
  supplierSteps: ContentStep[];
  careerSteps: ContentStep[];
  cultureValues: CultureValue[];
  lastUpdated: string;
}

export type SearchResultType = 'Service' | 'Guide' | 'Publication' | 'News' | 'Tender' | 'Career';

export interface SearchResult {
  type: SearchResultType;
  title: string;
  description: string;
  route: string;
}
