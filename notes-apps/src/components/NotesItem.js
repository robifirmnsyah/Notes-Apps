import React from 'react';
import PropTypes from 'prop-types'
import NotesItemBody from './NotesItemBody';
import { Link } from "react-router-dom"

function NotesItem({ title, body, id, createdAt }) {
  return (
    <div className="container">
      <div className="row">
        <div className="card mb-3">
          <div className="card-body">
            <div className="title">
              <h5><Link to={`/notes/${id}`}>{title}</Link></h5>
            </div>
            <NotesItemBody createdAt={createdAt} body={body} />
          </div>
        </div>
      </div>
    </div>
  );
}

NotesItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NotesItem;