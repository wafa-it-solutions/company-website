import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-case-studies-overview',
  standalone: true,
  imports: [RouterLink, Section, Container],
  templateUrl: './case-studies-overview.html',
  styleUrl: './case-studies-overview.scss',
})
export class CaseStudiesOverview {}
