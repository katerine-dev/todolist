import React, { createContext, useContext } from 'react';
import useTodos from '../hooks/useTodos';

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const value = useTodos();
  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
