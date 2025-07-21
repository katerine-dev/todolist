import React from 'react'
import { TodoProvider } from './context/TodoContext.jsx'
import TodoForm    from './components/TodoForm.jsx'
import TodoFilters from './components/TodoFilters.jsx'
import TodoList    from './components/TodoList.jsx'
import './App.css'

export default function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <h1>Minha Todo List</h1>
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    </TodoProvider>
  )
}