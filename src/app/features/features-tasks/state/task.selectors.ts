import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskState, adapter } from './task.reducer';

export const selectTaskState = createFeatureSelector<TaskState>('tasks');

const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

export const selectAllTasks = createSelector(selectTaskState, selectAll);

export const selectTaskEntities = createSelector(
  selectTaskState,
  selectEntities
);

export const selectTaskById = (id: number) =>
  createSelector(selectTaskEntities, (entities) => entities[id]);

export const selectCompletedTasks = createSelector(selectAllTasks, (tasks) =>
  tasks.filter((task) => task.completed)
);

export const selectIncompleteTasks = createSelector(selectAllTasks, (tasks) =>
  tasks.filter((task) => !task.completed)
);

export const selectTasksLoading = createSelector(
  selectTaskState,
  (state) => state.loading
);

export const selectTasksError = createSelector(
  selectTaskState,
  (state) => state.error
);

export const selectTasksStatistics = createSelector(
  selectAllTasks,
  (tasks) => ({
    total: tasks.length,
    completed: tasks.filter((task) => task.completed).length,
    incomplete: tasks.filter((task) => !task.completed).length,
  })
);
