import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from './DeleteButton';

function NotesItem({ title, body, id, onDelete }) {
  return (
    <div className="card mb-3">
      <div className="card-body notes-item">
        <NotesItemBody title={title} body={body} />
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NotesItem;