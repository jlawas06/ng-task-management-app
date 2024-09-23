import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Task } from '../../../interfaces';

@Component({
  selector: 'app-features-tasks-list-container',
  templateUrl: './features-tasks-list-container.component.html',
  styleUrl: './features-tasks-list-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeaturesTasksListContainerComponent {
  showAddTaskDialog = signal<boolean>(false);

  tasks: Task[] = [
    {
      id: 1,
      title: 'Complete project proposal',
      description: 'Finish writing the project proposal for the client meeting',
      completed: false,
      dueDate: new Date('2024-09-30'),
    },
    {
      id: 2,
      title: 'Buy groceries',
      description: 'Get milk, eggs, bread, and vegetables',
      completed: true,
      dueDate: new Date('2024-09-25'),
    },
    {
      id: 3,
      title: 'Schedule dentist appointment',
      description: 'Call the dentist office to schedule a check-up',
      completed: false,
      dueDate: new Date('2024-10-05'),
    },
  ];

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  onClickAddTask() {
    this.showAddTaskDialog.set(true);
  }

  onDeleteTask(taskId: number) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
  }

  onAddTask(newTask: Task) {
    this.tasks.push(newTask);
    this.showAddTaskDialog.set(false);
  }
}
