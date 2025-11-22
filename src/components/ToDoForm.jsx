import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function ToDoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8 p-2 bg-white rounded-xl shadow-md">
      <input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow p-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg outline-none transition duration-150 ease-in-out"
      />
      
      <button
        type="submit"
        // Ensure button content wraps/hides gracefully
        className="flex items-center justify-center bg-blue-600 text-white text-lg font-semibold py-3 px-3 md:px-5 rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out disabled:opacity-50 whitespace-nowrap"
        disabled={inputValue.trim() === ''}
      >
        <FaPlusCircle className="mr-1 sm:mr-2" />
        <span className="hidden sm:inline">Add</span> 
      </button>
    </form>
  );
}

export default ToDoForm;