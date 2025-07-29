import { useState, useMemo } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('all');

  const addTodo = text => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, completed: false }
    ]);
  };

  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'completed':
        return todos.filter(t => t.completed);
      case 'pending':
        return todos.filter(t => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return { todos, addTodo, toggleTodo, removeTodo, filter, setFilter, filteredTodos };
}
