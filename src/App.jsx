import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  // 1. State Declaration
  const [todos, setTodos] = useState([]);

  const generateUniqueId = () => {
    return Date.now();
  };
  
  // 2. Handler Function Definitions
  const addTodo = (text) => {
    if (text.trim() === '') return;
    const newTodo = { id: generateUniqueId(), text: text, completed: false };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };
  
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  
  const editTodo = (id, newText) => {
    if (newText.trim() === '') return;
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">

      <div className="w-full max-w-xl mx-auto bg-white shadow-xl rounded-lg p-4 sm:p-6">
        
        <Header /> 
        
        <ToDoForm addTodo={addTodo} />

        <ToDoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        
      </div>
    </div>
  );
}

export default App;