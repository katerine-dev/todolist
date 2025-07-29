import React from 'react';

export default React.memo(function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
      </label>
      <button onClick={() => onRemove(todo.id)} className="btn-remove">
        ×
      </button>
    </li>
  );
});
