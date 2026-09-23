import { Component, input } from '@angular/core';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

@Component({
  imports: [],
  selector: 'app-button',
  standalone: true,
  styleUrl: './button.scss',
  templateUrl: './button.html',
})
export class Button {
  readonly variant = input<ButtonVariant>('primary');
}
