import React from 'react';
import type { Task, TaskId } from './types';
import './styles/tasks.css';
import { useAppDispatch } from '../../redux/store';

function TaskItem({ task }: { task: Task }): JSX.Element {
  const dispatch = useAppDispatch();

  // УДАЛЕНИЕ
  const onHandleRemoveTask = async (id: TaskId): Promise<void> => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    });
    const data: { message: string; taskId: TaskId } = (await res.json()) as {
      message: string;
      taskId: TaskId;
    };
    if (data.message === 'success') {
      dispatch({ type: 'tasks/remove', payload: data.taskId });
    }
  };

  return (
    <div className="task-main">
      <input type="checkbox" />
      <h3>{task.id}</h3>
      <h3>{task.description}</h3>
      <div className="btn-remove btn-container">
        <button className="btn-remove" type="button" onClick={() => onHandleRemoveTask(task.id)}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
