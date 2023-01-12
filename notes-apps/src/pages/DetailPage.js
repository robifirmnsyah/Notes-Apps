import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import NotesDetail from "../components/NotesDetail";
import { getNote, deleteNotes } from "../utils/data";

function DetailPageWrapper() {
  const navigate = useNavigate();

  const { id } = useParams();

  function homeNavigate() {
    navigate('/')
  }

  return <DetailPage id={id} navigate={homeNavigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    }

    this.onDeleteClickHandler = this.onDeleteClickHandler.bind(this);
  }

  onDeleteClickHandler(id) {
    deleteNotes(id);

    const { navigate } = this.props;
    navigate();
  }

  render() {

    if (this.state.note === null) {
      return <p>Tidak ada catatan</p>;
    }

    return (
      <section>
        <NotesDetail {...this.state.note} onDelete={this.onDeleteClickHandler} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  navigate: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;