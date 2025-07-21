import React from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodoContext();

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>✕</button>
    </li>
  );
}

export default React.memo(TodoItem);