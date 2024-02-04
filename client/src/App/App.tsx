import React, { useEffect, useState } from 'react';
import './App.css';
import TasksListPage from '../features/tasks/TasksListPage';
import { useAppDispatch } from '../redux/store';
import { type Task } from '../features/tasks/types';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const loadTasks = async (): Promise<void> => {
    const res = await fetch('/api/tasks');
    const data: { tasks: Task[] } = (await res.json()) as { tasks: Task[] };
    dispatch({ type: 'tasks/load', payload: data.tasks });
  };

  useEffect(() => {
    loadTasks().catch(console.log);
  }, []);

  return (
    <div className="App">
      <h2>Elbrus Bootcamp</h2>
      <TasksListPage />
    </div>
  );
}

export default App;
