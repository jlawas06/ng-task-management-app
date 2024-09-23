import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { LayoutContainerComponent } from './containers/layout-container/layout-container.component';



@NgModule({
  declarations: [
    LayoutContainerComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
