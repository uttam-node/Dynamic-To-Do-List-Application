import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";

const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("all");

    // Fetch tasks from API on first render
    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then((response) => response.json())
            .then((data) => {
                // Convert API data to match our format
                const formattedTasks = data.todos.map((task) => ({
                    id: task.id,
                    text: task.todo,
                    completed: task.completed,
                }));
                setTasks(formattedTasks);
            })
            .catch((error) => console.error("Error fetching tasks:", error));
    }, []);

    const addTask = (text) => {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return true;
    });

    return (
        <div className="app-container">
            <h1>React To-Do List</h1>
            <AddTodo addTask={addTask} />
            <Filter setFilter={setFilter} />
            <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
};

export default TodoApp;
