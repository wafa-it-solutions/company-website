import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updatePage(options: { title: string; description: string }): void {
    this.title.setTitle(`${options.title} | WAFA IT`);

    this.meta.updateTag({
      name: 'description',
      content: options.description,
    });
  }
}
