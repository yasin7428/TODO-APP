import React from 'react';
import Header from './header';
import TodoForm from './todoform';
import TodoList from './todolist';
import './workspace.css';
import { DragDropContext } from '@hello-pangea/dnd';


function Workspace({ currentFilter, setslectedTaskId, slectedTaskId, tasks, setTasks, addTask, toggleComplete, deleteTask, editTask, filteredTasks, setIsSidebarOpen, handleTaskSelect }) {

  const handleDragEnd = (result) => {
    if(!result.destination) return;
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTasks(items);
  };

  const handleClickOutside = () => {
    setslectedTaskId(null);
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
    <div className='workspace' onClick={handleClickOutside}>
      <Header
      currentFilter={currentFilter}
      setIsSidebarOpen={setIsSidebarOpen}
       />
      <TodoForm addTask={addTask} />
      <TodoList 
      tasks={filteredTasks}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      editTask={editTask}
      setslectedTaskId={setslectedTaskId}
      slectedTaskId={slectedTaskId}
      handleTaskSelect={handleTaskSelect}
      />
    </div>
    </DragDropContext>
  );
}

export default Workspace;