import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
  const { filteredTodos } = useTodoContext();

  if (filteredTodos.length === 0) {
    return <p>Sem tarefas para exibir.</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
