import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-features-home',
  standalone: true,
  imports: [],
  templateUrl: './features-home.component.html',
  styleUrl: './features-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturesHomeComponent {

}
