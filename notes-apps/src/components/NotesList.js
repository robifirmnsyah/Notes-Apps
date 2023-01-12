import React from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }) {
  if (!notes.length) {
    return <p>Yahh Catatannya Gaada(:</p>;
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NotesItem
            key={note.id}
            id={note.id}
            onDelete={onDelete}
            {...note} />
        ))
      }

    </div>

  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default NotesList;

