import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Button } from '../../../shared/ui/button/button';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-careers-page',
  standalone: true,
  imports: [Section, Container, Button],
  templateUrl: './careers-page.html',
  styleUrl: './careers-page.scss',
})
export class CareersPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Careers at WAFA IT',
      description:
        'Learn about working at WAFA IT and our culture of engineering, continuous learning, collaboration, and long-term thinking.',
    });
  }
}
