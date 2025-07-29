import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        id="new-todo"
        className="todo-input"
        placeholder="Digite sua nova tarefa..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit" className="btn-add" disabled={!text.trim()}>
        Adicionar
      </button>
    </form>
  );
}
