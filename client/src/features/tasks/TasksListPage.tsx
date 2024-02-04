import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../../redux/store';
import TaskItem from './TaskItem';
import FormAddTask from './FormAddTask';

function TasksListPage(): JSX.Element {
  const tasks = useSelector((store: RootState) => store.tasks.tasks);

  return (
    <>
      <div>TasksListPage</div>
      <FormAddTask />
      <div className="tasks-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}

export default TasksListPage;
