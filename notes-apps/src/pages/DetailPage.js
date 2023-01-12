import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote, deleteNotes } from "../utils/data-network";
import { BiTrash } from "react-icons/bi"

function DetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [note, setNote] = React.useState({
    title: '',
    body: '',
    createdAt: '',
  });

  React.useEffect(() => {
    async function getNotesDetail(id) {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
    }

    getNotesDetail(id);
  }, [id]);

  return (
    <div className="card detail">
      <div className="card-body">
        <h2 className="card-title">{note.title}</h2>
        <p className="card-text">{note.body}</p>
        <button className='btn btn-danger' onClick={() => { deleteNotes(id); navigate("/"); }}><BiTrash /></button>
      </div>
    </div>
  )
}

export default DetailPage;