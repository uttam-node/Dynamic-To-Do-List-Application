# React To-Do List Application

## 🚀 Project Overview

A simple yet dynamic To-Do List Application built using React. This app allows users to add, complete, delete, and filter tasks while persisting data using local storage.

## 🎯 Features

- ✅ Add new tasks
- ✅ Mark tasks as complete/incomplete (Double click)
- ✅ Delete tasks
- ✅ Filter tasks by All, Completed, and Pending
- ✅ Persist tasks in local storage
- ✅ Fetch initial data using [DummyJSON API](https://dummyjson.com/docs/todos#todos-a)

## 🏗️ Components Breakdown

- `TodoApp.js` → Main component that holds the app state.
- `TodoList.js` → Displays the list of tasks.
- `TodoItem.js` → Represents each task with actions.
- `AddTodo.js` → Handles adding new tasks.
- `Filter.js` → Provides filtering functionality.

## 🛠️ Technologies Used

- React (Hooks: `useState`, `useEffect`)
- CSS (For improved UI/UX)
- Local Storage (To retain tasks after refresh)

## 📂 Project Structure

```
📂 todo-app
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 AddTodo.js
 ┃ ┃ ┣ 📜 TodoApp.js (Modified entry point)
 ┃ ┃ ┣ 📜 TodoItem.js
 ┃ ┃ ┣ 📜 TodoList.js
 ┃ ┃ ┗ 📜 Filter.js
 ┃ ┣ 📜 index.js (Entry point)
 ┃ ┗ 📜 styles.css (Custom styles)
 ┣ 📜 package.json
 ┣ 📜 README.md
 ┗ 📜 .gitignore
```

## 🏁 Installation & Setup

1. Clone the repository:

   git clone https://github.com/github8084/todo-app.git
   cd todo-app

2. Install dependencies:

   npm install

3. Run the application:
   npm start # For Create React App
   npm run dev # For Vite

4. Open in browser:
   http://localhost:3000 # Default React port
   http://localhost:5173 # If using Vite

## 🛠️ API Integration

The app fetches initial to-do data from DummyJSON API:
GET https://dummyjson.com/todos
