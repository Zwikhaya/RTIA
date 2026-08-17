import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentStore } from '../services/content.store';
import { PageHeroComponent } from '../shared/page-hero.component';

@Component({
  selector: 'rtia-contact-page',
  standalone: true,
  imports: [FormsModule, PageHeroComponent],
  template: `
    <rtia-page-hero eyebrow="Contact and support" title="How can we assist you?" description="Contact RTIA, find the head office or locate the right channel for your AARTO enquiry." />
    <section class="page-section contact-page"><div class="container">
      <div class="contact-channel-grid"><article><span>01</span><p class="eyebrow">Online services</p><h2>Query, pay or track online.</h2><p>Use the secure AARTO platform for personal infringement services.</p><a href="https://online.aarto.gov.za/" target="_blank" rel="noopener">Open secure portal ↗</a></article><article><span>02</span><p class="eyebrow">Phone support</p><h2>Speak to RTIA.</h2><p>Keep your ID or relevant notice number ready before calling.</p><a href="tel:+27872850500">+27 87 285 0500</a></article><article><span>03</span><p class="eyebrow">Visit the head office</p><h2>Midrand, Gauteng.</h2><p>10 Matuka Close, Halfway House, Midrand, 1685.</p><a href="#outlets">View location details ↓</a></article></div>
      <section class="outlet-directory" id="outlets"><div class="outlet-directory__intro"><p class="eyebrow">Service outlet directory</p><h2>Find help near you.</h2><p>This directory is backed by the content repository. Additional verified outlets can be added through the future .NET CMS without changing this page.</p></div><div class="outlet-directory__tool"><label>Province<select [ngModel]="selectedProvince()" (ngModelChange)="selectedProvince.set($event)"><option>All provinces</option><option>Gauteng</option></select></label>@for (outlet of store.content().outlets; track outlet.id) {<article><div><span>{{ outlet.province }}</span><h3>{{ outlet.name }}</h3><address>{{ outlet.address }}</address></div><dl><div><dt>Phone</dt><dd>{{ outlet.phone }}</dd></div><div><dt>Hours</dt><dd>{{ outlet.hours }}</dd></div></dl><div class="outlet-services">@for (service of outlet.services; track service) {<span>{{ service }}</span>}</div></article>}</div></section>
      <section class="safety-contact"><div aria-hidden="true">!</div><section><p class="eyebrow">Fraud and unethical conduct</p><h2>Use a verified reporting channel.</h2><p>Final reporting contacts will be confirmed and approved before production launch.</p></section><span class="prototype-pill">Content approval required</span></section>
    </div></section>
  `
})
export class ContactPageComponent {
  readonly store = inject(ContentStore);
  readonly selectedProvince = signal('All provinces');
}
