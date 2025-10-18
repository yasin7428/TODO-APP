// src/components/DetailsPanel.jsx
import React from 'react';
import './DetailsPanel.css';

function DetailsPanel({ slectedTaskId, tasks, updateNotes, isDetailesPanelOpen, setIsDetailesPanelOpen}) {
  const selectedTask = tasks.find(task => task.id === slectedTaskId);

  if (!selectedTask) {
    return (
      <div className="details-panel">
        <h2 className="panel-header">Select a task to see details</h2>
        </div>
    );
   }

   const handleNotesChange = (e) => {
    updateNotes(slectedTaskId, e.target.value);
  };

  return (
    <div className={`details-panel ${isDetailesPanelOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={() => setIsDetailesPanelOpen(false)}>X</button>
      <h2 className="panel-header">{selectedTask.text}</h2>
      
      <div>
        <h3 className="panel-section-title">Notes</h3>
        <textarea 
          className="notes-textarea"
          placeholder="Add some notes..."
          value={selectedTask.notes}
          onChange={handleNotesChange}
        ></textarea>
      </div>

      {/* Hum baki cheezein (due date, etc.) baad me add karenge */}
    </div>
  );
}

export default DetailsPanel;