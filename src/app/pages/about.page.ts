import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-about-page',
  standalone: true,
  imports: [PageHeroComponent, RouterLink],
  template: `
    <rtia-page-hero eyebrow="Our mandate" title="About RTIA" description="Learn how RTIA supports fair adjudication, public education and safer road-user behaviour in South Africa." />
    <section class="page-section"><div class="container">
      <section class="editorial-intro about-intro"><div><p class="eyebrow">Who we are</p><h2>Justice in adjudication.<br><span>Confidence on the road.</span></h2></div><div><p class="large-copy">The Road Traffic Infringement Agency administers functions assigned under AARTO and supports an objective, transparent and fair administrative adjudication process.</p><p>RTIA also undertakes community education and awareness so that road users understand their rights, responsibilities and available options.</p></div></section>
      <section class="mandate-grid"><article><span>01</span><h3>Fair adjudication</h3><p>Clear, impartial administrative processes for road traffic infringements.</p></article><article><span>02</span><h3>Accessible services</h3><p>Information and assistance designed to be understandable and easy to reach.</p></article><article><span>03</span><h3>Road safety</h3><p>Supporting responsible behaviour and compliance on South Africa’s roads.</p></article><article><span>04</span><h3>Public education</h3><p>Helping communities understand the AARTO framework and available options.</p></article></section>
      <section class="vision-panel"><div class="vision-panel__statement"><p class="eyebrow">Our public-service promise</p><blockquote>“A modern, trusted RTIA experience should make every citizen’s next step clear.”</blockquote></div><div class="vision-panel__links"><a routerLink="/resources">Strategic plans <span>↗</span></a><a routerLink="/resources">Annual reports <span>↗</span></a><a routerLink="/resources">Governance publications <span>↗</span></a></div></section>
    </div></section>
  `
})
export class AboutPageComponent {}
