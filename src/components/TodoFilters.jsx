import React from 'react';

export default React.memo(function TodoFilters({ filter, setFilter }) {
  const options = ['all', 'active', 'completed'];

  return (
    <div className="todo-filters">
      {options.map(opt => (
        <button
          key={opt}
          onClick={() => setFilter(opt)}
          className={filter === opt ? 'btn-filter active' : 'btn-filter'}
        >
          {opt === 'all' ? 'Todas' : opt === 'active' ? 'Pendentes' : 'Concluídas'}
        </button>
      ))}
    </div>
  );
});
