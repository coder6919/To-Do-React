import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <ul className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 italic p-4">
          Hooray! No tasks left. Add a new one above.
        </p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </ul>
  );
}

export default ToDoList;