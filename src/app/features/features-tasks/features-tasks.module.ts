import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TaskEffects, taskReducer } from './state';

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
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tasks', taskReducer),
    EffectsModule.forFeature([TaskEffects]),
  ],
})
export class FeaturesTasksModule {}
