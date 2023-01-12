import React from 'react';
import { addNotes } from '../utils/data';
import NotesInput from '../components/NotesInput';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const navigate = useNavigate();

  function onAddNotesHandler(note) {
    addNotes(note);
    navigate('/');
  }

  return (
    <section>
      <h2>Buat Catatan</h2>
      <NotesInput addNotes={onAddNotesHandler} />
    </section>
  )
}

export default AddPage;