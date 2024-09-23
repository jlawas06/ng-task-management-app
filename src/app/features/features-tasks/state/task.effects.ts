import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { TaskActions } from '.';
import { Task } from '../interfaces';

const TASKS: Task[] = [
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

@Injectable()
export class TaskEffects {
  private actions$ = inject(Actions);
  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      map(() => TaskActions.loadTasksSuccess({ tasks: TASKS })) // Replace actual logic before this code
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      map(({ task }) => TaskActions.addTaskSuccess({ task })) // Replace actual logic before this code
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      map(({ id }) => {
        return TaskActions.deleteTaskSuccess({ id }); // Replace actual logic before this code
      })
    )
  );

  updateTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.updateTask),
      map(({ task }) => {
        return TaskActions.updateTaskSuccess({ task }); // Replace actual logic before this code
      })
    )
  );
}
