import React from "react";
import PropTypes from "prop-types";

function NotesDetail({ title, body }) {
  return (
    <div className="card detail">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}

NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NotesDetail;
