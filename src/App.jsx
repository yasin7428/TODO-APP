// src/App.jsx
import React from 'react';
import './App.css'; // Apni CSS file import ki
import Sidebar from './component/sidebar';
import Workspace from './component/workspace';
import DetailsPanel  from './component/detailsPanel';
import { useState, useEffect} from 'react';

const getinitialTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
};

function App() {
  const [currentFilter, setCurrentFilter] = useState('All Tasks')
  const [theme, setTheme] = useState('light')
  const [slectedTaskId, setslectedTaskId] = useState(null);
  const [tasks, setTasks] = useState(getinitialTasks());
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDetailesPanelOpen, setIsDetailesPanelOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  
    const addTask = (taskText) => {
      const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false,
        notes: '',
      };
      setTasks([newTask, ...tasks]);
    };
  
    const toggleComplete = (taskId) => {
      setTasks(tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task));
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
    };
  
    const filteredTasks = tasks.filter(task =>{
      if(currentFilter === 'Active'){
        return !task.completed;
      }
      if(currentFilter === 'Completed'){
        return task.completed;
      }
      return true;
    });
  
    const editTask = (taskId, newText) => {
      setTasks(tasks.map(task => task.id === taskId ? {...task, text: newText} : task));
    };

    const updateNotes = (taskId, newNotes) => {
      setTasks(tasks.map(task => task.id === taskId ? {...task, notes: newNotes} : task));
    }

    const handleTaskSelect = (taskId) => {
      setslectedTaskId(taskId);
      setIsDetailesPanelOpen(true);
    };

  return (
    <div className={`app-container ${theme}`}>
      <Sidebar 
       theme={theme}
       setTheme={setTheme}
       currentFilter={currentFilter}
       setCurrentFilter={setCurrentFilter}
       isSidebarOpen={isSidebarOpen}
       setIsSidebarOpen={setIsSidebarOpen}
      />
      <Workspace 
      currentFilter={currentFilter}
      setslectedTaskId={setslectedTaskId}
      slectedTaskId={slectedTaskId}
      tasks={tasks}
      setTasks={setTasks}
      addTask={addTask}
      toggleComplete={toggleComplete}
      deleteTask={deleteTask}
      editTask={editTask}
      filteredTasks={filteredTasks}
      setIsSidebarOpen={setIsSidebarOpen}
      handleTaskSelect={handleTaskSelect}
      />
      <DetailsPanel 
      slectedTaskId={slectedTaskId}
      tasks={tasks}
      editTask={editTask}
      updateNotes={updateNotes}
      isDetailesPanelOpen={isDetailesPanelOpen}
      setIsDetailesPanelOpen={setIsDetailesPanelOpen}
      />
    </div>
  );
}

export default App;