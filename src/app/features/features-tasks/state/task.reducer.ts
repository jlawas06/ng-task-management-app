import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Task } from '../interfaces';
import * as TaskActions from './task.actions';

export interface TaskState extends EntityState<Task> {
  loading: boolean;
  error: any;
}

export const adapter: EntityAdapter<Task> = createEntityAdapter<Task>();

export const initialState: TaskState = adapter.getInitialState({
  loading: false,
  error: null,
});

export const taskReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, (state) => ({ ...state, loading: true })),
  on(TaskActions.loadTasksSuccess, (state, { tasks }) =>
    adapter.setAll(tasks, { ...state, loading: false })
  ),
  on(TaskActions.loadTasksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(TaskActions.addTaskSuccess, (state, { task }) =>
    adapter.addOne(task, state)
  ),
  on(TaskActions.addTaskFailure, (state, { error }) => ({ ...state, error })),
  on(TaskActions.updateTaskSuccess, (state, { task }) =>
    adapter.updateOne({ id: task.id, changes: task }, state)
  ),
  on(TaskActions.updateTaskFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TaskActions.deleteTaskSuccess, (state, { id }) =>
    adapter.removeOne(id, state)
  ),
  on(TaskActions.deleteTaskFailure, (state, { error }) => ({ ...state, error }))
);
