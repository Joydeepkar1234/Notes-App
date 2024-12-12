import React, { useState, useEffect } from 'react';
import { useNotes } from '../components/NotesContext';
import { Note } from '../types';

interface NoteFormProps {
  editingNote: Note | null;
}

const NoteForm: React.FC<NoteFormProps> = ({ editingNote }) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const { addNote } = useNotes();

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    }
  }, [editingNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addNote({ title: title.trim(), content: content.trim() });
      setTitle('');
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        {editingNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
