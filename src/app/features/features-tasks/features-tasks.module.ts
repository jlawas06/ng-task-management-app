import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features-tasks-list/features-tasks-list.module').then(
        (m) => m.FeaturesTasksListModule
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./features-tasks-detail/features-tasks-detail.component').then(
        (m) => m.FeaturesTasksDetailComponent
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, RouterModule.forChild(routes)],
})
export class FeaturesTasksModule {}
