import React, { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodoContext();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default React.memo(TodoForm);
