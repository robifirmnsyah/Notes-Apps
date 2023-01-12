import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton"

function NotesDetail({ id, onDelete }) {
  return (
    <div>
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NotesDetail.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesDetail;
