import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = useCallback(text => {
    if (!text.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  }, [todos, setTodos]);

  const toggleTodo = useCallback(id => {
    setTodos(prev =>
      prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, [setTodos]);

  const removeTodo = useCallback(id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  }, [setTodos]);

  const clearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(t => !t.done));
  }, [setTodos]);

  const completedCount = useMemo(
    () => todos.filter(t => t.done).length,
    [todos]
  );

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodo,
        removeTodo,
        clearCompleted,
        completedCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}
