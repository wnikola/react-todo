import React, { useContext } from 'react';
import { TodoContext } from '../services/TodoContext';

const Task = ({ taskTitle, done, id }) => {
  const [tasks, setTasks] = useContext(TodoContext);

  const handleClick = () => {
    let task = tasks.find(el => el.id === id);
    let idx = tasks.indexOf(task);
    let arr = [...tasks];
    arr[idx].done = !arr[idx].done;
    setTasks(arr);
  }

  return (
    done
      ? <li onClick={handleClick}>{taskTitle}<i className="material-icons" style={{ fontSize: '16px' }}>done</i></li>
      : <li onClick={handleClick}>{taskTitle}</li>
  );
}

export default Task;