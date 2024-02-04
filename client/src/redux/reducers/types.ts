import type { Task, TaskId } from '../../features/tasks/types';

export type TasksState = {
  tasks: Task[];
};

export type Action =
  | { type: 'tasks/load'; payload: Task[] }
  | { type: 'tasks/add'; payload: Task }
  | { type: 'tasks/remove'; payload: TaskId };
