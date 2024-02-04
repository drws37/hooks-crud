/* eslint-disable @typescript-eslint/default-param-last */
/* eslint-disable import/prefer-default-export */

import type { Action, TasksState } from './types';

const initState: TasksState = {
  tasks: [],
};

export const tasksReducer = (state: TasksState = initState, action: Action): TasksState => {
  switch (action.type) {
    case 'tasks/load':
      return {
        ...state,
        tasks: action.payload,
      };
    case 'tasks/add':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case 'tasks/remove':
      return {
        ...state,
        tasks: state.tasks.filter((tasks) => tasks.id !== +action.payload),
      };

    default:
      return state;
  }
};
