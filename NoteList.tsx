import React from 'React';
import { useNotes } from '../components/NotesContext';
import { Note } from '../types';
import NoteItem from './NoteItem';

const NoteList: React.FC = () => {
  const { notes, deleteNote, editNote } = useNotes();

  return (
    <div>
      {notes.map((note: Note, index: number) => (
        <NoteItem
          key={index}
          note={note}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
    </div>
  );
};

export default NoteList;
