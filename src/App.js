import React from 'react';
import './App.css';
import { TodoProvider } from './services/TodoContext';
import { FilterProvider } from './services/FilterContext';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import Filter from './components/Filter';

function App() {
  return (
    <>
      <TodoProvider>
        <NewTask />
        <FilterProvider>
          <Filter />
          <TaskList />
        </FilterProvider>
      </TodoProvider>
    </>
  );
}

export default App;
