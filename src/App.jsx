import React from 'react';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.css';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1 className="title">TodoList</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
