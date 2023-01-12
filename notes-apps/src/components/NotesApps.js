import React from 'react';
import Navbar from './Navbar';
import NotesList from './NotesList';
import { getData } from '../utils/data';
import NotesInput from './NotesInput';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
          }
        ]
      }
    });
  }


  render() {
    return (
      <div >
        <Navbar />
        <div className="notes-app">
          <h2>Buat Catatan</h2>
          <NotesInput addNotes={this.onAddNoteHandler} />
          <h2>Catatan Kamu</h2>
          {this.state.notes.length !== 0 ? <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} /> : <div className='kosong'><h3>"Belum ada catatan nihh.."</h3></div>}

        </div>
      </div>
    );
  }
}

export default NotesApp;