/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import type { Task } from './types';

function FormAddTask(): JSX.Element {
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  // ДОБАВЛЕНИЕ
  const onHandleAddTask: React.FormEventHandler<HTMLFormElement> = async (e): Promise<void> => {
    e.preventDefault();
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        description,
      }),
    });
    const data: { task: Task } = (await res.json()) as { task: Task };
    dispatch({ type: 'tasks/add', payload: data.task });
  };

  return (
    <form className="addForm" onSubmit={onHandleAddTask}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        className="addForm_input"
        placeholder="enter task"
      />
      <button className="addForm_submit" type="submit">
        submit
      </button>
    </form>
  );
}

export default FormAddTask;
