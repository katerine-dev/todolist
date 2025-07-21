import React from 'react';
import { useTodoContext } from '../context/TodoContext';

function TodoFilters() {
  const { filter, setFilter } = useTodoContext();
  const buttons = [
    { key: 'all', label: 'Todas' },
    { key: 'completed', label: 'Concluídas' },
    { key: 'pending', label: 'Pendentes' }
  ];

  return (
    <div className="todo-filters">
      {buttons.map(b => (
        <button
          key={b.key}
          onClick={() => setFilter(b.key)}
          disabled={filter === b.key}
        >
          {b.label}
        </button>
      ))}
    </div>
  );
}

export default React.memo(TodoFilters);