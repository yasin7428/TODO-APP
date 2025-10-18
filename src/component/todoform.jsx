// src/components/TodoForm.jsx
import React from 'react';
import './TodoForm.css';
import { useState } from 'react';

function TodoForm({addTask}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    addTask(inputValue);
    setInputValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}

export default TodoForm;