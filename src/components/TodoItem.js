import React from "react";

const TodoItem = ({ task, toggleTask, deleteTask }) => {
    return (
        <li className={`todo-item ${task.completed ? "completed" : ""}`}>
            <span onClick={() => toggleTask(task.id)}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
    );
};

export default TodoItem;
