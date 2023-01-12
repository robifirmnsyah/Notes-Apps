import React from 'react';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <form className='notes-input' onSubmit={this.onSubmitEventHandler}>
            <div className="mb-3">
              <label className="form-label">Judul</label>
              <input type="text" className="form-control" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            </div>
            <div className="mb-3">
              <label className="form-label">Catatan</label>
              <input type="text" className="form-control" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      // {/* <label for="formGroupExampleInput" class="form-label">Judul</label>
      // <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
      // <label for="formGroupExampleInput" class="form-label mt-3">Catatan</label>
      // <input type="text" placeholder="Isinya apa?"  className='body' value={this.state.body} onChange={this.onBodyChangeEventHandler} />
      // <button class="btn btn-primary" type="submit">Tambah</button> */}
    )
  }
}

export default NotesInput;