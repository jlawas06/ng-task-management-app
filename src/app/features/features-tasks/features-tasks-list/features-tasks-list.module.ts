import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesTasksAddFormComponent } from './components/features-tasks-add-form/features-tasks-add-form.component';
import { FeaturesTasksAddDialogContainerComponent } from './containers/features-tasks-add-dialog-container/features-tasks-add-dialog-container.component';
import { FeaturesTasksListContainerComponent } from './containers/features-tasks-list-container/features-tasks-list-container.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesTasksListContainerComponent,
  },
];

@NgModule({
  declarations: [
    FeaturesTasksListContainerComponent,
    FeaturesTasksAddFormComponent,
    FeaturesTasksAddDialogContainerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, RouterModule.forChild(routes)],
})
export class FeaturesTasksListModule {}
