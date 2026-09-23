import { Component } from '@angular/core';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-industries-overview',
  standalone: true,
  imports: [Section, Container],
  templateUrl: './industries-overview.html',
  styleUrl: './industries-overview.scss',
})
export class IndustriesOverview {}
