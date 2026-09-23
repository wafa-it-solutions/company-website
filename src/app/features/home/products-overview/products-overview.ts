import { Component } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-overview',
  standalone: true,
  imports: [RouterLink, Section, Container],
  templateUrl: './products-overview.html',
  styleUrl: './products-overview.scss',
})
export class ProductsOverview {}
