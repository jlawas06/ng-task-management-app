import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../../interfaces';
import { TaskActions, TaskSelectors } from '../../../state';

@Component({
  selector: 'app-features-tasks-list-container',
  templateUrl: './features-tasks-list-container.component.html',
  styleUrl: './features-tasks-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksListContainerComponent implements OnInit {
  private store = inject(Store);
  showAddTaskDialog = signal<boolean>(false);
  tasks$ = this.store.select(TaskSelectors.selectAllTasks);

  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

  toggleTaskCompletion(task: Task): void {
    const updatedTask = { ...task };
    updatedTask.completed = !updatedTask.completed;
    this.store.dispatch(TaskActions.updateTask({ task: updatedTask }));
  }

  onClickAddTask() {
    this.showAddTaskDialog.set(true);
  }

  onDeleteTask(taskId: number) {
    this.store.dispatch(TaskActions.deleteTask({ id: taskId }));
  }

  onAddTask(newTask: Task) {
    this.store.dispatch(TaskActions.addTask({ task: newTask }));
    this.showAddTaskDialog.set(false);
  }
}
