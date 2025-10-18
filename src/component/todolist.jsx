// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './todoitem';
import { AnimatePresence } from 'framer-motion';
import { Droppable } from '@hello-pangea/dnd';

function TodoList({tasks, toggleComplete, deleteTask, editTask, setslectedTaskId, slectedTaskId, handleTaskSelect}) {
  return (
    <Droppable droppableId="todo-list">
      {(provided) => (
    <div {...provided.droppableProps} ref={provided.innerRef}>
      <AnimatePresence>
      {tasks.map((task, index) => (
        <TodoItem 
        key={task.id}
        task={task}
        index={index}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
        setslectedTaskId={setslectedTaskId}
        slectedTaskId={slectedTaskId}
        handleTaskSelect={handleTaskSelect}
        />
      ))}
      </AnimatePresence>
      {provided.placeholder}
    </div>
    )}
    </Droppable>
  );
}

export default TodoList;