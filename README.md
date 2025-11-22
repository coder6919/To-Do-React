React Assignment 1: Responsive To-Do List Application
GitHub: [https://github.com/coder6919/To-Do-React]
This project is a single-page To-Do List application built as part of a React assignment. It meets all the core requirements for state management, component architecture, event handling, and modern, responsive styling.

✨ Features

Add Tasks: Easily add new tasks via the input form.

Delete Tasks: Permanently remove tasks from the list.

Toggle Completion: Mark tasks as complete/incomplete (visually indicated by a checkmark and strikethrough).

Edit Tasks: Edit the text of any existing task inline.

Responsive Design: The layout is optimized to work correctly and look appealing on all screen sizes (mobile, tablet, and desktop) using Tailwind CSS.

🛠️ Technology Stack

Framework: React (Functional Components and Hooks)

Build Tool: Vite

Styling: Tailwind CSS (Utility-First CSS)

Icons: React Icons

🚀 Setup and Installation

Follow these steps to get the application running on your local machine.

Prerequisites

You must have Node.js and npm installed.

Installation Steps

Clone the repository:

git clone [https://github.com/coder6919/To-Do-React]
cd [your-project-directory-name]


Install dependencies:

npm install


Run the application in development mode:

npm run dev


The application will typically be served at http://localhost:5173. Open this URL in your browser to view the running To-Do List.

📂 Component Architecture

The application is structured using four functional components, demonstrating clear separation of concerns and effective use of props for data flow:

App.jsx: Manages the main application state (todos) and defines all handler functions (addTodo, deleteTodo, toggleComplete, editTodo). It serves as the top-level container.

Header.jsx: Simple presentation component displaying the application title.

ToDoForm.jsx: Handles user input and triggers the addTodo function via a prop.

ToDoList.jsx: Receives the todos array as a prop and uses the map function to iterate and render individual ToDoItem components.

ToDoItem.jsx: Receives an individual task object and handler functions as props. It manages its own local state for the edit mode and handles the Toggle, Edit, and Delete events.