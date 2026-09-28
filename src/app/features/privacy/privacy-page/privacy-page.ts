import { Component, inject } from '@angular/core';

import { Seo } from '../../../core/seo/seo';
import { Container } from '../../../shared/ui/container/container';
import { Section } from '../../../shared/ui/section/section';

@Component({
  selector: 'app-privacy-page',
  imports: [Section, Container],
  templateUrl: './privacy-page.html',
  styleUrl: './privacy-page.scss',
})
export class PrivacyPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Privacy Policy | WAFA IT SOLUTIONS',
      description:
        'Learn how WAFA IT SOLUTIONS handles information when you visit our website or contact us.',
    });
  }
}
