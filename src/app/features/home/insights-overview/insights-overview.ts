import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-insights-overview',
  standalone: true,
  imports: [
    RouterLink,
    Section,
    Container
],
  templateUrl: './insights-overview.html',
  styleUrl: './insights-overview.scss',
})
export class InsightsOverview {}