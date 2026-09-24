import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'About WAFA IT SOLUTIONS',
      description:
        'Learn about WAFA IT SOLUTIONS, our engineering principles, mission, and approach to building technology with purpose.',
    });
  }
}
