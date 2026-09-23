import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section } from '../../../shared/ui/section/section';
import { Container } from '../../../shared/ui/container/container';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [
    RouterLink,
    Section,
    Container
],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss',
})
export class ContactCta {}