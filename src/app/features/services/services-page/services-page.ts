import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './services-page.html',
  styleUrl: './services-page.scss',
})
export class ServicesPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Software & Technology Services',
      description:
        'Explore WAFA IT software engineering, digital transformation, IT consultancy, data, AI, cloud, and technology services.',
    });
  }
}
