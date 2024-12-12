import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Note, NotesContextType } from '../types';

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addNote = (note: Note) => {
    if (editingNote) {
      setNotes(notes.map((n) => (n === editingNote ? note : n)));
      setEditingNote(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  const deleteNote = (noteToDelete: Note) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
  };

  const editNote = (noteToEdit: Note) => {
    setEditingNote(noteToEdit);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const updateSearchQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <NotesContext.Provider
      value={{
        notes: filteredNotes,
        addNote,
        deleteNote,
        editNote,
        searchQuery,
        updateSearchQuery,
        editingNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
