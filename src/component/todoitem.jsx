import React from 'react';
import './TodoItem.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';

function TodoItem({ task, index, toggleComplete, deleteTask, editTask, slectedTaskId, handleTaskSelect }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const isSlected = slectedTaskId === task.id;


  const handlEdit = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
    };

    const handleSlected = (event) => {
      event.stopPropagation();
      handleTaskSelect(task.id);
    }


  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleSlected}
          >
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      // Screen par aane ke baad kaisa hoga: poora visible aur apni jagah par
      animate={{ opacity: 1, y: 0 }}
      // Screen se jaate waqt kaisa hoga: gayab ho jayega
      exit={{ opacity: 0 }}
      // Thoda sa transition effect
      transition={{ duration: 0.3 }}
      className={`todo-item ${task.completed ? 'completed' : '' } ${isSlected ? 'selected' : ''}`}>
      <div className="checkbox" onClick={(e) => {
        e.stopPropagation();
        toggleComplete(task.id);
      } }></div>

      {
        isEditing ? (
          <input
            type="text"
            value={newText}
            className="edit-input"
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handlEdit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handlEdit();
              }
              }}
              autoFocus
              />
            ) : (
              <p className="task-text" onDoubleClick={() => setIsEditing(true)}>{task.text}</p>
            )
            }


      <div className="action-buttons">
        <button className="action-btn" onClick={(e) => {
          e.stopPropagation();
          setIsEditing(!isEditing);
        } }>✏️</button>
        <button className="action-btn" onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        } }>🗑️</button>
      </div>
    </motion.div>
    </div>
    )}
    </Draggable>
  );
}

export default TodoItem;