import { Component, inject } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { Seo } from '../../../core/seo/seo';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './products-page.html',
  styleUrl: './products-page.scss',
})
export class ProductsPage {
  private readonly seo = inject(Seo);

  constructor() {
    this.seo.updatePage({
      title: 'Software Products & Digital Platforms',
      description:
        'Explore WAFA IT SOLUTIONS software product concepts and digital platforms designed to solve real business and technology challenges.',
    });
  }
}
