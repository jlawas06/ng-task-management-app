import { Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/containers/layout-container/layout-container.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/features-home/features-home.component').then(
            (m) => m.FeaturesHomeComponent
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./features/features-tasks/features-tasks.module').then(
            (m) => m.FeaturesTasksModule
          ),
      },
    ],
  },
];
