import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home-page/home-page').then((m) => m.HomePage),
  },

  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page/about-page').then((m) => m.AboutPage),
  },

  {
    path: 'services',
    loadComponent: () =>
      import('./features/services/services-page/services-page').then((m) => m.ServicesPage),
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/products-page/products-page').then((m) => m.ProductsPage),
  },

  {
    path: 'industries',
    loadComponent: () =>
      import('./features/industries/industries-page/industries-page').then((m) => m.IndustriesPage),
  },

  {
    path: 'case-studies',
    loadComponent: () =>
      import('./features/case-studies/case-studies-page/case-studies-page').then(
        (m) => m.CaseStudiesPage,
      ),
  },

  {
    path: 'insights',
    loadComponent: () =>
      import('./features/insights/insights-page/insights-page').then((m) => m.InsightsPage),
  },

  {
    path: 'careers',
    loadComponent: () =>
      import('./features/careers/careers-page/careers-page').then((m) => m.CareersPage),
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact-page/contact-page').then((m) => m.ContactPage),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
