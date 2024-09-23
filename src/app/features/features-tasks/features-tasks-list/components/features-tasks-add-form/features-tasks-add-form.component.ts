import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TaskFormGroup } from '../../../interfaces';

@Component({
  selector: 'app-features-tasks-add-form',
  templateUrl: './features-tasks-add-form.component.html',
  styleUrl: './features-tasks-add-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksAddFormComponent {
  @Input() form!: FormGroup<TaskFormGroup>;
  @Output() formSubmit = new EventEmitter<void>();
}
