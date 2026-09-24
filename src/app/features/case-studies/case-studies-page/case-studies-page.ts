import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-case-studies-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './case-studies-page.html',
  styleUrl: './case-studies-page.scss',
})
export class CaseStudiesPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Case Studies & Selected Work',
      description:
        'Explore selected software, digital transformation, workflow, and technology solution examples from WAFA IT SOLUTIONS.',
    });
  }
}
