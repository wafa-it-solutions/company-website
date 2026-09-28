import { Component, inject } from '@angular/core';

import { Seo } from '../../../core/seo/seo';
import { Container } from '../../../shared/ui/container/container';
import { Section } from '../../../shared/ui/section/section';

@Component({
  imports: [Section, Container],
  selector: 'app-terms-page',
  styleUrl: './terms-page.scss',
  templateUrl: './terms-page.html',
})
export class TermsPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Website Terms of Use | WAFA IT SOLUTIONS',
      description: 'Read the terms that apply when you visit or use the WAFA IT SOLUTIONS website.',
    });
  }
}
