import React, { useState, useContext } from 'react';
import { TodoContext } from '../services/TodoContext';

const NewTask = () => {
  const [title, setTitle] = useState('');

  const [tasks, setTasks] = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() === '') return;
    setTasks([...tasks, { title: title, done: false, id: new Date().getTime() }]);
    setTitle('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="submit" value="Add Task" />
    </form>
  )
}

export default NewTask;