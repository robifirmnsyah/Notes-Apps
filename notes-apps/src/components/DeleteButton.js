import React from 'react';

function DeleteButton({ id, onDelete }) {
  return <button className='btn btn-danger' onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;