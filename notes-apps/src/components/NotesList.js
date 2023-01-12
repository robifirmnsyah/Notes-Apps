import React from 'react';
import PropTypes from 'prop-types';
import NotesItem from './NotesItem';
import { LocaleConsumer } from "../contexts/LocaleContex";

function NotesList({ notes }) {
  return (
    notes.length ? (
      <div className="notes-list">
        {
          notes.map((note) => (
            <NotesItem
              key={note.id}
              {...note} />
          ))
        }
      </div>
    ) : (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <div>
              <p>{locale === "id" ? "Yahh catatan nya gaada!" : "Sorry, empty notes!"}</p>
            </div>
          )
        }}
      </LocaleConsumer>
    )
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;

