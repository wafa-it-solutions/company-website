import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
})
export class ContactPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Contact WAFA IT SOLUTIONS',
      description:
        'Get in touch with WAFA IT SOLUTIONS about software products, software engineering, digital transformation, consultancy, and technology solutions.',
    });
  }
}
