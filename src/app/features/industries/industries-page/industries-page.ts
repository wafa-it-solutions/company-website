import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-industries-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './industries-page.html',
  styleUrl: './industries-page.scss',
})
export class IndustriesPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Industries We Serve',
      description:
        'Explore the industries and business domains where WAFA IT applies software, digital transformation, and technology solutions.',
    });
  }
}
