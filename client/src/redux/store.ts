import { legacy_createStore as createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { tasksReducer } from './reducers/tasksReducer';

export const store = createStore(
  combineReducers({
    tasks: tasksReducer,
  }),
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
