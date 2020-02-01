import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [tasks, setTasks] = useState([]);

  return (
    <TodoContext.Provider value={[tasks, setTasks]}>
      {props.children}
    </TodoContext.Provider>
  )
}