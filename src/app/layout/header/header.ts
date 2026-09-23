import { Component } from '@angular/core';
import { Container } from '../../shared/ui/container/container';
import { MainNavigation } from '../navigation/main-navigation/main-navigation';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Container, MainNavigation, RouterLink],
  selector: 'app-header',
  standalone: true,
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {}
