import { Component } from '@angular/core';
import { Container } from '../../../shared/ui/container/container';
import { Button } from '../../../shared/ui/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [Container, Button, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
