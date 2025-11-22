import React, { useState } from 'react';
import { FaTrash, FaCheckCircle, FaRegCircle, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditSave = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  const itemStyle = todo.completed
    ? 'bg-green-100 border-l-4 border-green-500 text-gray-500 line-through'
    : 'bg-white border-l-4 border-blue-500 text-gray-800';

  return (
    <li className={`flex flex-wrap items-center justify-between p-4 rounded-lg shadow-sm transition duration-200 ${itemStyle}`}>
      
      {/* Toggle Button Container */}
      <div className="flex items-center mb-2 sm:mb-0">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="text-2xl transition duration-150 hover:scale-110 mr-4 flex-shrink-0"
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.completed ? (
            <FaCheckCircle className="text-green-600" />
          ) : (
            <FaRegCircle className="text-blue-500" />
          )}
        </button>
      </div>

      {/* Task Text / Edit Input */}
      <div className="flex-grow min-w-0 mr-4">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full p-1 text-lg border-2 border-blue-400 rounded outline-none focus:border-blue-600"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEditSave();
              if (e.key === 'Escape') {
                  setEditText(todo.text);
                  setIsEditing(false); 
              }
            }}
            autoFocus
          />
        ) : (
          <span className="text-lg break-words block">
            {todo.text}
          </span>
        )}
      </div>

      {/* Action Buttons (Edit/Save and Delete) Container */}
      <div className="flex space-x-2 ml-auto flex-shrink-0">
        
        {isEditing ? (
          <>
            <button
              onClick={handleEditSave}
              disabled={editText.trim() === '' || editText === todo.text}
              className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              aria-label="Save changes"
            >
              <FaSave />
            </button>
            <button
              onClick={() => {
                setEditText(todo.text);
                setIsEditing(false);
              }}
              className="p-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
              aria-label="Cancel editing"
            >
              <FaTimes />
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            aria-label="Edit task"
          >
            <FaEdit />
          </button>
        )}
        
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          aria-label="Delete task"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;