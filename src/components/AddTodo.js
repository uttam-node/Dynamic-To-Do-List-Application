import React, { useState } from "react";

const AddTodo = ({ addTask }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTask(text);
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="add-todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter a task..."
            />
            <button type="submit">➕ Add</button>
        </form>
    );
};

export default AddTodo;
