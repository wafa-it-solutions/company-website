import { Component } from '@angular/core';

import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './services-overview.html',
  styleUrl: './services-overview.scss',
})
export class ServicesOverview {}
