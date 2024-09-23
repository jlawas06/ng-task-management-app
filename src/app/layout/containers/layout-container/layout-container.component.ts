import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutContainerComponent {

}
