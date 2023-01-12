import React from "react";
import { useSearchParams } from 'react-router-dom';
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { deleteNotes, getAllNotes } from "../utils/data";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || "",
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    deleteNotes(id);
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((notes) => {
      return notes.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section>
        <SearchBar keyword={this.state.keyword || ""} keywordChange={this.onKeywordChangeHandler} />
        <h2>Daftar Catatan</h2>
        <NotesList notes={notes} onDelete={this.onDeleteHandler} />
      </section>
    )
  }
}

HomePage.propTypes = {
  keywordChange: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
}


export default HomePageWrapper;