import { Component, inject } from '@angular/core';

import { HeroSection } from '../hero-section/hero-section';
import { ServicesOverview } from '../services-overview/services-overview';
import { ProductsOverview } from '../products-overview/products-overview';
import { IndustriesOverview } from '../industries-overview/industries-overview';
import { WhyWafaIt } from '../why-wafa-it/why-wafa-it';
import { CaseStudiesOverview } from '../case-studies-overview/case-studies-overview';
import { InsightsOverview } from '../insights-overview/insights-overview';
import { ContactCta } from '../contact-cta/contact-cta';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSection,
    ServicesOverview,
    ProductsOverview,
    IndustriesOverview,
    WhyWafaIt,
    CaseStudiesOverview,
    InsightsOverview,
    ContactCta,
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Software, Digital Transformation & Technology Solutions',
      description:
        'WAFA IT builds software products and technology solutions that help organizations operate, scale, and innovate.',
    });
  }
}
