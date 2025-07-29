import React, { useState, useMemo } from 'react';
import { useTodos } from '../context/TodoContext';
import TodoFilters from './TodoFilters';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, toggleTodo, removeTodo, clearCompleted, completedCount } = useTodos();
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'active') return todos.filter(t => !t.done);
    if (filter === 'completed') return todos.filter(t => t.done);
    return todos;
  }, [todos, filter]);

  return (
    <section className="todo-list-container">
      <div className="stats">
        {completedCount}/{todos.length} concluídas
      </div>
      <TodoFilters filter={filter} setFilter={setFilter} />
      <ul className="todo-list">
        {filtered.length > 0 ? (
          filtered.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          ))
        ) : (
          <li className="empty">Sem tarefas para exibir.</li>
        )}
      </ul>
      {completedCount > 0 && (
        <button onClick={clearCompleted} className="btn-clear">
          Limpar concluídas
        </button>
      )}
    </section>
  );
}
