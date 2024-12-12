import React from 'react';
import { Note } from '../types';

interface NoteItemProps {
  note: Note;
  onDelete: (note: Note) => void;
  onEdit: (note: Note) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete, onEdit }) => {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content.substring(0, 50)}...</p>
      <button onClick={() => onDelete(note)}>Delete</button>
      <button onClick={() => onEdit(note)}>Edit</button>
    </div>
  );
};

export default NoteItem;
