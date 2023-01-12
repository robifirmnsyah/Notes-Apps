import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils'

function NotesItemBody({ body, createdAt }) {
  return (
    <div className="notes-item__body">
      <p className="notes-item__date">{showFormattedDate(createdAt)}</p>
      <p className="notes-item__notes">{body}</p>
    </div>
  );
}

NotesItemBody.propTypes = {
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NotesItemBody;