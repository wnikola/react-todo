import React, { useContext } from 'react';
import Task from './Task';
import { TodoContext } from '../services/TodoContext';
import { FilterContext } from '../services/FilterContext';

const TaskList = () => {
  const [tasks] = useContext(TodoContext);
  const [filter] = useContext(FilterContext);

  return filter === 'inProgress'
    ? (
      <ul>
        {tasks.filter(task => task.done === false).map((task, i) => <Task taskTitle={task.title} done={task.done} key={i} />)}
      </ul>
    )
    : filter === 'done'
      ? (
        <ul>
          {tasks.filter(task => task.done === true).map((task, i) => <Task taskTitle={task.title} done={task.done} key={task.id} />)}
        </ul>
      )
      : (
        <ul>
          {tasks.map((task, i) => <Task taskTitle={task.title} done={task.done} id={task.id} key={task.id} />)}
        </ul>
      );
}

export default TaskList;