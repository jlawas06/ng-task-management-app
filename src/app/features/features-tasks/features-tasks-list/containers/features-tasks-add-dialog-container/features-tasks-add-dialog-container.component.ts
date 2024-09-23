import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task, TaskFormGroup } from '../../../interfaces';

@Component({
  selector: 'app-features-tasks-add-dialog-container',
  templateUrl: './features-tasks-add-dialog-container.component.html',
  styleUrl: './features-tasks-add-dialog-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksAddDialogContainerComponent {
  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() addTask = new EventEmitter<Task>();

  form: FormGroup<TaskFormGroup> = new FormGroup<TaskFormGroup>({
    id: new FormControl(0),
    title: new FormControl(null),
    completed: new FormControl(false),
    description: new FormControl(null),
    dueDate: new FormControl(null),
  });

  onAddTask() {
    console.log(this.form)
    if (this.form.invalid) return;

    this.addTask.emit(this.form.value as Task);
  }
}
