import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from "../contexts/LocaleContex"

function SearchBar({ keyword, keywordChange }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <input
            className="form-control mr-sm-2 mb-3"
            type="search"
            aria-label="Search"
            placeholder={locale === "id" ? "Cari judul catatan" : "Search notes title"}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)} />
        );
      }}
    </LocaleConsumer>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired
}

export default SearchBar;