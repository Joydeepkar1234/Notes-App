import React from 'react';
import { NotesProvider, useNotes } from './components/NotesContext';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const AppContent: React.FC = () => {
  const {
    notes,
    addNote,
    deleteNote,
    editNote,
    searchQuery,
    updateSearchQuery,
    editingNote,
  } = useNotes();

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        className="search-input"
      />
      <NoteForm addNote={addNote} editingNote={editingNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
};

const App: React.FC = () => (
  <NotesProvider>
    <AppContent />
  </NotesProvider>
);

export default App;
