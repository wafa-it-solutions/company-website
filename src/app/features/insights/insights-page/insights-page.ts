import { Component, inject } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';
import { Section } from '../../../shared/ui/section/section';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-insights-page',
  standalone: true,
  imports: [Container, Section],
  templateUrl: './insights-page.html',
  styleUrl: './insights-page.scss',
})
export class InsightsPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Technology Insights',
      description:
        'Insights from WAFA IT on software engineering, architecture, digital transformation, cloud, data, AI, and technology.',
    });
  }
}
